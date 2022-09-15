<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="nosotros" class="mb-5 mt-4 mt-sm-5">
            <div class="container">
                <div class="row ">

                    <!--Img-->
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-m-5 d-grid mb-4 mb-lg-0">
                        <swiper :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }" :modules="modules"
                            :loop="true" :effect="'fade'">
                            <swiper-slide v-for="(p, index) in this.portada" v-bind:key="index">
                                <img :src="this.url + `/storage/${ p.imagen }`" alt="adsdasd" />

                            </swiper-slide>
                        </swiper>
                    </div>

                    <!--Description-->
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <h3 class="mb-4 text-center">Ubícalo en Tecla</h3>
                        <p class="mb-4 ps-0 ps-sm-4">Es una iniciativa del gobierno municipal de Santa Tecla que busca
                            potenciar la economía local, facilitando a la ciudadanía una herramienta tecnológica para
                            ubicar a tecleños emprendedores que ofertan sus servicios y productos en el municipio. </p>
                        <p class="ps-0 ps-sm-4">Con este proyecto se busca impulsar a más de 1,000 emprendedores
                            tecleños en más de 200 categorías entre oficios y servicios profesionales, además de
                            visibilizar a las empresas que cumplen con su responsabilidad social en la ciudad. </p>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="beneficios">
            <div class="container">
                <div class="row text-center">

                    <!--Cards-->
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex7.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Empresas Responsables</h6>
                            <p class="d-none d-sm-none d-md-block">Empresas establecidas en el municipio de Santa Tecla,
                                solventes y con responsabilidad social.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex8.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Emprendedores</h6>
                            <p class="d-none d-sm-none d-md-block">La red de emprendedores más grande en el municipio de
                                Santa Tecla donde podrás encontrar lo que necesites.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex9.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 200 Categorías</h6>
                            <p class="d-none d-sm-none d-md-block">productos como: artículos de primera necesidad,
                                abarroterías, desechables, servicios de albañilería, etc.</p>
                        </div>
                    </div>
                    <!--Description
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mb-sm-0">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex10.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Empresas</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mb-sm-0">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex11.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 5000 Profesionales</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex12.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 8000 Categorías</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                -->
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="inscribete">
            <div class="container">
                <div class="row row d-flex align-items-center">

                    <!--Description-->
                    <div class="col-md-6">
                        <div class="row">

                            <!--title-->
                            <div class="col-md-12 mb-3 text-left">
                                <h2>¿Quieres ubicar tu producto o servicio en Santa Tecla?</h2>
                            </div>

                            <!--Description-->
                            <div class="col-md-12 mb-5 text-left d-none d-md-none d-lg-block">
                                <p>Inscríbete en la red más grande de servicios y empresas del municipio.</p>
                            </div>

                            <!--Button-->
                            <div class="col-md-12 text-left mb-5 mb-sm-0">
                                <a href="/registro-servicio" class="me-4 mb-3 mb-lg-0">INSCRIBE TUS SERVICIOS</a>
                                <a href="/registro-empresa" class="white">INSCRIBE TU EMPRESA</a>
                            </div>
                        </div>
                    </div>

                    <!--Img-->
                    <div class="col-md-6 text-center">
                        <img src="@/../public/img/assets/shapex5.png" alt="Telefono AMST">
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!--Skeleton-->
    <main class="top" v-else>
        <div id="skeleton"></div>
    </main>

    <!--Footer-->
    <Footer />
</template>

<!--=======Script=======-->
<script>
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            portada: [],
            skeleton: false,
        }
    },

    async mounted() {
        await this.$store.dispatch("PortadaNosotros")
        this.portada = this.$store.state.community.portadanosotros
        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)
    },

    setup() {
        // Modules
        return {
            modules: [Autoplay, EffectFade]
        }
    },

    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide
    },
};
</script>