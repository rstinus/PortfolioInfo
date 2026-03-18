// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // MODIF: register Tailwind + Icon modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],

  // MODIF: global <head> — SEO + Google Fonts
  app: {
    head: {
      title: 'Rémy STINUS — Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Rémy STINUS — Software Engineering & Cybersecurity student at Orsay (BUT Informatique).',
        },
        { name: 'theme-color', content: '#0B1120' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  // MODIF: Global CSS (~/ resolves to app/ srcDir in Nuxt 4)
  css: ['~/assets/css/main.css'],
})
