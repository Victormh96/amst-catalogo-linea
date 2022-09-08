<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Front Page-->
    <section id="banner" class="d-flex align-items-center top mb-5"
        v-bind:style="[this.portadaregistro.imagen ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadaregistro.imagen + ')' } : null]">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-xl-5 m-auto text-center">
                    <h2>¡ÚNETE A NUESTRO CATALOGO DE SERVICIOS!</h2>
                </div>
            </div>
        </div>
    </section>

    <!--Form-->
    <section id="registro">
        <div class="container">
            <div class="row mb-5">
                <!--Title-->
                <h6 class="mb-1">Datos Generales</h6>
                <p class="mb-3 indicaciones">Completa tu perfil personal</p>
                <div class="col-md-12 col-xl-8">
                    <div class="row ">
                        <!--Image-->
                        <div class="col-md-4 mb-4">
                            <input type="file" class="dropify" data-height="190" @change="setImg($event)"
                                data-default-file="@/../img/assets/user.png" />
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
                            <!-- DUI -->
                            <div class="form-group mb-4">
                                <input type="tel" class="form-control" placeholder="DUI*" v-mask="'########-#'"
                                    v-model="v$.form.dui.$model">
                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.dui.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
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
                                <div class="input-errors err" v-for="(error, index) of v$.form.fechaNacimiento.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <!--Phone-->
                            <div class="form-group mb-4">
                                <input type="tel" class="form-control" placeholder="Télefono" v-mask="'####-####'"
                                    v-model="v$.form.telefono.$model">
                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.telefono.$errors"
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
                            <div class="form-check mt-1 ms-3 mb-3">
                                <input class="form-check-input" type="checkbox" id="servicioDomicilio"
                                    v-model="this.form.servicioDomicilio">
                                <label class="form-check-label" for="servicioDomicilio">Servicio a Domicilio</label>
                            </div>
                        </div>
                        <!--I have Place-->
                        <div class="col-md-3 align-self-center">
                            <div class="form-check mt-1 ms-3 mb-3">
                                <input class="form-check-input" type="checkbox" id="local" v-model="this.form.local">
                                <label class="form-check-label" for="local">Cuento con local</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-12 col-xl-4 mx-auto">
                    <!--Map-->
                    <div id="map" class="map"></div>
                    <p class="mb-3 indicaciones text-center">Selecciona tu ubIcación en el mapa*</p>
                </div>
            </div>
            <div class="row mb-4">
                <!--Title-->
                <h6 class="mb-1">Servicios a Brindar</h6>
                <p class="mb-3 indicaciones">Busca un servicio luego elige la experiencia que posees, describe tu
                    servicio y agregalo a tu listado </p>
                <!--Service-->
                <div class="col-md-3 mb-3">
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
                <div class="col-md-3 mb-3">
                    <select class="form-control select2" v-model="this.experiencia" @change="verifyService()">
                        <option disabled value="">Experiencia*</option>
                        <option value="Menos de un año">Menos de un año</option>
                        <option value="De uno a tres años">De uno a tres años</option>
                        <option value="De tres a cinco a años">De tres a cinco a años</option>
                        <option value="Mas de cinco años">Mas de cinco años</option>
                    </select>
                </div>

                <!--Description-->
                <div class="col-xs-10 col-md-4 mb-3">
                    <input type="text" class="form-control" placeholder="Describe tu Servicio*"
                        v-model="this.descripcion" @keyup="verifyService()">
                </div>
                <!--Add Service-->
                <div class="col-xs-2 col-md-2 m-auto mb-3">
                    <button type="button" class="btn-md" :disabled="errorServicio || nullServicio"
                        @click="addServices"><i class="fa-solid fa-plus"></i></button>
                </div>
                <!--List Services-->
                <div class="col-md-12 mt-3">
                    <span class="tag mb-3 me-3" v-for="(servicio, index) in this.cuentaServicios" data-toggle="tooltip"
                        data-placement="top" v-bind:key="index"
                        :title="'Experiencia: ' + servicio.experiencia + ' Descripcion: ' + servicio.descripcion">
                        {{ servicio.name }}<i class="fa-solid fa-xmark" @click="deleteServices(index)"></i>
                    </span>
                </div>
            </div>

            <div class="row social">
                <!--Title-->
                <h6 class="mb-1">Perfil Social</h6>
                <p class="mb-3 indicaciones">Ingresa el nombre de</p>
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
                        <input type="text" class="form-control" placeholder="Instagram" v-model="this.form.instagram">
                    </div>
                </div>
                <!--WhatsApp-->
                <div class="col-md-4 mb-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa-brands fa-whatsapp"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="WhatsApp" v-model="this.form.whatsapp">
                    </div>
                </div>
                <!--Linkedin-->
                <div class="col-md-4 mb-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa-brands fa-linkedin-in"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Linkedin" v-model="this.form.linkedin">
                    </div>
                </div>
                <!--Twitter-->
                <div class="col-md-4 mb-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa-brands fa-twitter"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Twitter" v-model="this.form.twitter">
                    </div>
                </div>
                <!--Pagina Web-->
                <div class="col-md-4 mb-4">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa-solid fa-globe"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Página Web" v-model="this.form.pagweb">
                    </div>

                </div>
            </div>
            <!--Submit-->
            <div class="col-md-12 text-center mt-2 mb-5">
                <button type="button" class="btn-lg" :disabled="v$.form.$invalid" @click="submit">Unirme</button>
            </div>
        </div>
    </section>

    <!--Footer-->
    <Footer />
