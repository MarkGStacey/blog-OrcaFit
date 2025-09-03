'use strict'
const __defProp = Object.defineProperty
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropNames = Object.getOwnPropertyNames
const __hasOwnProp = Object.prototype.hasOwnProperty
function __export(target, all) {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
function __copyProps(to, from, except, desc) {
  if (from && typeof from === 'object' || typeof from === 'function') {
    for (const key of __getOwnPropNames(from)) {
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable })
    }
  }
  return to
}
const __toCommonJS = mod => __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// stackbit.config.ts
const stackbit_config_exports = {}
__export(stackbit_config_exports, {
  default: () => stackbit_config_default,
})
module.exports = __toCommonJS(stackbit_config_exports)
const import_cms_git = require('@stackbit/cms-git')
const import_types = require('@stackbit/types')

var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: '.',
      // project root
      // Adjust to your theme’s content path:
      contentDirs: ['src/content', 'content'],
      models: [
        {
          name: 'post',
          label: 'Post',
          filePathPattern: 'src/content/blog/**/*.md*',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'date', type: 'date', required: true },
            { name: 'excerpt', type: 'string' },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'image', type: 'image' },
            { name: 'body', type: 'markdown', required: true },
          ],
        },
      ],
    }),
  ],
})
// # sourceMappingURL=stackbit.config.ILZ624ZM.cjs.map
