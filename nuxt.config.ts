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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxtjs/algolia",
    "@nuxtjs/partytown",
    // https://nuxt.com/modules/fontaine
    "@nuxtjs/fontaine",
    // https://github.com/harlan-zw/nuxt-delay-hydration
    "nuxt-delay-hydration",
    "nuxt-icon",
    "nuxt-headlessui",
  ],

  /* CSS and Dark Mode */

  colorMode: {
    classSuffix: "",
  },

  css: ["@/assets/style/app.scss"],

  tailwindcss: {
    cssPath: "~/assets/style/app.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,

    injectPosition: 0,
    viewer: true,
  },

  /* Utils */

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
})
