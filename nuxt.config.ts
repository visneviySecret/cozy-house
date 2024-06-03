import path from 'path'

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/src/App/global.scss'],
    dir: {
        pages: 'src/Pages/',
        layouts: 'src/Layouts/',
    },
    modules: ['@nuxt/image', '@vueuse/motion/nuxt'],
    app: {
        head: {
            title: 'Cozy House',
            meta: [{ name: 'description', content: 'Shelter-dom' }],
        },
    },
    build: {
        transpile: ['@nuxtjs/composition-api', '@nuxtjs/vite'],
    },
    vite: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.vue', '.js', '.ts'],
    },
})
