// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://virtuecoder.github.io/sardynia-astro-site',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});