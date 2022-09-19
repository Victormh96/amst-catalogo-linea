<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-show="(skeleton)" class="top">

        <!--Section-->
        <section id="banner" class="d-flex align-items-center mb-5"
            v-bind:style="[this.portadaregistro.imagen ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadaregistro.imagen + ')' } : null]">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-xl-4 m-auto text-center">
                        <h2>¡ÚNETE A NUESTRA RED DE SERVICIOS!</h2>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="registro">
            <div class="container mb-4 mb-sm-5">
                <div class="row mb-5">

                    <!--Title-->
                    <h6 class="mb-1">Datos Generales</h6>
                    <p class="mb-3 indicaciones">Completa tu perfil personal</p>

                    <!--Div-->
                    <div class="col-md-12 col-xl-8">
                        <div class="row ">

                            <!--Image-->
                            <div class="col-md-4 mb-4">
                                <input type="file" class="dropify" data-height="190" @change="setImg($event)"
                                    data-default-file="@/../img/assets/default.png" />
                            </div>

                            <!--Names-->
                            <div class="col-md-4">
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="Nombres*"
                                        v-model="v$.form.name.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.name.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Gender-->
                                <div class="form-group mb-4">
                                    <select class="form-control select2" v-model="v$.form.genero.$model">
                                        <option disabled value="">Genero*</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                    </select>

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.genero.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Email-->
                                <div class="form-group mb-4">
                                    <input type="email" class="form-control" placeholder="Correo*"
                                        v-model="v$.form.email.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.email.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!-- Document -->
                                <div class="form-group mb-4">
                                    <input type="tel" class="form-control" placeholder="DUI*" v-mask="'########-#'"
                                        v-model="v$.form.documento.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.documento.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>

                            <!--Div-->
                            <div class="col-md-4">
                                <!--Surnames-->
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="Apellidos*"
                                        v-model="v$.form.lastName.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.lastName.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Date Birth-->
                                <div class="form-group mb-4">
                                    <input type="date" class="form-control" placeholder="Fecha de Nacimiento*"
                                        v-model="v$.form.fechaNacimiento.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err"
                                        v-for="(error, index) of v$.form.fechaNacimiento.$errors" :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Phone-->
                                <div class="form-group mb-4">
                                    <input type="tel" class="form-control" placeholder="Télefono*" v-mask="'####-####'"
                                        v-model="v$.form.telefono.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.telefono.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Address-->
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="N° de casa / Local / Piso"
                                        v-model="this.form.direccion">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <!--Personal Description-->
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="Descripción Personal*"
                                    v-model="v$.form.descripcion.$model">

                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.descripcion.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <!--Home service-->
                            <div class="col-md-3 align-self-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="servicioDomicilio"
                                        v-model="this.form.servicioDomicilio">
                                    <label class="form-check-label" for="servicioDomicilio">Servicio a Domicilio</label>
                                </div>
                            </div>

                            <!--I have Place-->
                            <div class="col-md-3 align-self-center">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="local"
                                        v-model="this.form.local">
                                    <label class="form-check-label" for="local">Cuento con local</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Maps-->
                    <div class="col-md-12 col-xl-4 mx-auto">
                        <div id="map" class="map mb-2"></div>
                        <p class="indicaciones text-center">Selecciona tu ubIcación en el mapa*</p>
                    </div>
                </div>

                <div class="row mb-4">
                    <!--Title-->
                    <h6 class="mb-1">Servicios a Brindar</h6>
                    <p class="mb-3 indicaciones">Busca un servicio luego elige la experiencia que posees, describe tu
                        servicio y agregalo a tu listado </p>

                    <!--Service-->
                    <div class="col-md-3">
                        <select class="form-control select2" v-model="this.servicio" @change="verifyService()">
                            <option disabled value="">Servicio*</option>
                            <option v-for="c in this.listaServicio" :value="c.id" v-bind:key="c.id">{{ c.nombre_rubro }}
                            </option>
                        </select>

                        <!--Error Message-->
                        <div class="input-errors err">
                            <div class="error-msg">{{ this.error }}</div>
                        </div>
                    </div>

                    <!--Experience-->
                    <div class="col-md-3">
                        <select class="form-control select2" v-model="this.experiencia" @change="verifyService()">
                            <option disabled value="">Experiencia*</option>
                            <option value="Menos de un año">Menos de un año</option>
                            <option value="De uno a tres años">De uno a tres años</option>
                            <option value="De tres a cinco a años">De tres a cinco a años</option>
                            <option value="Mas de cinco años">Mas de cinco años</option>
                        </select>
                    </div>

                    <!--Description-->
                    <div class="col-xs-10 col-md-4">
                        <input type="text" class="form-control" placeholder="Describe tu Servicio*"
                            v-model="this.descripcion" @keyup="verifyService()">
                    </div>

                    <!--Add Service-->
                    <div class="col-xs-2 col-md-2 m-auto">
                        <button type="button" class="btn-md" :disabled="errorServicio || nullServicio"
                            @click="addServices"><i class="fa-solid fa-plus"></i></button>
                    </div>

                    <!--List Services-->
                    <div class="col-md-12 mt-3">
                        <span class="tag mb-3 me-3" v-for="(servicio, index) in this.cuentaServicios"
                            data-toggle="tooltip" data-placement="top" v-bind:key="index"
                            :title="'Experiencia: ' + servicio.experiencia + ' Descripcion: ' + servicio.descripcion">
                            {{ servicio.name }}<i class="fa-solid fa-xmark" @click="deleteServices(index)"></i>
                        </span>
                    </div>
                </div>

                <div class="row social">
                    <!--Title-->
                    <h6 class="mb-1">Perfil Social</h6>
                    <p class="mb-3 indicaciones">Coloca en enlace de tus redes sociales </p>

                    <!--Facebook-->
                    <div class="col-md-4 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-facebook-f"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Facebook" v-model="this.form.facebook">
                        </div>
                    </div>

                    <!--Instagram-->
                    <div class="col-md-4 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-instagram "></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Instagram"
                                v-model="this.form.instagram">
                        </div>
                    </div>

                    <!--WhatsApp-->
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-whatsapp"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="WhatsApp" v-model="this.form.whatsapp">
                        </div>
                    </div>

                    <!--Linkedin-->
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-linkedin-in"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Linkedin" v-model="this.form.linkedin">
                        </div>
                    </div>

                    <!--Twitter-->
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-twitter"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Twitter" v-model="this.form.twitter">
                        </div>
                    </div>

                    <!--Pagina Web-->
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-solid fa-globe"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Página Web" v-model="this.form.pagweb">
                        </div>
                    </div>
                </div>

                <!--Submit-->
                <div class="col-md-12 text-center mt-4">
                    <button type="button" class="btn-lg" :disabled="v$.form.$invalid" @click="submit">Unirme</button>
                </div>
            </div>
        </section>
    </main>

    <!--Skeleton-->
    <main class="top" v-show="(!skeleton)">
        <div id="skeleton"></div>
    </main>

    <!--Footer-->
    <Footer />
