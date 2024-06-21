import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './estaticos',
  compressHTML: true,
  outDir: './publico',
  site: 'https://enflujo.com',
  base: '/imagina-naturaleza-prevalencia/',
  build: {
    assets: 'estaticos',
  },
  vite: {
    ssr: { noExternal: ['@enflujo/alquimia'] },
  },
});
