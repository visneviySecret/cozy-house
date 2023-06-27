module.exports = {
    // другие настройки конфигурации...
    build: {
        rollupOptions: {
            // другие опции rollup...
            external: ['/src/shared/Button'],
        },
    },
}
