// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css", "ag-grid-community/styles/ag-grid.css", "ag-grid-community/styles/ag-theme-alpine.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
