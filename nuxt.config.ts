// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['/src/App/global.scss'],
    dir: {
        pages: 'src/Pages/',
    },
})
