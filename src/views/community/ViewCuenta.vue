<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="cuenta">
            <div class="container mt-5">
                <div class="row">
                    <!--Aside-->
                    <aside class="col-3">

                        <!--Img-->
                        <img :src="this.url + `/storage/${ this.lista.foto }`" :alt="`${ this.lista.slug }`"
                            v-if="this.lista.foto">

                        <!--Profile-->
                        <div class="card mb-4">
                            <div class="information ms-4 me-4">
                                <small class="me-1">{{ this.lista.nombre_cuenta }}</small>
                                <i v-if="this.lista.genero.id === 1" class="fa-solid fa-mars-stroke"></i>
                                <i v-else class="fa-solid fa-venus"></i>
                                <a :href="'mailto:'+this.lista.email">{{this.lista.email}}</a>
                            </div>

                            <!--Tags-->
                            <div class="tag ms-4 me-4">
                                <span class="tag me-2 mb-1" v-for="(r, index) in this.lista.servicio"
                                    v-bind:key="index">
                                    {{ r.rubro.nombre_rubro }}
                                </span>
                            </div>

                            <!--Networks-->
                            <div class="networks">
                                <a v-for="(c, index) in this.lista.contacto" :key="index" :href="c.descripcion"
                                    target="blank" data-toggle="tooltip" data-placement="top"
                                    :title="c.detallecontacto.descripcion">
                                    <i class="me-3" :class="c.detallecontacto.clase"></i>
                                </a>
                            </div>

                            <!--local-->
                            <p v-if="this.lista.local === '1' && this.lista.servicio_domicilio === '0'">En el lugar</p>
                            <!--Delivery-->
                            <p v-if="this.lista.servicio_domicilio === '1' && this.lista.local === '0'">Servicio a Domicilio</p>
                            <!--Delivery and local-->
                            <p v-if="this.lista.servicio_domicilio === '1' && this.lista.local === '1'">En el lugar y a Domicilio</p>
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
                            <span class="m-1 ps-3 pe-3" v-on:click="this.profile = true">MI PERFIL</span>
                            <span class="m-1 ps-3 pe-3" v-on:click="this.profile = false">GALERIA</span>
                        </div>

                        <!--Card-->
                        <div class="card">

                            <!--Profile-->
                            <div id="profile" class="profile" v-if="this.profile === true">
                                <div class="review-box descripcion_container">
                                    <div class="descripcion_medico">
                                        <p class="descripcion">Descripción Personal: {{this.lista.descripcion}}</p>
                                    </div>
                                </div>
                                <hr>

                                <div class="indent_title_in">

                                    <h3><i class="fa-solid fa-book-open-reader p-2"></i>Servicios</h3>
                                </div>
                                <div class="wrapper_indent mt-1">
                                    <div class="row m-1">
                                        <!--v-for con los servicios-->
                                        <div v-for="(servicio, index) in this.lista.servicio" v-bind:key="index"
                                            class="col-md-6 p-4">
                                            <div class="row card-service p-4 ">
                                                <div class="col-md-3">
                                                    <img :src="this.url + `/storage/${servicio.rubro.imagen}`"
                                                        class="card-img mx-auto d-block">
                                                    <h4 class="mt-2 text-center">{{servicio.rubro.nombre_rubro}}</h4>
                                                </div>
                                                <div class="col-md-9">
                                                    <h5 class="text-end mb-3"><i
                                                            class="fa-solid fa-bookmark ps-2 pe-2"></i>{{servicio.anios_experiencia}}
                                                        de experiencia</h5>
                                                    <p class="text-start">Descripción: {{servicio.descripcion}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="indent_title_in">
                                    <h3> <i class="fa-solid fa-share-nodes mt-1 p-2"></i> Compartir</h3>
                                </div>
                                <div class="wrapper_indent">
                                    <a class="facebook me-3" href="javascript:void(0)"><i
                                            class="fab fa-facebook-square"></i></a>
                                    <a class="twitter me-3" href="javascript:void(0)"><i
                                            class="fab fa-twitter-square"></i></a>
                                    <a class="whatsapp" target="_blank"
                                        href="whatsapp://send?text=https://medicosdeguatemala.net/professional/"><i
                                            class="fab fa-whatsapp-square"></i></a>
                                </div>
                            </div>

                            <!--Galery-->
                            <div class="galery" v-else>
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
            skeleton: false,
            profile: true,
        }
    },

    async mounted() {

        //Vuex
        await this.$store.dispatch("Cuenta", this.slug)
        this.lista = this.$store.state.community.cuenta
        console.log(this.lista)

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
            this.map = L.map('map').setView([13.675997400000004, -89.28905480533759], 15)
            var map = this.map
            var url = this.url

            // Setting
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,
            }).addTo(this.map)

            // Pin

            L.marker([this.lista.latitud, this.lista.longitud],).bindPopup("<img src=" + url + "/storage/" + this.lista.foto + "/>").addTo(map).openPopup();
            map.setView([this.lista.latitud, this.lista.longitud], 18)

        },
    },

    props: ["slug"]
};
</script>
  
  