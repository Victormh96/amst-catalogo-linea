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
                        <h2>!ÚNETE A NUESTRA RED DE EMPRESAS¡</h2>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="registro">
            <div class="container mb-4 mb-sm-5">
                <div class="row mb-4 mb-xl-5">

                    <!--Title-->
                    <h6 class="mb-1">Datos Generales</h6>
                    <p class="mb-3 indicaciones">Completa tu perfil personal</p>

                    <!--Div-->
                    <div class="col-md-12 col-xl-8">
                        <div class="row ">

                            <!--Image-->
                            <div class="col-md-4 mb-4">
                                <input type="file" class="dropify" data-height="190" @change="setImg($event)"
                                    data-default-file="@/../img/assets/default.png">
                            </div>

                            <!--Company Name-->
                            <div class="col-md-4">
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="Nombre de la Empresa*"
                                        v-model="v$.form.name.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.name.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Documento-->
                                <div class="form-group mb-4">
                                    <input type="tel" class="form-control" placeholder="NIT*"
                                        v-mask="'####-######-###-#'" v-model="v$.form.documento.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.documento.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Cell Phone-->
                                <div class="form-group mb-4">
                                    <input type="tel" step=any class="form-control" placeholder="Teléfono celular*"
                                        v-mask="'####-####'" v-model="v$.form.telefonoCelular.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err"
                                        v-for="(error, index) of v$.form.telefonoCelular.$errors" :key="index">
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
                            </div>

                            <!--Div-->
                            <div class="col-md-4">
                                <!--Category-->
                                <div class="form-group mb-4">
                                    <select class="form-control select2" v-model="v$.form.categoria.$model">
                                        <option disabled value="">Categoria*</option>
                                        <option value="3">Micro Empresa</option>
                                        <option value="4">Empresa</option>
                                    </select>

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.categoria.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Home service-->
                                <div class="form-group mb-4">
                                    <select class="form-control select2" v-model="v$.form.servicioDomicilio.$model">
                                        <option disabled value="">Servicio a domicilio*</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </select>

                                    <!--Error Message-->
                                    <div class="input-errors err"
                                        v-for="(error, index) of v$.form.servicioDomicilio.$errors" :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Landline-->
                                <div class="form-group mb-4">
                                    <input type="tel" class="form-control" placeholder="Télefono Fijo"
                                        v-mask="'####-####'" v-model="v$.form.telefonoFijo.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.telefonoFijo.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>

                                <!--Address-->
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" placeholder="N° de casa / Local / Piso*"
                                        v-model="v$.form.direccion.$model">

                                    <!--Error Message-->
                                    <div class="input-errors err" v-for="(error, index) of v$.form.direccion.$errors"
                                        :key="index">
                                        <div class="error-msg">{{ error.$message }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <!--Company Description-->
                            <div class="col-md-6 mb-4 mb-sm-0">
                                <textarea style="resize: none;" class="form-control" placeholder="Describe tu Empresa*"
                                    v-model="v$.form.descripcion.$model" rows="3"></textarea>

                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.descripcion.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>

                            <!--Business Hours-->
                            <div class="col-md-6">
                                <textarea style="resize: none;" class="form-control" v-model="v$.form.horario.$model"
                                    placeholder="Horarios de Atención*" rows="3"></textarea>

                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.horario.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Maps-->
                    <div class="col-md-12 col-xl-4 mx-auto mt-4 mt-xl-0">
                        <div id="map" class="map mb-2"></div>
                        <p class="indicaciones text-center">Selecciona tu ubIcación en el mapa*</p>
                    </div>
                </div>

                <div class="row mb-0 mb-sm-4">
                    <!--Title-->
                    <h6 class="mb-1">Servicios a Brindar</h6>
                    <p class="mb-3 indicaciones">Busca un servicio luego elige la experiencia que posees, describe tu
                        servicio y agregalo a tu listado </p>

                    <!--Service-->
                    <div class="col-md-3 mb-4 mb-sm-0">
                        <select class="form-control select2" v-model="this.servicio" @change="verifyService()">
                            <option disabled value="">Servicio*</option>
                            <option v-for="c in this.listaServicio" :key="c.id" :value="c.id">{{ c.nombre_rubro }}
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
                            :key="servicio.idServicio" data-toggle="tooltip" data-placement="top"
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
                <!--Terminos-->
                <div id="terminos" class="col-md-9 mt-4 ">
                    <p class="m-1 text-center">Terminos y Condiciones</p>
                    <textarea readonly style="resize: none;" class="form-control m-1"
                        rows="5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, 
                            
                            sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</textarea>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="terms" v-model="this.terminos">
                        <label class="form-check-label" for="terms">Acepto Los terminos y Condiciones*</label>
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
import { helpers, required, email, url, minLength } from "@vuelidate/validators"

// Message
const requeridMessage = helpers.withMessage('Campo Obligatorio', required)
const phoneMessage = helpers.withMessage('Teléfono invalido', minLength(8))
const nitMessage = helpers.withMessage('NIT invalido', minLength(17))
const emailMessage = helpers.withMessage('Correo invalido', email)
const urlMessage = helpers.withMessage('Url invalida', url)

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                imagen: '',
                pagweb: '',
                horario: '',
                twitter: '',
                facebook: '',
                whatsapp: '',
                linkedin: '',
                categoria: '',
                direccion: '',
                documento: '',
                instagram: '',
                descripcion: '',
                telefonoFijo: '',
                telefonoCelular: '',
                servicioDomicilio: '',
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
            errorServicio: 'true',
            terminos: false
        }
    },

    async mounted() {
        //Portada
        await this.$store.dispatch("Portada", 'Registro')
        this.portadaregistro = this.$store.state.community.portada[0]

        //Servicios
        await this.$store.dispatch("CategoriaRegistro", '2')
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

    validations() {
        return {
            form: {
                name: {
                    requeridMessage,
                },
                documento: {
                    requeridMessage,
                    nitMessage,
                },
                telefonoCelular: {
                    requeridMessage,
                    phoneMessage
                },
                telefonoFijo: {
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
                categoria: {
                    requeridMessage,
                },
                servicioDomicilio: {
                    requeridMessage,
                },
                direccion: {
                    requeridMessage,
                },
                descripcion: {
                    requeridMessage,
                },
                horario: {
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
                title: 'Error',
                text: this.name + ' tu formulario no pudo ser registrado.',
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
                text: this.name + ' revisaremos tu solicitud y nos comunicaremos contigo.',
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
                .on("dragend", dragedMaker)

            // Assing
            function dragedMaker() {
                localStorage.setItem('latitud', this.getLatLng().lat)
                localStorage.setItem('longitud', this.getLatLng().lng)
            }
        },

        // Send
        async submit() {
            if (this.cuentaServicios.length > 0 && this.terminos == true) {
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
                this.$store.dispatch("ClearEmpresa")
                await this.$store.dispatch("RegistroEmpresa", Form).then(() => {
                    if (this.$store.state.community.registroempresa) {
                        this.showSucces()
                    } else {
                        this.showFail()
                    }
                })
            } else {
                if (this.terminos === false) {
                    this.showFailServicies('Acepta los terminos y condiciones')
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
            });

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
}
</script>