import { GitContentSource } from '@stackbit/cms-git'
import { defineStackbitConfig } from '@stackbit/types'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  devCommand: 'npm run dev --port 3000 --host {HOSTNAME}',
  contentSources: [
    new GitContentSource({
      rootPath: './src', // project root
      // Adjust to your theme’s content path:
      contentDirs: ['content'],
      models: [
        {
          name: 'post',
          type: 'page',
          label: 'Post',
          urlPath: 'content/blog/{slug}',
          filePath: 'content/blog/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'date', type: 'date', required: false },
            { name: 'excerpt', type: 'string', required: false },
            { name: 'summary', type: 'string', required: false },
            { name: 'description', type: 'string', required: false },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'image', type: 'image', required: false },
            { name: 'body', type: 'markdown', required: true },
          ],
        },
      ],
    }),
  ],
})
