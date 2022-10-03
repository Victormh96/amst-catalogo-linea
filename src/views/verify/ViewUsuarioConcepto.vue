<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-show="(skeleton)" class="top">

        <!--Section-->
        <section id="banner" class="d-flex align-items-center mb-4 mb-sm-5"
            v-bind:style="[this.portadaregistro.imagen ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadaregistro.imagen + ')' } : null]">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7 col-xl-5 col-xxl-4 m-auto text-center">
                        <h2>CONCEPTOS</h2>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="registro">
            <div class="container mb-sm-5">

                <!--Personal data-->
                <div class="row mb-5">

                    <!--Title-->
                    <h6 class="mb-1">Agregar Usuarios a Conceptos</h6>

                    <!--Description-->
                    <p class="mb-3 indicaciones">Busca una cuenta para iniciar el proceso</p>

                    <!--Div-->
                    <div class="col-md-12 col-xl-9 mb-3">
                        <div class="form-group mb-3">
                            <select class="form-control select2" v-model="v$.form.cuenta.$model" tabindex="4" required>
                                <option disabled value="">Cuenta *</option>
                                <option v-for="(cuenta, index) of this.listaCuentas" :key="index" :value="cuenta.id">{{cuenta.nombre_cuenta}}</option>
                            </select>

                            <!--Error Message-->
                            <div class="input-errors err" v-for="(error, index) of v$.form.cuenta.$errors" :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <!--Concepto-->
                        <div class="form-group mb-3">
                            <select class="form-control select2" v-model="v$.form.idConcepto.$model" tabindex="4"
                                required>
                                <option disabled value="">Concepto *</option>
                                <option v-for="(concepto, index) of this.listaConcepto" :key="index" :value="concepto.id">{{concepto.descripcion}}</option>
                            </select>

                            <!--Error Message-->
                            <div class="input-errors err" v-for="(error, index) of v$.form.idConcepto.$errors"
                                :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>
                    </div>

                    <!--Div-->
                    <div class="col-md-12 col-xl-12">
                        <!--Title-->
                        <p class="indicaciones text-center mb-2">Posiciona su ubIcación en el mapa *</p>
                        <!--Map-->
                        <div id="map" class="map"></div>
                    </div>

                </div>

                <!--Submit-->
                <div class="col-md-12 text-center mt-4">
                    <button type="button" class="btn-lg" :disabled="v$.form.$invalid" @click="submit">Agregar</button>
                </div>

            </div>
        </section>
    </main>

    <!--Skeleton-->
    <main class="top" v-show="(!skeleton)">
        <div id="skeleton">
        </div>
    </main>

    <!--Footer-->
    <Footer />
</template>

<!--========Script========-->
<script>
import L from "leaflet"
import "leaflet.fullscreen"
//import router from "@/router"
import "leaflet.locatecontrol"
import useVuelidate from "@vuelidate/core"
import "sweetalert2/dist/sweetalert2.min.css"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import { helpers, required } from "@vuelidate/validators"

// Message
const requeridMessage = helpers.withMessage('Campo Obligatorio', required)

