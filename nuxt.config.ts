import itLocale from "./locales/it.json"
import enLocale from "./locales/en.json"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Blueprint",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "This is my first Nuxt App",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss", // https://nuxt.com/modules/tailwindcss
    "@nuxtjs/color-mode", // https://nuxt.com/modules/color-mode
    "@nuxtjs/i18n", // https://nuxt.com/modules/i18n
    "@nuxtjs/algolia", // https://nuxt.com/modules/algolia
    "@nuxtjs/partytown", // https://nuxt.com/modules/partytown
    "@nuxtjs/fontaine", // https://nuxt.com/modules/fontaine
    "nuxt-delay-hydration", // https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-delayed-hydration-4cif
    "@nuxtjs/critters", // https://dev.to/jacobandrewsky/optimizing-css-performance-in-nuxt-with-critters-4k8i
    "nuxt-icon", // https://nuxt.com/modules/icon
    "nuxt-headlessui", // https://nuxt.com/modules/headlessui
    "@nuxt/devtools",
  ],

  /* CSS */

  css: ["@/assets/style/app.scss"],

  tailwindcss: {
    cssPath: "~/assets/style/app.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,

    injectPosition: 0,
    viewer: true,
  },

  /* Utils */

  devtools: {
    enabled: true,
  },

  colorMode: {
    classSuffix: "",
  },

  i18n: {
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "it",
      messages: {
        it: itLocale,
        en: enLocale,
      },
    },
  },

  /* Performance */

  partytown: {
    debug: false,
  },

  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },

  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: "swap",
    },
  },
})
