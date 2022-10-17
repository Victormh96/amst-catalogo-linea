<template>
    <!--Div-->
    <div id="sub-header" class="fixed-top d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">

                <!--Phone-->
                <div class="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-1 d-none d-sm-none d-md-block">
                    <a href="tel:+5032500-1300">
                        <i class="fa-solid fa-phone"></i>
                        <span>2500-1300</span>
                    </a>
                </div>

                <!--Email-->
                <div class="col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 d-none d-sm-none d-md-block">
                    <a href="mailto:info@ubicaloentecla.com">
                        <i class="fa-solid fa-envelope"></i>
                        <span>info@ubicaloentecla.com</span>
                    </a>
                </div>

                <!--Networks-->
                <div class="col-4 col-md-2 col-lg-2 col-xl-4 col-xxl-4">
                    <a href="https://es-la.facebook.com/SantaTeclaSV" target="_blank">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/santateclasv" target="_blank">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/santateclasv/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>

                <!--language-->
                <div class="col-8 col-md-4 col-lg-5 col-xl-3 col-xxl-5 text-end">
                    <img src="@/../public/img/assets/language.png" alt="Idioma" @click="language()">
                </div>
            </div>
        </div>
    </div>

    <!--Div-->
    <header id="header" class="fixed-top">
        <div class="container">
            <div class="row align-items-center">

                <!--Img-->
                <div class="col-12 col-md-4 col-lg-6 col-xl-7 col-xxl-7 text-center text-sm-start">
                    <router-link :to="{ name: 'Inicio' }">
                        <img src="@/../public/icon.png" alt="Alcaldia Municipal Santa Tecla" class="img-fluid">
                    </router-link>
                </div>

                <!--Items-->
                <div class="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5 d-none d-md-block">
                    <nav class="nav-menu">
                        <ul>

                            <!--Home-->
                            <li>
                                <router-link :to="{ name: 'Inicio' }">Inicio</router-link>
                            </li>

                            <!--Services-->
                            <li>
                                <a v-bind:href="'/categoria/' + 'servicios-profesionales'">Servicios</a>
                            </li>

                            <!--Companies-->
                            <li>
                                <a v-bind:href="'/categoria/' + 'empresas'">Empresas</a>
                            </li>

                            <!--About us-->
                            <li>
                                <router-link :to="{ name: 'Sobre-Nosotros' }">Sobre Nosotros</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <!--Div-->
    <div id="mobile" class="d-block d-sm-block d-md-none">

        <!--Home-->
        <router-link :to="{ name: 'Inicio' }" class="d-grid-inline">
            <i class="fa-solid fa-qrcode"></i>
            <span>Inicio</span>
        </router-link>

        <!--Services-->
        <a v-bind:href="'/categoria/' + 'servicios-profesionales'" class="d-grid-inline">
            <i class="fa-solid fa-handshake"></i>
            <span>Servicios</span>
        </a>

        <!--Companies-->
        <a v-bind:href="'/categoria/' + 'empresas'" class="d-grid-inline">
            <i class="fa-solid fa-building"></i>
            <span>Empresas</span>
        </a>

        <!--About us-->
        <router-link :to="{ name: 'Sobre-Nosotros' }" class="d-grid-inline">
            <i class="fa-solid fa-book-open-reader"></i>
            <span>Nosotros</span>
        </router-link>
    </div>
</template>

<!--=======Script=======-->
<script>
export default {
    methods: {
        async language() {
            await this.$store.dispatch("CambiarIdioma")
            location.reload()
        }
    },
};
</script>