</template>

<!--========Script========-->
<script>
//Import
import leaflet from "leaflet"
import useVuelidate from '@vuelidate/core'
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import { helpers, required, email, minLength } from '@vuelidate/validators'
import router from "@/router";
import 'sweetalert2/dist/sweetalert2.min.css';

//Message
const requeridMessage = helpers.withMessage('Campo Obligatorio', required)
const phoneMessage = helpers.withMessage('Teléfono invalido', minLength(8))
const duiMessage = helpers.withMessage('DUI invalido', minLength(10))
const emailMessage = helpers.withMessage('Correo invalido', email)

export default {
    data() {
        return {
            form: {
                imagen: '',
                name: '',
                lastName: '',
                dui: '',
                fechaNacimiento: '',
                telefono: '',
                email: '',
                genero: '',
                servicioDomicilio: '',
                direccion: '',
                descripcion: '',
                local: '',
                facebook: '',
                instagram: '',
                whatsapp: '',
                pagweb: '',
                linkedin: '',
                twitter: '',
            },
            cuentaServicios: [],
            portadaregistro: [],
            listaServicio: [],
            servicio: '',
            experiencia: '',
            descripcion: '',
            name: '',
            errorServicio: 'true',
            nullServicio: 'true',
            error: '',
            url: process.env.VUE_APP_URL_BASE,
            latitud: '',
            longitud: '',
            rubros: []
        }
    },

    async created() {
        //Portada
        await this.$store.dispatch("PortadaRegistro")
        this.portadaregistro = this.$store.state.community.portadaregistro[0][0]

        //Categoria
        await this.$store.dispatch("Categoria", 'servicios-profesionales')
        this.listaServicio = this.$store.state.community.categoria[0]

    },

    validations() {
        return {
            form: {
                name: {
                    requeridMessage,
                },
                lastName: {
                    requeridMessage,
                },
                dui: {
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
                direccion: {
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

    setup() {
        return { v$: useVuelidate() }
    },

    components: {
        Navbar,
        Footer
    },

    mounted() {
        this.mapa();
    },

    methods: {
        showFail() {
            this.$swal.fire({
                icon: 'error',
                title: 'Error',
                text: this.form.name + ' ' + this.form.lastName + ' tu formulario no pudo ser registrado',
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            }).then(resultado => {
                if (resultado.value) {
                    router.go("registro-servicio")
                }
            })
        },

        showSucces() {
            this.$swal.fire({
                icon: 'success',
                title: 'Formulario Enviado',
                text: this.form.name + ' ' + this.form.lastName + ' revisaremos tu solicitud y nos comunicaremos con tigo',
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

        mapa() {
            let map = leaflet.map('map').setView([13.675997400000004, -89.28905480533759], 15)

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 20,
            }).addTo(map);

            leaflet.marker([13.675997400000004, -89.28905480533759], {
                draggable: true,
                autoPan: true
            },

            ).addTo(map)
                .on("dragend", dragedMaker);

            function dragedMaker() {
                localStorage.setItem('latitud', this.getLatLng().lat)
                localStorage.setItem('longitud', this.getLatLng().lng)
            }

        },

        async submit() {
            var Form = new FormData()
            for (var paramName in this.form) {
                Form.append(paramName, this.form[paramName])
            }
            Form.append('latitud', localStorage.getItem('latitud'))
            Form.append('longitud', localStorage.getItem('longitud'))
            Form.append('servicios', JSON.stringify(this.cuentaServicios))

            this.$store.dispatch("ClearServicio")
            await this.$store.dispatch("RegistroServicio", Form).then(() => {
                if (this.$store.state.community.registroservicio) {
                    this.showSucces()
                } else {
                    this.showFail()
                }
            })
        },

        verifyService() {
            this.error = ''
            this.errorServicio = false
            if (this.servicio === '' || this.experiencia === '' || this.descripcion === '') {
                this.nullServicio = true
            } else {
                this.nullServicio = false
            }
            this.cuentaServicios.forEach(element => {
                if (element.idServicio === this.servicio) {
                    this.error = 'Ya cuentas con un registro de ' + this.searchName(this.servicio)
                    this.errorServicio = true
                }
            });
        },

        addServices() {
            const serv = {
                idServicio: this.servicio,
                experiencia: this.experiencia,
                name: this.searchName(this.servicio),
                descripcion: this.descripcion
            }

            this.cuentaServicios.push(serv)

            this.servicio = ''
            this.experiencia = ''
            this.descripcion = ''
            this.errorServicio = true
        },

        async deleteServices(index) {
            this.cuentaServicios.splice(index, 1)
        },

        searchName(id) {
            this.listaServicio.forEach(elemento => {
                if (elemento.id === id) {
                    this.name = elemento.nombre_rubro;
                }
            }
            );
            return this.name
        },

        setImg(event) {
            this.form.imagen = event.target.files[0]
        }
    },
};
</script>