</template>

<!--========Script========-->
<script>
import L from "leaflet"
import router from "@/router"
import useVuelidate from "@vuelidate/core"
import "sweetalert2/dist/sweetalert2.min.css"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import { helpers, required, email, minLength } from "@vuelidate/validators"

// Message
const requeridMessage = helpers.withMessage('Campo Obligatorio', required)
const phoneMessage = helpers.withMessage('Teléfono invalido', minLength(8))
const duiMessage = helpers.withMessage('DUI invalido', minLength(10))
const emailMessage = helpers.withMessage('Correo invalido', email)

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                local: '',
                imagen: '',
                genero: '',
                pagweb: '',
                twitter: '',
                lastName: '',
                facebook: '',
                telefono: '',
                whatsapp: '',
                linkedin: '',
                instagram: '',
                documento: '',
                direccion: '',
                descripcion: '',
                fechaNacimiento: '',
                servicioDomicilio: ''
            },

            // Others
            map: '',
            name: '',
            error: '',
            rubros: [],
            latitud: '',
            longitud: '',
            servicio: '',
            experiencia: '',
            descripcion: '',
            skeleton: false,
            listaServicio: [],
            portadaregistro: [],
            cuentaServicios: [],
            nullServicio: 'true',
            errorServicio: 'true'
        }
    },

    async mounted() {
        //Portada
        await this.$store.dispatch("PortadaRegistro")
        this.portadaregistro = this.$store.state.community.portadaregistro

        //Categoria
        await this.$store.dispatch("Categoria", "servicios-profesionales")
        this.listaServicio = this.$store.state.community.categoria

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

        // Leaflet
        setTimeout(() => {
            this.maps()
        }, 950)
    },

    setup() {
        // Validation
        return { v$: useVuelidate() }
    },

    // Validations
    validations() {
        return {
            form: {
                name: {
                    requeridMessage,
                },
                lastName: {
                    requeridMessage,
                },
                documento: {
                    requeridMessage,
                    duiMessage,
                },
                telefono: {
                    requeridMessage,
                    phoneMessage
                },
                email: {
                    emailMessage,
                    requeridMessage,
                },
                genero: {
                    requeridMessage,
                },
                fechaNacimiento: {
                    requeridMessage,
                },
                descripcion: {
                    requeridMessage,
                },
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
                title: 'Error',
                text: this.form.name + ' ' + this.form.lastName + ' tu formulario no pudo ser registrado.',
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            }).then(resultado => {
                console.log(resultado)
            })
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
                title: 'Formulario Enviado',
                text: this.form.name + ' ' + this.form.lastName + ' revisaremos tu solicitud y nos comunicaremos contigo.',
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            }).then(resultado => {
                if (resultado.value) {
                    router.push("/")
                }
            })
        },

        // Map
        maps() {
            // Initial
            this.map = L.map('map').setView([13.675997400000004, -89.28905480533759], 15)

            // Setting
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                minZoom: 14,
                Zoom: 16,
            }).addTo(this.map)

            // Localization
            L.marker([13.675997400000004, -89.28905480533759], {
                draggable: true,
                autoPan: true
            },).addTo(this.map)
                .on("dragend", dragedMaker);

            // Assing
            function dragedMaker() {
                localStorage.setItem('latitud', this.getLatLng().lat)
                localStorage.setItem('longitud', this.getLatLng().lng)
            }
        },

        // Send
        async submit() {
            if (this.cuentaServicios.length > 0) {
                var Form = new FormData()

                // Foreach
                for (var paramName in this.form) {
                    Form.append(paramName, this.form[paramName])
                }

                // Add
                Form.append('latitud', localStorage.getItem('latitud'))
                Form.append('longitud', localStorage.getItem('longitud'))
                Form.append('servicios', JSON.stringify(this.cuentaServicios))

                // Vuex
                this.$store.dispatch("ClearServicio")
                await this.$store.dispatch("RegistroServicio", Form).then(() => {

                    // If
                    if (this.$store.state.community.registroservicio) {
                        this.showSucces()
                    } else {
                        this.showFail()
                    }
                })
            } else {
                this.showFailServicies('No has registrado tus servicios')
            }
        },

        // Services
        verifyService() {
            this.error = ''
            this.errorServicio = false

            // If
            if (this.servicio === '' || this.experiencia === '' || this.descripcion === '') {
                this.nullServicio = true
            } else {
                this.nullServicio = false
            }

            // Foreach
            this.cuentaServicios.forEach(element => {

                // If
                if (element.idServicio === this.servicio) {
                    this.error = 'Ya cuentas con un registro de ' + this.searchName(this.servicio)
                    this.errorServicio = true
                }
            })
        },

        // Add
        addServices() {
            // If
            if (this.cuentaServicios.length > 4) {
                this.showFailServicies('Solo puedes registrar 5 servicios, elimina uno para agregarlo')
            } else {
                const serv = {
                    idServicio: this.servicio,
                    experiencia: this.experiencia,
                    name: this.searchName(this.servicio),
                    descripcion: this.descripcion
                }

                // Push
                this.cuentaServicios.push(serv)
                this.servicio = ''
                this.experiencia = ''
                this.descripcion = ''
                this.errorServicio = true
            }
        },

        // Delete
        async deleteServices(index) {
            this.cuentaServicios.splice(index, 1)
        },

        // Search
        searchName(id) {
            this.listaServicio.forEach(elemento => {

                // If
                if (elemento.id === id) {
                    this.name = elemento.nombre_rubro;
                }
            })
            return this.name
        },

        // Img
        setImg(event) {
            this.form.imagen = event.target.files[0]
        }
    },
};
</script>