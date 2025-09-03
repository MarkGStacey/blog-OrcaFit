import { GitContentSource } from '@stackbit/cms-git'
import { defineStackbitConfig } from '@stackbit/types'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  devCommand: 'npm run dev -- --port 3000 --host {HOSTNAME}',
  contentSources: [
    new GitContentSource({
      rootPath: './src', // project root
      // Adjust to your theme’s content path:
      contentDirs: ['src/content'],
      models: [
        {
          name: 'post',
          type: 'page',
          label: 'Post',
          urlPath: '/blog/{slug}',
          filePath: 'blog/{slug}.md*',
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
