<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="cuenta">
            <div class="container mt-4 mt-sm-5">
                <div class="row">

                    <!--Aside-->
                    <aside class="col-12 col-md-12 col-lg-3">

                        <!--Verify-->
                        <i class="fa-solid fa-award" v-if="this.lista.verificado == 1"></i>

                        <!--Img-->
                        <img :src="this.url + `/storage/${ this.lista.foto }`" :alt="`${ this.lista.slug }`"
                            v-if="this.lista.foto">

                        <!--Profile-->
                        <div class="card mb-4">
                            <div class="information ms-4 me-4">
                                <small class="me-1">{{ this.lista.nombre_cuenta }}</small>
                                <i v-if="this.lista.genero.id === 1" class="fa-solid fa-mars-stroke"></i>
                                <i v-else class="fa-solid fa-venus"></i>
                                <a :href="'mailto:'+ this.lista.email">{{ this.lista.email }}</a>
                                <a :href="'mailto:'+ this.lista.email">76962288</a>
                            </div>

                            <!--Tags-->
                            <div class="tag ms-4 me-4">
                                <span class="me-2 mb-1" v-for="(r, index) in this.lista.servicio" v-bind:key="index">
                                    {{ r.rubro.nombre_rubro }}
                                </span>
                            </div>

                            <!--Networks-->
                            <div class="networks mb-2">
                                <span v-for="(c, index) in this.lista.contacto" :key="index">
                                    <a :href="`https://api.whatsapp.com/send?phone=503${ c.descripcion }&text=¡Hola ${ this.lista.nombre_cuenta }! Quisiera mas información de sus servicios. 📢📢`"
                                        v-if="c.detallecontacto.id === 5" target="_blank">
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>
                                    <a :href="`tel:${ c.descripcion }`"
                                        v-else-if="c.detallecontacto.id === 7 || c.detallecontacto.id === 8 ">
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>
                                    <a :href="c.descripcion" v-else>
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>
                                </span>
                            </div>

                            <!--Delivery-->
                            <p v-if="this.lista.local === true">En El Lugar</p>
                            <p v-else>A Domicilio</p>
                        </div>

                        <!--Advertising-->
                        <div class="d-grid mb-4">
                            <swiper :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }"
                                :modules="modules" :loop="true" :effect="'fade'">
                                <swiper-slide><img src="@/../public/img/assets/shapex6.png" /></swiper-slide>
                                <swiper-slide><img src="@/../public/img/assets/shapex17.jpg" /></swiper-slide>
                            </swiper>
                        </div>
                    </aside>

                    <!--Div-->
                    <article class="col-12 col-md-12 col-lg-9">

                        <!--Maps-->
                        <div class="mb-4">
                            <div id="map" :class="[this.lista.local == 0 ? 'disabledMap' : '']"></div>
                        </div>

                        <!--Tabs-->
                        <div class="tabs">
                            <span :class="[this.profile === true ? 'activeClass' : '']"
                                v-on:click="this.profile = true">MI PERFIL</span>
                            <span :class="[this.profile === false ? 'activeClass' : '']"
                                v-on:click="this.profile = false" v-if="this.lista.galeria != ''">GALERIA</span>
                        </div>

                        <!--Card-->
                        <div class="card mb-5">

                            <!--Profile-->
                            <div class="profile" v-if="this.profile === true">
                                <div class="box">
                                    <p>{{ this.lista.descripcion }}</p>
                                </div>
                                <hr>

                                <!--Tittle-->
                                <div class="title mb-4">
                                    <h4>
                                        <i class="fa-solid fa-book-open-reader p-2 me-2"></i>
                                        SERVICIOS
                                    </h4>
                                </div>

                                <!--Description-->
                                <div class="row items ms-0 ms-sm-4">
                                    <div v-for="(servicio, index) in this.lista.servicio" v-bind:key="index"
                                        class="col-12 col-md-12 col-lg-6 mb-4 ps-0 pe-0 ps-sm-2 pe-sm-2">
                                        <div class="box">
                                            <div class="row">
                                                <div class="col-md-3 text-center">
                                                    <img :src="this.url + `/storage/${servicio.rubro.imagen}`"
                                                        class="mb-3 mb-sm-2">
                                                    <span class="d-none d-sm-none d-md-block">
                                                        {{ servicio.rubro.nombre_rubro }}
                                                    </span>
                                                </div>

                                                <div class="col-md-9 text-start">
                                                    <h5 class="mb-2"><i class="fa-solid fa-bookmark me-2"></i>
                                                        {{ servicio.anios_experiencia }}
                                                    </h5>
                                                    <small>{{ servicio.descripcion }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-1">

                                <!--Tittle-->
                                <div class="title mb-4">
                                    <h4>
                                        <i class="fa-solid fa-book-open-reader p-2 me-2"></i>
                                        COMPARTIR
                                    </h4>
                                </div>

                                <!--Networks-->
                                <div class="share ms-5">
                                    <a class="facebook me-4" href="javascript:void(0)"><i
                                            class="fab fa-facebook-square"></i></a>
                                    <a class="twitter me-4" href="javascript:void(0)"><i
                                            class="fab fa-twitter-square"></i></a>
                                    <a class="whatsapp" target="_blank"
                                        href="whatsapp://send?text=https://medicosdeguatemala.net/professional/"><i
                                            class="fab fa-whatsapp-square"></i></a>
                                </div>
                            </div>

                            <!--Galery-->
                            <div class="galery" v-else>
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
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            buscar: '',
            lista: [],
            skeleton: false,
            profile: true,
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Cuenta", this.slug)
        this.lista = this.$store.state.community.cuenta

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

        // Maps
        setTimeout(() => {
            this.maps()
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

    methods: {
        maps() {
            // Initial
            this.map = L.map('map', {
                dragging: false,
                zoomControl: false,
                scrollWheelZoom: false,
                closePopupOnClick: false
            }).setView([13.675997400000004, -89.28905480533759], 15)

            // Setting
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,
            }).addTo(this.map)

            // Pin
            L.popup().setLatLng([this.lista.latitud, this.lista.longitud]).setContent("<p>" + this.lista.direccion + "</p>").openOn(this.map)
            this.map.setView([this.lista.latitud, this.lista.longitud], 18)
        },
    },

    props: ["slug"]
};
</script>
  
  