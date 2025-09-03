"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_cms_git = require("@stackbit/cms-git");
var import_types = require("@stackbit/types");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "npm run dev --port 3000 --host {HOSTNAME}",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "./src",
      // project root
      // Adjust to your theme’s content path:
      contentDirs: ["content"],
      models: [
        {
          name: "post",
          type: "page",
          label: "Post",
          urlPath: "content/blog/{slug}",
          filePath: "content/blog/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "date", required: false },
            { name: "excerpt", type: "string", required: false },
            { name: "summary", type: "string", required: false },
            { name: "description", type: "string", required: false },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "image", type: "image", required: false },
            { name: "body", type: "markdown", required: true }
          ]
        }
      ]
    })
  ]
});
//# sourceMappingURL=stackbit.config.73RO2CU2.cjs.map
