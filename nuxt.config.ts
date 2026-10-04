// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Настраиваем Nitro для выгрузки статики строго в папку dist
  nitro: {
    output: {
      publicDir: 'dist'
    }
  }
})
