<template>
    <!--Title-->
    <title>Ubícalo En Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="cuenta">
            <div class="container mt-4 mt-sm-5 mb-4 mb-sm-5">
                <div class="row">

                    <!--Aside-->
                    <aside class="col-12 col-md-5 col-lg-4 col-xl-4 col-xxl-3">

                        <!--Group-->
                        <div class="pegajoso">

                            <!--Img-->
                            <lightgallery :settings="{ speed: 500, plugins: plugins }">
                                <a class="gallery-item" :src="this.url + `/storage/${ this.lista.foto }`">
                                    <img :src="this.url + `/storage/${ this.lista.foto }`"
                                        :alt="`${ this.lista.slug }`">
                                </a>
                            </lightgallery>

                            <!--Profile-->
                            <div class="card mb-4">
                                <div class="information ms-4 me-4">

                                    <!--Items-->
                                    <small>

                                        <!--Title-->
                                        {{ this.lista.nombre_cuenta }}

                                        <!--Img-->
                                        <img src="@/../public/img/assets/shapex15.png" class="ms-1 verify"
                                            v-if="this.lista.verificado == 1">
                                    </small>

                                    <!--Info-->
                                    <a v-if="this.lista.verificado == true" :href="'mailto:'+ this.lista.email"
                                        class="mb-1 mt-1">{{ this.lista.email }}</a>

                                    <!--Phone-->
                                    <div v-for="(c, index) in this.lista.contacto" v-bind:key="index">
                                        <a :href="'tel:'+ c.descripcion"
                                            v-if="(c.id_detalle_contacto == 7 || c.id_detalle_contacto == 8 ) && this.lista.verificado == true">
                                            {{c.descripcion}}
                                        </a>
                                    </div>
                                </div>

                                <!--Tag-->
                                <div class="tag ms-4 me-4" v-if="this.lista.verificado == true">
                                    <span class="me-2 mb-1" v-for="(r, index) in this.lista.servicio"
                                        v-bind:key="index">
                                        {{ r.rubro.nombre_rubro[this.idioma] }}
                                    </span>
                                </div>

                                <!--Networks-->
                                <div class="networks mb-2" v-if="this.lista.verificado == true">
                                    <span v-for="(c, index) in this.lista.contacto" :key="index">

                                        <!--Whatsapp-->
                                        <a :href="`https://api.whatsapp.com/send?phone=503${ c.descripcion }&text=¡Hola ${ this.lista.nombre_cuenta }! Quisiera mas información de tus servicios. 📢📢`"
                                            v-if="c.detallecontacto.id == 5" target="_blank">
                                            <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                        </a>

                                        <!--Others-->
                                        <a :href="c.descripcion"
                                            v-else-if="c.detallecontacto.id != 7 && c.detallecontacto.id != 8 "
                                            target="_blank">
                                            <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                        </a>
                                    </span>
                                </div>

                                <!--Verify-->
                                <span v-if="this.lista.verificado == true">

                                    <!--Delivery-->
                                    <p v-if="this.lista.servicio_domicilio == 1">A Domicilio</p>
                                    <p v-else>En El Lugar</p>
                                </span>
                            </div>

                            <!--Location-->
                            <div id="location" class="location mb-5 mb-sm-4"
                                v-if="this.lista.local == 1 && this.lista.verificado == true">

                                <!--Waze-->
                                <a :href="`https://www.waze.com/ul?ll=${ this.lista.latitud },${ this.lista.longitud }&navigate=yes&zoom=16`"
                                    target="_blank" class="me-4">
                                    <i class="fab fa-waze waze"></i>
                                </a>

                                <!--Gmail-->
                                <a :href="`https://www.google.com/maps/dir//${ this.lista.latitud },${ this.lista.longitud }`"
                                    target="_blank">
                                    <i class="fa-brands fa-google google"></i>
                                </a>
                                <p class="opacity-50 pt-2 mt-1 llegar">LOCALIZACIÓN</p>
                            </div>

                            <!--Advertising-->
                            <div class="d-grid mb-5 mb-sm-0">

                                <!--Items-->
                                <swiper :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }"
                                    :modules="modules" :loop="true" :effect="'fade'">

                                    <!--Img-->
                                    <swiper-slide v-for="(p, index) in this.publicidad" v-bind:key="index">
                                        <a :href="p.descripcion" target="_blank" v-on:click="clickpublicidad(p.id)">
                                            <img :src="this.url + `/storage/${ p.imagen }`" />
                                        </a>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </aside>

                    <!--Div-->
                    <article class="col-12 col-md-7 col-lg-8 col-xl-8 col-xxl-9">

                        <!--Maps-->
                        <div class="mb-5 mb-sm-4">
                            <div id="map" :class="[this.lista.local == 0 ? 'disabledMap' : '']"></div>
                        </div>

                        <!--Tabs-->
                        <div class="tabs">

                            <!--Tab #1-->
                            <span :class="[this.profile === 1 ? 'activeClass' : '']" v-on:click="validar(1,0,0)">
                                MI PERFIL</span>

                            <!--Tab #2-->
                            <span :class="[this.horario === 1 ? 'activeClass' : '']" v-on:click="validar(0,1,0)"
                                v-if="this.lista.horario != null">HORARIO</span>

                            <!--Tab #3-->
                            <span :class="[this.galeria === 1 ? 'activeClass' : '']" v-on:click="validar(0,0,1)"
                                v-if="this.lista.galeria != ''">GALERIA</span>
                        </div>

                        <!--Card-->
                        <div class="card">

                            <!--Profile-->
                            <div class="profile" v-if="this.profile == true">
                                <div class="row">

                                    <!--Img-->
                                    <div class="col-md-12 col-lg-12 col-xl-3 mb-4 mb-xl-0 color-white">
                                        <center>
                                            <lightgallery :settings="{ speed: 500, plugins: plugins }">
                                                <a class="gallery-item"
                                                    :src="this.url + `/storage/${ this.lista.logo }`">

                                                    <img :src="this.url + `/storage/${ this.lista.logo }`"
                                                        :alt="`${ this.lista.slug }`" v-if="this.lista.logo"
                                                        class="logo">
                                                </a>
                                            </lightgallery>
                                        </center>
                                    </div>

                                    <!--Info-->
                                    <div class="col-md-12 col-lg-12 col-xl-9 box">

                                        <!--Title-->
                                        <h6 class="mb-2" v-if="this.lista.marca">{{ this.lista.marca }}</h6>

                                        <!--Description-->
                                        <p>{{ this.lista.descripcion }}</p>
                                    </div>
                                </div>

                                <hr>

                                <!--Tittle-->
                                <div class="title mb-4">
                                    <h4>
                                        <i class="fa-solid fa-book-open-reader p-2 me-2"></i>
                                        SERVICIOS
                                    </h4>
                                </div>

                                <!--Div-->
                                <div class="row items ms-0 ms-lg-4">
                                    <div v-for="(servicio, index) in this.lista.servicio" v-bind:key="index"
                                        class="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6 mb-4 ps-0 pe-0 ps-sm-2 pe-sm-2">
                                        <div class="box">
                                            <div class="row">

                                                <!--Service-->
                                                <div
                                                    class="col-12 col-md-12 col-lg-3 text-center d-none d-sm-none d-lg-block">

                                                    <!--Img-->
                                                    <img :src="this.url + `/storage/${servicio.rubro.imagen}`"
                                                        class="mb-3 mb-sm-2 svgcolor">
                                                </div>

                                                <!--Info-->
                                                <div class="col-12 col-md-12 col-lg-9 text-start">

                                                    <!--Title-->
                                                    <h5 class="mb-2"><i class="fa-solid fa-bookmark me-2"></i>
                                                        {{ servicio.anios_experiencia }}
                                                    </h5>

                                                    <!--Description-->
                                                    <small>{{ servicio.descripcion }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Horario-->
                            <div class="profile" v-if="this.horario == true">
                                <div class="title mb-4 mt-2">

                                    <!--Tittle-->
                                    <h4>
                                        <i class="fa-solid fa-calendar-week me-2 p-2"></i>
                                        HORARIO
                                    </h4>

                                    <!--Description-->
                                    <div class="box mt-4">
                                        <p>{{this.lista.horario}}</p>
                                    </div>
                                </div>
                            </div>

                            <!--Galery-->
                            <div class="galery" v-if="this.galeria == true">
                                <h4>Proximamente</h4>
                            </div>
                        </div>
                    </article>

                    <!--Comment-->
                    <Disqus lang="es_MX" :pageConfig="pageConfig" shortname="ubicaloentecla" class="mt-5 mt-sm-4 t" />
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
import L from "leaflet"
import "swiper/css/effect-fade"
import { Disqus } from "vue-disqus"
import Lightgallery from "lightgallery/vue"
import { Autoplay, EffectFade } from "swiper"
import lgZoom from "lightgallery/plugins/zoom"
import { Swiper, SwiperSlide } from "swiper/vue"
import lgRotate from "lightgallery/plugins/rotate"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            lista: [],
            buscar: '',
            profile: 1,
            horario: 0,
            galeria: 0,
            idioma: null,
            publicidad: [],
            skeleton: false,
            plugins: [lgZoom, lgRotate],
            pageConfig: {
                identifier: this.$route.params.url
            }
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Cuenta", this.slug)
        var servicios = []
        this.$store.state.community.cuenta.servicio.forEach(servicio => {
            servicio.rubro.nombre_rubro = servicio.rubro.nombre_rubro.split(',')
            servicios.push(servicio)
        })
        this.$store.state.community.cuenta.servicio = servicios

        // Vuex
        this.lista = this.$store.state.community.cuenta

        // Language
        this.idioma = this.$store.state.community.idioma

        // Vuex
        await this.$store.dispatch("Publicidad")
        this.publicidad = this.$store.state.community.publicidad

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
        Disqus,
        SwiperSlide,
        Lightgallery
    },

    methods: {
        maps() {
            // Normal
            var normalBase = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,
            })

            // Satellite
            var satelliteBase = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                zoom: 16,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            })

            // Const
            var baseMaps = {
                "Normal": normalBase,
                "Satelital": satelliteBase
            }

            // Initial
            var map = new L.Map('map', {
                layers: [normalBase],
                dragging: false,
                zoomControl: false,
                scrollWheelZoom: false,
                closePopupOnClick: false
            }).setView([13.675997400000004, -89.28905480533759], 15)

            // Layers
            L.control.layers(baseMaps).addTo(map)

            // Pin
            L.popup().setLatLng([this.lista.latitud, this.lista.longitud]).setContent("<p>" + this.lista.direccion + "</p>").openOn(map)
            map.setView([this.lista.latitud, this.lista.longitud], 18)
        },

        // Tabs
        validar(profile, horario, galeria) {
            this.profile = profile
            this.horario = horario
            this.galeria = galeria
        },

        // Vuex
        async clickpublicidad(id) {
            await this.$store.dispatch("PublicidadClick", id)
        }
    },

    props: ["slug"]
};
</script>
