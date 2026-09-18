import { readFileSync } from 'fs';
import default2, { join } from 'path';
import default3 from 'process';
import { fileURLToPath } from 'url';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all4) => {
  for (var name in all4)
    __defProp(target, name, { get: all4[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key2;
      for (key2 in obj) {
      }
      return typeof key2 === "undefined" || hasOwn.call(obj, key2);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i2 = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i2 = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i2 < length; ++i2) {
        options = arguments[i2];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, { name, newValue: extend2(deep, clone, copy) });
              } else if (typeof copy !== "undefined") {
                setProperty(target, { name, newValue: copy });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// node_modules/github-slugger/regex.js
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
function slug(value, maintainCase) {
  if (typeof value !== "string") return "";
  value = value.toLowerCase();
  return value.replace(regex, "").replace(/ /g, "-");
}

// node_modules/@quartz-community/utils/dist/path.js
function isRelativeURL(s2) {
  const validStart = /^\.{1,2}/.test(s2);
  const validEnding = !endsWith(s2, "index");
  return validStart && validEnding && ![".md", ".html"].includes(getFileExtension(s2) ?? "");
}
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
function slugifyFilePath(fp, excludeExt) {
  fp = stripSlashes(fp);
  const ext = getFileExtension(fp);
  const withoutFileExt = fp.replace(new RegExp(ext + "$"), "");
  const finalExt = [".md", ".html", void 0].includes(ext) ? "" : ext;
  let slug2 = _sluggify(withoutFileExt);
  if (endsWith(slug2, "_index")) {
    slug2 = slug2.replace(/_index$/, "index");
  }
  const segments = slug2.split("/");
  if (segments.length >= 2 && segments[segments.length - 1] === segments[segments.length - 2]) {
    segments[segments.length - 1] = "index";
    slug2 = segments.join("/");
  }
  return slug2 + (finalExt ?? "");
}
function joinSegments(...args) {
  if (args.length === 0) {
    return "";
  }
  let joined = args.filter((segment) => segment !== "" && segment !== "/").map((segment) => stripSlashes(segment)).join("/");
  const first = args[0];
  const last = args[args.length - 1];
  if (first?.startsWith("/")) {
    joined = "/" + joined;
  }
  if (last?.endsWith("/")) {
    joined = joined + "/";
  }
  return joined;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  if (!onlyStripPrefix && s2.endsWith("/")) {
    s2 = s2.slice(0, -1);
  }
  return s2;
}
function getFileExtension(s2) {
  return s2.match(/\.[A-Za-z0-9]+$/)?.[0];
}
function isFolderPath(fplike) {
  return fplike.endsWith("/") || endsWith(fplike, "index") || endsWith(fplike, "index.md") || endsWith(fplike, "index.html");
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_2) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}
function splitAnchor(link4) {
  const [fp, anchor] = link4.split("#", 2);
  if (fp.endsWith(".pdf")) {
    return [fp, anchor === void 0 ? "" : `#${anchor}`];
  }
  if (anchor === void 0) {
    return [fp, ""];
  }
  const bare = anchor.startsWith("^") ? anchor.slice(1) : anchor;
  const slugged = "#" + slug(bare);
  return [fp, slugged];
}
function transformInternalLink(link4) {
  const [fplike, anchor] = splitAnchor(decodeURI(link4));
  const segments = fplike.split("/").filter((x2) => x2.length > 0);
  const prefix = segments.filter(_isRelativeSegment).join("/");
  const fp = segments.filter((seg) => !_isRelativeSegment(seg) && seg !== "").join("/");
  const slugged = slugifyFilePath(fp);
  const simpleSlug = simplifySlug(slugged);
  const folderPath = isFolderPath(fplike) || isFolderPath(slugged);
  const joined = joinSegments(stripSlashes(prefix), stripSlashes(simpleSlug));
  const trail2 = folderPath ? "/" : "";
  const res = _addRelativeToStart(joined) + trail2 + anchor;
  return res;
}
function transformLink(src, target, opts) {
  const targetSlug = transformInternalLink(target);
  {
    const effectiveSrc = !endsWith(src, "index") && opts.allSlugs.includes(`${src}/index`) ? `${src}/index` : src;
    const folderTail = isFolderPath(targetSlug) ? "/" : "";
    const canonicalSlug = stripSlashes(targetSlug.slice(".".length));
    const [targetCanonical, targetAnchor] = splitAnchor(canonicalSlug);
    return joinSegments(pathToRoot(effectiveSrc), canonicalSlug) + folderTail;
  }
}
function slugifyPath(s2) {
  return s2.split("/").map(
    (segment) => segment.replace(/\s/g, "-").replace(/&/g, "-and-").replace(/%/g, "-percent").replace(/\?/g, "").replace(/#/g, "").replace(/[<>:"|*]/g, "").toLowerCase()
  ).join("/").replace(/\/$/, "");
}
function normalizeHastElement(rawEl, curBase, newBase) {
  const el = structuredClone(rawEl);
  _rebaseHastElement(el, "src", curBase, newBase);
  _rebaseHastElement(el, "href", curBase, newBase);
  if (el.children) {
    el.children = el.children.map(
      (child) => child.type === "element" ? normalizeHastElement(child, curBase, newBase) : child
    );
  }
  return el;
}
function _rebaseHastElement(el, attr, curBase, newBase) {
  const value = el.properties?.[attr];
  if (value === void 0 || value === null) return;
  const href = String(value);
  if (!isRelativeURL(href)) return;
  el.properties[attr] = joinSegments(resolveRelative(curBase, newBase), "..", href);
}
function _sluggify(s2) {
  return slugifyPath(s2);
}
function _isRelativeSegment(s2) {
  return /^\.{0,2}$/.test(s2);
}
function _addRelativeToStart(s2) {
  if (s2 === "") {
    s2 = ".";
  }
  if (!s2.startsWith(".")) {
    s2 = joinSegments(".", s2);
  }
  return s2;
}

// node_modules/bail/index.js
function bail(error) {
  if (error) {
    throw error;
  }
}

// node_modules/unified/lib/index.js
var import_extend = __toESM(require_extend());

// node_modules/devlop/lib/default.js
function ok() {
}

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// node_modules/trough/lib/index.js
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = (
        /** @type {Error} */
        error
      );
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point4) {
  return index(point4 && point4.line) + ":" + index(point4 && point4.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = { place: optionsOrParentOrPlace };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = { ...optionsOrParentOrPlace };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file = "";
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual = void 0;
    this.expected = void 0;
    this.note = void 0;
    this.url = void 0;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
  return Boolean(
    fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === void 0
  );
}

// node_modules/vfile/lib/index.js
var order = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
var VFile = class {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = { path: value };
    } else if (typeof value === "string" || isUint8Array(value)) {
      options = { value };
    } else {
      options = value;
    }
    this.cwd = "cwd" in options ? "" : default3.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index2 = -1;
    while (++index2 < order.length) {
      const field2 = order[index2];
      if (field2 in options && options[field2] !== void 0 && options[field2] !== null) {
        this[field2] = field2 === "history" ? [...options[field2]] : options[field2];
      }
    }
    let field;
    for (field in options) {
      if (!order.includes(field)) {
        this[field] = options[field];
      }
    }
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path === "string" ? default2.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(basename) {
    assertNonEmpty(basename, "basename");
    assertPart(basename, "basename");
    this.path = default2.join(this.dirname || "", basename);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path === "string" ? default2.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(dirname) {
    assertPath(this.basename, "dirname");
    this.path = default2.join(dirname || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path === "string" ? default2.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(extname) {
    assertPart(extname, "extname");
    assertPath(this.dirname, "extname");
    if (extname) {
      if (extname.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = default2.join(this.dirname, this.stem + (extname || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(path2) {
    if (isUrl(path2)) {
      path2 = fileURLToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path === "string" ? default2.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = default2.join(this.dirname || "", stem + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = true;
    throw message;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = void 0;
    return message;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(
      // @ts-expect-error: the overloads are fine.
      causeOrReason,
      optionsOrParentOrPlace,
      origin
    );
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
};
function assertPart(part, name) {
  if (part && part.includes(default2.sep)) {
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + default2.sep + "`"
    );
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/unified/lib/callable-instance.js
var CallableInstance = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(property) {
    const self2 = this;
    const constr = self2.constructor;
    const proto = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      constr.prototype
    );
    const value = proto[property];
    const apply = function() {
      return value.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    return apply;
  })
);

// node_modules/unified/lib/index.js
var own2 = {}.hasOwnProperty;
var Processor = class _Processor extends CallableInstance {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const destination = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new _Processor()
    );
    let index2 = -1;
    while (++index2 < this.attachers.length) {
      const attacher = this.attachers[index2];
      destination.use(...attacher);
    }
    destination.data((0, import_extend.default)(true, {}, this.namespace));
    return destination;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(key2, value) {
    if (typeof key2 === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key2] = value;
        return this;
      }
      return own2.call(this.namespace, key2) && this.namespace[key2] || void 0;
    }
    if (key2) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key2;
      return this;
    }
    return this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self2 = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self2, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(file, done) {
    const self2 = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        self2.parse(realFile)
      );
      self2.run(parseTree, realFile, function(error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          tree
        );
        const compileResult = self2.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(
          error,
          /** @type {VFileWithOutput<CompileResult>} */
          file2
        );
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          done(void 0, file2);
        }
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    return result;
    function realDone(error, file2) {
      complete = true;
      bail(error);
      result = file2;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          outputTree || tree
        );
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    return result;
    function realDone(error, tree2) {
      bail(error);
      result = tree2;
      complete = true;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler2 = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler2);
    assertNode(tree);
    return compiler2(tree, realFile);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) ; else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = (
            /** @type {PluginTuple<Array<unknown>>} */
            value2
          );
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) ; else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index2 = -1;
      let entryIndex = -1;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entryIndex = index2;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = (0, import_extend.default)(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
};
var unified = new Processor().freeze();
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
  }
}
function assertNode(node3) {
  if (!isPlainObject(node3) || typeof node3.type !== "string") {
    throw new TypeError("Expected node, got `" + node3 + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value === "object" && "message" in value && "messages" in value
  );
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(
    value && typeof value === "object" && "byteLength" in value && "byteOffset" in value
  );
}

// node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {};
function toString(value, options) {
  const settings = emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// node_modules/character-entities/index.js
var characterEntities = {
  AElig: "\xC6",
  AMP: "&",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atilde: "\xC3",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ETH: "\xD0",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: "\n",
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslash: "\xD8",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acirc: "\xE2",
  acute: "\xB4",
  acy: "\u0430",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atilde: "\xE3",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\u2256",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  eth: "\xF0",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacute: "\xED",
  ic: "\u2063",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\u229A",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslash: "\xF8",
  osol: "\u2298",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\u2225",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thorn: "\xFE",
  tilde: "\u02DC",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/decode-named-character-reference/index.js
var own3 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own3.call(characterEntities, value) ? characterEntities[value] : false;
}

// node_modules/micromark-util-chunked/index.js
function splice(list5, start, remove, items) {
  const end = list5.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list5.splice(...parameters);
  } else {
    if (remove) list5.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list5.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list5, items) {
  if (list5.length > 0) {
    splice(list5, list5.length, 0, items);
    return list5;
  }
  return items;
}

// node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all4 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all4, extensions[index2]);
  }
  return all4;
}
function syntaxExtension(all4, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all4, hook) ? all4[hook] : void 0;
    const left = maybe || (all4[hook] = {});
    const right = extension2[hook];
    let code5;
    if (right) {
      for (code5 in right) {
        if (!hasOwnProperty.call(left, code5)) left[code5] = [];
        const value = right[code5];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code5],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list5) {
  let index2 = -1;
  const before = [];
  while (++index2 < list5.length) {
    (list5[index2].add === "after" ? existing : before).push(list5[index2]);
  }
  splice(existing, 0, 0, before);
}

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base) {
  const code5 = Number.parseInt(value, base);
  if (
    // C0 except for HT, LF, FF, CR, space.
    code5 < 9 || code5 === 11 || code5 > 13 && code5 < 32 || // Control character (DEL) of C0, and C1 controls.
    code5 > 126 && code5 < 160 || // Lone high surrogates and low surrogates.
    code5 > 55295 && code5 < 57344 || // Noncharacters.
    code5 > 64975 && code5 < 65008 || /* eslint-disable no-bitwise */
    (code5 & 65535) === 65535 || (code5 & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    code5 > 1114111
  ) {
    return "\uFFFD";
  }
  return String.fromCodePoint(code5);
}

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code5) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code5 !== null && (code5 < 32 || code5 === 127)
  );
}
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code5) {
  return code5 !== null && code5 < -2;
}
function markdownLineEndingOrSpace(code5) {
  return code5 !== null && (code5 < 0 || code5 === 32);
}
function markdownSpace(code5) {
  return code5 === -2 || code5 === -1 || code5 === 32;
}
var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex2) {
  return check;
  function check(code5) {
    return code5 !== null && code5 > -1 && regex2.test(String.fromCharCode(code5));
  }
}

// node_modules/micromark-util-sanitize-uri/index.js
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code5 = value.charCodeAt(index2);
    let replace2 = "";
    if (code5 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code5 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code5))) {
        replace2 = String.fromCharCode(code5);
      }
    } else if (code5 > 55295 && code5 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code5 < 56320 && next > 56319 && next < 57344) {
        replace2 = String.fromCharCode(code5, next);
        skip = 1;
      } else {
        replace2 = "\uFFFD";
      }
    } else {
      replace2 = String.fromCharCode(code5);
    }
    if (replace2) {
      result.push(value.slice(start, index2), encodeURIComponent(replace2));
      start = index2 + skip + 1;
      replace2 = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok4, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code5) {
    if (markdownSpace(code5)) {
      effects.enter(type);
      return prefix(code5);
    }
    return ok4(code5);
  }
  function prefix(code5) {
    if (markdownSpace(code5) && size++ < limit) {
      effects.consume(code5);
      return prefix;
    }
    effects.exit(type);
    return ok4(code5);
  }
}

// node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous4;
  return contentStart;
  function afterContentStartConstruct(code5) {
    if (code5 === null) {
      effects.consume(code5);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code5) {
    effects.enter("paragraph");
    return lineStart(code5);
  }
  function lineStart(code5) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous4
    });
    if (previous4) {
      previous4.next = token;
    }
    previous4 = token;
    return data(code5);
  }
  function data(code5) {
    if (code5 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code5);
      return;
    }
    if (markdownLineEnding(code5)) {
      effects.consume(code5);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code5);
    return data;
  }
}

// node_modules/micromark/lib/initialize/document.js
var document2 = {
  tokenize: initializeDocument
};
var containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self2 = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code5) {
    if (continued < stack.length) {
      const item = stack[continued];
      self2.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code5);
    }
    return checkNewContainers(code5);
  }
  function documentContinue(code5) {
    continued++;
    if (self2.containerState._closeFlow) {
      self2.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          point4 = self2.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point4
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
      return checkNewContainers(code5);
    }
    return start(code5);
  }
  function checkNewContainers(code5) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code5);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code5);
      }
      self2.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self2.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code5);
  }
  function thereIsANewContainer(code5) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code5);
  }
  function thereIsNoNewContainer(code5) {
    self2.parser.lazy[self2.now().line] = continued !== stack.length;
    lineStartOffset = self2.now().offset;
    return flowStart(code5);
  }
  function documentContinued(code5) {
    self2.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code5);
  }
  function containerContinue(code5) {
    continued++;
    stack.push([self2.currentConstruct, self2.containerState]);
    return documentContinued(code5);
  }
  function flowStart(code5) {
    if (code5 === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code5);
      return;
    }
    childFlow = childFlow || self2.parser.flow(self2.now());
    effects.enter("chunkFlow", {
      _tokenizer: childFlow,
      contentType: "flow",
      previous: childToken
    });
    return flowContinue(code5);
  }
  function flowContinue(code5) {
    if (code5 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code5);
      return;
    }
    if (markdownLineEnding(code5)) {
      effects.consume(code5);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self2.interrupt = void 0;
      return start;
    }
    effects.consume(code5);
    return flowContinue;
  }
  function writeToChild(token, endOfFile) {
    const stream = self2.sliceStream(token);
    if (endOfFile) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self2.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index2][1].end || // …or ends after it.
          childFlow.events[index2][1].end.offset > lineStartOffset)
        ) {
          return;
        }
      }
      const indexBeforeExits = self2.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point4;
      while (indexBeforeFlow--) {
        if (self2.events[indexBeforeFlow][0] === "exit" && self2.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point4 = self2.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self2.events.length) {
        self2.events[index2][1].end = {
          ...point4
        };
        index2++;
      }
      splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits));
      self2.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self2.containerState = entry[1];
      entry[0].exit.call(self2, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self2.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok4, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok4, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code5) {
  if (code5 === null || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5)) {
    return 1;
  }
  if (unicodePunctuation(code5)) {
    return 2;
  }
}

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text8;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index2][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index2][1].start
            },
            end
          };
          text8 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index2][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index2][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [["enter", events[open][1], context], ["exit", events[open][1], context]]);
          }
          nextEvents = push(nextEvents, [["enter", group, context], ["enter", openingSequence, context], ["exit", openingSequence, context], ["enter", text8, context]]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [["exit", text8, context], ["enter", closingSequence, context], ["exit", closingSequence, context], ["exit", group, context]]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [["enter", events[index2][1], context], ["exit", events[index2][1], context]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok4) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous4 = this.previous;
  const before = classifyCharacter(previous4);
  let marker;
  return start;
  function start(code5) {
    marker = code5;
    effects.enter("attentionSequence");
    return inside(code5);
  }
  function inside(code5) {
    if (code5 === marker) {
      effects.consume(code5);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code5);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code5);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous4);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok4(code5);
  }
}
function movePoint(point4, offset) {
  point4.column += offset;
  point4.offset += offset;
  point4._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok4, nok) {
  let size = 0;
  return start;
  function start(code5) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code5);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code5) {
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      return schemeOrEmailAtext;
    }
    if (code5 === 64) {
      return nok(code5);
    }
    return emailAtext(code5);
  }
  function schemeOrEmailAtext(code5) {
    if (code5 === 43 || code5 === 45 || code5 === 46 || asciiAlphanumeric(code5)) {
      size = 1;
      return schemeInsideOrEmailAtext(code5);
    }
    return emailAtext(code5);
  }
  function schemeInsideOrEmailAtext(code5) {
    if (code5 === 58) {
      effects.consume(code5);
      size = 0;
      return urlInside;
    }
    if ((code5 === 43 || code5 === 45 || code5 === 46 || asciiAlphanumeric(code5)) && size++ < 32) {
      effects.consume(code5);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code5);
  }
  function urlInside(code5) {
    if (code5 === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code5);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok4;
    }
    if (code5 === null || code5 === 32 || code5 === 60 || asciiControl(code5)) {
      return nok(code5);
    }
    effects.consume(code5);
    return urlInside;
  }
  function emailAtext(code5) {
    if (code5 === 64) {
      effects.consume(code5);
      return emailAtSignOrDot;
    }
    if (asciiAtext(code5)) {
      effects.consume(code5);
      return emailAtext;
    }
    return nok(code5);
  }
  function emailAtSignOrDot(code5) {
    return asciiAlphanumeric(code5) ? emailLabel(code5) : nok(code5);
  }
  function emailLabel(code5) {
    if (code5 === 46) {
      effects.consume(code5);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code5 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code5);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok4;
    }
    return emailValue(code5);
  }
  function emailValue(code5) {
    if ((code5 === 45 || asciiAlphanumeric(code5)) && size++ < 63) {
      const next = code5 === 45 ? emailValue : emailLabel;
      effects.consume(code5);
      return next;
    }
    return nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  partial: true,
  tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(effects, ok4, nok) {
  return start;
  function start(code5) {
    return markdownSpace(code5) ? factorySpace(effects, after, "linePrefix")(code5) : after(code5);
  }
  function after(code5) {
    return code5 === null || markdownLineEnding(code5) ? ok4(code5) : nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit,
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    if (code5 === 62) {
      const state = self2.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code5);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code5);
  }
  function after(code5) {
    if (markdownSpace(code5)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code5);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok4;
    }
    effects.exit("blockQuotePrefix");
    return ok4(code5);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok4, nok) {
  const self2 = this;
  return contStart;
  function contStart(code5) {
    if (markdownSpace(code5)) {
      return factorySpace(effects, contBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code5);
    }
    return contBefore(code5);
  }
  function contBefore(code5) {
    return effects.attempt(blockQuote, ok4, nok)(code5);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok4, nok) {
  return start;
  function start(code5) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code5);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code5) {
    if (asciiPunctuation(code5)) {
      effects.enter("characterEscapeValue");
      effects.consume(code5);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok4;
    }
    return nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok4, nok) {
  const self2 = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code5) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code5);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code5) {
    if (code5 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code5);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = asciiAlphanumeric;
    return value(code5);
  }
  function numeric(code5) {
    if (code5 === 88 || code5 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code5);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = asciiDigit;
    return value(code5);
  }
  function value(code5) {
    if (code5 === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self2.sliceSerialize(token))) {
        return nok(code5);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code5);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok4;
    }
    if (test(code5) && size++ < max) {
      effects.consume(code5);
      return value;
    }
    return nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
var nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
};
var codeFenced = {
  concrete: true,
  name: "codeFenced",
  tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(effects, ok4, nok) {
  const self2 = this;
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code5) {
    return beforeSequenceOpen(code5);
  }
  function beforeSequenceOpen(code5) {
    const tail = self2.events[self2.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code5;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code5);
  }
  function sequenceOpen(code5) {
    if (code5 === marker) {
      sizeOpen++;
      effects.consume(code5);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code5);
    }
    effects.exit("codeFencedFenceSequence");
    return markdownSpace(code5) ? factorySpace(effects, infoBefore, "whitespace")(code5) : infoBefore(code5);
  }
  function infoBefore(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("codeFencedFence");
      return self2.interrupt ? ok4(code5) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code5);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code5);
  }
  function info(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code5);
    }
    if (markdownSpace(code5)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, metaBefore, "whitespace")(code5);
    }
    if (code5 === 96 && code5 === marker) {
      return nok(code5);
    }
    effects.consume(code5);
    return info;
  }
  function metaBefore(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      return infoBefore(code5);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code5);
  }
  function meta(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code5);
    }
    if (code5 === 96 && code5 === marker) {
      return nok(code5);
    }
    effects.consume(code5);
    return meta;
  }
  function atNonLazyBreak(code5) {
    return effects.attempt(closeStart, after, contentBefore)(code5);
  }
  function contentBefore(code5) {
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code5) {
    return initialPrefix > 0 && markdownSpace(code5) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code5) : beforeContentChunk(code5);
  }
  function beforeContentChunk(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code5);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code5);
  }
  function contentChunk(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code5);
    }
    effects.consume(code5);
    return contentChunk;
  }
  function after(code5) {
    effects.exit("codeFenced");
    return ok4(code5);
  }
  function tokenizeCloseStart(effects2, ok5, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code5) {
      effects2.enter("lineEnding");
      effects2.consume(code5);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code5) {
      effects2.enter("codeFencedFence");
      return markdownSpace(code5) ? factorySpace(effects2, beforeSequenceClose, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code5) : beforeSequenceClose(code5);
    }
    function beforeSequenceClose(code5) {
      if (code5 === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code5);
      }
      return nok2(code5);
    }
    function sequenceClose(code5) {
      if (code5 === marker) {
        size++;
        effects2.consume(code5);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return markdownSpace(code5) ? factorySpace(effects2, sequenceCloseAfter, "whitespace")(code5) : sequenceCloseAfter(code5);
      }
      return nok2(code5);
    }
    function sequenceCloseAfter(code5) {
      if (code5 === null || markdownLineEnding(code5)) {
        effects2.exit("codeFencedFence");
        return ok5(code5);
      }
      return nok2(code5);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code5) {
    return self2.parser.lazy[self2.now().line] ? nok(code5) : ok4(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  partial: true,
  tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code5);
  }
  function afterPrefix(code5) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code5) : nok(code5);
  }
  function atBreak(code5) {
    if (code5 === null) {
      return after(code5);
    }
    if (markdownLineEnding(code5)) {
      return effects.attempt(furtherStart, atBreak, after)(code5);
    }
    effects.enter("codeFlowValue");
    return inside(code5);
  }
  function inside(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("codeFlowValue");
      return atBreak(code5);
    }
    effects.consume(code5);
    return inside;
  }
  function after(code5) {
    effects.exit("codeIndented");
    return ok4(code5);
  }
}
function tokenizeFurtherStart(effects, ok4, nok) {
  const self2 = this;
  return furtherStart2;
  function furtherStart2(code5) {
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code5);
    }
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code5);
  }
  function afterPrefix(code5) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok4(code5) : markdownLineEnding(code5) ? furtherStart2(code5) : nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  previous,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code5) {
  return code5 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok4, nok) {
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code5) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code5);
  }
  function sequenceOpen(code5) {
    if (code5 === 96) {
      effects.consume(code5);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code5);
  }
  function between(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    if (code5 === 32) {
      effects.enter("space");
      effects.consume(code5);
      effects.exit("space");
      return between;
    }
    if (code5 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code5);
    }
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      return between;
    }
    effects.enter("codeTextData");
    return data(code5);
  }
  function data(code5) {
    if (code5 === null || code5 === 32 || code5 === 96 || markdownLineEnding(code5)) {
      effects.exit("codeTextData");
      return between(code5);
    }
    effects.consume(code5);
    return data;
  }
  function sequenceClose(code5) {
    if (code5 === 96) {
      effects.consume(code5);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok4(code5);
    }
    token.type = "codeTextData";
    return data(code5);
  }
}

// node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var SpliceBuffer = class {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(initial) {
    this.left = initial ? [...initial] : [];
    this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(index2) {
    if (index2 < 0 || index2 >= this.left.length + this.right.length) {
      throw new RangeError("Cannot access index `" + index2 + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    }
    if (index2 < this.left.length) return this.left[index2];
    return this.right[this.right.length - index2 + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    this.setCursor(0);
    return this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(start, end) {
    const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
    if (stop < this.left.length) {
      return this.left.slice(start, stop);
    }
    if (start > this.left.length) {
      return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
    }
    return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(start, deleteCount, items) {
    const count = deleteCount || 0;
    this.setCursor(Math.trunc(start));
    const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
    if (items) chunkedPush(this.left, items);
    return removed.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    this.setCursor(Number.POSITIVE_INFINITY);
    return this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(item) {
    this.setCursor(Number.POSITIVE_INFINITY);
    this.left.push(item);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(items) {
    this.setCursor(Number.POSITIVE_INFINITY);
    chunkedPush(this.left, items);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(item) {
    this.setCursor(0);
    this.right.push(item);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(items) {
    this.setCursor(0);
    chunkedPush(this.right, items.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n2) {
    if (n2 === this.left.length || n2 > this.left.length && this.right.length === 0 || n2 < 0 && this.left.length === 0) return;
    if (n2 < this.left.length) {
      const removed = this.left.splice(n2, Number.POSITIVE_INFINITY);
      chunkedPush(this.right, removed.reverse());
    } else {
      const removed = this.right.splice(this.left.length + this.right.length - n2, Number.POSITIVE_INFINITY);
      chunkedPush(this.left, removed.reverse());
    }
  }
};
function chunkedPush(list5, right) {
  let chunkStart = 0;
  if (right.length < 1e4) {
    list5.push(...right);
  } else {
    while (chunkStart < right.length) {
      list5.push(...right.slice(chunkStart, chunkStart + 1e4));
      chunkStart += 1e4;
    }
  }
}

// node_modules/micromark-util-subtokenize/index.js
function subtokenize(eventsArray) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  const events = new SpliceBuffer(eventsArray);
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events.get(index2);
    if (index2 && event[1].type === "chunkFlow" && events.get(index2 - 1)[1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events.get(otherIndex);
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events.get(lineIndex)[1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") ; else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = {
          ...events.get(lineIndex)[1].start
        };
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        events.splice(lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events.get(eventIndex)[1];
  const context = events.get(eventIndex)[2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  let tokenizer = token._tokenizer;
  if (!tokenizer) {
    tokenizer = context.parser[token.contentType](token.start);
    if (token._contentTypeTextTrailing) {
      tokenizer._contentTypeTextTrailing = true;
    }
  }
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous4;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events.get(++startPosition)[1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous4) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous4 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (
      // Find a void token that includes a break.
      childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line
    ) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.push([start2, start2 + slice.length - 1]);
    events.splice(start2, 2, slice);
  }
  jumps.reverse();
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}

// node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  resolve: resolveContent,
  tokenize: tokenizeContent
};
var continuationConstruct = {
  partial: true,
  tokenize: tokenizeContinuation
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok4) {
  let previous4;
  return chunkStart;
  function chunkStart(code5) {
    effects.enter("content");
    previous4 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code5);
  }
  function chunkInside(code5) {
    if (code5 === null) {
      return contentEnd(code5);
    }
    if (markdownLineEnding(code5)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code5);
    }
    effects.consume(code5);
    return chunkInside;
  }
  function contentEnd(code5) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok4(code5);
  }
  function contentContinue(code5) {
    effects.consume(code5);
    effects.exit("chunkContent");
    previous4.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous4
    });
    previous4 = previous4.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok4, nok) {
  const self2 = this;
  return startLookahead;
  function startLookahead(code5) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      return nok(code5);
    }
    const tail = self2.events[self2.events.length - 1];
    if (!self2.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok4(code5);
    }
    return effects.interrupt(self2.parser.constructs.flow, nok, ok4)(code5);
  }
}

// node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok4, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code5) {
    if (code5 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code5);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code5 === null || code5 === 32 || code5 === 41 || asciiControl(code5)) {
      return nok(code5);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw2(code5);
  }
  function enclosedBefore(code5) {
    if (code5 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code5);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok4;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code5);
  }
  function enclosed(code5) {
    if (code5 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code5);
    }
    if (code5 === null || code5 === 60 || markdownLineEnding(code5)) {
      return nok(code5);
    }
    effects.consume(code5);
    return code5 === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code5) {
    if (code5 === 60 || code5 === 62 || code5 === 92) {
      effects.consume(code5);
      return enclosed;
    }
    return enclosed(code5);
  }
  function raw2(code5) {
    if (!balance && (code5 === null || code5 === 41 || markdownLineEndingOrSpace(code5))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok4(code5);
    }
    if (balance < limit && code5 === 40) {
      effects.consume(code5);
      balance++;
      return raw2;
    }
    if (code5 === 41) {
      effects.consume(code5);
      balance--;
      return raw2;
    }
    if (code5 === null || code5 === 32 || code5 === 40 || asciiControl(code5)) {
      return nok(code5);
    }
    effects.consume(code5);
    return code5 === 92 ? rawEscape : raw2;
  }
  function rawEscape(code5) {
    if (code5 === 40 || code5 === 41 || code5 === 92) {
      effects.consume(code5);
      return raw2;
    }
    return raw2(code5);
  }
}

