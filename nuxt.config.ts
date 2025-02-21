export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-vuefire'],
  vuefire: {
    config: {
      projectId: 'xxx',
      apiKey: 'xxx',
    },
    auth: {
      enabled: true,
      sessionCookie: true,
    },
    emulators: {
      enabled: true,
    },
  },
})
