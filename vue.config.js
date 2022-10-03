const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Ubícalo en Tecla",
    start_url: "/?utm_source=launcher",
    themeColor: "#407ec9",
    display: "standalone",
  }
})
