// site.config.mjs
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

export const icebreakerConfig = {
  site: 'https://icebreakerdata.com',
  adapter: cloudflare(),
  integrations: [
    starlight({
      title: 'Icebreaker',
      disable404Route: true,
      sidebar: [
        { label: 'Welcome', link: '/docs' },
        { label: 'Getting Started', autogenerate: { directory: '/docs/getting-started' } },
        { label: 'How-To Guides', autogenerate: { directory: '/docs/how-to-guides' } },
        { label: 'Concepts and Architecture', autogenerate: { directory: '/docs/concepts-and-architecture' } },
        { label: 'Reference', autogenerate: { directory: '/docs/reference' } },
        { label: 'Release Notes', autogenerate: { directory: '/docs/release-notes' } },
      ],
    }),
  ],
};