// node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok4, nok, type, markerType, stringType) {
  const self2 = this;
  let size = 0;
  let seen;
  return start;
  function start(code5) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code5);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code5) {
    if (size > 999 || code5 === null || code5 === 91 || code5 === 93 && !seen || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    code5 === 94 && !size && "_hiddenFootnoteSupport" in self2.parser.constructs) {
      return nok(code5);
    }
    if (code5 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code5);
      effects.exit(markerType);
      effects.exit(type);
      return ok4;
    }
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code5);
  }
  function labelInside(code5) {
    if (code5 === null || code5 === 91 || code5 === 93 || markdownLineEnding(code5) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code5);
    }
    effects.consume(code5);
    if (!seen) seen = !markdownSpace(code5);
    return code5 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code5) {
    if (code5 === 91 || code5 === 92 || code5 === 93) {
      effects.consume(code5);
      size++;
      return labelInside;
    }
    return labelInside(code5);
  }
}

// node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok4, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code5) {
    if (code5 === 34 || code5 === 39 || code5 === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code5);
      effects.exit(markerType);
      marker = code5 === 40 ? 41 : code5;
      return begin;
    }
    return nok(code5);
  }
  function begin(code5) {
    if (code5 === marker) {
      effects.enter(markerType);
      effects.consume(code5);
      effects.exit(markerType);
      effects.exit(type);
      return ok4;
    }
    effects.enter(stringType);
    return atBreak(code5);
  }
  function atBreak(code5) {
    if (code5 === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code5 === null) {
      return nok(code5);
    }
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      return factorySpace(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code5);
  }
  function inside(code5) {
    if (code5 === marker || code5 === null || markdownLineEnding(code5)) {
      effects.exit("chunkString");
      return atBreak(code5);
    }
    effects.consume(code5);
    return code5 === 92 ? escape : inside;
  }
  function escape(code5) {
    if (code5 === marker || code5 === 92) {
      effects.consume(code5);
      return inside;
    }
    return inside(code5);
  }
}

// node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok4) {
  let seen;
  return start;
  function start(code5) {
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code5)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code5);
    }
    return ok4(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  partial: true,
  tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(effects, ok4, nok) {
  const self2 = this;
  let identifier;
  return start;
  function start(code5) {
    effects.enter("definition");
    return before(code5);
  }
  function before(code5) {
    return factoryLabel.call(
      self2,
      effects,
      labelAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code5);
  }
  function labelAfter(code5) {
    identifier = normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1));
    if (code5 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code5);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code5);
  }
  function markerAfter(code5) {
    return markdownLineEndingOrSpace(code5) ? factoryWhitespace(effects, destinationBefore)(code5) : destinationBefore(code5);
  }
  function destinationBefore(code5) {
    return factoryDestination(
      effects,
      destinationAfter,
      // Note: we don’t need to reset the way `markdown-rs` does.
      nok,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(code5);
  }
  function destinationAfter(code5) {
    return effects.attempt(titleBefore, after, after)(code5);
  }
  function after(code5) {
    return markdownSpace(code5) ? factorySpace(effects, afterWhitespace, "whitespace")(code5) : afterWhitespace(code5);
  }
  function afterWhitespace(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("definition");
      self2.parser.defined.push(identifier);
      return ok4(code5);
    }
    return nok(code5);
  }
}
function tokenizeTitleBefore(effects, ok4, nok) {
  return titleBefore2;
  function titleBefore2(code5) {
    return markdownLineEndingOrSpace(code5) ? factoryWhitespace(effects, beforeMarker)(code5) : nok(code5);
  }
  function beforeMarker(code5) {
    return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code5);
  }
  function titleAfter(code5) {
    return markdownSpace(code5) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code5) : titleAfterOptionalWhitespace(code5);
  }
  function titleAfterOptionalWhitespace(code5) {
    return code5 === null || markdownLineEnding(code5) ? ok4(code5) : nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok4, nok) {
  return start;
  function start(code5) {
    effects.enter("hardBreakEscape");
    effects.consume(code5);
    return after;
  }
  function after(code5) {
    if (markdownLineEnding(code5)) {
      effects.exit("hardBreakEscape");
      return ok4(code5);
    }
    return nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content3;
  let text8;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content3 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text8 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [["enter", content3, context], ["enter", text8, context], ["exit", text8, context], ["exit", content3, context]]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok4, nok) {
  let size = 0;
  return start;
  function start(code5) {
    effects.enter("atxHeading");
    return before(code5);
  }
  function before(code5) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code5);
  }
  function sequenceOpen(code5) {
    if (code5 === 35 && size++ < 6) {
      effects.consume(code5);
      return sequenceOpen;
    }
    if (code5 === null || markdownLineEndingOrSpace(code5)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code5);
    }
    return nok(code5);
  }
  function atBreak(code5) {
    if (code5 === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code5);
    }
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("atxHeading");
      return ok4(code5);
    }
    if (markdownSpace(code5)) {
      return factorySpace(effects, atBreak, "whitespace")(code5);
    }
    effects.enter("atxHeadingText");
    return data(code5);
  }
  function sequenceFurther(code5) {
    if (code5 === 35) {
      effects.consume(code5);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code5);
  }
  function data(code5) {
    if (code5 === null || code5 === 35 || markdownLineEndingOrSpace(code5)) {
      effects.exit("atxHeadingText");
      return atBreak(code5);
    }
    effects.consume(code5);
    return data;
  }
}

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  concrete: true,
  name: "htmlFlow",
  resolveTo: resolveToHtmlFlow,
  tokenize: tokenizeHtmlFlow
};
var blankLineBefore = {
  partial: true,
  tokenize: tokenizeBlankLineBefore
};
var nonLazyContinuationStart = {
  partial: true,
  tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok4, nok) {
  const self2 = this;
  let marker;
  let closingTag;
  let buffer;
  let index2;
  let markerB;
  return start;
  function start(code5) {
    return before(code5);
  }
  function before(code5) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code5);
    return open;
  }
  function open(code5) {
    if (code5 === 33) {
      effects.consume(code5);
      return declarationOpen;
    }
    if (code5 === 47) {
      effects.consume(code5);
      closingTag = true;
      return tagCloseStart;
    }
    if (code5 === 63) {
      effects.consume(code5);
      marker = 3;
      return self2.interrupt ? ok4 : continuationDeclarationInside;
    }
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      buffer = String.fromCharCode(code5);
      return tagName;
    }
    return nok(code5);
  }
  function declarationOpen(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      marker = 2;
      return commentOpenInside;
    }
    if (code5 === 91) {
      effects.consume(code5);
      marker = 5;
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      marker = 4;
      return self2.interrupt ? ok4 : continuationDeclarationInside;
    }
    return nok(code5);
  }
  function commentOpenInside(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return self2.interrupt ? ok4 : continuationDeclarationInside;
    }
    return nok(code5);
  }
  function cdataOpenInside(code5) {
    const value = "CDATA[";
    if (code5 === value.charCodeAt(index2++)) {
      effects.consume(code5);
      if (index2 === value.length) {
        return self2.interrupt ? ok4 : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code5);
  }
  function tagCloseStart(code5) {
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      buffer = String.fromCharCode(code5);
      return tagName;
    }
    return nok(code5);
  }
  function tagName(code5) {
    if (code5 === null || code5 === 47 || code5 === 62 || markdownLineEndingOrSpace(code5)) {
      const slash = code5 === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self2.interrupt ? ok4(code5) : continuation(code5);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code5);
          return basicSelfClosing;
        }
        return self2.interrupt ? ok4(code5) : continuation(code5);
      }
      marker = 7;
      return self2.interrupt && !self2.parser.lazy[self2.now().line] ? nok(code5) : closingTag ? completeClosingTagAfter(code5) : completeAttributeNameBefore(code5);
    }
    if (code5 === 45 || asciiAlphanumeric(code5)) {
      effects.consume(code5);
      buffer += String.fromCharCode(code5);
      return tagName;
    }
    return nok(code5);
  }
  function basicSelfClosing(code5) {
    if (code5 === 62) {
      effects.consume(code5);
      return self2.interrupt ? ok4 : continuation;
    }
    return nok(code5);
  }
  function completeClosingTagAfter(code5) {
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return completeClosingTagAfter;
    }
    return completeEnd(code5);
  }
  function completeAttributeNameBefore(code5) {
    if (code5 === 47) {
      effects.consume(code5);
      return completeEnd;
    }
    if (code5 === 58 || code5 === 95 || asciiAlpha(code5)) {
      effects.consume(code5);
      return completeAttributeName;
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return completeAttributeNameBefore;
    }
    return completeEnd(code5);
  }
  function completeAttributeName(code5) {
    if (code5 === 45 || code5 === 46 || code5 === 58 || code5 === 95 || asciiAlphanumeric(code5)) {
      effects.consume(code5);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code5);
  }
  function completeAttributeNameAfter(code5) {
    if (code5 === 61) {
      effects.consume(code5);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code5);
  }
  function completeAttributeValueBefore(code5) {
    if (code5 === null || code5 === 60 || code5 === 61 || code5 === 62 || code5 === 96) {
      return nok(code5);
    }
    if (code5 === 34 || code5 === 39) {
      effects.consume(code5);
      markerB = code5;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code5);
  }
  function completeAttributeValueQuoted(code5) {
    if (code5 === markerB) {
      effects.consume(code5);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code5 === null || markdownLineEnding(code5)) {
      return nok(code5);
    }
    effects.consume(code5);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code5) {
    if (code5 === null || code5 === 34 || code5 === 39 || code5 === 47 || code5 === 60 || code5 === 61 || code5 === 62 || code5 === 96 || markdownLineEndingOrSpace(code5)) {
      return completeAttributeNameAfter(code5);
    }
    effects.consume(code5);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code5) {
    if (code5 === 47 || code5 === 62 || markdownSpace(code5)) {
      return completeAttributeNameBefore(code5);
    }
    return nok(code5);
  }
  function completeEnd(code5) {
    if (code5 === 62) {
      effects.consume(code5);
      return completeAfter;
    }
    return nok(code5);
  }
  function completeAfter(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      return continuation(code5);
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return completeAfter;
    }
    return nok(code5);
  }
  function continuation(code5) {
    if (code5 === 45 && marker === 2) {
      effects.consume(code5);
      return continuationCommentInside;
    }
    if (code5 === 60 && marker === 1) {
      effects.consume(code5);
      return continuationRawTagOpen;
    }
    if (code5 === 62 && marker === 4) {
      effects.consume(code5);
      return continuationClose;
    }
    if (code5 === 63 && marker === 3) {
      effects.consume(code5);
      return continuationDeclarationInside;
    }
    if (code5 === 93 && marker === 5) {
      effects.consume(code5);
      return continuationCdataInside;
    }
    if (markdownLineEnding(code5) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code5);
    }
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("htmlFlowData");
      return continuationStart(code5);
    }
    effects.consume(code5);
    return continuation;
  }
  function continuationStart(code5) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code5);
  }
  function continuationStartNonLazy(code5) {
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      return continuationStart(code5);
    }
    effects.enter("htmlFlowData");
    return continuation(code5);
  }
  function continuationCommentInside(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return continuationDeclarationInside;
    }
    return continuation(code5);
  }
  function continuationRawTagOpen(code5) {
    if (code5 === 47) {
      effects.consume(code5);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code5);
  }
  function continuationRawEndTag(code5) {
    if (code5 === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code5);
        return continuationClose;
      }
      return continuation(code5);
    }
    if (asciiAlpha(code5) && buffer.length < 8) {
      effects.consume(code5);
      buffer += String.fromCharCode(code5);
      return continuationRawEndTag;
    }
    return continuation(code5);
  }
  function continuationCdataInside(code5) {
    if (code5 === 93) {
      effects.consume(code5);
      return continuationDeclarationInside;
    }
    return continuation(code5);
  }
  function continuationDeclarationInside(code5) {
    if (code5 === 62) {
      effects.consume(code5);
      return continuationClose;
    }
    if (code5 === 45 && marker === 2) {
      effects.consume(code5);
      return continuationDeclarationInside;
    }
    return continuation(code5);
  }
  function continuationClose(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code5);
    }
    effects.consume(code5);
    return continuationClose;
  }
  function continuationAfter(code5) {
    effects.exit("htmlFlow");
    return ok4(code5);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    if (markdownLineEnding(code5)) {
      effects.enter("lineEnding");
      effects.consume(code5);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code5);
  }
  function after(code5) {
    return self2.parser.lazy[self2.now().line] ? nok(code5) : ok4(code5);
  }
}
function tokenizeBlankLineBefore(effects, ok4, nok) {
  return start;
  function start(code5) {
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok4, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok4, nok) {
  const self2 = this;
  let marker;
  let index2;
  let returnState;
  return start;
  function start(code5) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code5);
    return open;
  }
  function open(code5) {
    if (code5 === 33) {
      effects.consume(code5);
      return declarationOpen;
    }
    if (code5 === 47) {
      effects.consume(code5);
      return tagCloseStart;
    }
    if (code5 === 63) {
      effects.consume(code5);
      return instruction;
    }
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      return tagOpen;
    }
    return nok(code5);
  }
  function declarationOpen(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return commentOpenInside;
    }
    if (code5 === 91) {
      effects.consume(code5);
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      return declaration;
    }
    return nok(code5);
  }
  function commentOpenInside(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return commentEnd;
    }
    return nok(code5);
  }
  function comment2(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    if (code5 === 45) {
      effects.consume(code5);
      return commentClose;
    }
    if (markdownLineEnding(code5)) {
      returnState = comment2;
      return lineEndingBefore(code5);
    }
    effects.consume(code5);
    return comment2;
  }
  function commentClose(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return commentEnd;
    }
    return comment2(code5);
  }
  function commentEnd(code5) {
    return code5 === 62 ? end(code5) : code5 === 45 ? commentClose(code5) : comment2(code5);
  }
  function cdataOpenInside(code5) {
    const value = "CDATA[";
    if (code5 === value.charCodeAt(index2++)) {
      effects.consume(code5);
      return index2 === value.length ? cdata : cdataOpenInside;
    }
    return nok(code5);
  }
  function cdata(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    if (code5 === 93) {
      effects.consume(code5);
      return cdataClose;
    }
    if (markdownLineEnding(code5)) {
      returnState = cdata;
      return lineEndingBefore(code5);
    }
    effects.consume(code5);
    return cdata;
  }
  function cdataClose(code5) {
    if (code5 === 93) {
      effects.consume(code5);
      return cdataEnd;
    }
    return cdata(code5);
  }
  function cdataEnd(code5) {
    if (code5 === 62) {
      return end(code5);
    }
    if (code5 === 93) {
      effects.consume(code5);
      return cdataEnd;
    }
    return cdata(code5);
  }
  function declaration(code5) {
    if (code5 === null || code5 === 62) {
      return end(code5);
    }
    if (markdownLineEnding(code5)) {
      returnState = declaration;
      return lineEndingBefore(code5);
    }
    effects.consume(code5);
    return declaration;
  }
  function instruction(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    if (code5 === 63) {
      effects.consume(code5);
      return instructionClose;
    }
    if (markdownLineEnding(code5)) {
      returnState = instruction;
      return lineEndingBefore(code5);
    }
    effects.consume(code5);
    return instruction;
  }
  function instructionClose(code5) {
    return code5 === 62 ? end(code5) : instruction(code5);
  }
  function tagCloseStart(code5) {
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      return tagClose;
    }
    return nok(code5);
  }
  function tagClose(code5) {
    if (code5 === 45 || asciiAlphanumeric(code5)) {
      effects.consume(code5);
      return tagClose;
    }
    return tagCloseBetween(code5);
  }
  function tagCloseBetween(code5) {
    if (markdownLineEnding(code5)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code5);
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return tagCloseBetween;
    }
    return end(code5);
  }
  function tagOpen(code5) {
    if (code5 === 45 || asciiAlphanumeric(code5)) {
      effects.consume(code5);
      return tagOpen;
    }
    if (code5 === 47 || code5 === 62 || markdownLineEndingOrSpace(code5)) {
      return tagOpenBetween(code5);
    }
    return nok(code5);
  }
  function tagOpenBetween(code5) {
    if (code5 === 47) {
      effects.consume(code5);
      return end;
    }
    if (code5 === 58 || code5 === 95 || asciiAlpha(code5)) {
      effects.consume(code5);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code5)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code5);
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return tagOpenBetween;
    }
    return end(code5);
  }
  function tagOpenAttributeName(code5) {
    if (code5 === 45 || code5 === 46 || code5 === 58 || code5 === 95 || asciiAlphanumeric(code5)) {
      effects.consume(code5);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code5);
  }
  function tagOpenAttributeNameAfter(code5) {
    if (code5 === 61) {
      effects.consume(code5);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code5)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code5);
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code5);
  }
  function tagOpenAttributeValueBefore(code5) {
    if (code5 === null || code5 === 60 || code5 === 61 || code5 === 62 || code5 === 96) {
      return nok(code5);
    }
    if (code5 === 34 || code5 === 39) {
      effects.consume(code5);
      marker = code5;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code5)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code5);
    }
    if (markdownSpace(code5)) {
      effects.consume(code5);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code5);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code5) {
    if (code5 === marker) {
      effects.consume(code5);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code5 === null) {
      return nok(code5);
    }
    if (markdownLineEnding(code5)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code5);
    }
    effects.consume(code5);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code5) {
    if (code5 === null || code5 === 34 || code5 === 39 || code5 === 60 || code5 === 61 || code5 === 96) {
      return nok(code5);
    }
    if (code5 === 47 || code5 === 62 || markdownLineEndingOrSpace(code5)) {
      return tagOpenBetween(code5);
    }
    effects.consume(code5);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code5) {
    if (code5 === 47 || code5 === 62 || markdownLineEndingOrSpace(code5)) {
      return tagOpenBetween(code5);
    }
    return nok(code5);
  }
  function end(code5) {
    if (code5 === 62) {
      effects.consume(code5);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok4;
    }
    return nok(code5);
  }
  function lineEndingBefore(code5) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code5) {
    return markdownSpace(code5) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code5) : lineEndingAfterPrefix(code5);
  }
  function lineEndingAfterPrefix(code5) {
    effects.enter("htmlTextData");
    return returnState(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  resolveAll: resolveAllLabelEnd,
  resolveTo: resolveToLabelEnd,
  tokenize: tokenizeLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  const newEvents = [];
  while (++index2 < events.length) {
    const token = events[index2][1];
    newEvents.push(events[index2]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index2 += offset;
    }
  }
  if (events.length !== newEvents.length) {
    splice(events, 0, events.length, newEvents);
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text8 = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [["enter", group, context], ["enter", label, context]];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text8, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [["exit", text8, context], events[close - 2], events[close - 1], ["exit", label, context]]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok4, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self2.events[index2][1].type === "labelImage" || self2.events[index2][1].type === "labelLink") && !self2.events[index2][1]._balanced) {
      labelStart = self2.events[index2][1];
      break;
    }
  }
  return start;
  function start(code5) {
    if (!labelStart) {
      return nok(code5);
    }
    if (labelStart._inactive) {
      return labelEndNok(code5);
    }
    defined = self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code5);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code5) {
    if (code5 === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code5);
    }
    if (code5 === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code5);
    }
    return defined ? labelEndOk(code5) : labelEndNok(code5);
  }
  function referenceNotFull(code5) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code5);
  }
  function labelEndOk(code5) {
    return ok4(code5);
  }
  function labelEndNok(code5) {
    labelStart._balanced = true;
    return nok(code5);
  }
}
function tokenizeResource(effects, ok4, nok) {
  return resourceStart;
  function resourceStart(code5) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code5);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code5) {
    return markdownLineEndingOrSpace(code5) ? factoryWhitespace(effects, resourceOpen)(code5) : resourceOpen(code5);
  }
  function resourceOpen(code5) {
    if (code5 === 41) {
      return resourceEnd(code5);
    }
    return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code5);
  }
  function resourceDestinationAfter(code5) {
    return markdownLineEndingOrSpace(code5) ? factoryWhitespace(effects, resourceBetween)(code5) : resourceEnd(code5);
  }
  function resourceDestinationMissing(code5) {
    return nok(code5);
  }
  function resourceBetween(code5) {
    if (code5 === 34 || code5 === 39 || code5 === 40) {
      return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code5);
    }
    return resourceEnd(code5);
  }
  function resourceTitleAfter(code5) {
    return markdownLineEndingOrSpace(code5) ? factoryWhitespace(effects, resourceEnd)(code5) : resourceEnd(code5);
  }
  function resourceEnd(code5) {
    if (code5 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code5);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok4;
    }
    return nok(code5);
  }
}
function tokenizeReferenceFull(effects, ok4, nok) {
  const self2 = this;
  return referenceFull;
  function referenceFull(code5) {
    return factoryLabel.call(self2, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code5);
  }
  function referenceFullAfter(code5) {
    return self2.parser.defined.includes(normalizeIdentifier(self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1))) ? ok4(code5) : nok(code5);
  }
  function referenceFullMissing(code5) {
    return nok(code5);
  }
}
function tokenizeReferenceCollapsed(effects, ok4, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code5) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code5);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code5) {
    if (code5 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code5);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok4;
    }
    return nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code5);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code5) {
    if (code5 === 91) {
      effects.enter("labelMarker");
      effects.consume(code5);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code5);
  }
  function after(code5) {
    return code5 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code5) : ok4(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(effects, ok4, nok) {
  const self2 = this;
  return start;
  function start(code5) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code5);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code5) {
    return code5 === 94 && "_hiddenFootnoteSupport" in self2.parser.constructs ? nok(code5) : ok4(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok4) {
  return start;
  function start(code5) {
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    return factorySpace(effects, ok4, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok4, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code5) {
    effects.enter("thematicBreak");
    return before(code5);
  }
  function before(code5) {
    marker = code5;
    return atBreak(code5);
  }
  function atBreak(code5) {
    if (code5 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code5);
    }
    if (size >= 3 && (code5 === null || markdownLineEnding(code5))) {
      effects.exit("thematicBreak");
      return ok4(code5);
    }
    return nok(code5);
  }
  function sequence(code5) {
    if (code5 === marker) {
      effects.consume(code5);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return markdownSpace(code5) ? factorySpace(effects, atBreak, "whitespace")(code5) : atBreak(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var list = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: "list",
  tokenize: tokenizeListStart
};
var listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};
var indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent
};
function tokenizeListStart(effects, ok4, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code5) {
    const kind = self2.containerState.type || (code5 === 42 || code5 === 43 || code5 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self2.containerState.marker || code5 === self2.containerState.marker : asciiDigit(code5)) {
      if (!self2.containerState.type) {
        self2.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code5 === 42 || code5 === 45 ? effects.check(thematicBreak, nok, atMarker)(code5) : atMarker(code5);
      }
      if (!self2.interrupt || code5 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code5);
      }
    }
    return nok(code5);
  }
  function inside(code5) {
    if (asciiDigit(code5) && ++size < 10) {
      effects.consume(code5);
      return inside;
    }
    if ((!self2.interrupt || size < 2) && (self2.containerState.marker ? code5 === self2.containerState.marker : code5 === 41 || code5 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code5);
    }
    return nok(code5);
  }
  function atMarker(code5) {
    effects.enter("listItemMarker");
    effects.consume(code5);
    effects.exit("listItemMarker");
    self2.containerState.marker = self2.containerState.marker || code5;
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self2.interrupt ? nok : onBlank,
      effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix)
    );
  }
  function onBlank(code5) {
    self2.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code5);
  }
  function otherPrefix(code5) {
    if (markdownSpace(code5)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code5);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code5);
  }
  function endOfPrefix(code5) {
    self2.containerState.size = initialSize + self2.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok4(code5);
  }
}
function tokenizeListContinuation(effects, ok4, nok) {
  const self2 = this;
  self2.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code5) {
    self2.containerState.furtherBlankLines = self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine;
    return factorySpace(effects, ok4, "listItemIndent", self2.containerState.size + 1)(code5);
  }
  function notBlank(code5) {
    if (self2.containerState.furtherBlankLines || !markdownSpace(code5)) {
      self2.containerState.furtherBlankLines = void 0;
      self2.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code5);
    }
    self2.containerState.furtherBlankLines = void 0;
    self2.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok4, notInCurrentItem)(code5);
  }
  function notInCurrentItem(code5) {
    self2.containerState._closeFlow = true;
    self2.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list, ok4, nok), "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code5);
  }
}
function tokenizeIndent(effects, ok4, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self2.containerState.size + 1);
  function afterPrefix(code5) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size ? ok4(code5) : nok(code5);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok4, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code5) {
    const tail = self2.events[self2.events.length - 1];
    return !markdownSpace(code5) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok4(code5) : nok(code5);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content3;
  let text8;
  let definition4;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text8 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition4 && events[index2][1].type === "definition") {
        definition4 = index2;
      }
    }
  }
  const heading4 = {
    type: "setextHeading",
    start: {
      ...events[content3][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  events[text8][1].type = "setextHeadingText";
  if (definition4) {
    events.splice(text8, 0, ["enter", heading4, context]);
    events.splice(definition4 + 1, 0, ["exit", events[content3][1], context]);
    events[content3][1].end = {
      ...events[definition4][1].end
    };
  } else {
    events[content3][1] = heading4;
  }
  events.push(["exit", heading4, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok4, nok) {
  const self2 = this;
  let marker;
  return start;
  function start(code5) {
    let index2 = self2.events.length;
    let paragraph4;
    while (index2--) {
      if (self2.events[index2][1].type !== "lineEnding" && self2.events[index2][1].type !== "linePrefix" && self2.events[index2][1].type !== "content") {
        paragraph4 = self2.events[index2][1].type === "paragraph";
        break;
      }
    }
    if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph4)) {
      effects.enter("setextHeadingLine");
      marker = code5;
      return before(code5);
    }
    return nok(code5);
  }
  function before(code5) {
    effects.enter("setextHeadingLineSequence");
    return inside(code5);
  }
  function inside(code5) {
    if (code5 === marker) {
      effects.consume(code5);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return markdownSpace(code5) ? factorySpace(effects, after, "lineSuffix")(code5) : after(code5);
  }
  function after(code5) {
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("setextHeadingLine");
      return ok4(code5);
    }
    return nok(code5);
  }
}

// node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self2 = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix"))
  );
  return initial;
  function atBlankEnding(code5) {
    if (code5 === null) {
      effects.consume(code5);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code5);
    effects.exit("lineEndingBlank");
    self2.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code5) {
    if (code5 === null) {
      effects.consume(code5);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code5);
    effects.exit("lineEnding");
    self2.currentConstruct = void 0;
    return initial;
  }
}

