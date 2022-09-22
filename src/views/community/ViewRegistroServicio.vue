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
                        <h2>¡ÚNETE A NUESTRA RED DE SERVICIOS!</h2>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="registro">
            <div class="container mb-4 mb-sm-5">

                <!--Personal data-->
                <div class="row mb-4 mb-xl-5">

                    <!--Title-->
                    <h6 class="mb-1">Datos Personales</h6>
                    <p class="mb-3 indicaciones">Completa la información de tu perfil personal</p>

                    <!--Div-->
                    <div class="col-md-12 col-xl-12 mb-5">

                        <div class="row ">

                            <!--Image-->
                            <div class="col-md-3 mb-4 mb-sm-0">
                                <input type="file" class="dropify" data-height="170" @change="setImg($event)"
                                    data-default-file="@/../img/assets/perfil.png" />
                            </div>

                            <!--Names-->
                            <div class="col-md-3">
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

                                <!--Phone-->
                                <div class="form-group mb-4 mb-sm-0">
                                    <input type="tel" class="form-control" placeholder="Télefono celular*"
                                        v-mask="'####-####'" v-model="v$.form.telefonoCelular.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err"
                                        v-for="(error, index) of v$.form.telefonoCelular.$errors" :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>

                            <!--Div-->
                            <div class="col-md-3">

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
                                        data-toggle="tooltip" data-placement="top" title="Fecha de Nacimiento"
                                        v-model="v$.form.fechaNacimiento.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err"
                                        v-for="(error, index) of v$.form.fechaNacimiento.$errors" :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Phone-->
                                <div class="form-group mb-4 mb-sm-0">
                                    <input type="tel" class="form-control" placeholder="Télefono Fijo"
                                        v-mask="'####-####'" v-model="this.form.telefonoFijo">
                                </div>
                            </div>

                            <!--Div-->
                            <div class="col-md-3">

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

                                <!--Address-->
                                <div class="form-group mb-4 mb-sm-0">
                                    <input type="text" class="form-control" placeholder="N° de casa / Local / Piso"
                                        v-model="this.form.direccion">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Div-->
                    <div class="col-md-12 col-xl-12 mx-auto mt-4 mt-xl-0">

                        <!--Tittle-->
                        <p class="indicaciones text-center mb-2">Posiciona tu ubIcación en el mapa*</p>

                        <!--Map-->
                        <div id="map" class="map"></div>
                    </div>
                </div>

                <!--About-->
                <div class="mb-1 mb-sm-4">

                    <!--Title-->
                    <h6 class="mb-1">Sobre la Marca</h6>
                    <p class="mb-3">completa la información relacionada a tu comercio </p>

                    <!--Div-->
                    <div class="col-md-12 col-xl-12">
                        <div class="row">

                            <!--Image-->
                            <div class="col-md-3 mb-4">
                                <input type="file" class="dropify" data-height="120" @change="setLogo($event)"
                                    data-default-file="@/../img/assets/logo.png" />
                            </div>

                            <!--Brand Name-->
                            <div class="col-md-4 mt-1">
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="Nombre de la marca o negocio*"
                                        v-model="v$.form.marca.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.marca.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Checks-->
                                <div class="form-group mb-3">

                                    <!--Title-->
                                    <p class="mb-1">¿Donde brindas tus servicios? *</p>

                                    <!--All-->
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="todos" name="delivery"
                                            v-model="v$.form.tipoServicio.$model" @change="setTipoServicio()" value="0">
                                        <label class="form-check-label" for="todos">A domicilio</label>
                                    </div>

                                    <!--Delivery-->
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="domicilio" name="delivery"
                                            v-model="v$.form.tipoServicio.$model" @change="setTipoServicio()" value="1">
                                        <label class="form-check-label" for="domicilio">Cuento con local</label>
                                    </div>

                                    <!--Place-->
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" id="local" name="delivery"
                                            v-model="v$.form.tipoServicio.$model" @change="setTipoServicio()" value="2">
                                        <label class="form-check-label" for="local">Ambos</label>
                                    </div>
                                </div>
                            </div>

                            <!--Personal Description-->
                            <div class="col-md-5 mt-1 mb-4 mb-sm-0">
                                <div class="form-group mb-3">

                                    <!--Company Description-->
                                    <textarea style="resize: none;" class="form-control"
                                        placeholder="Describe tu empresa*" v-model="v$.form.descripcion.$model"
                                        rows="5"></textarea>

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.descripcion.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Services-->
                <div class="row mb-5">

                    <!--Title-->
                    <h6 class="mb-1">Servicios a Brindar</h6>
                    <p class="mb-3 indicaciones">Busca un servicio luego elige la experiencia que posees, describe tu
                        servicio y agregalo a tu listado </p>

                    <!--Service-->
                    <div class="col-md-3 mb-4 mb-sm-0">
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
                    <div class="col-md-3 mb-4 mb-sm-0">
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
                    <div class="col-xs-2 col-md-2 mt-4 mt-sm-0 d-flex align-items-center">
                        <button type="button" class="btn-md" :disabled="errorServicio || nullServicio"
                            @click="addServices"><i class="fa-solid fa-plus"></i></button>
                    </div>

                    <!--List Services-->
                    <div class="col-md-12 mt-4 mt-sm-3">
                        <span class="tag mb-4 mb-sm-3 me-3" v-for="(servicio, index) in this.cuentaServicios"
                            data-toggle="tooltip" data-placement="top" v-bind:key="index"
                            :title="'Experiencia: ' + servicio.experiencia + ' Descripcion: ' + servicio.descripcion">
                            {{ servicio.name }}<i class="fa-solid fa-xmark" @click="deleteServices(index)"></i>
                        </span>
                    </div>
                </div>

                <!--Social-->
                <div class="row social mb-5">

                    <!--Title-->
                    <h6 class="mb-1">Perfil Social</h6>
                    <p class="mb-3 indicaciones">Coloca en enlace de tus redes sociales </p>

                    <!--Facebook-->
                    <div class="col-md-4 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-facebook-f"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Facebook"
                                v-model="v$.form.facebook.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.facebook.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <!--Instagram-->
                    <div class="col-md-4 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-instagram "></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Instagram"
                                v-model="v$.form.instagram.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.instagram.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <!--WhatsApp-->
                    <div class="col-md-4 mb-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-whatsapp"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="WhatsApp" v-mask="'####-####'"
                                v-model="v$.form.whatsapp.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.whatsapp.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <!--Linkedin-->
                    <div class="col-md-4 mb-4 mb-sm-0">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-linkedin-in"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Linkedin"
                                v-model="v$.form.linkedin.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.linkedin.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <!--Twitter-->
                    <div class="col-md-4 mb-4 mb-sm-0">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-brands fa-twitter"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Twitter"
                                v-model="v$.form.twitter.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.twitter.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <!--Pagina Web-->
                    <div class="col-md-4">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa-solid fa-globe"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Página Web"
                                v-model="v$.form.pagweb.$model">
                        </div>

                        <!--Error Message-->
                        <div class="input-errors err" v-for="(error, index) of v$.form.pagweb.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <!--About-->
                    <div class="col-md-6 mb-1 mb-sm-4">

                        <!--Title-->
                        <h6 class="mb-1">Documentos</h6>
                        <p class="mb-3">Verifica tu identidad</p>

                        <!--Div-->
                        <div class="col-md-12 col-xl-12">
                            <div class="row">

                                <!--Image-->
                                <div class="col-md-6 mb-4">
                                    <input type="file" class="dropify" data-height="150" @change="setDoc1($event)"
                                        data-default-file="@/../img/assets/logo.png" />
                                </div>
                                <div class="col-md-6 mb-4">
                                    <input type="file" class="dropify" data-height="150" @change="setDoc2($event)"
                                        data-default-file="@/../img/assets/logo.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-1 mb-sm-4">
                        <!--Tags-->
                        <div class="row mb-xl-4 mb-5">

                            <!--Title-->
                            <h6 class="mb-1">¿Cómo podemos encontrarte?</h6>
                            <p class="mb-3">Escribe palabras claves que faciliten encontrar tu perfil</p>

                            <!--Div-->
                            <div class="col-md-8 mb-4 mb-sm-0 form-group mb-3">
                                <input type="text" class="form-control" placeholder="Palabra Clave" @keyup="verifyTag()"
                                    v-model="this.tag">
                            </div>

                            <!--Add Service-->
                            <div class="col-xs-2 col-md-1 mt-4 mt-sm-0 d-flex align-items-center">
                                <button type="button" class="btn-md" @click="addTag" :disabled="nullTag"><i
                                        class="fa-solid fa-plus"></i></button>
                            </div>

                            <!--List tags-->
                            <div class="col-md-12 ">
                                <span class="tag mb-4 mb-sm-3 me-3" v-for="(tag, index) in this.listTag"
                                    v-bind:key="index">
                                    {{ tag }}<i class="fa-solid fa-xmark" @click="deleteTag(index)"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>




                <!--Terminos-->
                <div class="row justify-content-center">
                    <div id="terminos" class="col-md-9">

                        <!--Title-->
                        <p class="text-center mb-2">Terminos y Condiciones</p>

                        <!--Terms and Conditions-->
                        <textarea readonly style="resize: none;" class="form-control mb-2"
                            rows="5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, 
                            sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</textarea>

                        <!--Accept-->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="terms" v-model="this.terminos">
                            <label class="form-check-label" for="terms">Acepto Los terminos y Condiciones*</label>
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
import "leaflet.locatecontrol"
import useVuelidate from "@vuelidate/core"
import "sweetalert2/dist/sweetalert2.min.css"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import { helpers, required, email, minLength, url } from "@vuelidate/validators"

