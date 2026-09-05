// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://deeply-doppler.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});