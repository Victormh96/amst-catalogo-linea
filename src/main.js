// Imports
import App from "./App.vue"
import store from "./store"
import router from "./router"
import { createApp } from "vue"
import VueTheMask from "vue-the-mask"
import VueSweetalert2 from 'vue-sweetalert2'
import VueAwesomePaginate from "vue-awesome-paginate"


// Css
import "../public/css/bootstrap.css"
import "./registerServiceWorker"
import "../public/css/main.css"
import "swiper/css"
import "vue-awesome-paginate/dist/style.css";

// Initialization
const app = createApp(App)

// Global
app.config.globalProperties.url = process.env.VUE_APP_URL_BASE

// Uses
app.use(store)
    .use(router)
    .use(VueTheMask)
    .use(VueSweetalert2)
    .use(VueAwesomePaginate)
    .mount("#app")