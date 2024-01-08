import itLocale from "./locales/it.json"
import enLocale from "./locales/en.json"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "QR Code Project",
      htmlAttrs: {
        lang: "it",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "robots",
          name: "robots",
          content: "all",
        },
        {
          hid: "description",
          name: "description",
          content: "Description",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
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
})
