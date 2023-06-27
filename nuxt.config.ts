export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/src/App/global.scss'],
    modules: ['@nuxt/image'],
    app: {
        head: {
            title: 'Cozy House',
            meta: [{ name: 'description', content: 'Shelter-dom' }],
        },
    },
})
