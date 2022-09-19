<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

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

                        <!--Img-->
                        <i class="fa-solid fa-award" v-if="this.lista.verificado == 1"></i>
                        <img :src="this.url + `/storage/${ this.lista.foto }`" :alt="`${ this.lista.slug }`"
                            v-if="this.lista.foto">

                        <!--Profile-->
                        <div class="card mb-4">
                            <div class="information ms-4 me-4">

                                <!--Title-->
                                <small class="me-1">{{ this.lista.nombre_cuenta }}</small>

                                <!--Gender-->
                                <i v-if="this.lista.genero.id == 1" class="fa-solid fa-mars-stroke"></i>
                                <i v-if="this.lista.genero.id == 2" class="fa-solid fa-venus"></i>

                                <!--Info-->
                                <a :href="'mailto:'+ this.lista.email" class="mb-1 mt-1">{{ this.lista.email }}</a>
                                <div v-for="(c, index) in this.lista.contacto" v-bind:key="index">
                                    <a :href="'mailto:'+ c.descripcion"
                                        v-if="c.id_detalle_contacto === '7'">{{c.descripcion}}</a>
                                </div>
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

                                    <!--Whatsapp-->
                                    <a :href="`https://api.whatsapp.com/send?phone=503${ c.descripcion }&text=¡Hola ${ this.lista.nombre_cuenta }! Quisiera mas información de tus servicios. 📢📢`"
                                        v-if="c.detallecontacto.id == 5" target="_blank">
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>

                                    <!--Phone-->
                                    <a :href="`tel:${ c.descripcion }`" target="_blank"
                                        v-else-if="c.detallecontacto.id == 7 || c.detallecontacto.id == 8 ">
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>

                                    <!--Others-->
                                    <a :href="c.descripcion" v-else target="_blank">
                                        <i class="ms-2 me-2" :class="c.detallecontacto.icon"></i>
                                    </a>
                                </span>
                            </div>

                            <!--Delivery-->
                            <p v-if="this.lista.servicio_domicilio == 1">A Domicilio</p>
                            <p v-else>En El Lugar</p>
                        </div>

                        <!--Location-->
                        <div class="location mb-4" v-if="this.lista.local == 1">

                            <!--Waze-->
                            <a :href="`https://www.waze.com/ul?ll=${ this.lista.latitud },${ this.lista.longitud }&navigate=yes&zoom=16`"
                                target="_blank" class="me-4">
                                <i class="fab fa-waze waze"></i>
                            </a>

                            <!--Gmail-->
                            <a :href="`https://www.google.com/maps/dir//${ this.lista.latitud },${ this.lista.longitud }`"
                                target="_blank">
                                <i class="fa-solid fa-street-view"></i>
                            </a>
                        </div>

                        <!--Advertising-->
                        <div class="d-grid mb-4">
                            <swiper :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }"
                                :modules="modules" :loop="true" :effect="'fade'">
                                <swiper-slide v-for="(p, index) in this.publicidad" v-bind:key="index">
                                    <a :href="p.descripcion" target="_blank" v-on:click="clickcategoria(p.id)">
                                        <img :src="this.url + `/storage/${ p.imagen }`" />
                                    </a>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </aside>

                    <!--Div-->
                    <article class="col-12 col-md-7 col-lg-8 col-xl-8 col-xxl-9">

                        <!--Maps-->
                        <div class="mb-4">
                            <div id="map" :class="[this.lista.local == 0 ? 'disabledMap' : '']"></div>
                        </div>

                        <!--Tabs-->
                        <div class="tabs">
                            <span :class="[this.profile === 1 ? 'activeClass' : '']" v-on:click="validar(1,0,0)">
                                MI PERFIL</span>
                            <span :class="[this.horario === 1 ? 'activeClass' : '']" v-on:click="validar(0,1,0)"
                                v-if="this.lista.horario != null">HORARIO</span>
                            <span :class="[this.galeria === 1 ? 'activeClass' : '']" v-on:click="validar(0,0,1)"
                                v-if="this.lista.galeria != ''">GALERIA</span>
                        </div>

                        <!--Card-->
                        <div class="card mb-5">

                            <!--Profile-->
                            <div class="profile" v-if="this.profile == true">
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
                                <div class="row items ms-0 ms-lg-4">
                                    <div v-for="(servicio, index) in this.lista.servicio" v-bind:key="index"
                                        class="col-12 col-md-12 col-lg-12 col-xl-6 mb-4 ps-0 pe-0 ps-sm-2 pe-sm-2">
                                        <div class="box">
                                            <div class="row">

                                                <!--Service-->
                                                <div
                                                    class="col-12 col-md-12 col-lg-3 text-center d-none d-sm-none d-lg-block">
                                                    <img :src="this.url + `/storage/${servicio.rubro.imagen}`"
                                                        class="mb-3 mb-sm-2">
                                                    <span class="d-none d-md-none d-lg-block">
                                                        {{ servicio.rubro.nombre_rubro }}
                                                    </span>
                                                </div>

                                                <!--Info-->
                                                <div class="col-12 col-md-12 col-lg-9 text-start">
                                                    <h5 class="mb-2"><i class="fa-solid fa-bookmark me-2"></i>
                                                        {{ servicio.anios_experiencia }}
                                                    </h5>
                                                    <small>{{ servicio.descripcion }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Horario-->
                            <div class="profile" v-if="this.horario == true">
                                <div class="title mb-4 mt-4">

                                    <!--Tittle-->
                                    <h4>
                                        <i class="fa-solid fa-calendar-week me-2 p-2"></i>
                                        HORARIO
                                    </h4>

                                    <!--Info-->
                                    <div class="box mt-4">
                                        <p>{{this.lista.horario}}</p>
                                    </div>
                                </div>
                            </div>

                            <!--Galery-->
                            <div class="galery" v-if="this.galeria == true">
                                <h3>Proximamente</h3>
                            </div>
                        </div>
                    </article>

                    <!--Comment-->
                    <Disqus lang="es_MX" :pageConfig="pageConfig" shortname="promedicus724" />
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
import { Disqus } from "vue-disqus"
import { Autoplay, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
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
            publicidad: [],
            skeleton: false,
            pageConfig: {
                identifier: this.$route.params.url
            }
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Cuenta", this.slug)
        this.lista = this.$store.state.community.cuenta

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
  
  