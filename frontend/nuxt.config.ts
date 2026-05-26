export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'AgriAssist AI',
      meta: [
        {
          name: 'description',
          content:
            'AgriAssist AI is a smart agriculture platform with AI-driven insights, farmer support, and operational dashboards.'
        }
      ]
    }
  }
})
