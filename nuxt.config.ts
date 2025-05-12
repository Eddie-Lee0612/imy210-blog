/* eslint-disable no-undef */
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  eslint: {
    lintOnStart: false,
    emitWarning: false, // Suppress warnings
    emitError: false // Suppress errors
  }
})
