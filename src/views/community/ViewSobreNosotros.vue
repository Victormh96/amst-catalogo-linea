<template>
    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="nosotros">
            <div class="container mb-5 mt-4 mt-sm-5">
                <div class="row">

                    <!--Div-->
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-m-5 d-grid mb-4 mb-lg-0">

                        <!--Group-->
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

                            <!--Sleeve-->
                            <div class="carousel-inner">

                                <!--Items-->
                                <div :class="index == 0 ? 'carousel-item active' : 'carousel-item'"
                                    v-for="(p, index) in this.portada" v-bind:key="index">

                                    <!--Video-->
                                    <video autoplay loop muted v-if="p.imagen.substr(-3, 3) == 'mp4'"
                                        poster="@/../public/img/assets/shapex16.png">
                                        <source :src="this.url + `/storage/${p.imagen}`" type="video/mp4" />
                                    </video>

                                    <!--Img-->
                                    <img :src="this.url + `/storage/${p.imagen}`" v-else />
                                </div>
                            </div>

                            <!--Button-->
                            <button class="carousel-control-next d-none" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            </button>
                        </div>
                    </div>

                    <!--Div-->
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                        <!--Title-->
                        <h3 class="mb-4 text-center">Ubícalo en Tecla</h3>

                        <!--Description-->
                        <p class="mb-4 ps-0 ps-sm-4">Es una iniciativa del gobierno municipal de Santa Tecla que busca
                            potenciar la economía local, facilitando a la ciudadanía una herramienta tecnológica para
                            ubicar a tecleños emprendedores que ofertan sus servicios y productos en el municipio. </p>

                        <!--Description-->
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

                    <!--Cards #1-->
                    <div class="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-5 mb-md-0">
                        <div class="tag">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex7.png" class="mx-auto d-block" alt="Busqueda AMST">

                            <!--Title-->
                            <h6 class="mb-3 mt-3 mb-m-0 espacio">+ 1000 Empresas</h6>

                            <!--Description-->
                            <p class="d-none d-sm-none d-lg-block">Empresas establecidas en el municipio de Santa Tecla,
                                solventes y con responsabilidad social.
                            </p>
                        </div>
                    </div>

                    <!--Cards #2-->
                    <div class="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-5 mb-md-0">
                        <div class="tag">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex8.png" class="mx-auto d-block" alt="Busqueda AMST">

                            <!--Title-->
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Emprendedores</h6>

                            <!--Description-->
                            <p class="d-none d-sm-none d-lg-block">La red de emprendedores más grande en el municipio de
                                Santa Tecla donde podrás encontrar lo que necesites.</p>
                        </div>
                    </div>

                    <!--Cards #3-->
                    <div class="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-0 mb-sm-0 mx-auto">
                        <div class="tag">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex9.png" class="mx-auto d-block" alt="Busqueda AMST">

                            <!--Title-->
                            <h6 class="mb-3 mt-3 mb-m-0 espacio">+ 200 Categorías</h6>

                            <!--Description-->
                            <p class="d-none d-sm-none d-lg-block">productos como: artículos de primera necesidad,
                                abarroterías, desechables, servicios de albañilería, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="inscribete">
            <div class="container">
                <div class="row row d-flex align-items-center">

                    <!--Div-->
                    <div class="col-md-6">
                        <div class="row">

                            <!--Title-->
                            <div class="col-md-12 mb-3 text-left">
                                <h2>¿Quieres ubicar tu producto, servicio en Santa Tecla?</h2>
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
import $ from "jquery"
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
        // Vuex
        await this.$store.dispatch("Portada", 'Nosotros')
        this.portada = this.$store.state.community.portada

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

        // Carousel
        setTimeout(() => {
            $(".carousel-control-next").trigger('click')
        }, 6000)
    },

    components: {
        Navbar,
        Footer
    },
};
</script>