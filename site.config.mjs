// site.config.mjs
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';
import siteLogo from './src/assets/img/logo.svg';

export const siteConfig = {
  site: 'https://icebreakerdata.com',
  name: 'Icebreaker Data',
  logo: siteLogo,
  adapter: cloudflare(),
  starlightIntegration: starlight({
    title: 'Icebreaker Data',
    disable404Route: true,
    sidebar: [
      { label: 'Welcome', link: '/docs' },
      { label: 'Getting Started', autogenerate: { directory: '/docs/getting-started' } },
      { label: 'How-To Guides', autogenerate: { directory: '/docs/how-to-guides' } },
      { label: 'Concepts and Architecture', autogenerate: { directory: '/docs/concepts-and-architecture' } },
      { label: 'Reference', autogenerate: { directory: '/docs/reference' } },
      { label: 'Release Notes', autogenerate: { directory: '/docs/release-notes' } },
    ]
  }),
};