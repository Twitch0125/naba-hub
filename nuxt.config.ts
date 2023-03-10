// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@vueuse/nuxt", "@kevinmarrec/nuxt-pwa"],
  css: [
    "~/assets/css/main.css",
    "@fontsource/rubik/variable.css",
  ],
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "tailwindcss/nesting": {},
    },
  },
  build:{
    transpile: ['@ag-grid-community/vue3']
  },
  pwa: {
    manifest: {
      name: "NABA Hub",
    },
    meta: {
      name: "NABA Hub",
    },
  },
});
