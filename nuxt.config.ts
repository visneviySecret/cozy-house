// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/src/App/global.scss'],
    dir: {
        pages: '/src/Pages/',
        layouts: '/src/Layouts/',
    },
    modules: ['@nuxt/image'],
    app: {
        head: {
            title: 'Cozy House',
            meta: [{ name: 'description', content: 'Shelter-dom' }],
        },
    },
})
