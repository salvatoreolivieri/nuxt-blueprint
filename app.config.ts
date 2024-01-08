export default defineAppConfig({
  // Here you can browse all the icons: https://icones.js.org/
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    aliases: {
      nuxt: "logos:nuxt-icon",
    },
  },

  ui: {
    global: true,
    notifications: {
      // Show toasts at the bottom right of the screen
      position: "bottom-0",
      default: {
        timeout: 2000,
      },
    },
  },
})