// Message
const requeridMessage = helpers.withMessage('Campo Obligatorio', required)
const phoneMessage = helpers.withMessage('Teléfono invalido', minLength(8))
const duiMessage = helpers.withMessage('DUI invalido', minLength(10))
const emailMessage = helpers.withMessage('Correo invalido', email)
const urlMessage = helpers.withMessage('Url invalida', url)

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                local: '',
                imagen: false,
                logo: '',
                genero: '',
                pagweb: '',
                twitter: '',
                lastName: '',
                facebook: '',
                telefonoCelular: '',
                telefonofijo: '',
                whatsapp: '',
                linkedin: '',
                instagram: '',
                documento: '',
                direccion: '',
                descripcion: '',
                fechaNacimiento: '',
                servicioDomicilio: '',
                marca: '',
                tipoServicio: '',
                doc1: '',
                doc2: '',
            },

            // Others
            map: '',
            tag: '',
            listTag: [],
            name: '',
            error: '',
            rubros: [],
            latitud: 0,
            longitud: 0,
            servicio: '',
            experiencia: '',
            descripcion: '',
            skeleton: false,
            listaServicio: [],
            portadaregistro: [],
            cuentaServicios: [],
            nullServicio: true,
            nullTag: true,
            errorServicio: true,
            terminos: false,

        }
    },

    async mounted() {
        //Portada
        await this.$store.dispatch("Portada", 'Registro')
        this.portadaregistro = this.$store.state.community.portada[0]

        //Categoria
        await this.$store.dispatch("CategoriaRegistro", '1')
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
                marca: {
                    requeridMessage,
                },
                documento: {
                    requeridMessage,
                    duiMessage,
                },
                telefonoCelular: {
                    requeridMessage,
                    phoneMessage
                },
                whatsapp: {
                    phoneMessage
                },
                email: {
                    emailMessage,
                    requeridMessage,
                },
                genero: {
                    requeridMessage,
                },
                tipoServicio: {
                    requeridMessage,
                },
                fechaNacimiento: {
                    requeridMessage,
                },
                descripcion: {
                    requeridMessage,
                },
                facebook: {
                    urlMessage,
                },
                instagram: {
                    urlMessage,
                },
                linkedin: {
                    urlMessage,
                },
                twitter: {
                    urlMessage,
                },
                pagweb: {
                    urlMessage,
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

            // Controller
            L.control.locate({
                showPopup: false,
                locateOptions: {
                    maxZoom: 18
                }
            }).addTo(this.map)

            // Localization
            const dinamicMarker = L.marker([0, 0], {
                draggable: true,
                autoPan: true
            }).addTo(this.map).on("dragend", dragedMaker);

            this.map.on('click', function (e) {
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

        // Send
        async submit() {
            // If
            if (this.cuentaServicios.length > 0 && this.terminos == true && this.form.imagen != false) {
                var Form = new FormData()
                var tag = ''

                // Foreach
                for (var paramName in this.form) {
                    Form.append(paramName, this.form[paramName])
                }
                this.listTag.forEach(t => tag = tag + ',' + t);

                // Add
                Form.append('latitud', localStorage.getItem('latitud'))
                Form.append('longitud', localStorage.getItem('longitud'))
                Form.append('servicios', JSON.stringify(this.cuentaServicios))
                Form.append('tags', tag)

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
                if (this.terminos === false) {
                    this.showFailServicies('Acepta los terminos y condiciones')
                } else if (this.form.imagen == false) {
                    this.showFailServicies('Agrega la foto de tu perfil')
                } else {
                    this.showFailServicies('No has registrado tus servicios')
                }
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
            if (this.cuentaServicios.length > 3) {
                this.showFailServicies('Solo puedes registrar 4 servicios, elimina uno para agregarlo')
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

        // Add
        verifyTag() {
            if (this.tag == '') {
                this.nullTag = true
            } else {
                this.nullTag = false
            }
        },

        // Add
        addTag() {
            // If
            if (this.listTag.length > 4) {
                this.showFailServicies('Solo puedes registrar 5 etiquetas, elimina uno para agregarlo')
            } else {
                // Push
                this.listTag.push(this.tag)
                this.tag = ''
                this.nullTag = true
            }
        },

        // Delete
        async deleteTag(index) {
            this.listTag.splice(index, 1)
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
        },

        // Img
        setLogo(event) {
            this.form.logo = event.target.files[0]
        },
        // Img
        setDoc1(event) {
            this.form.doc1 = event.target.files[0]
        },
        // Img
        setDoc2(event) {
            this.form.doc2 = event.target.files[0]
        },

        setTipoServicio() {
            if (this.form.tipoServicio === '0') {
                this.form.servicioDomicilio = true
                this.form.local = false
            } else if (this.form.tipoServicio === '1') {
                this.form.servicioDomicilio = false
                this.form.local = true
            } else {
                this.form.servicioDomicilio = true
                this.form.local = true
            }
        }
    },
};
</script>