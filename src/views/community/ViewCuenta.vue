<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="cuenta" v-for="(l, index) in this.lista" v-bind:key="index">
            <div class="container mt-5">
                <div class="row">
                    <!--Aside-->
                    <aside class="col-3">

                        <!--Img-->
                        <img :src="this.url + `/storage/${ l.foto }`" :alt="`${ l.slug }`" v-if="l.foto">

                        <!--Profile-->
                        <div class="card mb-4">
                            <div class="information ms-4 me-4">
                                <small class="me-1">{{ l.nombre_cuenta }}</small>
                                <i class="fa-solid fa-mars-stroke"></i>
                            </div>

                            <!--Tags-->
                            <div class="tag ms-4 me-4">
                                <span class="tag me-2 mb-1" v-for="(r, index) in l.servicio" v-bind:key="index">
                                    {{ r.rubro.nombre_rubro }}
                                </span>
                            </div>

                            <!--Networks-->
                            <div class="networks">
                                <a href="/" target="blank">
                                    <i class="fab fa-facebook-square me-3"></i>
                                </a>
                                <a href="/" target="blank">
                                    <i class="fab fa-instagram me-3"></i>
                                </a>
                                <a href="/" target="blank">
                                    <i class="fab fa-twitter me-3"></i>
                                </a>
                                <a href="/" target="blank">
                                    <i class="fab fa-linkedin me-3"></i>
                                </a>
                                <a href="/" target="blank">
                                    <i class="fab fa-whatsapp me-3"></i>
                                </a>
                                <a href="/">
                                    <i class="fa-solid fa-globe me-3"></i>
                                </a>
                                <a href="/">
                                    <i class="fa-solid fa-mobile-screen-button me-3 d-none"></i>
                                </a>
                                <a href="/">
                                    <i class="fas fa-phone me-3 d-none"></i>
                                </a>
                            </div>

                            <!--Delivery-->
                            <p>En Lugar</p>
                        </div>

                        <!--advertising-->
                        <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper"
                            @slideChange="onSlideChange">
                            <swiper-slide><img src="https://i.ibb.co/MSqh0Z1/Rectangle-111.png" /></swiper-slide>
                        </swiper>
                    </aside>

                    <!--Div-->
                    <article class="col-9">

                        <!--Maps-->
                        <div class="card mb-4">
                            <div id="map"></div>
                        </div>

                        <!--Tabs-->
                        <div class="tabs">
                            <a href="">MI PERFIL</a>
                            <a href="">GALERIA</a>
                        </div>

                        <!--Card-->
                        <div class="card">

                            <!--Profile-->
                            <div id="profile" class="profile">
                                <div class="review-box descripcion_container">
                                    <div class="descripcion_medico">
                                        <p class="descripcion">Descripción Personal: {{this.lista[0].descripcion}}</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="indent_title_in">

                                    <h3><i class="fa-solid fa-book-open-reader p-2"></i>Servicios</h3>
                                </div>
                                <div class="wrapper_indent mt-1">
                                    <div class="row m-1">
                                        <!--v-for con los servicios-->
                                        <div v-for="(servicio, index) in this.lista[0].servicio" v-bind:key="index"
                                            class="col-md-6 p-4">
                                            <div class="row card-service p-4 ">
                                                <div class="col-md-3">
                                                    <img :src="this.url + `/storage/${servicio.rubro.imagen}`"
                                                        class="card-img mx-auto d-block">
                                                    <h4 class="mt-2 text-center">{{servicio.rubro.nombre_rubro}}</h4>
                                                </div>
                                                <div class="col-md-9">
                                                    <h5 class="text-end mb-3"><i class="fa-solid fa-bookmark ps-2 pe-2"></i>{{servicio.anios_experiencia}} de experiencia</h5>
                                                    <p class="text-start">Descripción: {{servicio.descripcion}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="indent_title_in">
                                    <h3> <i class="fa-solid fa-share-nodes mt-1 p-2"></i>  Compartir</h3>
                                </div>
                                <div class="wrapper_indent">
                                    <a class="facebook3" href="javascript:void(0)"><i
                                            class="fab fa-facebook-square"></i></a>
                                    <a class="twitter3" href="javascript:void(0)"><i
                                            class="fab fa-twitter-square"></i></a>
                                    <a class="whatsapp3" target="_blank"
                                        href="whatsapp://send?text=https://medicosdeguatemala.net/professional/"><i
                                            class="fab fa-whatsapp-square"></i></a>
                                </div>
                            </div>

                            <!--Galery-->
                            <div class="galery">
                                <div>galeria</div>
                            </div>
                        </div>
                    </article>
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
import L from 'leaflet'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            buscar: '',
            lista: [],
            skeleton: false
        }
    },

    async mounted() {

        //Vuex
        await this.$store.dispatch("Cuenta", this.slug)
        this.lista = this.$store.state.community.cuenta[0]

        console.log(this.lista[0].servicio)

        //Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

        //Skeleton
        setTimeout(() => {
            this.maps()
        }, 950)
    },

    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },

    methods: {
        maps() {
            // Initial
            this.map = L.map('map', {
                zoomControl: false,
                dragging: false,
                scrollWheelZoom: false
            }).setView([13.675997400000004, -89.28905480533759], 15)

            // Setting
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,

            }).addTo(this.map)

            L.marker([13.675997400000004, -89.28905480533759],).bindPopup("asd").addTo(this.map)
        },
    },

    props: ["slug"]
};
</script>
  
  