// node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory("string");
var text = initializeFactory("text");
function initializeFactory(field) {
  return {
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
    tokenize: initializeText
  };
  function initializeText(effects) {
    const self2 = this;
    const constructs2 = this.parser.constructs[field];
    const text8 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code5) {
      return atBreak(code5) ? text8(code5) : notText(code5);
    }
    function notText(code5) {
      if (code5 === null) {
        effects.consume(code5);
        return;
      }
      effects.enter("data");
      effects.consume(code5);
      return data;
    }
    function data(code5) {
      if (atBreak(code5)) {
        effects.exit("data");
        return text8(code5);
      }
      effects.consume(code5);
      return data;
    }
    function atBreak(code5) {
      if (code5 === null) {
        return true;
      }
      const list5 = constructs2[code5];
      let index2 = -1;
      if (list5) {
        while (++index2 < list5.length) {
          const item = list5[index2];
          if (!item.previous || item.previous.call(self2, self2.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          index2++;
          break;
        }
      }
      if (context._contentTypeTextTrailing && eventIndex === events.length) {
        size = 0;
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex,
            _index: data.start._index + index2,
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size
          },
          end: {
            ...data.end
          }
        };
        data.end = {
          ...token.start
        };
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
var contentInitial = {
  [91]: definition
};
var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
var flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
var string2 = {
  [38]: characterReference,
  [92]: characterEscape
};
var text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
var insideSpan = {
  null: [attention, resolver]
};
var attentionMarkers = {
  null: [42, 95]
};
var disable = {
  null: []
};

// node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point4 = {
    _bufferIndex: -1,
    _index: 0,
    line: from && from.line || 1,
    column: from && from.column || 1,
    offset: from && from.offset || 0
  };
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    consume,
    enter,
    exit: exit3,
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    code: null,
    containerState: {},
    defineSkip,
    events: [],
    now,
    parser,
    previous: null,
    sliceSerialize,
    sliceStream,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    const {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    } = point4;
    return {
      _bufferIndex,
      _index,
      line,
      column,
      offset
    };
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point4._index < chunks.length) {
      const chunk = chunks[point4._index];
      if (typeof chunk === "string") {
        chunkIndex = point4._index;
        if (point4._bufferIndex < 0) {
          point4._bufferIndex = 0;
        }
        while (point4._index === chunkIndex && point4._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point4._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code5) {
    state = state(code5);
  }
  function consume(code5) {
    if (markdownLineEnding(code5)) {
      point4.line++;
      point4.column = 1;
      point4.offset += code5 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code5 !== -1) {
      point4.column++;
      point4.offset++;
    }
    if (point4._bufferIndex < 0) {
      point4._index++;
    } else {
      point4._bufferIndex++;
      if (point4._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
      // strings.
      /** @type {string} */
      chunks[point4._index].length) {
        point4._bufferIndex = -1;
        point4._index++;
      }
    }
    context.previous = code5;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit3(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_2, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs2)
      ) : "tokenize" in constructs2 ? (
        // Looks like a construct.
        handleListOfConstructs([
          /** @type {Construct} */
          constructs2
        ])
      ) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map4) {
        return start;
        function start(code5) {
          const left = code5 !== null && map4[code5];
          const all4 = code5 !== null && map4.null;
          const list5 = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(left) ? left : left ? [left] : [],
            ...Array.isArray(all4) ? all4 : all4 ? [all4] : []
          ];
          return handleListOfConstructs(list5)(code5);
        }
      }
      function handleListOfConstructs(list5) {
        listOfConstructs = list5;
        constructIndex = 0;
        if (list5.length === 0) {
          return bogusState;
        }
        return handleConstruct(list5[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code5) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok4,
            nok
          )(code5);
        }
      }
      function ok4(code5) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code5) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      from: startEventsIndex,
      restore
    };
    function restore() {
      point4 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point4.line in columnStart && point4.column < 2) {
      point4.column = columnStart[point4.line];
      point4.offset += columnStart[point4.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      const head2 = view[0];
      if (typeof head2 === "string") {
        view[0] = head2.slice(startBufferIndex);
      } else {
        view.shift();
      }
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else switch (chunk) {
      case -5: {
        value = "\r";
        break;
      }
      case -4: {
        value = "\n";
        break;
      }
      case -3: {
        value = "\r\n";
        break;
      }
      case -2: {
        value = expandTabs ? " " : "	";
        break;
      }
      case -1: {
        if (!expandTabs && atTab) continue;
        value = " ";
        break;
      }
      default: {
        value = String.fromCharCode(chunk);
      }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

// node_modules/micromark/lib/parse.js
function parse(options) {
  const settings = options || {};
  const constructs2 = (
    /** @type {FullNormalizedExtension} */
    combineExtensions([constructs_exports, ...settings.extensions || []])
  );
  const parser = {
    constructs: constructs2,
    content: create2(content),
    defined: [],
    document: create2(document2),
    flow: create2(flow),
    lazy: {},
    string: create2(string),
    text: create2(text)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}

// node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code5;
    value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code5 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code5 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code5) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next) chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}

// node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head2 = $2.charCodeAt(0);
  if (head2 === 35) {
    const head3 = $2.charCodeAt(1);
    const hex = head3 === 120 || head3 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var own4 = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (encoding && typeof encoding === "object") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
}
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link4),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading4),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition4),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis4),
      hardBreakEscape: opener(hardBreak4),
      hardBreakTrailing: opener(hardBreak4),
      htmlFlow: opener(html8, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html8, buffer),
      htmlTextData: onenterdata,
      image: opener(image4),
      label: buffer,
      link: opener(link4),
      listItem: opener(listItem4),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list5, onenterlistordered),
      listUnordered: opener(list5),
      paragraph: opener(paragraph4),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading4),
      strong: opener(strong4),
      thematicBreak: opener(thematicBreak5)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit: exit3,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own4.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem5;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
          break;
        }
        case "lineEndingBlank": {
          if (event[0] === "enter") {
            if (listItem5 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index2;
            }
            atMarker = void 0;
          }
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace": {
          break;
        }
        default: {
          atMarker = void 0;
        }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem5) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit") continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") ; else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem5._spread = true;
          }
          listItem5.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem5, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          listItem5 = item;
          events.splice(index2, 0, ["enter", item, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node3, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    const siblings2 = parent.children;
    siblings2.push(node3);
    this.stack.push(node3);
    this.tokenStack.push([token, errorHandler || void 0]);
    node3.position = {
      start: point2(token.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    const node3 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node3.position.end = point2(token.end);
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.label = label;
    node3.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node3 = this.stack[this.stack.length - 1];
    if (!node3.depth) {
      const depth = this.sliceSerialize(token).length;
      node3.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node3 = this.stack[this.stack.length - 1];
    node3.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node3 = this.stack[this.stack.length - 1];
    const siblings2 = node3.children;
    let tail = siblings2[siblings2.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text8();
      tail.position = {
        start: point2(token.start),
        // @ts-expect-error: we’ll add `end` later.
        end: void 0
      };
      siblings2.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.value = data2;
  }
  function onexitlink() {
    const node3 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node3.type += "Reference";
      node3.referenceType = referenceType;
      delete node3.url;
      delete node3.title;
    } else {
      delete node3.identifier;
      delete node3.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node3 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node3.type += "Reference";
      node3.referenceType = referenceType;
      delete node3.url;
      delete node3.title;
    } else {
      delete node3.identifier;
      delete node3.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string3 = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = decodeString(string3);
    ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node3.type === "link") {
      const children = fragment.children;
      node3.children = children;
    } else {
      node3.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node3 = this.stack[this.stack.length - 1];
    node3.label = label;
    node3.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = void 0;
    } else {
      const result = decodeNamedCharacterReference(data2);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node3 = this.stack[this.stack.length - 1];
    node3.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node3 = this.stack[this.stack.length - 1];
    node3.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition4() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis4() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading4() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function hardBreak4() {
    return {
      type: "break"
    };
  }
  function html8() {
    return {
      type: "html",
      value: ""
    };
  }
  function image4() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link4() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list5(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem4(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph4() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong4() {
    return {
      type: "strong",
      children: []
    };
  }
  function text8() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak5() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d2) {
  return {
    line: d2.line,
    column: d2.column,
    offset: d2.offset
  };
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key2;
  for (key2 in extension2) {
    if (own4.call(extension2, key2)) {
      switch (key2) {
        case "canContainEols": {
          const right = extension2[key2];
          if (right) {
            combined[key2].push(...right);
          }
          break;
        }
        case "transforms": {
          const right = extension2[key2];
          if (right) {
            combined[key2].push(...right);
          }
          break;
        }
        case "enter":
        case "exit": {
          const right = extension2[key2];
          if (right) {
            Object.assign(combined[key2], right);
          }
          break;
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  const self2 = this;
  self2.parser = parser;
  function parser(doc) {
    return fromMarkdown(doc, {
      ...self2.data("settings"),
      ...options,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: self2.data("micromarkExtensions") || [],
      mdastExtensions: self2.data("fromMarkdownExtensions") || []
    });
  }
}

// node_modules/ccount/index.js
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}

// node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string3) {
  if (typeof string3 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok2;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all4);
  function all4(node3) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node3
    );
    let key2;
    for (key2 in check) {
      if (nodeAsRecord[key2] !== checkAsRecord[key2]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node3) {
    return node3 && node3.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok2() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/unist-util-visit-parents/lib/color.node.js
function color(d2) {
  return "\x1B[33m" + d2 + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/lib/index.js
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node3, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node3 && typeof node3 === "object" ? node3 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit3, "name", {
        value: "node (" + color(node3.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit3;
    function visit3() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node3, index2, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node3, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node3 && node3.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node3
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}

// node_modules/mdast-util-find-and-replace/lib/index.js
function findAndReplace(tree, list5, options) {
  const settings = options || {};
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(list5);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents(tree, "text", visitor);
  }
  function visitor(node3, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent = parents[index2];
      const siblings2 = grandparent ? grandparent.children : void 0;
      if (ignored(
        parent,
        siblings2 ? siblings2.indexOf(parent) : void 0,
        grandparent
      )) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node3, parents);
    }
  }
  function handler(node3, parents) {
    const parent = parents[parents.length - 1];
    const find2 = pairs[pairIndex][0];
    const replace2 = pairs[pairIndex][1];
    let start = 0;
    const siblings2 = parent.children;
    const index2 = siblings2.indexOf(node3);
    let change = false;
    let nodes = [];
    find2.lastIndex = 0;
    let match = find2.exec(node3.value);
    while (match) {
      const position3 = match.index;
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node3]
      };
      let value = replace2(...match, matchObject);
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value === false) {
        find2.lastIndex = position3 + 1;
      } else {
        if (start !== position3) {
          nodes.push({
            type: "text",
            value: node3.value.slice(start, position3)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position3 + match[0].length;
        change = true;
      }
      if (!find2.global) {
        break;
      }
      match = find2.exec(node3.value);
    }
    if (change) {
      if (start < node3.value.length) {
        nodes.push({ type: "text", value: node3.value.slice(start) });
      }
      parent.children.splice(index2, 1, ...nodes);
    } else {
      nodes = [node3];
    }
    return index2 + nodes.length;
  }
}
function toPairs(tupleOrList) {
  const result = [];
  if (!Array.isArray(tupleOrList)) {
    throw new TypeError("Expected find and replace tuple or list of tuples");
  }
  const list5 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
  let index2 = -1;
  while (++index2 < list5.length) {
    const tuple = list5[index2];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }
  return result;
}
function toExpression(find2) {
  return typeof find2 === "string" ? new RegExp(escapeStringRegexp(find2), "g") : find2;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : function() {
    return replace2;
  };
}

// node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var inConstruct = "phrasing";
var notInConstruct = ["autolink", "link", "image", "label"];
function gfmAutolinkLiteralFromMarkdown() {
  return {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  };
}
function gfmAutolinkLiteralToMarkdown() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct
      }
    ]
  };
}
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node3 = this.stack[this.stack.length - 1];
  ok(node3.type === "link");
  node3.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_2, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous2(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0]) return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_2, atext, label, match) {
  if (
    // Not an expected previous character.
    !previous2(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label)
  ) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  if (!trailExec) {
    return [url, void 0];
  }
  url = url.slice(0, trailExec.index);
  let trail2 = trailExec[0];
  let closingParenIndex = trail2.indexOf(")");
  const openingParens = ccount(url, "(");
  let closingParens = ccount(url, ")");
  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail2.slice(0, closingParenIndex + 1);
    trail2 = trail2.slice(closingParenIndex + 1);
    closingParenIndex = trail2.indexOf(")");
    closingParens++;
  }
  return [url, trail2];
}
function previous2(match, email) {
  const code5 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code5) || unicodePunctuation(code5)) && // If it’s an email, the previous character should not be a slash.
  (!email || code5 !== 47);
}

// node_modules/mdast-util-gfm-footnote/lib/index.js
footnoteReference.peek = footnoteReferencePeek;
function enterFootnoteCallString() {
  this.buffer();
}
function enterFootnoteCall(token) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
}
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}
function enterFootnoteDefinition(token) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    token
  );
}
function exitFootnoteCallString(token) {
  const label = this.resume();
  const node3 = this.stack[this.stack.length - 1];
  ok(node3.type === "footnoteReference");
  node3.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node3.label = label;
}
function exitFootnoteCall(token) {
  this.exit(token);
}
function exitFootnoteDefinitionLabelString(token) {
  const label = this.resume();
  const node3 = this.stack[this.stack.length - 1];
  ok(node3.type === "footnoteDefinition");
  node3.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
  node3.label = label;
}
function exitFootnoteDefinition(token) {
  this.exit(token);
}
function footnoteReferencePeek() {
  return "[";
}
function footnoteReference(node3, _2, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit3 = state.enter("footnoteReference");
  const subexit = state.enter("reference");
  value += tracker.move(
    state.safe(state.associationId(node3), { after: "]", before: value })
  );
  subexit();
  exit3();
  value += tracker.move("]");
  return value;
}
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteCallString: enterFootnoteCallString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: enterFootnoteDefinition
    },
    exit: {
      gfmFootnoteCallString: exitFootnoteCallString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteDefinition: exitFootnoteDefinition
    }
  };
}
function gfmFootnoteToMarkdown(options) {
  let firstLineBlank = false;
  if (options && options.firstLineBlank) {
    firstLineBlank = true;
  }
  return {
    handlers: { footnoteDefinition, footnoteReference },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function footnoteDefinition(node3, _2, state, info) {
    const tracker = state.createTracker(info);
    let value = tracker.move("[^");
    const exit3 = state.enter("footnoteDefinition");
    const subexit = state.enter("label");
    value += tracker.move(
      state.safe(state.associationId(node3), { before: value, after: "]" })
    );
    subexit();
    value += tracker.move("]:");
    if (node3.children && node3.children.length > 0) {
      tracker.shift(4);
      value += tracker.move(
        (firstLineBlank ? "\n" : " ") + state.indentLines(
          state.containerFlow(node3, tracker.current()),
          firstLineBlank ? mapAll : mapExceptFirst
        )
      );
    }
    exit3();
    return value;
  }
}
function mapExceptFirst(line, index2, blank) {
  return index2 === 0 ? line : mapAll(line, index2, blank);
}
function mapAll(line, index2, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-gfm-strikethrough/lib/index.js
var constructsWithoutStrikethrough = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: enterStrikethrough },
    exit: { strikethrough: exitStrikethrough }
  };
}
function gfmStrikethroughToMarkdown() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: { delete: handleDelete }
  };
}
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node3, _2, state, info) {
  const tracker = state.createTracker(info);
  const exit3 = state.enter("strikethrough");
  let value = tracker.move("~~");
  value += state.containerPhrasing(node3, {
    ...tracker.current(),
    before: value,
    after: "~"
  });
  value += tracker.move("~~");
  exit3();
  return value;
}
function peekDelete() {
  return "~";
}

// node_modules/markdown-table/index.js
function defaultStringLength(value) {
  return value.length;
}
function markdownTable(table2, options) {
  const settings = options || {};
  const align = (settings.align || []).concat();
  const stringLength = settings.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table2.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table2[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table2[rowIndex].length;
    }
    while (++columnIndex2 < table2[rowIndex].length) {
      const cell = serialize(table2[rowIndex][columnIndex2]);
      if (settings.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code5 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code5;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code5 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code5 === 99) {
      before = ":";
      after = ":";
    } else if (code5 === 108) {
      before = ":";
    } else if (code5 === 114) {
      after = ":";
    }
    let size = settings.alignDelimiters === false ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    );
    const cell = before + "-".repeat(size) + after;
    if (settings.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (settings.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code5 = alignments[columnIndex];
        if (code5 === 114) {
          before = " ".repeat(size);
        } else if (code5 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (settings.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (settings.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(settings.alignDelimiters === false && cell === "") && (settings.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (settings.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (settings.alignDelimiters !== false) {
        line.push(after);
      }
      if (settings.padding !== false) {
        line.push(" ");
      }
      if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(
      settings.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function toAlignment(value) {
  const code5 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code5 === 67 || code5 === 99 ? 99 : code5 === 76 || code5 === 108 ? 108 : code5 === 82 || code5 === 114 ? 114 : 0;
}

// node_modules/zwitch/index.js
var own5 = {}.hasOwnProperty;
function zwitch(key2, options) {
  const settings = options || {};
  function one4(value, ...parameters) {
    let fn = one4.invalid;
    const handlers2 = one4.handlers;
    if (value && own5.call(value, key2)) {
      const id = String(value[key2]);
      fn = own5.call(handlers2, id) ? handlers2[id] : one4.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one4.handlers = settings.handlers || {};
  one4.invalid = settings.invalid;
  one4.unknown = settings.unknown;
  return one4;
}

// node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node3, _2, state, info) {
  const exit3 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node3, tracker.current()),
    map
  );
  exit3();
  return value;
}
function map(line, _2, blank) {
  return ">" + (blank ? "" : " ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list5, none) {
  if (typeof list5 === "string") {
    list5 = [list5];
  }
  if (!list5 || list5.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list5.length) {
    if (stack.includes(list5[index2])) {
      return true;
    }
  }
  return false;
}

// node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_2, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}

// node_modules/longest-streak/index.js
function longestStreak(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}

// node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node3, state) {
  return Boolean(
    state.options.fences === false && node3.value && // If there’s no info…
    !node3.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node3.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node3.value)
  );
}

// node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/code.js
function code(node3, _2, state, info) {
  const marker = checkFence(state);
  const raw2 = node3.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node3, state)) {
    const exit4 = state.enter("codeIndented");
    const value2 = state.indentLines(raw2, map2);
    exit4();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw2, marker) + 1, 3));
  const exit3 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node3.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node3.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node3.lang && node3.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node3.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw2) {
    value += tracker.move(raw2 + "\n");
  }
  value += tracker.move(sequence);
  exit3();
  return value;
}
function map2(line, _2, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition2(node3, _2, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit3 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node3), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node3.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node3.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node3.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node3.url, {
        before: value,
        after: node3.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node3.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node3.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function encodeCharacterReference(code5) {
  return "&#x" + code5.toString(16).toUpperCase() + ";";
}

// node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function encodeInfo(outside, inside, marker) {
  const outsideKind = classifyCharacter(outside);
  const insideKind = classifyCharacter(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? (
      // Letter inside:
      // we have to encode *both* letters for `_` as it is looser.
      // it already forms for `*` (and GFMs `~`).
      marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (letter, whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: encode outer (letter)
      { inside: false, outside: true }
    );
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }
  return insideKind === void 0 ? (
    // Letter inside: already forms.
    { inside: false, outside: false }
  ) : insideKind === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: true, outside: false }
  ) : (
    // Punctuation inside: already forms.
    { inside: false, outside: false }
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
emphasis.peek = emphasisPeek;
function emphasis(node3, _2, state, info) {
  const marker = checkEmphasis(state);
  const exit3 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);
  let between = tracker.move(
    state.containerPhrasing(node3, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker);
  exit3();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function emphasisPeek(_2, _1, state) {
  return state.options.emphasis || "*";
}

// node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node3, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node3) : void 0;
    return visitor(node3, index2, parent);
  }
}

// node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node3, state) {
  let literalWithBreak = false;
  visit(node3, function(node4) {
    if ("value" in node4 && /\r?\n|\r/.test(node4.value) || node4.type === "break") {
      literalWithBreak = true;
      return EXIT;
    }
  });
  return Boolean(
    (!node3.depth || node3.depth < 3) && toString(node3) && (state.options.setext || literalWithBreak)
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node3, _2, state, info) {
  const rank = Math.max(Math.min(6, node3.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node3, state)) {
    const exit4 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node3, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit4();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit3 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node3, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/handle/html.js
html.peek = htmlPeek;
function html(node3) {
  return node3.value || "";
}
function htmlPeek() {
  return "<";
}

// node_modules/mdast-util-to-markdown/lib/handle/image.js
image.peek = imagePeek;
function image(node3, _2, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit3 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node3.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node3.url && node3.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node3.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node3.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node3.url, {
        before: value,
        after: node3.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node3.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node3.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit3();
  return value;
}
function imagePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
imageReference.peek = imageReferencePeek;
function imageReference(node3, _2, state, info) {
  const type = node3.referenceType;
  const exit3 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node3.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node3), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit3();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek;
function inlineCode(node3, _2, state) {
  let value = node3.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while (match = expression.exec(value)) {
      let position3 = match.index;
      if (value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13) {
        position3--;
      }
      value = value.slice(0, position3) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node3, state) {
  const raw2 = toString(node3);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node3.url && // And there’s a no title…
    !node3.title && // And the content of `node` is a single text node…
    node3.children && node3.children.length === 1 && node3.children[0].type === "text" && // And if the url is the same as the content…
    (raw2 === node3.url || "mailto:" + raw2 === node3.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node3.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node3.url)
  );
}

// node_modules/mdast-util-to-markdown/lib/handle/link.js
link.peek = linkPeek;
function link(node3, _2, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit3;
  let subexit;
  if (formatLinkAsAutolink(node3, state)) {
    const stack = state.stack;
    state.stack = [];
    exit3 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node3, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit3();
    state.stack = stack;
    return value2;
  }
  exit3 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node3, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node3.url && node3.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node3.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node3.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node3.url, {
        before: value,
        after: node3.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node3.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node3.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit3();
  return value;
}
function linkPeek(node3, _2, state) {
  return formatLinkAsAutolink(node3, state) ? "<" : "[";
}

// node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
linkReference.peek = linkReferencePeek;
function linkReference(node3, _2, state, info) {
  const type = node3.referenceType;
  const exit3 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text8 = state.containerPhrasing(node3, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text8 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node3), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit3();
  if (type === "full" || !text8 || text8 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/list.js
function list2(node3, parent, state, info) {
  const exit3 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node3.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node3.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node3.ordered) {
    const firstListItem = node3.children ? node3.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node3.children.length) {
        const item = node3.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node3, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit3();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node3, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node3)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node3.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit3 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node3, tracker.current()),
    map4
  );
  exit3();
  return value;
  function map4(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node3, _2, state, info) {
  const exit3 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node3, info);
  subexit();
  exit3();
  return value;
}

// node_modules/mdast-util-phrasing/lib/index.js
var phrasing = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  convert([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);

// node_modules/mdast-util-to-markdown/lib/handle/root.js
function root(node3, _2, state, info) {
  const hasPhrasing = node3.children.some(function(d2) {
    return phrasing(d2);
  });
  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node3, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/strong.js
strong.peek = strongPeek;
function strong(node3, _2, state, info) {
  const marker = checkStrong(state);
  const exit3 = state.enter("strong");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);
  let between = tracker.move(
    state.containerPhrasing(node3, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit3();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function strongPeek(_2, _1, state) {
  return state.options.strong || "*";
}

// node_modules/mdast-util-to-markdown/lib/handle/text.js
function text3(node3, _2, state, info) {
  return state.safe(node3.value, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}

// node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak2(_2, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}

// node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle = {
  blockquote,
  break: hardBreak,
  code,
  definition: definition2,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list: list2,
  listItem,
  paragraph,
  root,
  strong,
  text: text3,
  thematicBreak: thematicBreak2
};

// node_modules/mdast-util-gfm-table/lib/index.js
function gfmTableFromMarkdown() {
  return {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit2,
      tableHeader: exit2,
      tableRow: exit2
    }
  };
}
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: "table",
      align: align.map(function(d2) {
        return d2 === "none" ? null : d2;
      }),
      children: []
    },
    token
  );
  this.data.inTable = true;
}
function exitTable(token) {
  this.exit(token);
  this.data.inTable = void 0;
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.data.inTable) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node3 = this.stack[this.stack.length - 1];
  ok(node3.type === "inlineCode");
  node3.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: true, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: true, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: inlineCodeWithTable,
      table: handleTable,
      tableCell: handleTableCell,
      tableRow: handleTableRow
    }
  };
  function handleTable(node3, _2, state, info) {
    return serializeData(handleTableAsData(node3, state, info), node3.align);
  }
  function handleTableRow(node3, _2, state, info) {
    const row = handleTableRowAsData(node3, state, info);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node3, _2, state, info) {
    const exit3 = state.enter("tableCell");
    const subexit = state.enter("phrasing");
    const value = state.containerPhrasing(node3, {
      ...info,
      before: around,
      after: around
    });
    subexit();
    exit3();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    });
  }
  function handleTableAsData(node3, state, info) {
    const children = node3.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], state, info);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node3, state, info) {
    const children = node3.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node3, state, info);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node3, parent, state) {
    let value = handle.inlineCode(node3, parent, state);
    if (state.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}

// node_modules/mdast-util-gfm-task-list-item/lib/index.js
function gfmTaskListItemFromMarkdown() {
  return {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  };
}
function gfmTaskListItemToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: { listItem: listItemWithTaskListItem }
  };
}
function exitCheck(token) {
  const node3 = this.stack[this.stack.length - 2];
  ok(node3.type === "listItem");
  node3.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
    const node3 = this.stack[this.stack.length - 1];
    ok(node3.type === "paragraph");
    const head2 = node3.children[0];
    if (head2 && head2.type === "text") {
      const siblings2 = parent.children;
      let index2 = -1;
      let firstParaghraph;
      while (++index2 < siblings2.length) {
        const sibling = siblings2[index2];
        if (sibling.type === "paragraph") {
          firstParaghraph = sibling;
          break;
        }
      }
      if (firstParaghraph === node3) {
        head2.value = head2.value.slice(1);
        if (head2.value.length === 0) {
          node3.children.shift();
        } else if (node3.position && head2.position && typeof head2.position.start.offset === "number") {
          head2.position.start.column++;
          head2.position.start.offset++;
          node3.position.start = Object.assign({}, head2.position.start);
        }
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node3, parent, state, info) {
  const head2 = node3.children[0];
  const checkable = typeof node3.checked === "boolean" && head2 && head2.type === "paragraph";
  const checkbox = "[" + (node3.checked ? "x" : " ") + "] ";
  const tracker = state.createTracker(info);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = handle.listItem(node3, parent, state, {
    ...info,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}

// node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(options),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  };
}

// node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
var domain = {
  tokenize: tokenizeDomain,
  partial: true
};
var path = {
  tokenize: tokenizePath,
  partial: true
};
var trail = {
  tokenize: tokenizeTrail,
  partial: true
};
var emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
var wwwAutolink = {
  name: "wwwAutolink",
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
var protocolAutolink = {
  name: "protocolAutolink",
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
var emailAutolink = {
  name: "emailAutolink",
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
var text4 = {};
function gfmAutolinkLiteral() {
  return {
    text: text4
  };
}
var code2 = 48;
while (code2 < 123) {
  text4[code2] = emailAutolink;
  code2++;
  if (code2 === 58) code2 = 65;
  else if (code2 === 91) code2 = 97;
}
text4[43] = emailAutolink;
text4[45] = emailAutolink;
text4[46] = emailAutolink;
text4[95] = emailAutolink;
text4[72] = [emailAutolink, protocolAutolink];
text4[104] = [emailAutolink, protocolAutolink];
text4[87] = [emailAutolink, wwwAutolink];
text4[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok4, nok) {
  const self2 = this;
  let dot;
  let data;
  return start;
  function start(code5) {
    if (!gfmAtext(code5) || !previousEmail.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code5);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code5);
  }
  function atext(code5) {
    if (gfmAtext(code5)) {
      effects.consume(code5);
      return atext;
    }
    if (code5 === 64) {
      effects.consume(code5);
      return emailDomain;
    }
    return nok(code5);
  }
  function emailDomain(code5) {
    if (code5 === 46) {
      return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code5);
    }
    if (code5 === 45 || code5 === 95 || asciiAlphanumeric(code5)) {
      data = true;
      effects.consume(code5);
      return emailDomain;
    }
    return emailDomainAfter(code5);
  }
  function emailDomainDot(code5) {
    effects.consume(code5);
    dot = true;
    return emailDomain;
  }
  function emailDomainAfter(code5) {
    if (data && dot && asciiAlpha(self2.previous)) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok4(code5);
    }
    return nok(code5);
  }
}
function tokenizeWwwAutolink(effects, ok4, nok) {
  const self2 = this;
  return wwwStart;
  function wwwStart(code5) {
    if (code5 !== 87 && code5 !== 119 || !previousWww.call(self2, self2.previous) || previousUnbalanced(self2.events)) {
      return nok(code5);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code5);
  }
  function wwwAfter(code5) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok4(code5);
  }
}
function tokenizeProtocolAutolink(effects, ok4, nok) {
  const self2 = this;
  let buffer = "";
  let seen = false;
  return protocolStart;
  function protocolStart(code5) {
    if ((code5 === 72 || code5 === 104) && previousProtocol.call(self2, self2.previous) && !previousUnbalanced(self2.events)) {
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkHttp");
      buffer += String.fromCodePoint(code5);
      effects.consume(code5);
      return protocolPrefixInside;
    }
    return nok(code5);
  }
  function protocolPrefixInside(code5) {
    if (asciiAlpha(code5) && buffer.length < 5) {
      buffer += String.fromCodePoint(code5);
      effects.consume(code5);
      return protocolPrefixInside;
    }
    if (code5 === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === "http" || protocol === "https") {
        effects.consume(code5);
        return protocolSlashesInside;
      }
    }
    return nok(code5);
  }
  function protocolSlashesInside(code5) {
    if (code5 === 47) {
      effects.consume(code5);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code5);
  }
  function afterProtocol(code5) {
    return code5 === null || asciiControl(code5) || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5) || unicodePunctuation(code5) ? nok(code5) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code5);
  }
  function protocolAfter(code5) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok4(code5);
  }
}
function tokenizeWwwPrefix(effects, ok4, nok) {
  let size = 0;
  return wwwPrefixInside;
  function wwwPrefixInside(code5) {
    if ((code5 === 87 || code5 === 119) && size < 3) {
      size++;
      effects.consume(code5);
      return wwwPrefixInside;
    }
    if (code5 === 46 && size === 3) {
      effects.consume(code5);
      return wwwPrefixAfter;
    }
    return nok(code5);
  }
  function wwwPrefixAfter(code5) {
    return code5 === null ? nok(code5) : ok4(code5);
  }
}
function tokenizeDomain(effects, ok4, nok) {
  let underscoreInLastSegment;
  let underscoreInLastLastSegment;
  let seen;
  return domainInside;
  function domainInside(code5) {
    if (code5 === 46 || code5 === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code5);
    }
    if (code5 === null || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5) || code5 !== 45 && unicodePunctuation(code5)) {
      return domainAfter(code5);
    }
    seen = true;
    effects.consume(code5);
    return domainInside;
  }
  function domainAtPunctuation(code5) {
    if (code5 === 95) {
      underscoreInLastSegment = true;
    } else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = void 0;
    }
    effects.consume(code5);
    return domainInside;
  }
  function domainAfter(code5) {
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code5);
    }
    return ok4(code5);
  }
}
function tokenizePath(effects, ok4) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;
  function pathInside(code5) {
    if (code5 === 40) {
      sizeOpen++;
      effects.consume(code5);
      return pathInside;
    }
    if (code5 === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code5);
    }
    if (code5 === 33 || code5 === 34 || code5 === 38 || code5 === 39 || code5 === 41 || code5 === 42 || code5 === 44 || code5 === 46 || code5 === 58 || code5 === 59 || code5 === 60 || code5 === 63 || code5 === 93 || code5 === 95 || code5 === 126) {
      return effects.check(trail, ok4, pathAtPunctuation)(code5);
    }
    if (code5 === null || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5)) {
      return ok4(code5);
    }
    effects.consume(code5);
    return pathInside;
  }
  function pathAtPunctuation(code5) {
    if (code5 === 41) {
      sizeClose++;
    }
    effects.consume(code5);
    return pathInside;
  }
}
function tokenizeTrail(effects, ok4, nok) {
  return trail2;
  function trail2(code5) {
    if (code5 === 33 || code5 === 34 || code5 === 39 || code5 === 41 || code5 === 42 || code5 === 44 || code5 === 46 || code5 === 58 || code5 === 59 || code5 === 63 || code5 === 95 || code5 === 126) {
      effects.consume(code5);
      return trail2;
    }
    if (code5 === 38) {
      effects.consume(code5);
      return trailCharacterReferenceStart;
    }
    if (code5 === 93) {
      effects.consume(code5);
      return trailBracketAfter;
    }
    if (
      // `<` is an end.
      code5 === 60 || // So is whitespace.
      code5 === null || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5)
    ) {
      return ok4(code5);
    }
    return nok(code5);
  }
  function trailBracketAfter(code5) {
    if (code5 === null || code5 === 40 || code5 === 91 || markdownLineEndingOrSpace(code5) || unicodeWhitespace(code5)) {
      return ok4(code5);
    }
    return trail2(code5);
  }
  function trailCharacterReferenceStart(code5) {
    return asciiAlpha(code5) ? trailCharacterReferenceInside(code5) : nok(code5);
  }
  function trailCharacterReferenceInside(code5) {
    if (code5 === 59) {
      effects.consume(code5);
      return trail2;
    }
    if (asciiAlpha(code5)) {
      effects.consume(code5);
      return trailCharacterReferenceInside;
    }
    return nok(code5);
  }
}
function tokenizeEmailDomainDotTrail(effects, ok4, nok) {
  return start;
  function start(code5) {
    effects.consume(code5);
    return after;
  }
  function after(code5) {
    return asciiAlphanumeric(code5) ? nok(code5) : ok4(code5);
  }
}
function previousWww(code5) {
  return code5 === null || code5 === 40 || code5 === 42 || code5 === 95 || code5 === 91 || code5 === 93 || code5 === 126 || markdownLineEndingOrSpace(code5);
}
function previousProtocol(code5) {
  return !asciiAlpha(code5);
}
function previousEmail(code5) {
  return !(code5 === 47 || gfmAtext(code5));
}
function gfmAtext(code5) {
  return code5 === 43 || code5 === 45 || code5 === 46 || code5 === 95 || asciiAlphanumeric(code5);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

// node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
  tokenize: tokenizeIndent2,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        name: "gfmFootnoteDefinition",
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        name: "gfmFootnoteCall",
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok4, nok) {
  const self2 = this;
  let index2 = self2.events.length;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self2.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code5) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code5);
    }
    const id = normalizeIdentifier(self2.sliceSerialize({
      start: labelStart.end,
      end: self2.now()
    }));
    if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code5);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code5);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok4(code5);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  };
  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    // The `[`
    events[index2 + 3],
    events[index2 + 4],
    // The `^`.
    ["enter", marker, context],
    ["exit", marker, context],
    // Everything in between.
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok4, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code5) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code5);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code5) {
    if (code5 !== 94) return nok(code5);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code5);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code5) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code5 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code5 === null || code5 === 91 || markdownLineEndingOrSpace(code5)
    ) {
      return nok(code5);
    }
    if (code5 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteCallString");
      if (!defined.includes(normalizeIdentifier(self2.sliceSerialize(token)))) {
        return nok(code5);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code5);
      effects.exit("gfmFootnoteCallLabelMarker");
      effects.exit("gfmFootnoteCall");
      return ok4;
    }
    if (!markdownLineEndingOrSpace(code5)) {
      data = true;
    }
    size++;
    effects.consume(code5);
    return code5 === 92 ? callEscape : callData;
  }
  function callEscape(code5) {
    if (code5 === 91 || code5 === 92 || code5 === 93) {
      effects.consume(code5);
      size++;
      return callData;
    }
    return callData(code5);
  }
}
function tokenizeDefinitionStart(effects, ok4, nok) {
  const self2 = this;
  const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code5) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code5);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelAtMarker;
  }
  function labelAtMarker(code5) {
    if (code5 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code5);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      effects.enter("chunkString").contentType = "string";
      return labelInside;
    }
    return nok(code5);
  }
  function labelInside(code5) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code5 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code5 === null || code5 === 91 || markdownLineEndingOrSpace(code5)
    ) {
      return nok(code5);
    }
    if (code5 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self2.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code5);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code5)) {
      data = true;
    }
    size++;
    effects.consume(code5);
    return code5 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code5) {
    if (code5 === 91 || code5 === 92 || code5 === 93) {
      effects.consume(code5);
      size++;
      return labelInside;
    }
    return labelInside(code5);
  }
  function labelAfter(code5) {
    if (code5 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code5);
      effects.exit("definitionMarker");
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }
      return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
    }
    return nok(code5);
  }
  function whitespaceAfter(code5) {
    return ok4(code5);
  }
}
function tokenizeDefinitionContinuation(effects, ok4, nok) {
  return effects.check(blankLine, ok4, effects.attempt(indent, ok4, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok4, nok) {
  const self2 = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code5) {
    const tail = self2.events[self2.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok4(code5) : nok(code5);
  }
}

// node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    name: "strikethrough",
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
          events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text8 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [["enter", strikethrough2, context], ["enter", events[open][1], context], ["exit", events[open][1], context], ["enter", text8, context]];
            const insideSpan2 = context.parser.constructs.insideSpan.null;
            if (insideSpan2) {
              splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan2, events.slice(open + 1, index2), context));
            }
            splice(nextEvents, nextEvents.length, 0, [["exit", text8, context], ["enter", events[index2][1], context], ["exit", events[index2][1], context], ["exit", strikethrough2, context]]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok4, nok) {
    const previous4 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code5) {
      if (previous4 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code5);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code5);
    }
    function more(code5) {
      const before = classifyCharacter(previous4);
      if (code5 === 126) {
        if (size > 1) return nok(code5);
        effects.consume(code5);
        size++;
        return more;
      }
      if (size < 2 && !single) return nok(code5);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code5);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok4(code5);
    }
  }
}

