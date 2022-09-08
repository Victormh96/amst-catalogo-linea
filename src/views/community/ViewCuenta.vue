<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <section id="perfil">
            <div class="container">
                <div class="row">

                    <aside class="col-xl-3 col-lg-4 primary mt-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyoIH0e-U7YoHkDnjq8r7os9rsBqXfx8wKQ&usqp=CAU"
                            alt="MDN">
                        <div class="box_profile">
                            <div class="informacion_profile">
                                <small>Victor Hernandez</small>
                                <h1>Doc Hernandez</h1>
                            </div>
                            <!--=====mapa=====-->
                            <div>mapa</div>

                            <div class="direccion">
                                sadsadsad
                            </div>
                            <div class="quitar"></div>
                            <div class="redes">
                                <a href="/" target="blank"><i class="fab fa-facebook-square facebook1"></i></a>
                                <a href="/" target="blank"><i class="fab fa-instagram instagram1"></i></a>
                                <a href="/" target="blank"><i class="fab fa-twitter twitter1"></i></a>
                                <a href="/" target="blank"><i class="fab fa-linkedin linkedin1"></i></a>
                                <a href="`https://api.whatsapp.com/send?phone=. encontré su perfil en Monarka Health y me gustaría realizar una consulta.`"
                                    target="blank"><i class="fab fa-whatsapp whatsapp1"></i></a>
                                <a href=""><i class="fas fa-phone phone1"></i></a>
                            </div>
                            <!--=====Abierto-Cerrado=====-->
                            <div>
                                <div>
                                    <p class="abierto">Abierto</p>
                                </div>
                            </div>
                        </div>
                        <!--=====publicidad=====-->
                        <div>
                            <div>Carrousel</div>
                        </div>
                    </aside>
                    <!--=====Formulario=====-->
                    <div class="col-xl-9 col-lg-8 secondary mt-5">
                        <div class="box_general_2">
                            <div id="map"></div>
                        </div>
                        <!--=====Tabs menu=====-->
                        <div class="tabs_styled_2">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general"
                                        role="tab" aria-controls="general" aria-expanded="true">Sobre Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab"
                                        aria-controls="reviews">Clinica</a>
                                </li>
                            </ul>
                            <!--=====Informacion general=====-->
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="general" role="tabpanel"
                                    aria-labelledby="general-tab">
                                    <div class="review-box descripcion_container">
                                        <div class="descripcion_medico">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="indent_title_in">
                                        <i class="fas fa-graduation-cap"></i>
                                        <h3>Educación</h3>
                                    </div>
                                    <div class="wrapper_indent">
                                        <p>
                                            ssss
                                        </p>
                                        <h6>Experiencia Laboral</h6>
                                        <p>
                                            eee
                                        </p>
                                    </div>
                                    <hr>
                                    <div class="indent_title_in">
                                        <i class="fas fa-briefcase-medical"></i>
                                        <h3>Servicios</h3>
                                    </div>
                                    <div class="wrapper_indent">
                                        <p>
                                            eeee
                                        </p>
                                    </div>
                                    <hr>
                                    <div class="indent_title_in">
                                        <i class="fas fa-share-alt"></i>
                                        <h3>Compartir</h3>
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
                                <!--=====Informacion clinica=====-->
                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <div class="reviews-container">
                                        <div class="review-box horario">

                                        </div>
                                        <hr>
                                        <div class="review-box clearfix">
                                            <div>galeria</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import L from 'leaflet'
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            buscar: '',
            skeleton: false
        }
    },

    async mounted() {

        //Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

        this.maps()
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        maps() {
            //Initial
            var map = L.map('map').setView([13.675997400000004, -89.28905480533759], 15)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,
            }).addTo(map)
        },
    },
};
</script>
  
  