---
tags:
  - Fortification
  - Ork
  - Structure
dg-publish: true
Cost_req: 70
---
# [[Waaagh! Banner]]
*Light Fortification*
- Increases [[Waaagh!]] when built
- Armed with a Big Shoota
- Low durability
- - -
Base Cost: **70** ![[req.png|20]] | Build Time: **??.?** sec.
- - -
### Wargear
Big Shoota?
### Relevant Research
```base
views:
  - type: cards
    name: Relevant Research
    filters:
      and:
        - file.tags.contains("Research")
        - affects.containsAny("All_Ork_structures")
    groupBy:
      property: from
      direction: ASC
    order:
      - file.name
      - Time
    sort:
      - property: Slot
        direction: ASC
    cardSize: 175
    image: note.pic
    imageAspectRatio: 0.3
    imageFit: contain
    columnWidth: 250

```