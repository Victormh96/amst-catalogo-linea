<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Front Page-->
    <section id="banner" class="d-flex align-items-center top mb-5" v-if="this.portadaregistro.imagen"
        v-bind:style="[this.portadaregistro.imagen ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadaregistro.imagen + ')' } : null]">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-xl-5 m-auto text-center">
                    <h2>!ÚNETE A NUESTRO CATALOGO DE EMPRESAS¡</h2>
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
                                data-default-file="@/../img/assets/enterprise.png">
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
                            <!--NIT-->
                            <div class="form-group mb-4">
                                <input type="tel" class="form-control" placeholder="NIT*" v-mask="'####-######-###-#'"
                                    v-model="v$.form.nit.$model">
                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.nit.$errors"
                                    :key="index">
                                    <div class="error-msg">{{ error.$message }}</div>
                                </div>
                            </div>
                            <!--Cell Phone-->
                            <div class="form-group mb-4">
                                <input type="tel" step=any class="form-control" placeholder="Teléfono celular*"
                                    v-mask="'####-####'" v-model="v$.form.telefonoCelular.$model">
                                <!--Error Message-->
                                <div class="input-errors err" v-for="(error, index) of v$.form.telefonoCelular.$errors"
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
                        </div>
                        <div class="col-md-4">
                            <!--Category-->
                            <div class="form-group mb-4">
                                <select class="form-control select2" v-model="v$.form.categoria.$model">
                                    <option disabled value="">Categoria*</option>
                                    <option value="1">Micro Empresa</option>
                                    <option value="2">Empresa</option>
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
                                <input type="tel" class="form-control" placeholder="Télefono Fijo" v-mask="'####-####'"
                                    v-model="v$.form.telefonoFijo.$model">
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
                        <div class="col-md-6">
                            <textarea style="resize: none;" class="form-control" placeholder="Describe tu Empresa*"
                                v-model="v$.form.descripcionEmpresa.$model" rows="3"></textarea>
                            <!--Error Message-->
                            <div class="input-errors err" v-for="(error, index) of v$.form.descripcionEmpresa.$errors"
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
                        <option v-for="c in this.listaServicio" :key="c.id" :value="c.id">{{ c.nombre_rubro }}</option>
                    </select>
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
                <div class="col-md-4 mb-3">
                    <input type="text" class="form-control" placeholder="Describe tu Servicio*"
                        v-model="this.descripcion" @keyup="verifyService()">
                </div>
                <!--Add Service-->
                <div class="col-md-2 m-auto mb-3">
                    <button type="button" class="btn-md" :disabled="errorServicio || nullServicio"
                        @click="addServices"><i class="fa-solid fa-plus"></i></button>
                </div>
                <!--List Services-->
                <div class="col-md-12 mt-3">
                    <span class="tag mb-3 me-3" v-for="(servicio, index) in this.cuentaServicios"
                        :key="servicio.idServicio" data-toggle="tooltip" data-placement="top"
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
            <div class="col-md-12 text-center mt-5 mb-5">
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
import useVuelidate from '@vuelidate/core'
import leaflet from "leaflet"
import { helpers, required, email, minLength } from '@vuelidate/validators'
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import 'sweetalert2/dist/sweetalert2.min.css';
import router from "@/router";


const requeridMessage = helpers.withMessage('Campo Obligatorio', required)
const phoneMessage = helpers.withMessage('Teléfono invalido', minLength(8))
const nitMessage = helpers.withMessage('NIT invalido', minLength(17))
const emailMessage = helpers.withMessage('Correo invalido', email)

export default {
    data() {
        return {
            form: {
                imagen: '',
                name: '',
                nit: '',
                telefonoCelular: '',
                email: '',
                categoria: '',
                servicioDomicilio: '',
                telefonoFijo: '',
                direccion: '',
                descripcionEmpresa: '',
                horario: '',
                facebook: '',
                instagram: '',
                whatsapp: '',
                pagweb: '',
                linkedin: '',
                twitter: ''
            },
            url: process.env.VUE_APP_URL_BASE,
            portadaregistro: [],
            cuentaServicios: [],
            listaServicio: [],
            servicio: '',
            experiencia: '',
            descripcion: '',
            name: '',
            latitud: '',
            longitud: '',
            errorServicio: 'true',
            nullServicio: 'true',
            error: ''
        }
    },



    validations() {
        return {
            form: {
                name: {
                    requeridMessage,
                },
                nit: {
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
                descripcionEmpresa: {
                    requeridMessage,
                },
                horario: {
                    requeridMessage,
                }
            }
        }
    },

    setup() {
        return { v$: useVuelidate() }
    },

    async created() {
        //Portada
        await this.$store.dispatch("PortadaRegistro")
        this.portadaregistro = this.$store.state.community.portadaregistro[0][0]

        //Servicios
        await this.$store.dispatch("Categoria", 'empresas')
        this.listaServicio = this.$store.state.community.categoria[0]
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
                text: this.name + ' tu formulario no pudo ser registrado',
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                footer: '<a href="/sobre-nosotros">Preguntas Frecuentes</a>'
            }).then(resultado => {
                if (resultado.value) {
                    //router.go("registro-servicio")
                }
            })
        },

        showSucces() {
            this.$swal.fire({
                icon: 'success',
                title: 'Formulario Enviado',
                text: this.name + ' revisaremos tu solicitud y nos comunicaremos con tigo',
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

            let map = leaflet.map('map').setView([13.675997400000004, -89.28905480533759], 14)

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                zoom: 16,
            }).addTo(map);

            leaflet.marker([13.675997400000004, -89.28905480533759], {
                draggable: true,
                autoPan: true
            }
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

            this.$store.dispatch("ClearEmpresa")
            await this.$store.dispatch("RegistroEmpresa", Form).then(() => {
                if (this.$store.state.community.registroempresa) {
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
}
</script>