import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';

// https://astro.build/config

export default defineConfig({
  compressHTML: true,
  //site: 'https://icebreakerdata.com // creates a site map
  integrations: [
    starlight({
      title: 'Icebreaker',
      disable404Route: true,
      sidebar: [
        { label: 'Welcome', link: '/docs' },
        { 
          label: 'Getting Started', 
          autogenerate: {directory: '/docs/getting-started'},
        },  
        {
          label: 'Guides',
          autogenerate: {directory: '/docs/guides'},
        },
        {
          label: 'Reference',
          autogenerate: {directory: '/docs/reference'},
        },
      ]}),
    mdx(),
    icon(),
    tailwind({applyBaseStyles: false,}), 
    compress()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})