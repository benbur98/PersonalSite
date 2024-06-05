export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon"],
  target: "static",
  ssr: false,
  app: {
    head: {
      title: "Ben Burwood",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bb.ico' }
      ]
    }
  }
})
