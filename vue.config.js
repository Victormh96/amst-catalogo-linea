const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    display: "standalone",
    theme_color: "#ffffff",
    name: "Ubícalo en Tecla",
    background_color: "#ffffff",
    manifestOptions: {
      screenshots: [
        {
          src: "./img/icons/home.png",
          sizes: "750x1334",
          type: "image/png"
        },

        {
          src: "./img/icons/category.png",
          sizes: "750x1334",
          type: "image/png"
        },

        {
          src: "./img/icons/catalog.png",
          sizes: "750x1334",
          type: "image/png"
        },

        {
          src: "./img/icons/account.png",
          sizes: "750x1334",
          type: "image/png"
        }
      ]
    }
  }
})
