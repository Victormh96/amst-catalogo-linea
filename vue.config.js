const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "Catálogo Municipal",
    start_url: "/?utm_source=launcher",
    themeColor: "#407ec9",
    display: "standalone",

    screenshots: [
      {
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1-gpv-bEynVHTIChS-PyG3ISlW4ecYy86g&usqp=CAU",
        "sizes": "750x1334",
        "type": "image/png"
      }
    ],
  }
})