// node_modules/micromark-extension-gfm-table/lib/edit-map.js
var EditMap = class {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index2, remove, add) {
    addImplementation(this, index2, remove, add);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function(a2, b2) {
      return a2[0] - b2[0];
    });
    if (this.map.length === 0) {
      return;
    }
    let index2 = this.map.length;
    const vecs = [];
    while (index2 > 0) {
      index2 -= 1;
      vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2]);
      events.length = this.map[index2][0];
    }
    vecs.push(events.slice());
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      for (const element2 of slice) {
        events.push(element2);
      }
      slice = vecs.pop();
    }
    this.map.length = 0;
  }
};
function addImplementation(editMap, at, remove, add) {
  let index2 = 0;
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index2 < editMap.map.length) {
    if (editMap.map[index2][0] === at) {
      editMap.map[index2][1] += remove;
      editMap.map[index2][2].push(...add);
      return;
    }
    index2 += 1;
  }
  editMap.map.push([at, remove, add]);
}

// node_modules/micromark-extension-gfm-table/lib/infer.js
function gfmTableAlign(events, index2) {
  let inDelimiterRow = false;
  const align = [];
  while (index2 < events.length) {
    const event = events[index2];
    if (inDelimiterRow) {
      if (event[0] === "enter") {
        if (event[1].type === "tableContent") {
          align.push(events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        }
      } else if (event[1].type === "tableContent") {
        if (events[index2 - 1][1].type === "tableDelimiterMarker") {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
        }
      } else if (event[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
      inDelimiterRow = true;
    }
    index2 += 1;
  }
  return align;
}

// node_modules/micromark-extension-gfm-table/lib/syntax.js
function gfmTable() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}
function tokenizeTable(effects, ok4, nok) {
  const self2 = this;
  let size = 0;
  let sizeB = 0;
  let seen;
  return start;
  function start(code5) {
    let index2 = self2.events.length - 1;
    while (index2 > -1) {
      const type = self2.events[index2][1].type;
      if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix") index2--;
      else break;
    }
    const tail = index2 > -1 ? self2.events[index2][1].type : null;
    const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
    if (next === bodyRowStart && self2.parser.lazy[self2.now().line]) {
      return nok(code5);
    }
    return next(code5);
  }
  function headRowBefore(code5) {
    effects.enter("tableHead");
    effects.enter("tableRow");
    return headRowStart(code5);
  }
  function headRowStart(code5) {
    if (code5 === 124) {
      return headRowBreak(code5);
    }
    seen = true;
    sizeB += 1;
    return headRowBreak(code5);
  }
  function headRowBreak(code5) {
    if (code5 === null) {
      return nok(code5);
    }
    if (markdownLineEnding(code5)) {
      if (sizeB > 1) {
        sizeB = 0;
        self2.interrupt = true;
        effects.exit("tableRow");
        effects.enter("lineEnding");
        effects.consume(code5);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }
      return nok(code5);
    }
    if (markdownSpace(code5)) {
      return factorySpace(effects, headRowBreak, "whitespace")(code5);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      size += 1;
    }
    if (code5 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code5);
      effects.exit("tableCellDivider");
      seen = true;
      return headRowBreak;
    }
    effects.enter("data");
    return headRowData(code5);
  }
  function headRowData(code5) {
    if (code5 === null || code5 === 124 || markdownLineEndingOrSpace(code5)) {
      effects.exit("data");
      return headRowBreak(code5);
    }
    effects.consume(code5);
    return code5 === 92 ? headRowEscape : headRowData;
  }
  function headRowEscape(code5) {
    if (code5 === 92 || code5 === 124) {
      effects.consume(code5);
      return headRowData;
    }
    return headRowData(code5);
  }
  function headDelimiterStart(code5) {
    self2.interrupt = false;
    if (self2.parser.lazy[self2.now().line]) {
      return nok(code5);
    }
    effects.enter("tableDelimiterRow");
    seen = false;
    if (markdownSpace(code5)) {
      return factorySpace(effects, headDelimiterBefore, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code5);
    }
    return headDelimiterBefore(code5);
  }
  function headDelimiterBefore(code5) {
    if (code5 === 45 || code5 === 58) {
      return headDelimiterValueBefore(code5);
    }
    if (code5 === 124) {
      seen = true;
      effects.enter("tableCellDivider");
      effects.consume(code5);
      effects.exit("tableCellDivider");
      return headDelimiterCellBefore;
    }
    return headDelimiterNok(code5);
  }
  function headDelimiterCellBefore(code5) {
    if (markdownSpace(code5)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code5);
    }
    return headDelimiterValueBefore(code5);
  }
  function headDelimiterValueBefore(code5) {
    if (code5 === 58) {
      sizeB += 1;
      seen = true;
      effects.enter("tableDelimiterMarker");
      effects.consume(code5);
      effects.exit("tableDelimiterMarker");
      return headDelimiterLeftAlignmentAfter;
    }
    if (code5 === 45) {
      sizeB += 1;
      return headDelimiterLeftAlignmentAfter(code5);
    }
    if (code5 === null || markdownLineEnding(code5)) {
      return headDelimiterCellAfter(code5);
    }
    return headDelimiterNok(code5);
  }
  function headDelimiterLeftAlignmentAfter(code5) {
    if (code5 === 45) {
      effects.enter("tableDelimiterFiller");
      return headDelimiterFiller(code5);
    }
    return headDelimiterNok(code5);
  }
  function headDelimiterFiller(code5) {
    if (code5 === 45) {
      effects.consume(code5);
      return headDelimiterFiller;
    }
    if (code5 === 58) {
      seen = true;
      effects.exit("tableDelimiterFiller");
      effects.enter("tableDelimiterMarker");
      effects.consume(code5);
      effects.exit("tableDelimiterMarker");
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit("tableDelimiterFiller");
    return headDelimiterRightAlignmentAfter(code5);
  }
  function headDelimiterRightAlignmentAfter(code5) {
    if (markdownSpace(code5)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code5);
    }
    return headDelimiterCellAfter(code5);
  }
  function headDelimiterCellAfter(code5) {
    if (code5 === 124) {
      return headDelimiterBefore(code5);
    }
    if (code5 === null || markdownLineEnding(code5)) {
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code5);
      }
      effects.exit("tableDelimiterRow");
      effects.exit("tableHead");
      return ok4(code5);
    }
    return headDelimiterNok(code5);
  }
  function headDelimiterNok(code5) {
    return nok(code5);
  }
  function bodyRowStart(code5) {
    effects.enter("tableRow");
    return bodyRowBreak(code5);
  }
  function bodyRowBreak(code5) {
    if (code5 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code5);
      effects.exit("tableCellDivider");
      return bodyRowBreak;
    }
    if (code5 === null || markdownLineEnding(code5)) {
      effects.exit("tableRow");
      return ok4(code5);
    }
    if (markdownSpace(code5)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code5);
    }
    effects.enter("data");
    return bodyRowData(code5);
  }
  function bodyRowData(code5) {
    if (code5 === null || code5 === 124 || markdownLineEndingOrSpace(code5)) {
      effects.exit("data");
      return bodyRowBreak(code5);
    }
    effects.consume(code5);
    return code5 === 92 ? bodyRowEscape : bodyRowData;
  }
  function bodyRowEscape(code5) {
    if (code5 === 92 || code5 === 124) {
      effects.consume(code5);
      return bodyRowData;
    }
    return bodyRowData(code5);
  }
}
function resolveTable(events, context) {
  let index2 = -1;
  let inFirstCellAwaitingPipe = true;
  let rowKind = 0;
  let lastCell = [0, 0, 0, 0];
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  let currentTable;
  let currentBody;
  let currentCell;
  const map4 = new EditMap();
  while (++index2 < events.length) {
    const event = events[index2];
    const token = event[1];
    if (event[0] === "enter") {
      if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = false;
        if (lastTableEnd !== 0) {
          flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
          currentBody = void 0;
          lastTableEnd = 0;
        }
        currentTable = {
          type: "table",
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map4.add(index2, 0, [["enter", currentTable, context]]);
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        inFirstCellAwaitingPipe = true;
        currentCell = void 0;
        lastCell = [0, 0, 0, 0];
        cell = [0, index2 + 1, 0, 0];
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: "tableBody",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map4.add(index2, 0, [["enter", currentBody, context]]);
        }
        rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        inFirstCellAwaitingPipe = false;
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map4, context, lastCell, rowKind, void 0, currentCell);
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index2;
        }
      } else if (token.type === "tableCellDivider") {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map4, context, lastCell, rowKind, void 0, currentCell);
          }
          lastCell = cell;
          cell = [lastCell[1], index2, 0, 0];
        }
      }
    } else if (token.type === "tableHead") {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index2;
    } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
      lastTableEnd = index2;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(map4, context, lastCell, rowKind, index2, currentCell);
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map4, context, cell, rowKind, index2, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
      cell[3] = index2;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map4, context, lastTableEnd, currentTable, currentBody);
  }
  map4.consume(context.events);
  index2 = -1;
  while (++index2 < context.events.length) {
    const event = context.events[index2];
    if (event[0] === "enter" && event[1].type === "table") {
      event[1]._align = gfmTableAlign(context.events, index2);
    }
  }
  return events;
}
function flushCell(map4, context, range, rowKind, rowEnd, previousCell) {
  const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
  const valueName = "tableContent";
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map4.add(range[0], 0, [["exit", previousCell, context]]);
  }
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map4.add(range[1], 0, [["enter", previousCell, context]]);
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map4.add(range[2], 0, [["enter", valueToken, context]]);
    if (rowKind !== 2) {
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";
      if (range[3] > range[2] + 1) {
        const a2 = range[2] + 1;
        const b2 = range[3] - range[2] - 1;
        map4.add(a2, b2, []);
      }
    }
    map4.add(range[3] + 1, 0, [["exit", valueToken, context]]);
  }
  if (rowEnd !== void 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map4.add(rowEnd, 0, [["exit", previousCell, context]]);
    previousCell = void 0;
  }
  return previousCell;
}
function flushTableEnd(map4, context, index2, table2, tableBody) {
  const exits = [];
  const related = getPoint(context.events, index2);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(["exit", tableBody, context]);
  }
  table2.end = Object.assign({}, related);
  exits.push(["exit", table2, context]);
  map4.add(index2 + 1, 0, exits);
}
function getPoint(events, index2) {
  const event = events[index2];
  const side = event[0] === "enter" ? "start" : "end";
  return event[1][side];
}

// node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var tasklistCheck = {
  name: "tasklistCheck",
  tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
  return {
    text: {
      [91]: tasklistCheck
    }
  };
}
function tokenizeTasklistCheck(effects, ok4, nok) {
  const self2 = this;
  return open;
  function open(code5) {
    if (
      // Exit if there’s stuff before.
      self2.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self2._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code5);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code5);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code5) {
    if (markdownLineEndingOrSpace(code5)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code5);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code5 === 88 || code5 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code5);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code5);
  }
  function close(code5) {
    if (code5 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code5);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return after;
    }
    return nok(code5);
  }
  function after(code5) {
    if (markdownLineEnding(code5)) {
      return ok4(code5);
    }
    if (markdownSpace(code5)) {
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok4, nok)(code5);
    }
    return nok(code5);
  }
}
function spaceThenNonSpace(effects, ok4, nok) {
  return factorySpace(effects, after, "whitespace");
  function after(code5) {
    return code5 === null ? nok(code5) : ok4(code5);
  }
}

// node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ]);
}

// node_modules/remark-gfm/lib/index.js
var emptyOptions2 = {};
function remarkGfm(options) {
  const self2 = (
    /** @type {Processor<Root>} */
    this
  );
  const settings = options || emptyOptions2;
  const data = self2.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
  micromarkExtensions.push(gfm(settings));
  fromMarkdownExtensions.push(gfmFromMarkdown());
  toMarkdownExtensions.push(gfmToMarkdown(settings));
}