export default {
    data() {
        return {
            form: {
                cuenta: '',
                idConcepto: '',
            },

            // Others
            latitud: 0,
            longitud: 0,
            skeleton: false,
            portadaregistro: [],
            listaCuentas: [],
            listaConcepto: [],
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Portada", 'Registro')
        this.portadaregistro = this.$store.state.verify.portada[0]

        // Vuex
        await this.$store.dispatch("CuentaVerify", 'true')
        this.listaCuentas = this.$store.state.verify.cuenta

        // Vuex
        await this.$store.dispatch("Concepto")
        this.listaConcepto = this.$store.state.verify.concepto

        // LocalStorage
        localStorage.removeItem('latitud')
        localStorage.removeItem('longitud')

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 900)

        // Leaflet
        setTimeout(() => {
            this.maps()
        }, 900)
    },

    setup() {
        // Validation
        return { v$: useVuelidate() }
    },

    // Validations
    validations() {
        return {
            form: {
                cuenta: {
                    requeridMessage,
                },
                idConcepto: {
                    requeridMessage,
                }
            }
        }
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        // Alert Error
        showFail() {
            this.$swal.fire({
                icon: 'error',
                title: 'EL usuario no se agrego al concepto',
                html: this.mensajeError(),
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            }).then(resultado => {
                console.log(resultado)
            })
        },

        // Alert Error
        mensajeError() {
            let map = new Map(Object.entries(this.$store.state.verify.concepto))
            var text = '<table class="table table-bordered">'

            // Foreach
            for (let value of map.values()) {
                text = text + '<tr><th>' + value + '</th></tr>'
            }
            // Const
            text = text + '</table>'

            // Return
            return text
        },

        // Alert Error
        showFailServicies(msg) {
            this.$swal.fire({
                icon: 'error',
                title: 'Error',
                text: msg,
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
        },

        // Alert Succes
        showSucces() {
            this.$swal.fire({
                icon: 'success',
                title: 'Usuario Agregado ',
                text: 'Puedes revisar su perfil en el area de conceptos',
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            })
        },

        // Map
        maps() {
            // Normal
            var normalBase = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                minZoom: 17,
                Zoom: 18,
            })

            // Satellite
            var satelliteBase = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
                minZoom: 17,
                Zoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            })

            // Const
            var baseMaps = {
                "Normal": normalBase,
                "Satelital": satelliteBase
            }

            // Initial
            var map = new L.Map('map', {
                layers: [normalBase]
            }).setView([13.675997400000004, -89.28905480533759], 15)

            // Layers
            L.control.layers(baseMaps).addTo(map)

            // Controller
            L.control.locate({
                showPopup: false,
                locateOptions: {
                    maxZoom: 18
                }
            }).addTo(map)

            // Full Screen
            L.control.fullscreen({
                position: 'topleft',
                content: null,
                forceSeparateButton: true,
                forcePseudoFullscreen: true,
                fullscreenElement: false
            }).addTo(map);

            // Localization
            const dinamicMarker = L.marker([0, 0], {
                draggable: true,
                autoPan: true
            }).addTo(map).on("dragend", dragedMaker);

            // Localization
            map.on('click', function (e) {
                const { lat = 0, lng = 0 } = e.latlng
                localStorage.setItem('latitud', lat)
                localStorage.setItem('longitud', lng)
                dinamicMarker.setLatLng([lat, lng])
            });

            // Assing
            function dragedMaker() {
                localStorage.setItem('latitud', this.getLatLng().lat)
                localStorage.setItem('longitud', this.getLatLng().lng)
            }
        },

        // Submit
        async submit() {

            // LocalStorage
            this.latitud = localStorage.getItem('latitud')
            this.longitud = localStorage.getItem('longitud')

            // If
            if (this.latitud != null) {
                this.skeleton = false
                // Const
                var Form = new FormData()
                console.log(this.form)
                // Add
                // Foreach
                for (var paramName in this.form) {
                    Form.append(paramName, this.form[paramName])
                }
                Form.append('latitud', this.latitud)
                Form.append('longitud', this.longitud)

                // Vuex
                await this.$store.dispatch("RegistroConcepto", Form).then(() => {
                    // Skeleton
                    setTimeout(() => {
                        this.skeleton = true
                    }, 400)

                    // If
                    if (this.$store.state.verify.errorregistro == false) {
                        this.showSucces()
                        localStorage.removeItem('latitud')
                        localStorage.removeItem('longitud')
                    } else {
                        this.showFail()
                    }
                }).catch(() => {
                    // Skeleton
                    this.skeleton = true
                    this.showFailServicies('Error Interno del servidor')
                })
            } else {
                this.showFailServicies('Posiciona tu ubicación en el mapa')

            }
        },

    },
};
</script>