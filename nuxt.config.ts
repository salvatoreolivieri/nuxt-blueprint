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

  css: ["@/assets/style/app.scss"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@nuxtjs/algolia",
    "@nuxtjs/partytown",
    // https://nuxt.com/modules/fontaine
    "@nuxtjs/fontaine",
  ],

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "~/assets/style/app.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,

    injectPosition: 0,
    viewer: true,
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

  partytown: {
    debug: false,
  },
})
