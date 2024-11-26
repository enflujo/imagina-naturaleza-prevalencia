import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './estaticos',
  compressHTML: true,
  outDir: './publico',
  site: 'https://imagina.uniandes.edu.co/',
  base: '/prevalence-csea/',
  build: {
    assets: 'estaticos',
  },
  vite: {
    ssr: { noExternal: ['@enflujo/alquimia'] },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
