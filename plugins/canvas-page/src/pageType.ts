import type {
  QuartzPageTypePlugin,
  PageMatcher,
  FullSlug,
  VirtualPage,
} from "@quartz-community/types";
import { slugifyFilePath, transformLink } from "@quartz-community/utils/path";
import { readFileSync } from "fs";
import { join } from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkObsidian from "@quartz-community/remark-obsidian";
import remarkRehype from "remark-rehype";
import { toHtml } from "hast-util-to-html";
import { visit } from "unist-util-visit";
import type { Root, Link } from "mdast";
import type { Node } from "unist";
import CanvasBody from "./components/CanvasBody";
import type { CanvasData, CanvasPageOptions } from "./types";

type WikilinkNode = Node & {
  type: "wikilink";
  path?: string;
  heading?: string;
  alias?: string;
  embedded?: boolean;
};

function renderMarkdown(
  text: string,
  sourceSlug: FullSlug,
  allSlugs: FullSlug[],
): string {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkObsidian, {
      wikilinks: true,
    })
    .use(() => {
      return (tree: Root) => {
        visit(tree, (node, index, parent) => {
          if (node.type !== "wikilink") return;
          if (parent == null || index == null) return;

          const wikilink = node as WikilinkNode;

          // Embedded wikilinks (![[]]) are not ordinary links.
          // Leave them alone for now.
          if (wikilink.embedded) return;

          const path = wikilink.path?.trim() ?? "";
          const heading = wikilink.heading?.trim() ?? "";
          const alias = wikilink.alias?.trim() ?? "";

          if (!path && !heading) return;

          const isBlockReference = heading.startsWith("^");
          const anchor = heading
            ? `#${isBlockReference ? heading : heading}`
            : "";

          const target = path + anchor;

          const href = transformLink(sourceSlug, target, {
            strategy: "shortest",
            allSlugs,
          });

          const link: Link = {
            type: "link",
            url: href,
            children: [
              {
                type: "text",
                value:
                  alias ||
                  (path && heading ? `${path} > ${heading}` : path || heading),
              },
            ],
          };

          parent.children[index] = link;
        });
      };
    })
    .use(remarkRehype, { allowDangerousHtml: true });

  const tree = processor.runSync(processor.parse(text));

  return toHtml(tree as Parameters<typeof toHtml>[0], {
    allowDangerousHtml: true,
  });
}

function preprocessCanvasData(
  data: CanvasData,
  sourceSlug: FullSlug,
  allSlugs: FullSlug[],
): CanvasData & { renderedTexts: Record<string, string> } {
  const renderedTexts: Record<string, string> = {};

  for (const node of data.nodes ?? []) {
    if (node.type === "text" && node.text) {
      renderedTexts[node.id] = renderMarkdown(
        node.text,
        sourceSlug,
        allSlugs,
      );
    }
  }

  return { ...data, renderedTexts };
}

const canvasMatcher: PageMatcher = ({ fileData }) => {
  return "canvasData" in fileData;
};

export const CanvasPage: QuartzPageTypePlugin<CanvasPageOptions> = (opts) => ({
  name: "CanvasPage",
  priority: 20,
  fileExtensions: [".canvas"],
  match: canvasMatcher,

  generate({ ctx }) {
    const canvasFiles = ctx.allFiles.filter((fp) => fp.endsWith(".canvas"));

    const virtualPages: VirtualPage[] = [];

    for (const filePath of canvasFiles) {
      const fullPath = join(ctx.argv.directory, filePath);

      let canvasData: CanvasData;

      try {
        const raw = readFileSync(fullPath, "utf-8");
        canvasData = JSON.parse(raw) as CanvasData;
      } catch {
        continue;
      }

      const baseName =
        filePath
          .replace(/\.canvas$/, "")
          .split("/")
          .pop() ?? "Canvas";

      const slug = slugifyFilePath(filePath) as FullSlug;

      const processedData = preprocessCanvasData(
        canvasData,
        slug,
        ctx.allSlugs,
      );

      virtualPages.push({
        slug,
        title: baseName,
        data: {
          frontmatter: {
            title: baseName,
            tags: [],
          },
          canvasData: processedData,
          canvasOptions: opts,
        },
      });
    }

    return virtualPages;
  },

  layout: "canvas",
  frame: "canvas",
  body: CanvasBody,
});