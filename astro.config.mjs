// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.obscuralawncare.com',
  integrations: [alpinejs({ entrypoint: '/src/entrypoint.ts' }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
