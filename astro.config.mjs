import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite'; 
import { icebreakerConfig } from './site.config.mjs'; // ICEBREAKER OVERRIDE

export default defineConfig({
  // ICEBREAKER OVERRIDES
  site: icebreakerConfig.site,
  adapter: icebreakerConfig.adapter,
  
  compressHTML: true,

  integrations: [
    icebreakerConfig.starlightIntegration, // ICEBREAKER OVERRIDE
    mdx(),
    icon(),
    compress(),
  ],

  vite: {
    plugins: [tailwindcss()], 
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // Add this to help Sass 
          logger: { warn: () => {} },
        },
      },
    },
  },
});