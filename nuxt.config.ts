import itLocale from "./locales/it.json"
import enLocale from "./locales/en.json"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* 
    Enginering:
  */

  app: {
    head: {
      title: "Nuxt Blueprint",
      htmlAttrs: {
        lang: "it",
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

  pwa: {
    meta: {
      title: "Nuxt Blueprint",
      author: "Salvatore Olivieri",
    },
    manifest: {
      name: "Nuxt Blueprint",
      short_name: "Nuxt Blueprint",
      description: "description",
      lang: "it",
    },
    icon: {
      fileName: "favicon.ico",
      sizes: [64, 120, 144, 152, 192, 384, 512],
      splash: {
        backgroundColor: "#ffffff",
        targetDir: "/",
        devices: [],
      },
    },
    workbox: {
      enabled: false,
    },
  },

  modules: [
    "@nuxt/devtools", // https://nuxt.com/modules/devtools
    "@nuxtjs/tailwindcss", // https://nuxt.com/modules/tailwindcss
    "@nuxtjs/color-mode", // https://nuxt.com/modules/color-mode
    "@nuxtjs/i18n", // https://nuxt.com/modules/i18n
    "@nuxtjs/algolia", // https://nuxt.com/modules/algolia
    "@nuxtjs/partytown", // https://nuxt.com/modules/partytown
    "@nuxtjs/fontaine", // https://nuxt.com/modules/fontaine
    "@nuxtjs/critters", // https://dev.to/jacobandrewsky/optimizing-css-performance-in-nuxt-with-critters-4k8i
    "nuxt-delay-hydration", // https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-delayed-hydration-4cif
    "nuxt-icon", // https://nuxt.com/modules/icon
    "nuxt-headlessui", // https://nuxt.com/modules/headlessui
    "@kevinmarrec/nuxt-pwa",
    "@vueuse/nuxt", // https://vueuse.org/
  ],

  /* 
    Style:
  */

  css: ["@/assets/style/app.scss"],

  tailwindcss: {
    cssPath: "~/assets/style/app.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,

    injectPosition: 0,
    viewer: true,
  },

  /* 
    Utils:
  */

  devtools: {
    enabled: true,
  },

  colorMode: {
    classSuffix: "",
  },

  i18n: {
    vueI18n: {
      legacy: false,
      locale: "it",
      fallbackLocale: "it",
      messages: {
        it: itLocale,
        en: enLocale,
      },
    },
  },

  /*
    Performance:
  */

  partytown: {
    debug: false,
  },

  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },
})
