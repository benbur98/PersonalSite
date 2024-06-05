export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon"],
  app: {
    head: {
      title: "Ben Burwood",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bb.ico' }
      ]
    }
  },
  // target: "static",
  // ssr: false,
  // nitro: {
  //   prerender: {
  //     routes: ['/404.html']
  //   }
  // },
})
