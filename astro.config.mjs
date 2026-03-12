import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { icebreakerConfig } from './site.config.mjs';

export default defineConfig({
  // Spread your Icebreaker settings first
  ...icebreakerConfig,

  // Accessible Astro theme defaults
  compressHTML: true,
  integrations: [
    ...icebreakerConfig.integrations, // Adds Starlight from your config
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
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
});