// node_modules/@quartz-community/remark-obsidian/dist/index.js
var convert2 = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok3;
    }
    if (typeof test === "function") {
      return castFactory2(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory2(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory2(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory2(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory2(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert2(tests[index2]);
  }
  return castFactory2(any);
  function any(...parameters) {
    let index22 = -1;
    while (++index22 < checks2.length) {
      if (checks2[index22].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory2(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory2(all22);
  function all22(node22) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node22
    );
    let key2;
    for (key2 in check) {
      if (nodeAsRecord[key2] !== checkAsRecord[key2]) return false;
    }
    return true;
  }
}
function typeFactory2(check) {
  return castFactory2(type);
  function type(node22) {
    return node22 && node22.type === check;
  }
}
function castFactory2(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode2(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok3() {
  return true;
}
function looksLikeANode2(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color2(d2) {
  return "\x1B[33m" + d2 + "\x1B[39m";
}
var empty2 = [];
var CONTINUE2 = true;
var EXIT2 = false;
var SKIP2 = "skip";
function visitParents2(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert2(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node22, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node22 && typeof node22 === "object" ? node22 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit22, "name", {
        value: "node (" + color2(node22.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit22;
    function visit22() {
      let result = empty2;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node22, index2, parents[parents.length - 1] || void 0)) {
        result = toResult2(visitor(node22, parents));
        if (result[0] === EXIT2) {
          return result;
        }
      }
      if ("children" in node22 && node22.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node22
        );
        if (nodeAsParent.children && result[0] !== SKIP2) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT2) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE2, value];
  }
  return value === null || value === void 0 ? empty2 : [value];
}
function visit2(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents2(tree, test, overload, reverse);
  function overload(node22, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node22) : void 0;
    return visitor(node22, index2, parent);
  }
}
var codes = (
  /** @type {const} */
  {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    space: 32}
);
var EXCLAMATION = 33;
var HASH = 35;
var LEFT_BRACKET = 91;
var BACKSLASH = 92;
var RIGHT_BRACKET = 93;
var PIPE = 124;
function isLineEnding(code22) {
  return code22 === codes.lineFeed || code22 === codes.carriageReturn || code22 === codes.carriageReturnLineFeed;
}
function wikilinkSyntax() {
  return {
    text: {
      [LEFT_BRACKET]: { name: "wikilink", tokenize },
      [EXCLAMATION]: { name: "wikilink", tokenize }
    }
  };
}
function tokenize(effects, ok32, nok) {
  let hasPath = false;
  let hasHeading = false;
  let hasAlias = false;
  return start;
  function start(code22) {
    if (code22 === EXCLAMATION) {
      effects.enter("wikilink");
      effects.enter("wikilinkEmbedMarker");
      effects.consume(code22);
      effects.exit("wikilinkEmbedMarker");
      return openFirst;
    }
    if (code22 === LEFT_BRACKET) {
      effects.enter("wikilink");
      return openFirst(code22);
    }
    return nok(code22);
  }
  function openFirst(code22) {
    if (code22 !== LEFT_BRACKET) return nok(code22);
    effects.enter("wikilinkMarker");
    effects.consume(code22);
    return openSecond;
  }
  function openSecond(code22) {
    if (code22 !== LEFT_BRACKET) return nok(code22);
    effects.consume(code22);
    effects.exit("wikilinkMarker");
    return pathStart;
  }
  function pathStart(code22) {
    if (code22 === HASH) return headingMarker(code22);
    if (code22 === PIPE) return nok(code22);
    if (code22 === RIGHT_BRACKET || code22 === null || isLineEnding(code22))
      return nok(code22);
    effects.enter("wikilinkPath");
    hasPath = true;
    return path2(code22);
  }
  function path2(code22) {
    if (code22 === BACKSLASH) {
      effects.consume(code22);
      return pathEscape;
    }
    if (code22 === HASH) {
      effects.exit("wikilinkPath");
      return headingMarker(code22);
    }
    if (code22 === PIPE) {
      effects.exit("wikilinkPath");
      return aliasMarker(code22);
    }
    if (code22 === RIGHT_BRACKET) {
      effects.exit("wikilinkPath");
      return closeFirst(code22);
    }
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.consume(code22);
    return path2;
  }
  function pathEscape(code22) {
    if (code22 === PIPE) {
      effects.exit("wikilinkPath");
      return aliasMarker(code22);
    }
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.consume(code22);
    return path2;
  }
  function headingMarker(code22) {
    if (code22 !== HASH) return nok(code22);
    effects.enter("wikilinkHeadingMarker");
    effects.consume(code22);
    effects.exit("wikilinkHeadingMarker");
    return headingStart;
  }
  function headingStart(code22) {
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    if (code22 === RIGHT_BRACKET) {
      hasHeading = true;
      return closeFirst(code22);
    }
    if (code22 === PIPE) {
      hasHeading = true;
      return aliasMarker(code22);
    }
    effects.enter("wikilinkHeading");
    hasHeading = true;
    return heading22(code22);
  }
  function heading22(code22) {
    if (code22 === BACKSLASH) {
      effects.consume(code22);
      return headingEscape;
    }
    if (code22 === PIPE) {
      effects.exit("wikilinkHeading");
      return aliasMarker(code22);
    }
    if (code22 === RIGHT_BRACKET) {
      effects.exit("wikilinkHeading");
      return closeFirst(code22);
    }
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.consume(code22);
    return heading22;
  }
  function headingEscape(code22) {
    if (code22 === PIPE) {
      effects.exit("wikilinkHeading");
      return aliasMarker(code22);
    }
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.consume(code22);
    return heading22;
  }
  function aliasMarker(code22) {
    if (code22 !== PIPE) return nok(code22);
    effects.enter("wikilinkAliasMarker");
    effects.consume(code22);
    effects.exit("wikilinkAliasMarker");
    return aliasStart;
  }
  function aliasStart(code22) {
    if (code22 === RIGHT_BRACKET) return closeFirst(code22);
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.enter("wikilinkAlias");
    hasAlias = true;
    return alias(code22);
  }
  function alias(code22) {
    if (code22 === RIGHT_BRACKET) {
      effects.exit("wikilinkAlias");
      return closeFirst(code22);
    }
    if (code22 === null || isLineEnding(code22)) return nok(code22);
    effects.consume(code22);
    return alias;
  }
  function closeFirst(code22) {
    if (code22 !== RIGHT_BRACKET) return nok(code22);
    if (!hasPath && !hasHeading && !hasAlias) return nok(code22);
    effects.enter("wikilinkMarker");
    effects.consume(code22);
    return closeSecond;
  }
  function closeSecond(code22) {
    if (code22 !== RIGHT_BRACKET) return nok(code22);
    effects.consume(code22);
    effects.exit("wikilinkMarker");
    effects.exit("wikilink");
    return ok32;
  }
}
var EQUALS = 61;
function isLineEnding2(code22) {
  return code22 === codes.lineFeed || code22 === codes.carriageReturn || code22 === codes.carriageReturnLineFeed;
}
function highlightSyntax() {
  return {
    text: {
      [EQUALS]: { name: "highlight", tokenize: tokenize2 }
    }
  };
}
function tokenize2(effects, ok32, nok) {
  const close = { tokenize: tokenizeClose, partial: true };
  let hasContent = false;
  return start;
  function start(code22) {
    if (code22 !== EQUALS) return nok(code22);
    effects.enter("highlight");
    effects.enter("highlightMarker");
    effects.consume(code22);
    return openSecond;
  }
  function openSecond(code22) {
    if (code22 !== EQUALS) return nok(code22);
    effects.consume(code22);
    effects.exit("highlightMarker");
    effects.enter("highlightContent");
    return content3;
  }
  function content3(code22) {
    if (code22 === null || isLineEnding2(code22)) return nok(code22);
    if (!hasContent && code22 === EQUALS) return nok(code22);
    if (code22 === EQUALS)
      return effects.attempt(close, closeAfter, contentConsume)(code22);
    effects.consume(code22);
    hasContent = true;
    return content3;
  }
  function contentConsume(code22) {
    if (code22 === null || isLineEnding2(code22)) return nok(code22);
    effects.consume(code22);
    return content3;
  }
  function tokenizeClose(closeEffects, closeOk, closeNok) {
    return closeStart;
    function closeStart(closeCode) {
      if (closeCode !== EQUALS) return closeNok(closeCode);
      closeEffects.exit("highlightContent");
      closeEffects.enter("highlightMarker");
      closeEffects.consume(closeCode);
      return closeSecond;
    }
    function closeSecond(closeCode) {
      if (closeCode !== EQUALS) return closeNok(closeCode);
      closeEffects.consume(closeCode);
      closeEffects.exit("highlightMarker");
      return closeOk;
    }
  }
  function closeAfter(code22) {
    effects.exit("highlight");
    return ok32(code22);
  }
}
var PERCENT = 37;
var LINE_FEED = -4;
var CARRIAGE_RETURN = -3;
var CARRIAGE_RETURN_LINE_FEED = -5;
function isLineEnding3(code22) {
  return code22 === LINE_FEED || code22 === CARRIAGE_RETURN || code22 === CARRIAGE_RETURN_LINE_FEED;
}
var commentFlow = {
  tokenize: tokenizeFlow,
  concrete: true,
  name: "commentFlow"
};
var nonLazyContinuation2 = {
  tokenize: tokenizeNonLazyContinuation2,
  partial: true
};
function commentSyntax() {
  return {
    text: {
      [PERCENT]: { name: "comment", tokenize: tokenizeText }
    },
    flow: {
      [PERCENT]: commentFlow
    }
  };
}
function tokenizeText(effects, ok32, nok) {
  const closeFromContent = createClose(true);
  const closeFromBoundary = createClose(false);
  return start;
  function start(code22) {
    if (code22 !== PERCENT) return nok(code22);
    effects.enter("comment");
    effects.enter("commentMarker");
    effects.consume(code22);
    return openSecond;
  }
  function openSecond(code22) {
    if (code22 !== PERCENT) return nok(code22);
    effects.consume(code22);
    effects.exit("commentMarker");
    return atContentBoundary;
  }
  function atContentBoundary(code22) {
    if (code22 === null) return nok(code22);
    if (isLineEnding3(code22)) {
      return effects.attempt(nonLazyContinuation2, atContentBoundary, nok)(code22);
    }
    if (code22 === PERCENT) {
      return effects.attempt(closeFromBoundary, closeAfter, startContent)(code22);
    }
    effects.enter("commentContent");
    effects.consume(code22);
    return content3;
  }
  function startContent(code22) {
    if (code22 === null) return nok(code22);
    effects.enter("commentContent");
    effects.consume(code22);
    return content3;
  }
  function content3(code22) {
    if (code22 === null) {
      effects.exit("commentContent");
      return nok(code22);
    }
    if (isLineEnding3(code22)) {
      effects.exit("commentContent");
      return effects.attempt(nonLazyContinuation2, atContentBoundary, nok)(code22);
    }
    if (code22 === PERCENT) {
      return effects.attempt(
        closeFromContent,
        closeAfter,
        contentConsume
      )(code22);
    }
    effects.consume(code22);
    return content3;
  }
  function contentConsume(code22) {
    if (code22 === null) {
      effects.exit("commentContent");
      return nok(code22);
    }
    effects.consume(code22);
    return content3;
  }
  function closeAfter(code22) {
    effects.exit("comment");
    return ok32(code22);
  }
  function createClose(hasOpenContent) {
    return {
      partial: true,
      tokenize: function tokenizeClose(closeEffects, closeOk, closeNok) {
        return closeStart;
        function closeStart(closeCode) {
          if (closeCode !== PERCENT) return closeNok(closeCode);
          if (hasOpenContent) closeEffects.exit("commentContent");
          closeEffects.enter("commentMarker");
          closeEffects.consume(closeCode);
          return closeSecond;
        }
        function closeSecond(closeCode) {
          if (closeCode !== PERCENT) return closeNok(closeCode);
          closeEffects.consume(closeCode);
          closeEffects.exit("commentMarker");
          return closeOk;
        }
      }
    };
  }
}
function tokenizeFlow(effects, ok32, nok) {
  const self2 = this;
  const flowClose = {
    tokenize: tokenizeFlowClose,
    partial: true
  };
  return start;
  function start(code22) {
    if (code22 !== PERCENT) return nok(code22);
    effects.enter("comment");
    effects.enter("commentMarker");
    effects.consume(code22);
    return openSecond;
  }
  function openSecond(code22) {
    if (code22 !== PERCENT) return nok(code22);
    effects.consume(code22);
    effects.exit("commentMarker");
    return afterOpen;
  }
  function afterOpen(code22) {
    if (code22 === null) {
      effects.exit("comment");
      return ok32(code22);
    }
    if (isLineEnding3(code22)) {
      return effects.attempt(
        nonLazyContinuation2,
        beforeContentChunk,
        afterLazy
      )(code22);
    }
    effects.enter("commentContent");
    return contentChunk(code22);
  }
  function beforeContentChunk(code22) {
    if (code22 === null) {
      effects.exit("comment");
      return ok32(code22);
    }
    if (isLineEnding3(code22)) {
      return effects.attempt(
        nonLazyContinuation2,
        beforeContentChunk,
        afterLazy
      )(code22);
    }
    if (code22 === PERCENT) {
      return effects.attempt(flowClose, closeAfter, startContent)(code22);
    }
    effects.enter("commentContent");
    return contentChunk(code22);
  }
  function startContent(code22) {
    effects.enter("commentContent");
    effects.consume(code22);
    return contentChunk;
  }
  function contentChunk(code22) {
    if (code22 === null) {
      effects.exit("commentContent");
      effects.exit("comment");
      return ok32(code22);
    }
    if (code22 === PERCENT) {
      return effects.attempt(flowClose, closeAfter, contentConsume)(code22);
    }
    if (isLineEnding3(code22)) {
      effects.exit("commentContent");
      return effects.attempt(
        nonLazyContinuation2,
        beforeContentChunk,
        afterLazy
      )(code22);
    }
    effects.consume(code22);
    return contentChunk;
  }
  function contentConsume(code22) {
    if (code22 === null) {
      effects.exit("commentContent");
      effects.exit("comment");
      return ok32(code22);
    }
    effects.consume(code22);
    return contentChunk;
  }
  function closeAfter(code22) {
    effects.exit("comment");
    return ok32(code22);
  }
  function afterLazy(code22) {
    effects.exit("comment");
    return ok32(code22);
  }
  function tokenizeFlowClose(closeEffects, closeOk, closeNok) {
    let inContent = false;
    return closeStart;
    function closeStart(closeCode) {
      if (closeCode !== PERCENT) return closeNok(closeCode);
      const current = self2.events[self2.events.length - 1];
      if (current && current[0] === "enter" && current[1].type === "commentContent") {
        closeEffects.exit("commentContent");
        inContent = true;
      }
      closeEffects.enter("commentMarker");
      closeEffects.consume(closeCode);
      return closeSecond;
    }
    function closeSecond(closeCode) {
      if (closeCode !== PERCENT) {
        if (inContent) {
          closeEffects.exit("commentMarker");
          closeEffects.enter("commentContent");
        }
        return closeNok(closeCode);
      }
      closeEffects.consume(closeCode);
      closeEffects.exit("commentMarker");
      return closeOk;
    }
  }
}
function tokenizeNonLazyContinuation2(effects, ok32, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    if (code22 === null) {
      return ok32(code22);
    }
    if (!isLineEnding3(code22)) return nok(code22);
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code22) {
    return self2.parser.lazy[self2.now().line] ? nok(code22) : ok32(code22);
  }
}
var HASH2 = 35;
var SLASH = 47;
var DASH = 45;
var UNDERSCORE = 95;
var tagCharRegex = /[\p{L}\p{M}\p{Emoji}]/u;
function isWhitespace(code22) {
  return code22 === codes.space || code22 === codes.horizontalTab || code22 === codes.lineFeed || code22 === codes.carriageReturn || code22 === codes.carriageReturnLineFeed;
}
function isTagChar(code22) {
  if (code22 === null || code22 < 0) return false;
  if (code22 >= 48 && code22 <= 57) return true;
  if (code22 === DASH || code22 === UNDERSCORE) return true;
  return tagCharRegex.test(String.fromCodePoint(code22));
}
function isNonDigit(code22) {
  if (code22 === null) return false;
  return !(code22 >= 48 && code22 <= 57);
}
function tagSyntax() {
  return {
    text: {
      [HASH2]: { name: "tag", tokenize: tokenize3 }
    }
  };
}
function tokenize3(effects, ok32, nok) {
  let hasNonDigit = false;
  const context = this;
  return start;
  function start(code22) {
    const previous22 = context.previous;
    const allowedStart = previous22 === null || isWhitespace(previous22) || previous22 === HASH2;
    if (!allowedStart) return nok(code22);
    if (code22 !== HASH2) return nok(code22);
    effects.enter("tag");
    effects.enter("tagMarker");
    effects.consume(code22);
    effects.exit("tagMarker");
    return tagStart;
  }
  function tagStart(code22) {
    if (!isTagChar(code22)) return nok(code22);
    effects.enter("tagContent");
    if (isNonDigit(code22)) hasNonDigit = true;
    effects.consume(code22);
    return tagContent;
  }
  function tagContent(code22) {
    if (code22 === SLASH) {
      effects.consume(code22);
      return afterSlash;
    }
    if (isTagChar(code22)) {
      if (isNonDigit(code22)) hasNonDigit = true;
      effects.consume(code22);
      return tagContent;
    }
    return end(code22);
  }
  function afterSlash(code22) {
    if (!isTagChar(code22)) return nok(code22);
    if (isNonDigit(code22)) hasNonDigit = true;
    effects.consume(code22);
    return tagContent;
  }
  function end(code22) {
    if (!hasNonDigit) return nok(code22);
    effects.exit("tagContent");
    effects.exit("tag");
    return ok32(code22);
  }
}
function wikilinkFromMarkdown() {
  return {
    enter: {
      wikilink(token) {
        this.enter(
          {
            type: "wikilink",
            value: "",
            embedded: false,
            path: "",
            heading: "",
            alias: ""
          },
          token
        );
      },
      wikilinkEmbedMarker() {
        const node22 = this.stack[this.stack.length - 1];
        node22.embedded = true;
      },
      wikilinkPath(token) {
        const node22 = this.stack[this.stack.length - 1];
        node22.path = this.sliceSerialize(token).replace(/\\([#\[\]])/g, "$1");
      },
      wikilinkHeading(token) {
        const node22 = this.stack[this.stack.length - 1];
        node22.heading = this.sliceSerialize(token).replace(/\\([#\[\]])/g, "$1");
      },
      wikilinkAlias(token) {
        const node22 = this.stack[this.stack.length - 1];
        node22.alias = this.sliceSerialize(token);
      }
    },
    exit: {
      wikilink(token) {
        const node22 = this.stack[this.stack.length - 1];
        if (node22.alias) {
          if (node22.path.endsWith("\\")) node22.path = node22.path.slice(0, -1);
          if (node22.heading.endsWith("\\"))
            node22.heading = node22.heading.slice(0, -1);
        }
        this.exit(token);
      }
    }
  };
}
function highlightFromMarkdown() {
  return {
    enter: {
      highlight(token) {
        this.enter({ type: "highlight", children: [] }, token);
      }
    },
    exit: {
      highlightContent(token) {
        const node22 = this.stack[this.stack.length - 1];
        node22.children = [{ type: "text", value: this.sliceSerialize(token) }];
      },
      highlight(token) {
        this.exit(token);
      }
    }
  };
}
var MARKER_LENGTH = 2;
function commentFromMarkdown() {
  return {
    enter: {
      comment(token) {
        this.enter({ type: "comment", value: "" }, token);
      }
    },
    exit: {
      // Content is emitted as one `commentContent` token per line, separated by
      // `lineEnding` tokens. Those separators cannot be captured here without
      // overriding the core `lineEnding` handler, so the value is recovered
      // from the whole comment span instead.
      comment(token) {
        const node22 = this.stack[this.stack.length - 1];
        const body3 = this.sliceSerialize(token).slice(MARKER_LENGTH);
        node22.value = body3.endsWith("%%") ? body3.slice(0, -MARKER_LENGTH) : body3;
        this.exit(token);
      }
    }
  };
}
function tagFromMarkdown() {
  return {
    enter: {
      tag(token) {
        this.enter({ type: "tag", value: "" }, token);
      },
      tagContent(token) {
        const node22 = this.stack[this.stack.length - 1];
        if (node22.type === "tag") node22.value = this.sliceSerialize(token);
      }
    },
    exit: {
      tag(token) {
        this.exit(token);
      }
    }
  };
}
function wikilinkToMarkdown() {
  return {
    handlers: {
      wikilink(node22) {
        const prefix = node22.embedded ? "!" : "";
        const heading22 = node22.heading ? `#${node22.heading}` : "";
        const alias = node22.alias ? `|${node22.alias}` : "";
        return `${prefix}[[${node22.path}${heading22}${alias}]]`;
      }
    }
  };
}
function highlightToMarkdown() {
  return {
    handlers: {
      highlight(node22, _parent, state, info) {
        const exit3 = state.enter("highlight");
        const content3 = state.containerPhrasing(node22, info);
        exit3();
        return `==${content3}==`;
      }
    }
  };
}
function commentToMarkdown() {
  return {
    handlers: {
      comment(node22) {
        return `%%${node22.value}%%`;
      }
    }
  };
}
function tagToMarkdown() {
  return {
    handlers: {
      tag(node22) {
        return `#${node22.value}`;
      }
    }
  };
}
function customTaskCharTransform(tree, source) {
  visit2(tree, "listItem", (node22) => {
    if (typeof node22.checked === "boolean") {
      let char = node22.checked ? "x" : " ";
      if (source && node22.position?.start?.offset != null) {
        const slice = source.slice(
          node22.position.start.offset,
          node22.position.start.offset + 20
        );
        const m2 = slice.match(/\[([^\]])\]/);
        if (m2) {
          char = m2[1];
        }
      }
      node22.data ??= {};
      node22.data.taskChar = char;
      node22.data.hProperties ??= {};
      node22.data.hProperties.dataTaskChar = char;
      return;
    }
    const firstChild = node22.children?.[0];
    if (!firstChild || firstChild.type !== "paragraph") return;
    const firstText = firstChild.children?.[0];
    if (!firstText || firstText.type !== "text") return;
    const match = firstText.value.match(/^\[([^\]])\]\s/);
    if (!match) return;
    const taskChar = match[1];
    node22.checked = taskChar !== " ";
    node22.data ??= {};
    node22.data.taskChar = taskChar;
    node22.data.hProperties ??= {};
    node22.data.hProperties.dataTaskChar = taskChar;
    firstText.value = firstText.value.slice(match[0].length);
    if (firstText.value.length === 0) {
      firstChild.children.shift();
    } else if (firstText.position && typeof firstText.position.start.offset === "number") {
      firstText.position.start.column += match[0].length;
      firstText.position.start.offset += match[0].length;
    }
  });
}
function blockquote2(node22, _2, state, info) {
  const exit3 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node22, tracker.current()),
    map3
  );
  exit3();
  return value;
}
function map3(line, _2, blank) {
  return ">" + (blank ? "" : " ") + line;
}
function patternInScope2(stack, pattern) {
  return listInScope2(stack, pattern.inConstruct, true) && !listInScope2(stack, pattern.notInConstruct, false);
}
function listInScope2(stack, list22, none) {
  if (typeof list22 === "string") {
    list22 = [list22];
  }
  if (!list22 || list22.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list22.length) {
    if (stack.includes(list22[index2])) {
      return true;
    }
  }
  return false;
}
function hardBreak2(_2, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope2(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}
function longestStreak2(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}
function formatCodeAsIndented2(node22, state) {
  return Boolean(
    state.options.fences === false && node22.value && // If there’s no info…
    !node22.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node22.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node22.value)
  );
}
function checkFence2(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}
function code3(node22, _2, state, info) {
  const marker = checkFence2(state);
  const raw2 = node22.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented2(node22, state)) {
    const exit22 = state.enter("codeIndented");
    const value2 = state.indentLines(raw2, map22);
    exit22();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak2(raw2, marker) + 1, 3));
  const exit3 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node22.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node22.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node22.lang && node22.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node22.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw2) {
    value += tracker.move(raw2 + "\n");
  }
  value += tracker.move(sequence);
  exit3();
  return value;
}
function map22(line, _2, blank) {
  return (blank ? "" : "    ") + line;
}
function checkQuote2(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}
function definition3(node22, _2, state, info) {
  const quote = checkQuote2(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit3 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node22), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node22.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node22.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node22.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node22.url, {
        before: value,
        after: node22.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node22.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node22.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit3();
  return value;
}
function checkEmphasis2(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}
function encodeCharacterReference2(code22) {
  return "&#x" + code22.toString(16).toUpperCase() + ";";
}
function markdownLineEnding2(code22) {
  return code22 !== null && code22 < -2;
}
function markdownLineEndingOrSpace2(code22) {
  return code22 !== null && (code22 < 0 || code22 === 32);
}
function markdownSpace2(code22) {
  return code22 === -2 || code22 === -1 || code22 === 32;
}
var unicodePunctuation2 = regexCheck2(/\p{P}|\p{S}/u);
var unicodeWhitespace2 = regexCheck2(/\s/);
function regexCheck2(regex2) {
  return check;
  function check(code22) {
    return code22 !== null && code22 > -1 && regex2.test(String.fromCharCode(code22));
  }
}
function classifyCharacter2(code22) {
  if (code22 === null || markdownLineEndingOrSpace2(code22) || unicodeWhitespace2(code22)) {
    return 1;
  }
  if (unicodePunctuation2(code22)) {
    return 2;
  }
}
function encodeInfo2(outside, inside, marker) {
  const outsideKind = classifyCharacter2(outside);
  const insideKind = classifyCharacter2(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? (
      // Letter inside:
      // we have to encode *both* letters for `_` as it is looser.
      // it already forms for `*` (and GFMs `~`).
      marker === "_" ? { inside: true, outside: true } : { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (letter, whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: encode outer (letter)
      { inside: false, outside: true }
    );
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? (
      // Letter inside: already forms.
      { inside: false, outside: false }
    ) : insideKind === 1 ? (
      // Whitespace inside: encode both (whitespace).
      { inside: true, outside: true }
    ) : (
      // Punctuation inside: already forms.
      { inside: false, outside: false }
    );
  }
  return insideKind === void 0 ? (
    // Letter inside: already forms.
    { inside: false, outside: false }
  ) : insideKind === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: true, outside: false }
  ) : (
    // Punctuation inside: already forms.
    { inside: false, outside: false }
  );
}
emphasis2.peek = emphasisPeek2;
function emphasis2(node22, _2, state, info) {
  const marker = checkEmphasis2(state);
  const exit3 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);
  let between = tracker.move(
    state.containerPhrasing(node22, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo2(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference2(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo2(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference2(betweenTail);
  }
  const after = tracker.move(marker);
  exit3();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function emphasisPeek2(_2, _1, state) {
  return state.options.emphasis || "*";
}
var emptyOptions3 = {};
function toString2(value, options) {
  const settings = emptyOptions3;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one2(value, includeImageAlt, includeHtml);
}
function one2(value, includeImageAlt, includeHtml) {
  if (node2(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all2(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all2(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all2(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one2(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node2(value) {
  return Boolean(value && typeof value === "object");
}
function formatHeadingAsSetext2(node22, state) {
  let literalWithBreak = false;
  visit2(node22, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT2;
    }
  });
  return Boolean(
    (!node22.depth || node22.depth < 3) && toString2(node22) && (state.options.setext || literalWithBreak)
  );
}
function heading2(node22, _2, state, info) {
  const rank = Math.max(Math.min(6, node22.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext2(node22, state)) {
    const exit22 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node22, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit22();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit3 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node22, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference2(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit3();
  return value;
}
html2.peek = htmlPeek2;
function html2(node22) {
  return node22.value || "";
}
function htmlPeek2() {
  return "<";
}
image2.peek = imagePeek2;
function image2(node22, _2, state, info) {
  const quote = checkQuote2(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit3 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node22.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node22.url && node22.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node22.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node22.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node22.url, {
        before: value,
        after: node22.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node22.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node22.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit3();
  return value;
}
function imagePeek2() {
  return "!";
}
imageReference2.peek = imageReferencePeek2;
function imageReference2(node22, _2, state, info) {
  const type = node22.referenceType;
  const exit3 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node22.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node22), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit3();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek2() {
  return "!";
}
inlineCode2.peek = inlineCodePeek2;
function inlineCode2(node22, _2, state) {
  let value = node22.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while (match = expression.exec(value)) {
      let position3 = match.index;
      if (value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13) {
        position3--;
      }
      value = value.slice(0, position3) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek2() {
  return "`";
}
function formatLinkAsAutolink2(node22, state) {
  const raw2 = toString2(node22);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node22.url && // And there’s a no title…
    !node22.title && // And the content of `node` is a single text node…
    node22.children && node22.children.length === 1 && node22.children[0].type === "text" && // And if the url is the same as the content…
    (raw2 === node22.url || "mailto:" + raw2 === node22.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node22.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node22.url)
  );
}
link2.peek = linkPeek2;
function link2(node22, _2, state, info) {
  const quote = checkQuote2(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit3;
  let subexit;
  if (formatLinkAsAutolink2(node22, state)) {
    const stack = state.stack;
    state.stack = [];
    exit3 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node22, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit3();
    state.stack = stack;
    return value2;
  }
  exit3 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node22, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node22.url && node22.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node22.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node22.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node22.url, {
        before: value,
        after: node22.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node22.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node22.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit3();
  return value;
}
function linkPeek2(node22, _2, state) {
  return formatLinkAsAutolink2(node22, state) ? "<" : "[";
}
linkReference2.peek = linkReferencePeek2;
function linkReference2(node22, _2, state, info) {
  const type = node22.referenceType;
  const exit3 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text22 = state.containerPhrasing(node22, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text22 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node22), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit3();
  if (type === "full" || !text22 || text22 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek2() {
  return "[";
}
function checkBullet2(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}
function checkBulletOther2(state) {
  const bullet = checkBullet2(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}
function checkBulletOrdered2(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}
function checkRule2(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}
function list3(node22, parent, state, info) {
  const exit3 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node22.ordered ? checkBulletOrdered2(state) : checkBullet2(state);
  const bulletOther = node22.ordered ? bullet === "." ? ")" : "." : checkBulletOther2(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node22.ordered) {
    const firstListItem = node22.children ? node22.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule2(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node22.children.length) {
        const item = node22.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node22, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit3();
  return value;
}
function checkListItemIndent2(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}
function listItem2(node22, parent, state, info) {
  const listItemIndent = checkListItemIndent2(state);
  let bullet = state.bulletCurrent || checkBullet2(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node22)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node22.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit3 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node22, tracker.current()),
    map32
  );
  exit3();
  return value;
  function map32(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
function paragraph2(node22, _2, state, info) {
  const exit3 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node22, info);
  subexit();
  exit3();
  return value;
}
var phrasing2 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  convert2([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function root2(node22, _2, state, info) {
  const hasPhrasing = node22.children.some(function(d2) {
    return phrasing2(d2);
  });
  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node22, info);
}
function checkStrong2(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}
strong2.peek = strongPeek2;
function strong2(node22, _2, state, info) {
  const marker = checkStrong2(state);
  const exit3 = state.enter("strong");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);
  let between = tracker.move(
    state.containerPhrasing(node22, {
      after: marker,
      before,
      ...tracker.current()
    })
  );
  const betweenHead = between.charCodeAt(0);
  const open = encodeInfo2(
    info.before.charCodeAt(info.before.length - 1),
    betweenHead,
    marker
  );
  if (open.inside) {
    between = encodeCharacterReference2(betweenHead) + between.slice(1);
  }
  const betweenTail = between.charCodeAt(between.length - 1);
  const close = encodeInfo2(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between = between.slice(0, -1) + encodeCharacterReference2(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit3();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between + after;
}
function strongPeek2(_2, _1, state) {
  return state.options.strong || "*";
}
function text5(node22, _2, state, info) {
  return state.safe(node22.value, info);
}
function checkRuleRepetition2(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}
function thematicBreak3(_2, _1, state) {
  const value = (checkRule2(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition2(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
var handle2 = {
  blockquote: blockquote2,
  break: hardBreak2,
  code: code3,
  definition: definition3,
  emphasis: emphasis2,
  hardBreak: hardBreak2,
  heading: heading2,
  html: html2,
  image: image2,
  imageReference: imageReference2,
  inlineCode: inlineCode2,
  link: link2,
  linkReference: linkReference2,
  list: list3,
  listItem: listItem2,
  paragraph: paragraph2,
  root: root2,
  strong: strong2,
  text: text5,
  thematicBreak: thematicBreak3
};
function taskCharToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: {
      listItem(node22, parent, state, info) {
        const taskChar = node22.data?.taskChar ?? (typeof node22.checked === "boolean" ? node22.checked ? "x" : " " : null);
        const head2 = node22.children[0];
        const isTask = taskChar !== null && head2?.type === "paragraph";
        if (!isTask) {
          return handle2.listItem(node22, parent, state, info);
        }
        const checkbox = `[${taskChar}] `;
        const tracker = state.createTracker(info);
        tracker.move(checkbox);
        const savedChecked = node22.checked;
        delete node22.checked;
        let value = handle2.listItem(node22, parent, state, {
          ...info,
          ...tracker.current()
        });
        node22.checked = savedChecked;
        value = value.replace(
          /^([*+-]|\d+\.)([\r\n]| {1,3})/,
          (match) => match + checkbox
        );
        return value;
      }
    }
  };
}
function factorySpace2(effects, ok32, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code22) {
    if (markdownSpace2(code22)) {
      effects.enter(type);
      return prefix(code22);
    }
    return ok32(code22);
  }
  function prefix(code22) {
    if (markdownSpace2(code22) && size++ < limit) {
      effects.consume(code22);
      return prefix;
    }
    effects.exit(type);
    return ok32(code22);
  }
}
var mathFlow = {
  tokenize: tokenizeMathFenced,
  concrete: true,
  name: "mathFlow"
};
var nonLazyContinuation22 = {
  tokenize: tokenizeNonLazyContinuation22,
  partial: true
};
function tokenizeMathFenced(effects, ok32, nok) {
  const self2 = this;
  const tail = self2.events[self2.events.length - 1];
  const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  return start;
  function start(code22) {
    effects.enter("mathFlow");
    effects.enter("mathFlowFence");
    effects.enter("mathFlowFenceSequence");
    return sequenceOpen(code22);
  }
  function sequenceOpen(code22) {
    if (code22 === 36) {
      effects.consume(code22);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < 2) {
      return nok(code22);
    }
    effects.exit("mathFlowFenceSequence");
    return factorySpace2(effects, metaBefore, "whitespace")(code22);
  }
  function metaBefore(code22) {
    if (code22 === null || markdownLineEnding2(code22)) {
      return metaAfter(code22);
    }
    effects.enter("mathFlowFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code22);
  }
  function meta(code22) {
    if (code22 === null || markdownLineEnding2(code22)) {
      effects.exit("chunkString");
      effects.exit("mathFlowFenceMeta");
      return metaAfter(code22);
    }
    if (code22 === 36) {
      return nok(code22);
    }
    effects.consume(code22);
    return meta;
  }
  function metaAfter(code22) {
    effects.exit("mathFlowFence");
    if (self2.interrupt) {
      return ok32(code22);
    }
    return effects.attempt(nonLazyContinuation22, beforeNonLazyContinuation, after)(code22);
  }
  function beforeNonLazyContinuation(code22) {
    return effects.attempt({
      tokenize: tokenizeClosingFence,
      partial: true
    }, after, contentStart)(code22);
  }
  function contentStart(code22) {
    return (initialSize ? factorySpace2(effects, beforeContentChunk, "linePrefix", initialSize + 1) : beforeContentChunk)(code22);
  }
  function beforeContentChunk(code22) {
    if (code22 === null) {
      return after(code22);
    }
    if (markdownLineEnding2(code22)) {
      return effects.attempt(nonLazyContinuation22, beforeNonLazyContinuation, after)(code22);
    }
    effects.enter("mathFlowValue");
    return contentChunk(code22);
  }
  function contentChunk(code22) {
    if (code22 === null || markdownLineEnding2(code22)) {
      effects.exit("mathFlowValue");
      return beforeContentChunk(code22);
    }
    effects.consume(code22);
    return contentChunk;
  }
  function after(code22) {
    effects.exit("mathFlow");
    return ok32(code22);
  }
  function tokenizeClosingFence(effects2, ok4, nok2) {
    let size = 0;
    return factorySpace2(effects2, beforeSequenceClose, "linePrefix", self2.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function beforeSequenceClose(code22) {
      effects2.enter("mathFlowFence");
      effects2.enter("mathFlowFenceSequence");
      return sequenceClose(code22);
    }
    function sequenceClose(code22) {
      if (code22 === 36) {
        size++;
        effects2.consume(code22);
        return sequenceClose;
      }
      if (size < sizeOpen) {
        return nok2(code22);
      }
      effects2.exit("mathFlowFenceSequence");
      return factorySpace2(effects2, afterSequenceClose, "whitespace")(code22);
    }
    function afterSequenceClose(code22) {
      if (code22 === null || markdownLineEnding2(code22)) {
        effects2.exit("mathFlowFence");
        return ok4(code22);
      }
      return nok2(code22);
    }
  }
}
function tokenizeNonLazyContinuation22(effects, ok32, nok) {
  const self2 = this;
  return start;
  function start(code22) {
    if (code22 === null) {
      return ok32(code22);
    }
    effects.enter("lineEnding");
    effects.consume(code22);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code22) {
    return self2.parser.lazy[self2.now().line] ? nok(code22) : ok32(code22);
  }
}
function mathText(options) {
  const options_ = {};
  let single = options_.singleDollarTextMath;
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    tokenize: tokenizeMathText,
    resolve: resolveMathText,
    previous: previous3,
    name: "mathText"
  };
  function tokenizeMathText(effects, ok32, nok) {
    let sizeOpen = 0;
    let size;
    let token;
    return start;
    function start(code22) {
      effects.enter("mathText");
      effects.enter("mathTextSequence");
      return sequenceOpen(code22);
    }
    function sequenceOpen(code22) {
      if (code22 === 36) {
        effects.consume(code22);
        sizeOpen++;
        return sequenceOpen;
      }
      if (sizeOpen < 2 && !single) {
        return nok(code22);
      }
      effects.exit("mathTextSequence");
      return between(code22);
    }
    function between(code22) {
      if (code22 === null) {
        return nok(code22);
      }
      if (code22 === 36) {
        token = effects.enter("mathTextSequence");
        size = 0;
        return sequenceClose(code22);
      }
      if (code22 === 32) {
        effects.enter("space");
        effects.consume(code22);
        effects.exit("space");
        return between;
      }
      if (markdownLineEnding2(code22)) {
        effects.enter("lineEnding");
        effects.consume(code22);
        effects.exit("lineEnding");
        return between;
      }
      effects.enter("mathTextData");
      return data(code22);
    }
    function data(code22) {
      if (code22 === null || code22 === 32 || code22 === 36 || markdownLineEnding2(code22)) {
        effects.exit("mathTextData");
        return between(code22);
      }
      effects.consume(code22);
      return data;
    }
    function sequenceClose(code22) {
      if (code22 === 36) {
        effects.consume(code22);
        size++;
        return sequenceClose;
      }
      if (size === sizeOpen) {
        effects.exit("mathTextSequence");
        effects.exit("mathText");
        return ok32(code22);
      }
      token.type = "mathTextData";
      return data(code22);
    }
  }
}
function resolveMathText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "mathTextData") {
        events[tailExitIndex][1].type = "mathTextPadding";
        events[headEnterIndex][1].type = "mathTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "mathTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous3(code22) {
  return code22 !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function math(options) {
  return {
    flow: {
      [36]: mathFlow
    },
    text: {
      [36]: mathText()
    }
  };
}
function ok22() {
}
function mathFromMarkdown() {
  return {
    enter: {
      mathFlow: enterMathFlow,
      mathFlowFenceMeta: enterMathFlowMeta,
      mathText: enterMathText
    },
    exit: {
      mathFlow: exitMathFlow,
      mathFlowFence: exitMathFlowFence,
      mathFlowFenceMeta: exitMathFlowMeta,
      mathFlowValue: exitMathData,
      mathText: exitMathText,
      mathTextData: exitMathData
    }
  };
  function enterMathFlow(token) {
    const code22 = {
      type: "element",
      tagName: "code",
      properties: { className: ["language-math", "math-display"] },
      children: []
    };
    this.enter(
      {
        type: "math",
        meta: null,
        value: "",
        data: { hName: "pre", hChildren: [code22] }
      },
      token
    );
  }
  function enterMathFlowMeta() {
    this.buffer();
  }
  function exitMathFlowMeta() {
    const data = this.resume();
    const node22 = this.stack[this.stack.length - 1];
    ok22(node22.type === "math");
    node22.meta = data;
  }
  function exitMathFlowFence() {
    if (this.data.mathFlowInside) return;
    this.buffer();
    this.data.mathFlowInside = true;
  }
  function exitMathFlow(token) {
    const data = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    const node22 = this.stack[this.stack.length - 1];
    ok22(node22.type === "math");
    this.exit(token);
    node22.value = data;
    const code22 = (
      /** @type {HastElement} */
      node22.data.hChildren[0]
    );
    ok22(code22.type === "element");
    ok22(code22.tagName === "code");
    code22.children.push({ type: "text", value: data });
    this.data.mathFlowInside = void 0;
  }
  function enterMathText(token) {
    this.enter(
      {
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: { className: ["language-math", "math-inline"] },
          hChildren: []
        }
      },
      token
    );
    this.buffer();
  }
  function exitMathText(token) {
    const data = this.resume();
    const node22 = this.stack[this.stack.length - 1];
    ok22(node22.type === "inlineMath");
    this.exit(token);
    node22.value = data;
    const children = (
      /** @type {Array<HastElementContent>} */
      // @ts-expect-error: we defined it in `enterMathFlow`.
      node22.data.hChildren
    );
    children.push({ type: "text", value: data });
  }
  function exitMathData(token) {
    this.config.enter.data.call(this, token);
    this.config.exit.data.call(this, token);
  }
}
function mathToMarkdown(options) {
  let single = ({}).singleDollarTextMath;
  if (single === null || single === void 0) {
    single = true;
  }
  inlineMath.peek = inlineMathPeek;
  return {
    unsafe: [
      { character: "\r", inConstruct: "mathFlowMeta" },
      { character: "\n", inConstruct: "mathFlowMeta" },
      {
        character: "$",
        after: single ? void 0 : "\\$",
        inConstruct: "phrasing"
      },
      { character: "$", inConstruct: "mathFlowMeta" },
      { atBreak: true, character: "$", after: "\\$" }
    ],
    handlers: { math: math2, inlineMath }
  };
  function math2(node22, _2, state, info) {
    const raw2 = node22.value || "";
    const tracker = state.createTracker(info);
    const sequence = "$".repeat(Math.max(longestStreak2(raw2, "$") + 1, 2));
    const exit3 = state.enter("mathFlow");
    let value = tracker.move(sequence);
    if (node22.meta) {
      const subexit = state.enter("mathFlowMeta");
      value += tracker.move(
        state.safe(node22.meta, {
          after: "\n",
          before: value,
          encode: ["$"],
          ...tracker.current()
        })
      );
      subexit();
    }
    value += tracker.move("\n");
    if (raw2) {
      value += tracker.move(raw2 + "\n");
    }
    value += tracker.move(sequence);
    exit3();
    return value;
  }
  function inlineMath(node22, _2, state) {
    let value = node22.value || "";
    let size = 1;
    if (!single) size++;
    while (new RegExp("(^|[^$])" + "\\$".repeat(size) + "([^$]|$)").test(value)) {
      size++;
    }
    const sequence = "$".repeat(size);
    if (
      // Contains non-space.
      /[^ \r\n]/.test(value) && // Starts with space and ends with space.
      (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || // Starts or ends with dollar.
      /^\$|\$$/.test(value))
    ) {
      value = " " + value + " ";
    }
    let index2 = -1;
    while (++index2 < state.unsafe.length) {
      const pattern = state.unsafe[index2];
      if (!pattern.atBreak) continue;
      const expression = state.compilePattern(pattern);
      let match;
      while (match = expression.exec(value)) {
        let position3 = match.index;
        if (value.codePointAt(position3) === 10 && value.codePointAt(position3 - 1) === 13) {
          position3--;
        }
        value = value.slice(0, position3) + " " + value.slice(match.index + 1);
      }
    }
    return sequence + value + sequence;
  }
  function inlineMathPeek() {
    return "$";
  }
}
var defaultOptions = {
  wikilinks: true,
  highlights: true,
  comments: true,
  tags: true,
  customTaskChars: true,
  math: true
};
function remarkObsidian(userOpts) {
  const opts = { ...defaultOptions, ...userOpts };
  const data = this.data();
  data.micromarkExtensions ??= [];
  data.fromMarkdownExtensions ??= [];
  data.toMarkdownExtensions ??= [];
  if (opts.wikilinks) {
    data.micromarkExtensions.push(wikilinkSyntax());
    data.fromMarkdownExtensions.push(wikilinkFromMarkdown());
    data.toMarkdownExtensions.push(wikilinkToMarkdown());
  }
  if (opts.comments) {
    data.micromarkExtensions.push(commentSyntax());
    data.fromMarkdownExtensions.push(commentFromMarkdown());
    data.toMarkdownExtensions.push(commentToMarkdown());
  }
  if (opts.tags) {
    data.micromarkExtensions.push(tagSyntax());
    data.fromMarkdownExtensions.push(tagFromMarkdown());
    data.toMarkdownExtensions.push(tagToMarkdown());
  }
  if (opts.highlights) {
    data.micromarkExtensions.push(highlightSyntax());
    data.fromMarkdownExtensions.push(highlightFromMarkdown());
    data.toMarkdownExtensions.push(highlightToMarkdown());
  }
  if (opts.math) {
    data.micromarkExtensions.push(math());
    data.fromMarkdownExtensions.push(mathFromMarkdown());
    data.toMarkdownExtensions.push(mathToMarkdown());
  }
  if (opts.customTaskChars) {
    data.toMarkdownExtensions.push(taskCharToMarkdown());
  }
  const needsTransform = opts.comments || opts.customTaskChars;
  if (!needsTransform) return void 0;
  return (tree, file) => {
    if (opts.comments) {
      visit2(
        tree,
        "comment",
        (_node, index2, parent) => {
          if (parent && typeof index2 === "number") {
            parent.children.splice(index2, 1);
            return index2;
          }
          return void 0;
        }
      );
    }
    if (opts.customTaskChars) {
      customTaskCharTransform(tree, String(file));
    }
  };
}

// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote3(state, node3) {
  const result = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: state.wrap(state.all(node3), true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak3(state, node3) {
  const result = { type: "element", tagName: "br", properties: {}, children: [] };
  state.patch(node3, result);
  return [state.applyData(node3, result), { type: "text", value: "\n" }];
}

// node_modules/mdast-util-to-hast/lib/handlers/code.js
function code4(state, node3) {
  const value = node3.value ? node3.value + "\n" : "";
  const properties = {};
  const language = node3.lang ? node3.lang.split(/\s+/) : [];
  if (language.length > 0) {
    properties.className = ["language-" + language[0]];
  }
  let result = {
    type: "element",
    tagName: "code",
    properties,
    children: [{ type: "text", value }]
  };
  if (node3.meta) {
    result.data = { meta: node3.meta };
  }
  state.patch(node3, result);
  result = state.applyData(node3, result);
  result = { type: "element", tagName: "pre", properties: {}, children: [result] };
  state.patch(node3, result);
  return result;
}

// node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(state, node3) {
  const result = {
    type: "element",
    tagName: "del",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis3(state, node3) {
  const result = {
    type: "element",
    tagName: "em",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference2(state, node3) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const id = String(node3.identifier).toUpperCase();
  const safeId = normalizeUri(id.toLowerCase());
  const index2 = state.footnoteOrder.indexOf(id);
  let counter;
  let reuseCounter = state.footnoteCounts.get(id);
  if (reuseCounter === void 0) {
    reuseCounter = 0;
    state.footnoteOrder.push(id);
    counter = state.footnoteOrder.length;
  } else {
    counter = index2 + 1;
  }
  reuseCounter += 1;
  state.footnoteCounts.set(id, reuseCounter);
  const link4 = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + clobberPrefix + "fn-" + safeId,
      id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(counter) }]
  };
  state.patch(node3, link4);
  const sup = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [link4]
  };
  state.patch(node3, sup);
  return state.applyData(node3, sup);
}

// node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading3(state, node3) {
  const result = {
    type: "element",
    tagName: "h" + node3.depth,
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/html.js
function html3(state, node3) {
  if (state.options.allowDangerousHtml) {
    const result = { type: "raw", value: node3.value };
    state.patch(node3, result);
    return state.applyData(node3, result);
  }
  return void 0;
}

// node_modules/mdast-util-to-hast/lib/revert.js
function revert(state, node3) {
  const subtype = node3.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node3.label || node3.identifier) + "]";
  }
  if (node3.type === "imageReference") {
    return [{ type: "text", value: "![" + node3.alt + suffix }];
  }
  const contents = state.all(node3);
  const head2 = contents[0];
  if (head2 && head2.type === "text") {
    head2.value = "[" + head2.value;
  } else {
    contents.unshift({ type: "text", value: "[" });
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push({ type: "text", value: suffix });
  }
  return contents;
}

// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference3(state, node3) {
  const id = String(node3.identifier).toUpperCase();
  const definition4 = state.definitionById.get(id);
  if (!definition4) {
    return revert(state, node3);
  }
  const properties = { src: normalizeUri(definition4.url || ""), alt: node3.alt };
  if (definition4.title !== null && definition4.title !== void 0) {
    properties.title = definition4.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/image.js
function image3(state, node3) {
  const properties = { src: normalizeUri(node3.url) };
  if (node3.alt !== null && node3.alt !== void 0) {
    properties.alt = node3.alt;
  }
  if (node3.title !== null && node3.title !== void 0) {
    properties.title = node3.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode3(state, node3) {
  const text8 = { type: "text", value: node3.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node3, text8);
  const result = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [text8]
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function linkReference3(state, node3) {
  const id = String(node3.identifier).toUpperCase();
  const definition4 = state.definitionById.get(id);
  if (!definition4) {
    return revert(state, node3);
  }
  const properties = { href: normalizeUri(definition4.url || "") };
  if (definition4.title !== null && definition4.title !== void 0) {
    properties.title = definition4.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/link.js
function link3(state, node3) {
  const properties = { href: normalizeUri(node3.url) };
  if (node3.title !== null && node3.title !== void 0) {
    properties.title = node3.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem3(state, node3, parent) {
  const results = state.all(node3);
  const loose = parent ? listLoose(parent) : listItemLoose(node3);
  const properties = {};
  const children = [];
  if (typeof node3.checked === "boolean") {
    const head2 = results[0];
    let paragraph4;
    if (head2 && head2.type === "element" && head2.tagName === "p") {
      paragraph4 = head2;
    } else {
      paragraph4 = { type: "element", tagName: "p", properties: {}, children: [] };
      results.unshift(paragraph4);
    }
    if (paragraph4.children.length > 0) {
      paragraph4.children.unshift({ type: "text", value: " " });
    }
    paragraph4.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: node3.checked, disabled: true },
      children: []
    });
    properties.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < results.length) {
    const child = results[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      children.push({ type: "text", value: "\n" });
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      children.push(...child.children);
    } else {
      children.push(child);
    }
  }
  const tail = results[results.length - 1];
  if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) {
    children.push({ type: "text", value: "\n" });
  }
  const result = { type: "element", tagName: "li", properties, children };
  state.patch(node3, result);
  return state.applyData(node3, result);
}
function listLoose(node3) {
  let loose = false;
  if (node3.type === "list") {
    loose = node3.spread || false;
    const children = node3.children;
    let index2 = -1;
    while (!loose && ++index2 < children.length) {
      loose = listItemLoose(children[index2]);
    }
  }
  return loose;
}
function listItemLoose(node3) {
  const spread = node3.spread;
  return spread === null || spread === void 0 ? node3.children.length > 1 : spread;
}

// node_modules/mdast-util-to-hast/lib/handlers/list.js
function list4(state, node3) {
  const properties = {};
  const results = state.all(node3);
  let index2 = -1;
  if (typeof node3.start === "number" && node3.start !== 1) {
    properties.start = node3.start;
  }
  while (++index2 < results.length) {
    const child = results[index2];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  const result = {
    type: "element",
    tagName: node3.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph3(state, node3) {
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/root.js
function root3(state, node3) {
  const result = { type: "root", children: state.wrap(state.all(node3)) };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong3(state, node3) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/unist-util-position/lib/index.js
var pointEnd = point3("end");
var pointStart = point3("start");
function point3(type) {
  return point4;
  function point4(node3) {
    const point5 = node3 && node3.position && node3.position[type] || {};
    if (typeof point5.line === "number" && point5.line > 0 && typeof point5.column === "number" && point5.column > 0) {
      return {
        line: point5.line,
        column: point5.column,
        offset: typeof point5.offset === "number" && point5.offset > -1 ? point5.offset : void 0
      };
    }
  }
}
function position2(node3) {
  const start = pointStart(node3);
  const end = pointEnd(node3);
  if (start && end) {
    return { start, end };
  }
}

// node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(state, node3) {
  const rows = state.all(node3);
  const firstRow = rows.shift();
  const tableContent = [];
  if (firstRow) {
    const head2 = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: state.wrap([firstRow], true)
    };
    state.patch(node3.children[0], head2);
    tableContent.push(head2);
  }
  if (rows.length > 0) {
    const body3 = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: state.wrap(rows, true)
    };
    const start = pointStart(node3.children[1]);
    const end = pointEnd(node3.children[node3.children.length - 1]);
    if (start && end) body3.position = { start, end };
    tableContent.push(body3);
  }
  const result = {
    type: "element",
    tagName: "table",
    properties: {},
    children: state.wrap(tableContent, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function tableRow(state, node3, parent) {
  const siblings2 = parent ? parent.children : void 0;
  const rowIndex = siblings2 ? siblings2.indexOf(node3) : 1;
  const tagName = rowIndex === 0 ? "th" : "td";
  const align = parent && parent.type === "table" ? parent.align : void 0;
  const length = align ? align.length : node3.children.length;
  let cellIndex = -1;
  const cells2 = [];
  while (++cellIndex < length) {
    const cell = node3.children[cellIndex];
    const properties = {};
    const alignValue = align ? align[cellIndex] : void 0;
    if (alignValue) {
      properties.align = alignValue;
    }
    let result2 = { type: "element", tagName, properties, children: [] };
    if (cell) {
      result2.children = state.all(cell);
      state.patch(cell, result2);
      result2 = state.applyData(cell, result2);
    }
    cells2.push(result2);
  }
  const result = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: state.wrap(cells2, true)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function tableCell(state, node3) {
  const result = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/trim-lines/index.js
var tab = 9;
var space = 32;
function trimLines(value) {
  const source = String(value);
  const search2 = /\r?\n|\r/g;
  let match = search2.exec(source);
  let last = 0;
  const lines = [];
  while (match) {
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, true),
      match[0]
    );
    last = match.index + match[0].length;
    match = search2.exec(source);
  }
  lines.push(trimLine(source.slice(last), last > 0, false));
  return lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0;
  let endIndex = value.length;
  if (start) {
    let code5 = value.codePointAt(startIndex);
    while (code5 === tab || code5 === space) {
      startIndex++;
      code5 = value.codePointAt(startIndex);
    }
  }
  if (end) {
    let code5 = value.codePointAt(endIndex - 1);
    while (code5 === tab || code5 === space) {
      endIndex--;
      code5 = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}

// node_modules/mdast-util-to-hast/lib/handlers/text.js
function text6(state, node3) {
  const result = { type: "text", value: trimLines(String(node3.value)) };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak4(state, node3) {
  const result = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}

// node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote: blockquote3,
  break: hardBreak3,
  code: code4,
  delete: strikethrough,
  emphasis: emphasis3,
  footnoteReference: footnoteReference2,
  heading: heading3,
  html: html3,
  imageReference: imageReference3,
  image: image3,
  inlineCode: inlineCode3,
  linkReference: linkReference3,
  link: link3,
  listItem: listItem3,
  list: list4,
  paragraph: paragraph3,
  // @ts-expect-error: root is different, but hard to type.
  root: root3,
  strong: strong3,
  table,
  tableCell,
  tableRow,
  text: text6,
  thematicBreak: thematicBreak4,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return void 0;
}

// node_modules/@ungap/structured-clone/esm/types.js
var VOID = -1;
var PRIMITIVE = 0;
var ARRAY = 1;
var OBJECT = 2;
var DATE = 3;
var REGEXP = 4;
var MAP = 5;
var SET = 6;
var ERROR = 7;
var BIGINT = 8;

// node_modules/@ungap/structured-clone/esm/deserialize.js
var env = typeof self === "object" ? self : globalThis;
var guard = (name, init) => {
  switch (name) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + name);
  }
  return new env[name](init);
};
var deserializer = ($2, _2) => {
  const as = (out, index2) => {
    $2.set(index2, out);
    return out;
  };
  const unpair = (index2) => {
    if ($2.has(index2))
      return $2.get(index2);
    const [type, value] = _2[index2];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index2);
      case ARRAY: {
        const arr = as([], index2);
        for (const index3 of value)
          arr.push(unpair(index3));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index2);
        for (const [key2, index3] of value)
          object[unpair(key2)] = unpair(index3);
        return object;
      }
      case DATE:
        return as(new Date(value), index2);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index2);
      }
      case MAP: {
        const map4 = as(/* @__PURE__ */ new Map(), index2);
        for (const [key2, index3] of value)
          map4.set(unpair(key2), unpair(index3));
        return map4;
      }
      case SET: {
        const set = as(/* @__PURE__ */ new Set(), index2);
        for (const index3 of value)
          set.add(unpair(index3));
        return set;
      }
      case ERROR: {
        const { name, message } = value;
        return as(
          typeof env[name] === "function" ? guard(name, message) : new Error(message),
          index2
        );
      }
      case BIGINT:
        return as(BigInt(value), index2);
      case "BigInt":
        return as(Object(BigInt(value)), index2);
      case "ArrayBuffer":
        return as(new Uint8Array(value).buffer, value);
      case "DataView": {
        const { buffer } = new Uint8Array(value);
        return as(new DataView(buffer), value);
      }
    }
    return as(guard(type, value), index2);
  };
  return unpair;
};
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);

// node_modules/@ungap/structured-clone/esm/serialize.js
var EMPTY = "";
var { toString: toString3 } = {};
var { keys } = Object;
var typeOf = (value) => {
  const type = typeof value;
  if (type !== "object" || !value)
    return [PRIMITIVE, type];
  const asString = toString3.call(value).slice(8, -1);
  switch (asString) {
    case "Array":
      return [ARRAY, EMPTY];
    case "Object":
      return [OBJECT, EMPTY];
    case "Date":
      return [DATE, EMPTY];
    case "RegExp":
      return [REGEXP, EMPTY];
    case "Map":
      return [MAP, EMPTY];
    case "Set":
      return [SET, EMPTY];
    case "DataView":
      return [ARRAY, asString];
  }
  if (asString.includes("Array"))
    return [ARRAY, asString];
  if (value instanceof Error)
    return [ERROR, value.name || "Error"];
  return [OBJECT, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
var serializer = (strict, json, $2, _2) => {
  const as = (out, value) => {
    const index2 = _2.push(out) - 1;
    $2.set(value, index2);
    return index2;
  };
  const pair = (value) => {
    if ($2.has(value))
      return $2.get(value);
    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case "bigint":
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case "function":
          case "symbol":
            if (strict)
              throw new TypeError("unable to serialize " + type);
            entry = null;
            break;
          case "undefined":
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) {
          let spread = value;
          if (type === "DataView") {
            spread = new Uint8Array(value.buffer);
          } else if (type === "ArrayBuffer") {
            spread = new Uint8Array(value);
          }
          return as([type, [...spread]], value);
        }
        const arr = [];
        const index2 = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index2;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
        }
        if (json && "toJSON" in value)
          return pair(value.toJSON());
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const key2 of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key2])))
            entries.push([pair(key2), pair(value[key2])]);
        }
        return index2;
      }
      case DATE:
        return as([TYPE, isNaN(value.getTime()) ? EMPTY : value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const [key2, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key2)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key2), pair(entry)]);
        }
        return index2;
      }
      case SET: {
        const entries = [];
        const index2 = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index2;
      }
    }
    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };
  return pair;
};
var serialize2 = (value, { json, lossy } = {}) => {
  const _2 = [];
  return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _2)(value), _2;
};

// node_modules/@ungap/structured-clone/esm/index.js
var esm_default = typeof structuredClone === "function" ? (
  /* c8 ignore start */
  (any, options) => options && ("json" in options || "lossy" in options) ? deserialize(serialize2(any, options)) : structuredClone(any)
) : (any, options) => deserialize(serialize2(any, options));

// node_modules/mdast-util-to-hast/lib/footer.js
function defaultFootnoteBackContent(_2, rereferenceIndex) {
  const result = [{ type: "text", value: "\u21A9" }];
  if (rereferenceIndex > 1) {
    result.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [{ type: "text", value: String(rereferenceIndex) }]
    });
  }
  return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
  return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
}
function footer(state) {
  const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
  const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
  const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
  const footnoteLabel = state.options.footnoteLabel || "Footnotes";
  const footnoteLabelTagName = state.options.footnoteLabelTagName || "h2";
  const footnoteLabelProperties = state.options.footnoteLabelProperties || {
    className: ["sr-only"]
  };
  const listItems = [];
  let referenceIndex = -1;
  while (++referenceIndex < state.footnoteOrder.length) {
    const definition4 = state.footnoteById.get(
      state.footnoteOrder[referenceIndex]
    );
    if (!definition4) {
      continue;
    }
    const content3 = state.all(definition4);
    const id = String(definition4.identifier).toUpperCase();
    const safeId = normalizeUri(id.toLowerCase());
    let rereferenceIndex = 0;
    const backReferences = [];
    const counts = state.footnoteCounts.get(id);
    while (counts !== void 0 && ++rereferenceIndex <= counts) {
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      let children = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
      if (typeof children === "string") {
        children = { type: "text", value: children };
      }
      backReferences.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(children) ? children : [children]
      });
    }
    const tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content3.push(...backReferences);
    }
    const listItem4 = {
      type: "element",
      tagName: "li",
      properties: { id: clobberPrefix + "fn-" + safeId },
      children: state.wrap(content3, true)
    };
    state.patch(definition4, listItem4);
    listItems.push(listItem4);
  }
  if (listItems.length === 0) {
    return;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: footnoteLabelTagName,
        properties: {
          ...esm_default(footnoteLabelProperties),
          id: "footnote-label"
        },
        children: [{ type: "text", value: footnoteLabel }]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: state.wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}

// node_modules/mdast-util-to-hast/lib/state.js
var own6 = {}.hasOwnProperty;
var emptyOptions4 = {};
function createState(tree, options) {
  const settings = options || emptyOptions4;
  const definitionById = /* @__PURE__ */ new Map();
  const footnoteById = /* @__PURE__ */ new Map();
  const footnoteCounts = /* @__PURE__ */ new Map();
  const handlers2 = { ...handlers, ...settings.handlers };
  const state = {
    all: all4,
    applyData,
    definitionById,
    footnoteById,
    footnoteCounts,
    footnoteOrder: [],
    handlers: handlers2,
    one: one4,
    options: settings,
    patch,
    wrap: wrap2
  };
  visit(tree, function(node3) {
    if (node3.type === "definition" || node3.type === "footnoteDefinition") {
      const map4 = node3.type === "definition" ? definitionById : footnoteById;
      const id = String(node3.identifier).toUpperCase();
      if (!map4.has(id)) {
        map4.set(id, node3);
      }
    }
  });
  return state;
  function one4(node3, parent) {
    const type = node3.type;
    const handle4 = state.handlers[type];
    if (own6.call(state.handlers, type) && handle4) {
      return handle4(state, node3, parent);
    }
    if (state.options.passThrough && state.options.passThrough.includes(type)) {
      if ("children" in node3) {
        const { children, ...shallow } = node3;
        const result = esm_default(shallow);
        result.children = state.all(node3);
        return result;
      }
      return esm_default(node3);
    }
    const unknown2 = state.options.unknownHandler || defaultUnknownHandler;
    return unknown2(state, node3, parent);
  }
  function all4(parent) {
    const values = [];
    if ("children" in parent) {
      const nodes = parent.children;
      let index2 = -1;
      while (++index2 < nodes.length) {
        const result = state.one(nodes[index2], parent);
        if (result) {
          if (index2 && nodes[index2 - 1].type === "break") {
            if (!Array.isArray(result) && result.type === "text") {
              result.value = trimMarkdownSpaceStart(result.value);
            }
            if (!Array.isArray(result) && result.type === "element") {
              const head2 = result.children[0];
              if (head2 && head2.type === "text") {
                head2.value = trimMarkdownSpaceStart(head2.value);
              }
            }
          }
          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }
    return values;
  }
}
function patch(from, to) {
  if (from.position) to.position = position2(from);
}
function applyData(from, to) {
  let result = to;
  if (from && from.data) {
    const hName = from.data.hName;
    const hChildren = from.data.hChildren;
    const hProperties = from.data.hProperties;
    if (typeof hName === "string") {
      if (result.type === "element") {
        result.tagName = hName;
      } else {
        const children = "children" in result ? result.children : [result];
        result = { type: "element", tagName: hName, properties: {}, children };
      }
    }
    if (result.type === "element" && hProperties) {
      Object.assign(result.properties, esm_default(hProperties));
    }
    if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) {
      result.children = hChildren;
    }
  }
  return result;
}
function defaultUnknownHandler(state, node3) {
  const data = node3.data || {};
  const result = "value" in node3 && !(own6.call(data, "hProperties") || own6.call(data, "hChildren")) ? { type: "text", value: node3.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: state.all(node3)
  };
  state.patch(node3, result);
  return state.applyData(node3, result);
}
function wrap2(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push({ type: "text", value: "\n" });
  }
  while (++index2 < nodes.length) {
    if (index2) result.push({ type: "text", value: "\n" });
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push({ type: "text", value: "\n" });
  }
  return result;
}
function trimMarkdownSpaceStart(value) {
  let index2 = 0;
  let code5 = value.charCodeAt(index2);
  while (code5 === 9 || code5 === 32) {
    index2++;
    code5 = value.charCodeAt(index2);
  }
  return value.slice(index2);
}

// node_modules/mdast-util-to-hast/lib/index.js
function toHast(tree, options) {
  const state = createState(tree, options);
  const node3 = state.one(tree, void 0);
  const foot = footer(state);
  const result = Array.isArray(node3) ? { type: "root", children: node3 } : node3 || { type: "root", children: [] };
  if (foot) {
    result.children.push({ type: "text", value: "\n" }, foot);
  }
  return result;
}

// node_modules/remark-rehype/lib/index.js
function remarkRehype(destination, options) {
  if (destination && "run" in destination) {
    return async function(tree, file) {
      const hastTree = (
        /** @type {HastRoot} */
        toHast(tree, { file, ...options })
      );
      await destination.run(hastTree, file);
    };
  }
  return function(tree, file) {
    return (
      /** @type {HastRoot} */
      toHast(tree, { file, ...destination || options })
    );
  };
}

// node_modules/html-void-elements/index.js
var htmlVoidElements = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

// node_modules/property-information/lib/util/schema.js
var Schema = class {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(property, normal, space2) {
    this.normal = normal;
    this.property = property;
    if (space2) {
      this.space = space2;
    }
  }
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;

// node_modules/property-information/lib/util/merge.js
function merge(definitions, space2) {
  const property = {};
  const normal = {};
  for (const definition4 of definitions) {
    Object.assign(property, definition4.property);
    Object.assign(normal, definition4.normal);
  }
  return new Schema(property, normal, space2);
}

// node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/info.js
var Info = class {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(property, attribute) {
    this.attribute = attribute;
    this.property = property;
  }
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(types_exports)
);
var DefinedInfo = class extends Info {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(property, attribute, mask, space2) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space2);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
    }
  }
};
DefinedInfo.prototype.defined = true;
function mark(values, key2, value) {
  if (value) {
    values[key2] = value;
  }
}

// node_modules/property-information/lib/util/create.js
function create(definition4) {
  const properties = {};
  const normals = {};
  for (const [property, value] of Object.entries(definition4.properties)) {
    const info = new DefinedInfo(
      property,
      definition4.transform(definition4.attributes || {}, property),
      value,
      definition4.space
    );
    if (definition4.mustUseProperty && definition4.mustUseProperty.includes(property)) {
      info.mustUseProperty = true;
    }
    properties[property] = info;
    normals[normalize(property)] = property;
    normals[normalize(info.attribute)] = property;
  }
  return new Schema(properties, normals, definition4.space);
}

// node_modules/property-information/lib/aria.js
var aria = create({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  },
  transform(_2, property) {
    return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
  }
});

// node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/property-information/lib/html.js
var html4 = create({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alpha: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    blocking: spaceSeparated,
    capture: null,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    closedBy: null,
    colorSpace: null,
    cols: number,
    colSpan: number,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: overloadedBoolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shadowRootClonable: boolean,
    shadowRootCustomElementRegistry: boolean,
    shadowRootDelegatesFocus: boolean,
    shadowRootMode: null,
    shadowRootSerializable: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: boolean,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    exportParts: commaSeparated,
    part: spaceSeparated,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/svg.js
var svg = create({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: caseSensitiveTransform
});

// node_modules/property-information/lib/xlink.js
var xlink = create({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(_2, property) {
    return "xlink:" + property.slice(5).toLowerCase();
  }
});

// node_modules/property-information/lib/xmlns.js
var xmlns = create({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: caseInsensitiveTransform
});

// node_modules/property-information/lib/xml.js
var xml = create({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(_2, property) {
    return "xml:" + property.slice(3).toLowerCase();
  }
});

// node_modules/property-information/lib/find.js
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
function find(schema, value) {
  const normal = normalize(value);
  let property = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(property, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/index.js
var html5 = merge([aria, html4, xlink, xmlns, xml], "html");
var svg2 = merge([aria, svg, xlink, xmlns, xml], "svg");

// node_modules/stringify-entities/lib/core.js
var defaultSubsetRegex = /["&'<>`]/g;
var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var controlCharactersRegex = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
);
var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
var subsetToRegexCache = /* @__PURE__ */ new WeakMap();
function core(value, options) {
  value = value.replace(
    options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex,
    basic
  );
  if (options.subset || options.escapeOnly) {
    return value;
  }
  return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
  function surrogate(pair, index2, all4) {
    return options.format(
      (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
      all4.charCodeAt(index2 + 2),
      options
    );
  }
  function basic(character, index2, all4) {
    return options.format(
      character.charCodeAt(0),
      all4.charCodeAt(index2 + 1),
      options
    );
  }
}
function charactersToExpressionCached(subset) {
  let cached = subsetToRegexCache.get(subset);
  if (!cached) {
    cached = charactersToExpression(subset);
    subsetToRegexCache.set(subset, cached);
  }
  return cached;
}
function charactersToExpression(subset) {
  const groups = [];
  let index2 = -1;
  while (++index2 < subset.length) {
    groups.push(subset[index2].replace(regexEscapeRegex, "\\$&"));
  }
  return new RegExp("(?:" + groups.join("|") + ")", "g");
}

// node_modules/stringify-entities/lib/util/to-hexadecimal.js
var hexadecimalRegex = /[\dA-Fa-f]/;
function toHexadecimal(code5, next, omit) {
  const value = "&#x" + code5.toString(16).toUpperCase();
  return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}

// node_modules/stringify-entities/lib/util/to-decimal.js
var decimalRegex = /\d/;
function toDecimal(code5, next, omit) {
  const value = "&#" + String(code5);
  return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
}

// node_modules/character-entities-legacy/index.js
var characterEntitiesLegacy = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];

// node_modules/character-entities-html4/index.js
var characterEntitiesHtml4 = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC"
};

// node_modules/stringify-entities/lib/constant/dangerous.js
var dangerous = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
];

// node_modules/stringify-entities/lib/util/to-named.js
var own7 = {}.hasOwnProperty;
var characters = {};
var key;
for (key in characterEntitiesHtml4) {
  if (own7.call(characterEntitiesHtml4, key)) {
    characters[characterEntitiesHtml4[key]] = key;
  }
}
var notAlphanumericRegex = /[^\dA-Za-z]/;
function toNamed(code5, next, omit, attribute) {
  const character = String.fromCharCode(code5);
  if (own7.call(characters, character)) {
    const name = characters[character];
    const value = "&" + name;
    if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) {
      return value;
    }
    return value + ";";
  }
  return "";
}

// node_modules/stringify-entities/lib/util/format-smart.js
function formatSmart(code5, next, options) {
  let numeric = toHexadecimal(code5, next, options.omitOptionalSemicolons);
  let named;
  if (options.useNamedReferences || options.useShortestReferences) {
    named = toNamed(
      code5,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    );
  }
  if ((options.useShortestReferences || !named) && options.useShortestReferences) {
    const decimal = toDecimal(code5, next, options.omitOptionalSemicolons);
    if (decimal.length < numeric.length) {
      numeric = decimal;
    }
  }
  return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}

// node_modules/stringify-entities/lib/index.js
function stringifyEntities(value, options) {
  return core(value, Object.assign({ format: formatSmart }, options));
}

// node_modules/hast-util-to-html/lib/handle/comment.js
var htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
var bogusCommentEntitySubset = [">"];
var commentEntitySubset = ["<", ">"];
function comment(node3, _1, _2, state) {
  return state.settings.bogusComments ? "<?" + stringifyEntities(
    node3.value,
    Object.assign({}, state.settings.characterReferences, {
      subset: bogusCommentEntitySubset
    })
  ) + ">" : "<!--" + node3.value.replace(htmlCommentRegex, encode) + "-->";
  function encode($0) {
    return stringifyEntities(
      $0,
      Object.assign({}, state.settings.characterReferences, {
        subset: commentEntitySubset
      })
    );
  }
}

// node_modules/hast-util-to-html/lib/handle/doctype.js
function doctype(_1, _2, _3, state) {
  return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
}

// node_modules/comma-separated-tokens/index.js
function stringify(values, options) {
  const settings = options || {};
  const input = values[values.length - 1] === "" ? [...values, ""] : values;
  return input.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
  ).trim();
}

// node_modules/space-separated-tokens/index.js
function stringify2(values) {
  return values.join(" ").trim();
}

// node_modules/hast-util-whitespace/lib/index.js
var re = /[ \t\n\f\r]/g;
function whitespace(thing) {
  return typeof thing === "object" ? thing.type === "text" ? empty3(thing.value) : false : empty3(thing);
}
function empty3(value) {
  return value.replace(re, "") === "";
}

// node_modules/hast-util-to-html/lib/omission/util/siblings.js
var siblingAfter = siblings(1);
var siblingBefore = siblings(-1);
var emptyChildren = [];
function siblings(increment2) {
  return sibling;
  function sibling(parent, index2, includeWhitespace) {
    const siblings2 = parent ? parent.children : emptyChildren;
    let offset = (index2 || 0) + increment2;
    let next = siblings2[offset];
    if (!includeWhitespace) {
      while (next && whitespace(next)) {
        offset += increment2;
        next = siblings2[offset];
      }
    }
    return next;
  }
}

// node_modules/hast-util-to-html/lib/omission/omission.js
var own8 = {}.hasOwnProperty;
function omission(handlers2) {
  return omit;
  function omit(node3, index2, parent) {
    return own8.call(handlers2, node3.tagName) && handlers2[node3.tagName](node3, index2, parent);
  }
}

// node_modules/hast-util-to-html/lib/omission/closing.js
var closing = omission({
  body,
  caption: headOrColgroupOrCaption,
  colgroup: headOrColgroupOrCaption,
  dd,
  dt,
  head: headOrColgroupOrCaption,
  html: html6,
  li,
  optgroup,
  option,
  p,
  rp: rubyElement,
  rt: rubyElement,
  tbody,
  td: cells,
  tfoot,
  th: cells,
  thead,
  tr
});
function headOrColgroupOrCaption(_2, index2, parent) {
  const next = siblingAfter(parent, index2, true);
  return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
}
function html6(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type !== "comment";
}
function body(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type !== "comment";
}
function p(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
  !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
}
function li(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && next.tagName === "li";
}
function dt(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return Boolean(
    next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd")
  );
}
function dd(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
}
function rubyElement(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
}
function optgroup(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && next.tagName === "optgroup";
}
function option(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
}
function thead(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return Boolean(
    next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot")
  );
}
function tbody(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
}
function tfoot(_2, index2, parent) {
  return !siblingAfter(parent, index2);
}
function tr(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && next.tagName === "tr";
}
function cells(_2, index2, parent) {
  const next = siblingAfter(parent, index2);
  return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
}

// node_modules/hast-util-to-html/lib/omission/opening.js
var opening = omission({
  body: body2,
  colgroup,
  head,
  html: html7,
  tbody: tbody2
});
function html7(node3) {
  const head2 = siblingAfter(node3, -1);
  return !head2 || head2.type !== "comment";
}
function head(node3) {
  const seen = /* @__PURE__ */ new Set();
  for (const child2 of node3.children) {
    if (child2.type === "element" && (child2.tagName === "base" || child2.tagName === "title")) {
      if (seen.has(child2.tagName)) return false;
      seen.add(child2.tagName);
    }
  }
  const child = node3.children[0];
  return !child || child.type === "element";
}
function body2(node3) {
  const head2 = siblingAfter(node3, -1, true);
  return !head2 || head2.type !== "comment" && !(head2.type === "text" && whitespace(head2.value.charAt(0))) && !(head2.type === "element" && (head2.tagName === "meta" || head2.tagName === "link" || head2.tagName === "script" || head2.tagName === "style" || head2.tagName === "template"));
}
function colgroup(node3, index2, parent) {
  const previous4 = siblingBefore(parent, index2);
  const head2 = siblingAfter(node3, -1, true);
  if (parent && previous4 && previous4.type === "element" && previous4.tagName === "colgroup" && closing(previous4, parent.children.indexOf(previous4), parent)) {
    return false;
  }
  return Boolean(head2 && head2.type === "element" && head2.tagName === "col");
}
function tbody2(node3, index2, parent) {
  const previous4 = siblingBefore(parent, index2);
  const head2 = siblingAfter(node3, -1);
  if (parent && previous4 && previous4.type === "element" && (previous4.tagName === "thead" || previous4.tagName === "tbody") && closing(previous4, parent.children.indexOf(previous4), parent)) {
    return false;
  }
  return Boolean(head2 && head2.type === "element" && head2.tagName === "tr");
}

// node_modules/hast-util-to-html/lib/handle/element.js
var constants = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
    [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
    ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function element(node3, index2, parent, state) {
  const schema = state.schema;
  const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
  let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node3.tagName.toLowerCase());
  const parts = [];
  let last;
  if (schema.space === "html" && node3.tagName === "svg") {
    state.schema = svg2;
  }
  const attributes = serializeAttributes(state, node3.properties);
  const content3 = state.all(
    schema.space === "html" && node3.tagName === "template" ? node3.content : node3
  );
  state.schema = schema;
  if (content3) selfClosing = false;
  if (attributes || !omit || !opening(node3, index2, parent)) {
    parts.push("<", node3.tagName, attributes ? " " + attributes : "");
    if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
      last = attributes.charAt(attributes.length - 1);
      if (!state.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") {
        parts.push(" ");
      }
      parts.push("/");
    }
    parts.push(">");
  }
  parts.push(content3);
  if (!selfClosing && (!omit || !closing(node3, index2, parent))) {
    parts.push("</" + node3.tagName + ">");
  }
  return parts.join("");
}
function serializeAttributes(state, properties) {
  const values = [];
  let index2 = -1;
  let key2;
  if (properties) {
    for (key2 in properties) {
      if (properties[key2] !== null && properties[key2] !== void 0) {
        const value = serializeAttribute(state, key2, properties[key2]);
        if (value) values.push(value);
      }
    }
  }
  while (++index2 < values.length) {
    const last = state.settings.tightAttributes ? values[index2].charAt(values[index2].length - 1) : void 0;
    if (index2 !== values.length - 1 && last !== '"' && last !== "'") {
      values[index2] += " ";
    }
  }
  return values.join("");
}
function serializeAttribute(state, key2, value) {
  const info = find(state.schema, key2);
  const x2 = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
  const y2 = state.settings.allowDangerousCharacters ? 0 : 1;
  let quote = state.quote;
  let result;
  if (info.overloadedBoolean && (value === info.attribute || value === "")) {
    value = true;
  } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) {
    value = Boolean(value);
  }
  if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) {
    return "";
  }
  const name = stringifyEntities(
    info.attribute,
    Object.assign({}, state.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: constants.name[x2][y2]
    })
  );
  if (value === true) return name;
  value = Array.isArray(value) ? (info.commaSeparated ? stringify : stringify2)(value, {
    padLeft: !state.settings.tightCommaSeparatedLists
  }) : String(value);
  if (state.settings.collapseEmptyAttributes && !value) return name;
  if (state.settings.preferUnquoted) {
    result = stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        attribute: true,
        subset: constants.unquoted[x2][y2]
      })
    );
  }
  if (result !== value) {
    if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) {
      quote = state.alternative;
    }
    result = quote + stringifyEntities(
      value,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: (quote === "'" ? constants.single : constants.double)[x2][y2],
        attribute: true
      })
    ) + quote;
  }
  return name + (result ? "=" + result : result);
}

// node_modules/hast-util-to-html/lib/handle/text.js
var textEntitySubset = ["<", "&"];
function text7(node3, _2, parent, state) {
  return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node3.value : stringifyEntities(
    node3.value,
    Object.assign({}, state.settings.characterReferences, {
      subset: textEntitySubset
    })
  );
}

// node_modules/hast-util-to-html/lib/handle/raw.js
function raw(node3, index2, parent, state) {
  return state.settings.allowDangerousHtml ? node3.value : text7(node3, index2, parent, state);
}

// node_modules/hast-util-to-html/lib/handle/root.js
function root4(node3, _1, _2, state) {
  return state.all(node3);
}

// node_modules/hast-util-to-html/lib/handle/index.js
var handle3 = zwitch("type", {
  invalid,
  unknown,
  handlers: { comment, doctype, element, raw, root: root4, text: text7 }
});
function invalid(node3) {
  throw new Error("Expected node, not `" + node3 + "`");
}
function unknown(node_) {
  const node3 = (
    /** @type {Nodes} */
    node_
  );
  throw new Error("Cannot compile unknown node `" + node3.type + "`");
}

// node_modules/hast-util-to-html/lib/index.js
var emptyOptions5 = {};
var emptyCharacterReferences = {};
var emptyChildren2 = [];
function toHtml(tree, options) {
  const options_ = options || emptyOptions5;
  const quote = options_.quote || '"';
  const alternative = quote === '"' ? "'" : '"';
  if (quote !== '"' && quote !== "'") {
    throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
  }
  const state = {
    one: one3,
    all: all3,
    settings: {
      omitOptionalTags: options_.omitOptionalTags || false,
      allowParseErrors: options_.allowParseErrors || false,
      allowDangerousCharacters: options_.allowDangerousCharacters || false,
      quoteSmart: options_.quoteSmart || false,
      preferUnquoted: options_.preferUnquoted || false,
      tightAttributes: options_.tightAttributes || false,
      upperDoctype: options_.upperDoctype || false,
      tightDoctype: options_.tightDoctype || false,
      bogusComments: options_.bogusComments || false,
      tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
      tightSelfClosing: options_.tightSelfClosing || false,
      collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
      allowDangerousHtml: options_.allowDangerousHtml || false,
      voids: options_.voids || htmlVoidElements,
      characterReferences: options_.characterReferences || emptyCharacterReferences,
      closeSelfClosing: options_.closeSelfClosing || false,
      closeEmptyElements: options_.closeEmptyElements || false
    },
    schema: options_.space === "svg" ? svg2 : html5,
    quote,
    alternative
  };
  return state.one(
    Array.isArray(tree) ? { type: "root", children: tree } : tree,
    void 0,
    void 0
  );
}
function one3(node3, index2, parent) {
  return handle3(node3, index2, parent, this);
}
function all3(parent) {
  const results = [];
  const children = parent && parent.children || emptyChildren2;
  let index2 = -1;
  while (++index2 < children.length) {
    results[index2] = this.one(children[index2], index2, parent);
  }
  return results.join("");
}

// src/types.ts
var CANVAS_PRESET_COLORS = {
  "1": "#fb464c",
  "2": "#e9973f",
  "3": "#e0de71",
  "4": "#44cf6e",
  "5": "#53dfdd",
  "6": "#a882ff"
};

// src/components/styles/canvas.scss
var canvas_default = `.canvas-page {
  width: 100%;
  max-width: none;
  height: 100%;
  margin: 0;
}

.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: none;
  border-radius: 0;
  background-color: var(--light);
  background-image: radial-gradient(circle, var(--lightgray) 1px, transparent 1px);
  background-size: 20px 20px;
  cursor: grab;
  user-select: none;
  touch-action: none;
}
.canvas-container:active {
  cursor: grabbing;
}

.canvas-viewport {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
}

.canvas-nodes {
  position: absolute;
  top: 0;
  left: 0;
}

.canvas-node {
  position: absolute;
  border: 2px solid var(--canvas-node-color, var(--lightgray));
  border-radius: 6px;
  background: var(--light);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.15s ease;
  display: flex;
  flex-direction: column;
}
.canvas-node:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.canvas-node-content {
  padding: 12px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--darkgray);
  word-wrap: break-word;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.canvas-node-text .canvas-node-content {
  white-space: pre-wrap;
}

.canvas-node-file {
  overflow: visible;
}
.canvas-node-file .canvas-file-label {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  padding: 2px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 6px;
}
.canvas-node-file .canvas-file-label a {
  color: var(--canvas-node-color, var(--secondary));
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.canvas-node-file .canvas-file-label a::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--canvas-node-color, var(--secondary));
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/%3E%3Cpolyline points='14 2 14 8 20 8'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
  flex-shrink: 0;
}
.canvas-node-file .canvas-file-label a:hover {
  text-decoration: underline;
}
.canvas-node-file .canvas-embed-content h1,
.canvas-node-file .canvas-embed-content h2,
.canvas-node-file .canvas-embed-content h3,
.canvas-node-file .canvas-embed-content h4,
.canvas-node-file .canvas-embed-content h5,
.canvas-node-file .canvas-embed-content h6 {
  margin-top: 0.8em;
  margin-bottom: 0.4em;
}
.canvas-node-file .canvas-embed-content h1:first-child,
.canvas-node-file .canvas-embed-content h2:first-child,
.canvas-node-file .canvas-embed-content h3:first-child,
.canvas-node-file .canvas-embed-content h4:first-child,
.canvas-node-file .canvas-embed-content h5:first-child,
.canvas-node-file .canvas-embed-content h6:first-child {
  margin-top: 0;
}
.canvas-node-file .canvas-embed-content p {
  margin: 0.5em 0;
}
.canvas-node-file .canvas-embed-content ul,
.canvas-node-file .canvas-embed-content ol {
  padding-left: 1.5em;
  margin: 0.5em 0;
}
.canvas-node-file .canvas-embed-content img {
  max-width: 100%;
  height: auto;
}
.canvas-node-file .canvas-embed-content pre {
  overflow-x: auto;
  padding: 0.5em;
  border-radius: 4px;
  background: var(--lightgray);
}
.canvas-node-file .canvas-embed-content code {
  font-size: 0.85em;
}
.canvas-node-file .canvas-file-subpath {
  font-size: 0.75rem;
  color: var(--gray);
  margin-left: auto;
}
.canvas-node-file .canvas-node-content > .canvas-file-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
}
.canvas-node-file .canvas-node-content > .canvas-file-link:hover {
  text-decoration: underline;
}

.canvas-node-link {
  overflow: visible;
}
.canvas-node-link .canvas-node-content {
  padding: 0;
  overflow: hidden;
}
.canvas-node-link .canvas-link-label {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  padding: 2px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.canvas-node-link .canvas-link-label a {
  color: var(--canvas-node-color, var(--secondary));
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.canvas-node-link .canvas-link-label a::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--canvas-node-color, var(--secondary));
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/%3E%3Cpolyline points='15 3 21 3 21 9'/%3E%3Cline x1='10' y1='14' x2='21' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
  flex-shrink: 0;
}
.canvas-node-link .canvas-link-label a:hover {
  text-decoration: underline;
}
.canvas-node-link .canvas-iframe-wrapper {
  position: relative;
  padding: 0;
  overflow: hidden;
}
.canvas-node-link .canvas-iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: var(--light);
}
.canvas-node-link .canvas-iframe-wrapper .canvas-iframe-fallback {
  display: none;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  background: var(--light);
  font-size: 0.85rem;
}
.canvas-node-link .canvas-iframe-wrapper .canvas-iframe-fallback a {
  color: var(--secondary);
  text-decoration: underline;
}

.canvas-node-group {
  background: transparent;
  border-style: dashed;
  border-color: var(--canvas-node-color, var(--gray));
  border-radius: 12px;
  overflow: visible;
}
.canvas-node-group .canvas-group-label {
  position: absolute;
  top: -10px;
  left: 16px;
  padding: 0 8px;
  background: var(--light);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--canvas-node-color, var(--darkgray));
}

.canvas-edges {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: visible;
}

.canvas-edge path {
  pointer-events: stroke;
}

.canvas-edge-label-bg {
  fill: var(--light);
  fill-opacity: 0.85;
}

.canvas-edge-label {
  font-size: 0.8rem;
  fill: var(--darkgray);
  pointer-events: none;
}

.canvas-controls {
  position: fixed;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 25;
  transition: top 0.25s ease;
}
.canvas-controls button {
  width: 32px;
  height: 32px;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  background: var(--light);
  color: var(--darkgray);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background 0.1s ease;
}
.canvas-controls button:hover {
  background: var(--lightgray);
}
.canvas-controls button svg {
  pointer-events: none;
}
.canvas-controls .canvas-zoom-group {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  overflow: hidden;
}
.canvas-controls .canvas-zoom-group button {
  border: none;
  border-radius: 0;
}
.canvas-controls .canvas-zoom-group button:first-child {
  border-bottom: 1px solid var(--lightgray);
}

.page[data-frame=canvas] {
  --canvas-sidebar-width: 300px;
}

.page[data-frame=canvas] .canvas-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 0;
  transition: padding-left 0.2s ease;
}

.page[data-frame=canvas] .canvas-stage {
  width: 100%;
  height: 100%;
}

.page[data-frame=canvas] .canvas-sidebar {
  position: fixed;
  top: 0;
  height: 100vh;
  width: var(--canvas-sidebar-width);
  box-sizing: border-box;
  background: var(--light);
  border-right: 1px solid var(--lightgray);
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.12);
  overflow-y: hidden;
  left: calc(-1 * var(--canvas-sidebar-width));
  transition: left 0.25s ease;
  z-index: 20;
}

.page[data-frame=canvas] .canvas-sidebar-toggle {
  position: fixed;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  background: var(--light);
  color: var(--darkgray);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  transition: background 0.1s ease, left 0.25s ease;
}
.page[data-frame=canvas] .canvas-sidebar-toggle:hover {
  background: var(--lightgray);
}
.page[data-frame=canvas] .canvas-sidebar-toggle svg {
  pointer-events: none;
}

.page[data-frame=canvas] .canvas-sidebar-icon-close {
  display: none;
}

.page[data-frame=canvas].canvas-sidebar-open .canvas-frame {
  padding-left: var(--canvas-sidebar-width);
}

.page[data-frame=canvas].canvas-sidebar-open .canvas-sidebar {
  left: 0;
}

.page[data-frame=canvas].canvas-sidebar-open .canvas-sidebar-toggle {
  left: calc(var(--canvas-sidebar-width) + 12px);
}

.page[data-frame=canvas].canvas-sidebar-open .canvas-sidebar-icon-open {
  display: none;
}

.page[data-frame=canvas].canvas-sidebar-open .canvas-sidebar-icon-close {
  display: block;
}

@media (max-width: 800px) {
  .page[data-frame=canvas] {
    --canvas-sidebar-width: calc(100vw - 56px);
  }
  .page[data-frame=canvas].canvas-sidebar-open .canvas-frame {
    padding-left: 0;
  }
  .page[data-frame=canvas].canvas-sidebar-open .canvas-sidebar-toggle {
    left: calc(var(--canvas-sidebar-width) + 12px);
  }
  .page[data-frame=canvas].canvas-sidebar-open .canvas-controls {
    top: 48px;
  }
}
.page[data-frame=canvas] .canvas-sidebar {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.page[data-frame=canvas] .canvas-sidebar .spacer {
  display: none;
}
.page[data-frame=canvas] .canvas-sidebar .explorer button.desktop-explorer,
.page[data-frame=canvas] .canvas-sidebar .explorer button.mobile-explorer {
  display: none !important;
}
.page[data-frame=canvas] .canvas-sidebar .explorer {
  order: initial;
  overflow-y: hidden;
  overflow: hidden;
  flex: 1 1 0;
  min-height: 0;
  flex-shrink: initial;
  align-self: initial;
  margin-top: 0;
  margin-bottom: 0;
}
.page[data-frame=canvas] .canvas-sidebar .explorer .explorer-content,
.page[data-frame=canvas] .canvas-sidebar .explorer.collapsed > .explorer-content,
.page[data-frame=canvas] .canvas-sidebar .explorer:not(.collapsed) > .explorer-content {
  position: static;
  width: auto;
  max-width: none;
  height: 100%;
  max-height: 100%;
  transform: none !important;
  visibility: visible !important;
  padding: 0;
  overflow-y: auto;
  z-index: auto;
  background-color: transparent;
}
.page[data-frame=canvas] .canvas-sidebar .explorer-content > .explorer-ul {
  overscroll-behavior: auto;
}

.transclude .canvas-page {
  height: auto;
}
.transclude .canvas-container {
  height: auto;
  min-height: 400px;
}
.transclude .canvas-controls {
  position: absolute;
}

.popover-inner .canvas-page {
  height: auto;
}
.popover-inner .canvas-container {
  height: auto;
  min-height: 200px;
  max-height: 300px;
}
.popover-inner .canvas-controls {
  display: none;
}

.page[data-frame=canvas] .canvas-fullscreen-toggle {
  display: none;
}

.canvas-container:fullscreen {
  width: 100vw;
  height: 100vh;
  min-height: unset;
  background-color: var(--light);
}
.canvas-container:fullscreen .canvas-controls {
  position: fixed;
}`;

// src/components/scripts/canvas.inline.ts
var canvas_inline_default = 'function K(){let E=document.querySelectorAll(".canvas-container");if(E.length!==0)for(let t of Array.from(E)){if(t.dataset.initialized==="true")continue;t.dataset.initialized="true";let M=t.querySelector(".canvas-viewport");if(!M)continue;let j=t.dataset.enableInteraction!=="false",w=parseFloat(t.dataset.minZoom??"")||.1,H=parseFloat(t.dataset.maxZoom??"")||5,o=parseFloat(t.dataset.initialZoom??"")||1,c=0,a=0,Y=!1,D=0,O=0,v=()=>{M.style.transform=`translate(${c}px, ${a}px) scale(${o})`},q=()=>{let n=t.getBoundingClientRect(),l=parseFloat(M.style.width)||1e3,u=parseFloat(M.style.height)||1e3,r=n.width/l,d=n.height/u;o=Math.min(r,d,1)*.9,o=Math.max(w,Math.min(H,o)),c=(n.width-l*o)/2,a=(n.height-u*o)/2,v()};q();let F=o,B=c,S=a,L=t.querySelector(".canvas-reset-view"),m=()=>{if(!L)return;let n=Math.abs(o-F)>.001||Math.abs(c-B)>1||Math.abs(a-S)>1;L.style.display=n?"flex":"none"},f=[];if(j){let n=e=>{let s=e.target instanceof HTMLElement?e.target.closest(".canvas-node-content"):null;if(s&&s.scrollHeight>s.clientHeight){let b=s.scrollTop<=0,A=s.scrollTop+s.clientHeight>=s.scrollHeight-1,x=e.deltaY>0,J=e.deltaY<0;if(!(b&&J)&&!(A&&x))return}e.preventDefault();let i=t.getBoundingClientRect(),T=e.clientX-i.left,p=e.clientY-i.top,g=o,X=e.deltaY>0?.9:1.1;o=Math.max(w,Math.min(H,o*X)),c=T-(T-c)*(o/g),a=p-(p-a)*(o/g),v(),m()},l=e=>{if(e.button===0&&!(e.target instanceof HTMLElement&&(e.target.closest("a")||e.target.closest("button")))){if(e.target instanceof HTMLElement){let s=e.target.closest(".canvas-node-content");if(s&&s.scrollHeight>s.clientHeight){let i=s.getBoundingClientRect();if(e.clientX>=i.right-16)return}}Y=!0,D=e.clientX-c,O=e.clientY-a,t.setPointerCapture(e.pointerId)}},u=e=>{Y&&(c=e.clientX-D,a=e.clientY-O,v(),m())},r=()=>{Y=!1};t.addEventListener("wheel",n,{passive:!1}),t.addEventListener("pointerdown",l),t.addEventListener("pointermove",u),t.addEventListener("pointerup",r);let d=0,h=0,I=0,z=!1,N=e=>{if(e.length<2||!e[0]||!e[1])return 0;let s=e[0].clientX-e[1].clientX,i=e[0].clientY-e[1].clientY;return Math.sqrt(s*s+i*i)},U=e=>{if(e.touches.length===2){let s=e.touches[0],i=e.touches[1];if(!s||!i)return;e.preventDefault(),z=!0,Y=!1,d=N(e.touches),h=(s.clientX+i.clientX)/2,I=(s.clientY+i.clientY)/2}},W=e=>{if(e.touches.length===2&&z){let s=e.touches[0],i=e.touches[1];if(!s||!i)return;e.preventDefault();let T=N(e.touches),p=(s.clientX+i.clientX)/2,g=(s.clientY+i.clientY)/2,X=t.getBoundingClientRect(),P=p-X.left,b=g-X.top,A=T/d,x=o;o=Math.max(w,Math.min(H,o*A)),c=P-(P-c)*(o/x),a=b-(b-a)*(o/x),c+=p-h,a+=g-I,d=T,h=p,I=g,v(),m()}},V=e=>{e.touches.length<2&&(z=!1)};t.addEventListener("touchstart",U,{passive:!1}),t.addEventListener("touchmove",W,{passive:!1}),t.addEventListener("touchend",V),f.push(()=>{t.removeEventListener("wheel",n),t.removeEventListener("pointerdown",l),t.removeEventListener("pointermove",u),t.removeEventListener("pointerup",r),t.removeEventListener("touchstart",U),t.removeEventListener("touchmove",W),t.removeEventListener("touchend",V)})}let C=t.closest(\'.page[data-frame="canvas"]\'),R=C?.querySelector(".canvas-sidebar-toggle");if(C&&R){let n=()=>{let l=t.getBoundingClientRect();C.classList.toggle("canvas-sidebar-open"),requestAnimationFrame(()=>{let r=t.getBoundingClientRect().left-l.left;c+=r,B+=r,v(),m()})};R.addEventListener("click",n),f.push(()=>{R.removeEventListener("click",n)})}let k=t.querySelector(".canvas-zoom-in"),Z=t.querySelector(".canvas-zoom-out"),$=n=>{let l=t.getBoundingClientRect(),u=l.width/2,r=l.height/2,d=o;o=Math.max(w,Math.min(H,o*n)),c=u-(u-c)*(o/d),a=r-(r-a)*(o/d),v(),m()};if(k){let n=()=>{$(1.25)};k.addEventListener("click",n),f.push(()=>k.removeEventListener("click",n))}if(Z){let n=()=>{$(.8)};Z.addEventListener("click",n),f.push(()=>Z.removeEventListener("click",n))}if(L){let n=()=>{q(),F=o,B=c,S=a,m()};L.addEventListener("click",n),f.push(()=>L.removeEventListener("click",n))}let y=t.querySelector(".canvas-fullscreen-toggle");if(y){let n=y.querySelector(".canvas-fullscreen-enter"),l=y.querySelector(".canvas-fullscreen-exit"),u=()=>{let h=document.fullscreenElement===t;n&&(n.style.display=h?"none":""),l&&(l.style.display=h?"":"none")},r=()=>{document.fullscreenElement===t?document.exitFullscreen():t.requestFullscreen()},d=()=>{u(),requestAnimationFrame(()=>{q(),F=o,B=c,S=a,m()})};y.addEventListener("click",r),document.addEventListener("fullscreenchange",d),f.push(()=>{y.removeEventListener("click",r),document.removeEventListener("fullscreenchange",d)})}let G=t.querySelectorAll(".canvas-iframe-wrapper iframe");for(let n of Array.from(G))n.addEventListener("error",()=>{let l=n.parentElement?.querySelector(".canvas-iframe-fallback");l&&(n.style.display="none",l.style.display="flex")});typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>{for(let n of f)n();t.dataset.initialized="false"})}}if(typeof document<"u"){let E=()=>{K()};document.addEventListener("nav",E),document.addEventListener("render",E)}\n';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p3 = t2;
  if ("ref" in p3) for (c2 in p3 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p3[c2] = t2[c2];
  var l2 = { type: e2, props: p3, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p3[c2] && (p3[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/CanvasBody.tsx
function resolveColor(color3) {
  if (!color3) return void 0;
  if (color3.startsWith("#")) return color3;
  return CANVAS_PRESET_COLORS[color3] ?? void 0;
}
function getEdgeAnchor(node3, side) {
  const border = node3.type === "group" ? 2 : 2;
  const cx = node3.x + node3.width / 2;
  const cy = node3.y + node3.height / 2;
  switch (side) {
    case "top":
      return { x: cx, y: node3.y - border };
    case "bottom":
      return { x: cx, y: node3.y + node3.height + border };
    case "left":
      return { x: node3.x - border, y: cy };
    case "right":
      return { x: node3.x + node3.width + border, y: cy };
    default:
      return { x: cx, y: cy };
  }
}
var headerRegex = /^h[1-6]$/;
function findPage(fileSlug, allFiles) {
  let page = allFiles.find((f3) => f3.slug === fileSlug);
  if (!page) {
    const dotIdx = fileSlug.lastIndexOf(".");
    const slashIdx = fileSlug.lastIndexOf("/");
    if (dotIdx > slashIdx + 1) {
      const stripped = fileSlug.slice(0, dotIdx);
      page = allFiles.find((f3) => f3.slug === stripped);
    }
  }
  return page;
}
function applySubpath(htmlAst, page, subpath, isBasePage) {
  if (subpath.startsWith("#^")) {
    const blockId = subpath.slice(2);
    const blocks = page.blocks;
    const blockNode = blocks?.[blockId];
    if (!blockNode) return void 0;
    const wrapped = blockNode.tagName === "li" ? { type: "element", tagName: "ul", properties: {}, children: [blockNode] } : blockNode;
    return { type: "root", children: [wrapped] };
  }
  const ref = subpath.startsWith("#") ? subpath.slice(1) : subpath;
  if (!ref) return htmlAst;
  if (isBasePage) {
    const refLower = ref.toLowerCase();
    for (const child of htmlAst.children) {
      if (child.type !== "element") continue;
      const found = findBasesView(child, refLower);
      if (found) return { type: "root", children: [found] };
    }
    return void 0;
  }
  let startIdx;
  let startDepth;
  let endIdx;
  for (const [i2, el] of htmlAst.children.entries()) {
    if (el.type !== "element" || !headerRegex.test(el.tagName)) continue;
    const depth = Number(el.tagName.substring(1));
    if (startIdx === void 0 || startDepth === void 0) {
      if (el.properties?.id === ref) {
        startIdx = i2;
        startDepth = depth;
      }
    } else if (depth <= startDepth) {
      endIdx = i2;
      break;
    }
  }
  if (startIdx === void 0) return void 0;
  return { type: "root", children: htmlAst.children.slice(startIdx, endIdx) };
}
function findBasesView(el, viewName) {
  const classes = (el.properties?.className ?? []).join(" ");
  if (classes.includes("bases-view") && !classes.includes("bases-view-container")) {
    const viewType = el.properties?.dataViewType ?? "";
    if (viewType.toLowerCase() === viewName) return el;
  }
  for (const child of el.children) {
    if (child.type !== "element") continue;
    const found = findBasesView(child, viewName);
    if (found) return found;
  }
  return void 0;
}
function resolveEmbeddedHtml(fileSlug, canvasSlug, allFiles, subpath, visited) {
  const resolvedSlug = fileSlug;
  if (visited?.has(resolvedSlug)) return void 0;
  const page = findPage(fileSlug, allFiles);
  if (!page) return void 0;
  const htmlAst = page.htmlAst;
  if (!htmlAst) return void 0;
  const sourceSlug = page.slug;
  if (!sourceSlug) return void 0;
  let tree = htmlAst;
  if (subpath) {
    const isBasePage = "basesData" in page;
    const sub = applySubpath(htmlAst, page, subpath, isBasePage);
    if (!sub) return void 0;
    tree = sub;
  }
  const rebased = {
    ...tree,
    children: tree.children.map(
      (child) => child.type === "element" ? normalizeHastElement(child, canvasSlug, sourceSlug) : child
    )
  };
  return toHtml(rebased, { allowDangerousHtml: true });
}
function renderNode(node3, renderedTexts, slug2, allFiles, visited) {
  const color3 = resolveColor(node3.color);
  const baseStyle = {
    left: `${node3.x}px`,
    top: `${node3.y}px`,
    width: `${node3.width}px`,
    height: `${node3.height}px`
  };
  if (color3) {
    baseStyle["--canvas-node-color"] = color3;
  }
  const styleStr = Object.entries(baseStyle).map(([k, v2]) => `${k}:${v2}`).join(";");
  switch (node3.type) {
    case "text": {
      const html8 = renderedTexts[node3.id];
      return /* @__PURE__ */ u2("div", { class: "canvas-node canvas-node-text", "data-node-id": node3.id, style: styleStr, children: html8 ? /* @__PURE__ */ u2("div", { class: "canvas-node-content", dangerouslySetInnerHTML: { __html: html8 } }) : /* @__PURE__ */ u2("div", { class: "canvas-node-content", children: node3.text }) });
    }
    case "file": {
      const filename = node3.file.split("/").pop()?.replace(/\.md$/, "") ?? node3.file;
      const fileSlug = slugifyFilePath(node3.file);
      const isImage = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico)$/i.test(node3.file);
      if (isImage) {
        return /* @__PURE__ */ u2(
          "div",
          {
            class: "canvas-node canvas-node-file canvas-node-image",
            "data-node-id": node3.id,
            style: styleStr,
            children: /* @__PURE__ */ u2("img", { src: resolveRelative(slug2, fileSlug), alt: filename, loading: "lazy" })
          }
        );
      }
      const embedded = resolveEmbeddedHtml(fileSlug, slug2, allFiles, node3.subpath, visited);
      return /* @__PURE__ */ u2("div", { class: "canvas-node canvas-node-file", "data-node-id": node3.id, style: styleStr, children: [
        /* @__PURE__ */ u2("div", { class: "canvas-file-label", children: [
          /* @__PURE__ */ u2(
            "a",
            {
              href: resolveRelative(slug2, fileSlug),
              class: "canvas-file-link internal internal-link",
              "data-slug": fileSlug,
              children: filename
            }
          ),
          node3.subpath && /* @__PURE__ */ u2("span", { class: "canvas-file-subpath", children: node3.subpath })
        ] }),
        /* @__PURE__ */ u2("div", { class: "canvas-node-content", children: embedded ? /* @__PURE__ */ u2("div", { class: "canvas-embed-content", dangerouslySetInnerHTML: { __html: embedded } }) : /* @__PURE__ */ u2(
          "a",
          {
            href: resolveRelative(slug2, fileSlug),
            class: "canvas-file-link internal internal-link",
            "data-slug": fileSlug,
            children: filename
          }
        ) })
      ] });
    }
    case "link": {
      let hostname;
      try {
        hostname = new URL(node3.url).hostname;
      } catch {
        hostname = node3.url;
      }
      return /* @__PURE__ */ u2("div", { class: "canvas-node canvas-node-link", "data-node-id": node3.id, style: styleStr, children: [
        /* @__PURE__ */ u2("div", { class: "canvas-link-label", children: /* @__PURE__ */ u2(
          "a",
          {
            href: node3.url,
            class: "canvas-link external external-link",
            target: "_blank",
            rel: "noopener noreferrer",
            children: hostname
          }
        ) }),
        /* @__PURE__ */ u2("div", { class: "canvas-node-content canvas-iframe-wrapper", children: [
          /* @__PURE__ */ u2(
            "iframe",
            {
              src: node3.url,
              title: hostname,
              sandbox: "allow-scripts allow-same-origin allow-popups",
              loading: "lazy",
              referrerpolicy: "no-referrer"
            }
          ),
          /* @__PURE__ */ u2("div", { class: "canvas-iframe-fallback", children: /* @__PURE__ */ u2("a", { href: node3.url, target: "_blank", rel: "noopener noreferrer", children: [
            "Open ",
            hostname,
            " in new tab"
          ] }) })
        ] })
      ] });
    }
    case "group":
      return /* @__PURE__ */ u2("div", { class: "canvas-node canvas-node-group", "data-node-id": node3.id, style: styleStr, children: node3.label && /* @__PURE__ */ u2("div", { class: "canvas-group-label", children: node3.label }) });
    default:
      return null;
  }
}
function renderEdge(edge, nodeMap) {
  const fromNode = nodeMap.get(edge.fromNode);
  const toNode = nodeMap.get(edge.toNode);
  if (!fromNode || !toNode) return null;
  const from = getEdgeAnchor(fromNode, edge.fromSide);
  const to = getEdgeAnchor(toNode, edge.toSide);
  const color3 = resolveColor(edge.color);
  const hasFromArrow = edge.fromEnd === "arrow";
  const hasToArrow = (edge.toEnd ?? "arrow") === "arrow";
  const markerId = `arrow-${edge.id}`;
  const markerStartId = `arrow-start-${edge.id}`;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const midX = from.x + dx / 2;
  const midY = from.y + dy / 2;
  const pathD = `M ${from.x} ${from.y} Q ${midX} ${from.y}, ${midX} ${midY} T ${to.x} ${to.y}`;
  return /* @__PURE__ */ u2("g", { class: "canvas-edge", "data-edge-id": edge.id, children: [
    /* @__PURE__ */ u2("defs", { children: [
      hasToArrow && /* @__PURE__ */ u2(
        "marker",
        {
          id: markerId,
          viewBox: "0 0 10 10",
          refX: "9",
          refY: "5",
          markerWidth: "6",
          markerHeight: "6",
          orient: "auto-start-reverse",
          children: /* @__PURE__ */ u2("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: color3 ?? "var(--darkgray)" })
        }
      ),
      hasFromArrow && /* @__PURE__ */ u2(
        "marker",
        {
          id: markerStartId,
          viewBox: "0 0 10 10",
          refX: "1",
          refY: "5",
          markerWidth: "6",
          markerHeight: "6",
          orient: "auto-start-reverse",
          children: /* @__PURE__ */ u2("path", { d: "M 10 0 L 0 5 L 10 10 z", fill: color3 ?? "var(--darkgray)" })
        }
      )
    ] }),
    /* @__PURE__ */ u2(
      "path",
      {
        d: pathD,
        fill: "none",
        stroke: color3 ?? "var(--darkgray)",
        "stroke-width": "2",
        "marker-end": hasToArrow ? `url(#${markerId})` : void 0,
        "marker-start": hasFromArrow ? `url(#${markerStartId})` : void 0
      }
    ),
    edge.label && /* @__PURE__ */ u2("g", { class: "canvas-edge-label-group", children: [
      /* @__PURE__ */ u2(
        "rect",
        {
          x: midX - edge.label.length * 3.5 - 4,
          y: midY - 20,
          width: edge.label.length * 7 + 8,
          height: 16,
          rx: "3",
          class: "canvas-edge-label-bg"
        }
      ),
      /* @__PURE__ */ u2("text", { x: midX, y: midY, class: "canvas-edge-label", "text-anchor": "middle", dy: "-8", children: edge.label })
    ] })
  ] });
}
var CanvasBody_default = ((userOpts) => {
  const Component = (props) => {
    const fileData = props.fileData;
    const slug2 = props.fileData.slug ?? "";
    const canvasData = fileData.canvasData;
    if (!canvasData) {
      return /* @__PURE__ */ u2("article", { class: "canvas-page popover-hint", children: /* @__PURE__ */ u2("p", { children: "No canvas data found." }) });
    }
    const nodes = canvasData.nodes ?? [];
    const edges = canvasData.edges ?? [];
    const renderedTexts = canvasData.renderedTexts ?? {};
    const allFiles = props.allFiles;
    const visited = /* @__PURE__ */ new Set([slug2]);
    const nodeMap = /* @__PURE__ */ new Map();
    for (const node3 of nodes) {
      nodeMap.set(node3.id, node3);
    }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node3 of nodes) {
      minX = Math.min(minX, node3.x);
      minY = Math.min(minY, node3.y);
      maxX = Math.max(maxX, node3.x + node3.width);
      maxY = Math.max(maxY, node3.y + node3.height);
    }
    if (nodes.length === 0) {
      minX = minY = 0;
      maxX = maxY = 100;
    }
    const padding = 50;
    const viewWidth = maxX - minX + padding * 2;
    const viewHeight = maxY - minY + padding * 2;
    const opts = userOpts ?? {};
    const enableInteraction = opts.enableInteraction ?? true;
    const initialZoom = opts.initialZoom ?? 1;
    const minZoom = opts.minZoom ?? 0.1;
    const maxZoom = opts.maxZoom ?? 5;
    return /* @__PURE__ */ u2("article", { class: "canvas-page popover-hint", children: /* @__PURE__ */ u2(
      "div",
      {
        class: "canvas-container",
        "data-enable-interaction": enableInteraction.toString(),
        "data-initial-zoom": initialZoom.toString(),
        "data-min-zoom": minZoom.toString(),
        "data-max-zoom": maxZoom.toString(),
        children: [
          /* @__PURE__ */ u2("div", { class: "canvas-controls", children: [
            /* @__PURE__ */ u2("div", { class: "canvas-zoom-group", children: [
              /* @__PURE__ */ u2("button", { class: "canvas-zoom-in", type: "button", "aria-label": "Zoom in", children: /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: [
                    /* @__PURE__ */ u2("circle", { cx: "11", cy: "11", r: "8" }),
                    /* @__PURE__ */ u2("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                    /* @__PURE__ */ u2("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                    /* @__PURE__ */ u2("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                  ]
                }
              ) }),
              /* @__PURE__ */ u2("button", { class: "canvas-zoom-out", type: "button", "aria-label": "Zoom out", children: /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  children: [
                    /* @__PURE__ */ u2("circle", { cx: "11", cy: "11", r: "8" }),
                    /* @__PURE__ */ u2("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                    /* @__PURE__ */ u2("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ u2(
              "button",
              {
                class: "canvas-reset-view",
                type: "button",
                "aria-label": "Reset view",
                style: "display:none",
                children: /* @__PURE__ */ u2(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    children: [
                      /* @__PURE__ */ u2("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                      /* @__PURE__ */ u2("path", { d: "M3 3v5h5" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ u2("button", { class: "canvas-fullscreen-toggle", type: "button", "aria-label": "Toggle fullscreen", children: [
              /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "canvas-fullscreen-enter",
                  children: [
                    /* @__PURE__ */ u2("path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }),
                    /* @__PURE__ */ u2("path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }),
                    /* @__PURE__ */ u2("path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }),
                    /* @__PURE__ */ u2("path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" })
                  ]
                }
              ),
              /* @__PURE__ */ u2(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "canvas-fullscreen-exit",
                  style: "display:none",
                  children: [
                    /* @__PURE__ */ u2("path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }),
                    /* @__PURE__ */ u2("path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }),
                    /* @__PURE__ */ u2("path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }),
                    /* @__PURE__ */ u2("path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u2("div", { class: "canvas-viewport", style: `width:${viewWidth}px;height:${viewHeight}px`, children: [
            /* @__PURE__ */ u2(
              "div",
              {
                class: "canvas-nodes",
                style: `transform:translate(${-minX + padding}px,${-minY + padding}px)`,
                children: nodes.map((node3) => renderNode(node3, renderedTexts, slug2, allFiles, visited))
              }
            ),
            /* @__PURE__ */ u2(
              "svg",
              {
                class: "canvas-edges",
                width: viewWidth,
                height: viewHeight,
                viewBox: `${minX - padding} ${minY - padding} ${viewWidth} ${viewHeight}`,
                children: edges.map((edge) => renderEdge(edge, nodeMap))
              }
            )
          ] })
        ]
      }
    ) });
  };
  Component.css = canvas_default;
  Component.afterDOMLoaded = canvas_inline_default;
  return Component;
});

// src/pageType.ts
function renderMarkdown(text8, sourceSlug, allSlugs) {
  const processor = unified().use(remarkParse).use(remarkGfm).use(remarkObsidian, {
    wikilinks: true
  }).use(() => {
    return (tree2) => {
      visit(tree2, (node3, index2, parent) => {
        if (node3.type !== "wikilink") return;
        if (parent == null || index2 == null) return;
        const wikilink = node3;
        if (wikilink.embedded) return;
        const path2 = wikilink.path?.trim() ?? "";
        const heading4 = wikilink.heading?.trim() ?? "";
        const alias = wikilink.alias?.trim() ?? "";
        if (!path2 && !heading4) return;
        const isBlockReference = heading4.startsWith("^");
        const anchor = heading4 ? `#${isBlockReference ? heading4 : heading4}` : "";
        const target = path2 + anchor;
        const href = transformLink(sourceSlug, target, {
          allSlugs
        });
        const link4 = {
          type: "link",
          url: href,
          children: [
            {
              type: "text",
              value: alias || (path2 && heading4 ? `${path2} > ${heading4}` : path2 || heading4)
            }
          ]
        };
        parent.children[index2] = link4;
      });
    };
  }).use(remarkRehype, { allowDangerousHtml: true });
  const tree = processor.runSync(processor.parse(text8));
  return toHtml(tree, {
    allowDangerousHtml: true
  });
}
function preprocessCanvasData(data, sourceSlug, allSlugs) {
  const renderedTexts = {};
  for (const node3 of data.nodes ?? []) {
    if (node3.type === "text" && node3.text) {
      renderedTexts[node3.id] = renderMarkdown(
        node3.text,
        sourceSlug,
        allSlugs
      );
    }
  }
  return { ...data, renderedTexts };
}
var canvasMatcher = ({ fileData }) => {
  return "canvasData" in fileData;
};
var CanvasPage = (opts) => ({
  name: "CanvasPage",
  priority: 20,
  fileExtensions: [".canvas"],
  match: canvasMatcher,
  generate({ ctx }) {
    const canvasFiles = ctx.allFiles.filter((fp) => fp.endsWith(".canvas"));
    const virtualPages = [];
    for (const filePath of canvasFiles) {
      const fullPath = join(ctx.argv.directory, filePath);
      let canvasData;
      try {
        const raw2 = readFileSync(fullPath, "utf-8");
        canvasData = JSON.parse(raw2);
      } catch {
        continue;
      }
      const baseName = filePath.replace(/\.canvas$/, "").split("/").pop() ?? "Canvas";
      const slug2 = slugifyFilePath(filePath);
      const processedData = preprocessCanvasData(
        canvasData,
        slug2,
        ctx.allSlugs
      );
      virtualPages.push({
        slug: slug2,
        title: baseName,
        data: {
          frontmatter: {
            title: baseName,
            tags: []
          },
          canvasData: processedData,
          canvasOptions: opts
        }
      });
    }
    return virtualPages;
  },
  layout: "canvas",
  frame: "canvas",
  body: CanvasBody_default
});

// src/frames/CanvasFrame.tsx
var CanvasFrame = {
  name: "canvas",
  css: `
.page[data-frame="canvas"] {
  max-width: none;
  margin: 0;
  min-height: 100vh;
}

.page[data-frame="canvas"] > #quartz-body {
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  grid-template-areas:
    "grid-center";
  height: 100vh;
  padding: 0;
}

.page[data-frame="canvas"] > #quartz-body > .center.canvas-frame {
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  margin: 0;
}

.page[data-frame="canvas"] > #quartz-body.lock-scroll > * {
  transform: none;
}
`,
  render({ componentData, pageBody: Content, left }) {
    const renderSlot = (Component) => Component(componentData);
    return /* @__PURE__ */ u2("div", { class: "center canvas-frame", children: [
      /* @__PURE__ */ u2("button", { class: "canvas-sidebar-toggle", type: "button", "aria-label": "Toggle sidebar", children: [
        /* @__PURE__ */ u2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "canvas-sidebar-icon-open",
            children: [
              /* @__PURE__ */ u2("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
              /* @__PURE__ */ u2("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
              /* @__PURE__ */ u2("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
            ]
          }
        ),
        /* @__PURE__ */ u2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "canvas-sidebar-icon-close",
            children: [
              /* @__PURE__ */ u2("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              /* @__PURE__ */ u2("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ u2("aside", { class: "canvas-sidebar", children: left.map((BodyComponent) => renderSlot(BodyComponent)) }),
      /* @__PURE__ */ u2("div", { class: "canvas-stage", children: renderSlot(Content) })
    ] });
  }
};

export { CanvasBody_default as CanvasBody, CanvasFrame, CanvasPage };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map