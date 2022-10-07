<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="portada" class="d-flex align-items-center"
            v-bind:style="[this.portadainicio ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadainicio.imagen + ')' } : null]">
            <div class="container z-index">
                <div class="row">

                    <!--Title-->
                    <div class="col-md-12 mb-3 mb-xxl-4">
                        <h1>¡Ubícalo en Tecla!</h1>
                    </div>

                    <!--Description-->
                    <div class="col-md-11 col-lg-8 col-xl-8 m-auto mb-4">
                        <p>Más de 1,000 Tecleños con espíritu emprendedor ofertan aquí sus productos y servicios
                            ¡ubícalos!</p>
                    </div>

                    <!--Div-->
                    <div class="col-12 col-12 col-md-7 col-lg-5 m-auto">
                        <div class="position-relative">

                            <!--Input-->
                            <input type="text" class="form-control" placeholder="Albañil, Farmacias, Pupuserias..."
                                v-model="buscarTag" v-on:keyup.enter="verifyTag">

                            <!--Result-->
                            <ul v-if="searchTag.length">

                                <!--Items-->
                                <li v-for="tag in searchTag" :key="tag.nombre_rubro"
                                    @click="selectTag(tag); ClickCategoria(tag.id)">

                                    <!--Img-->
                                    <span class="me-2">
                                        <img :src="this.url + `/storage/${ tag.imagen }`" class="svgcolor">
                                    </span>

                                    <!--Title-->
                                    {{ tag.nombre_rubro}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="pasos" class="text-center">
            <div class="container">
                <div class="row">

                    <!--Title-->
                    <div class="col-md-12 mb-5 mb-lg-4">
                        <h3>¿CÓMO BUSCAR?</h3>
                    </div>

                    <!--Description-->
                    <div class="col-lg-7 col-xl-6 m-auto mb-5 d-none d-md-none d-lg-block">
                        <p>Puedes seguir estos pasos para encontrar el listado de diversos servicios que se ofrecen en
                            el
                            Municipio de Santa Tecla </p>
                    </div>
                </div>

                <!--Div-->
                <div class="row">

                    <!--Group-->
                    <div class="col-12 col-md-4 col-xl-4 mb-5 mb-sm-0">
                        <div class="card arrow">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex2.png" class="mb-3" alt="Busqueda AMST">

                            <!--Title-->
                            <h4 class="mb-3">BUSCA TU SERVICIO</h4>

                            <!--Description-->
                            <span>En el buscador escribe el oficio, el servicio o palabras claves de lo que necesitas
                                buscar.</span>
                        </div>
                    </div>

                    <!--Group-->
                    <div class="col-12 col-md-4 col-xl-4 mb-5 mb-sm-0">
                        <div class="card arrow">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex3.png" class="mb-3" alt="Perfil AMST">

                            <!--Title-->
                            <h4 class="mb-3 menos">REVISA SU PERFIL</h4>

                            <!--Description-->
                            <span>Puedes verificar el listado con información relacionada a los servicios que
                                ofrecen.</span>
                        </div>
                    </div>

                    <!--Group-->
                    <div class="col-12 col-md-4 col-xl-4 mx-auto">
                        <div class="card">

                            <!--Img-->
                            <img src="@/../public/img/assets/shapex4.png" class="mb-3" alt="Contacto AMST">

                            <!--Title-->
                            <h4 class="mb-3">PONTE EN CONTÁCTO</h4>

                            <!--Description-->
                            <span>Podrás encontrar los datos de contacto de los profesionales y las empresas
                                afiliadas.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="destacado" class="text-center">
            <div class="container">
                <div class="row">

                    <!--Title-->
                    <div class="col-md-12 mb-5">
                        <h3>LO MÁS BUSCADO</h3>
                    </div>

                    <!--Div-->
                    <div class="col-md-12 text-center">
                        <div class="row">

                            <!--Group-->
                            <div class="col-md-4 col-xl-2 mb-5 d-flex justify-content-center"
                                v-for="(s, index) in this.destacados" v-bind:key="index">

                                <!--Items-->
                                <router-link :to="{ name: 'Catalogo', params: { slug: s.slug } }"
                                    @click="ClickCategoria(s.id)">

                                    <!--Img-->
                                    <img :src="this.url + `/storage/${ s.imagen }`" class="svgcolor">

                                    <!--Title-->
                                    <p class="mt-3 mb-0">{{ s.nombre_rubro[this.idioma] }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Section-->
        <section id="inscribete">
            <div class="container">
                <div class="row row d-flex align-items-center">

                    <!--Div-->
                    <div class="col-md-6">
                        <div class="row">

                            <!--title-->
                            <div class="col-md-12 mb-3 text-left">
                                <h2>¿Quieres ubicar tu producto, servicio en Santa Tecla?</h2>
                            </div>

                            <!--Description-->
                            <div class="col-md-12 mb-5 text-left d-none d-md-none d-lg-block">
                                <p>Inscríbete en la red más grande de servicios y empresas del municipio.</p>
                            </div>

                            <!--Button-->
                            <div class="col-md-12 text-left mb-5 mb-sm-0">
                                <a href="/registro-servicio" class="me-4 mb-3 mb-lg-0">INSCRIBE TUS SERVICIOS</a>
                                <a href="/registro-empresa" class="white">INSCRIBE TU EMPRESA</a>
                            </div>
                        </div>
                    </div>

                    <!--Img-->
                    <div class="col-md-6 text-center">
                        <img src="@/../public/img/assets/shapex5.png" alt="Telefono AMST">
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
import { useStore } from "vuex"
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            destacados: [],
            skeleton: false,
            portadainicio: [],
            categoria: [],
            idioma:null
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Portada", 'Inicio')
        this.portadainicio = this.$store.state.community.portada[0]
        this.idioma = this.$store.state.community.idioma
        // Vuex
        await this.$store.dispatch("CategoriaDestacado")
        this.$store.state.community.categoriadestacado.forEach(categoria => {
            categoria.nombre_rubro = categoria.nombre_rubro.split(',')
            this.destacados.push(categoria)
        })

        // Vuex
        await this.$store.dispatch("Tag")
        this.$store.dispatch("Search", '')

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)
    },

    setup() {
        // Const
        let buscarTag = ref('')
        const store = useStore()
        const router = useRouter()

        // Filter
        const searchTag = computed(() => {

            // If
            if (buscarTag.value === '') {
                return []
            }

            // Const
            let matches = 0

            // Tag
            return store.state.community.tag.filter(tag => {
                // If
                if (
                    tag.nombre_rubro.toLowerCase().includes(buscarTag.value.toLowerCase())
                    && matches < 4
                ) {
                    matches++
                    return tag
                }
            })
        })

        // Router
        const selectTag = (tag) => {
            router.push({
                name: "Catalogo",
                params: { slug: tag.slug }
            });
            buscarTag.value = ''
        }

        // Return
        return {
            buscarTag,
            searchTag,
            selectTag,
        }
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        // Vuex
        async ClickCategoria(id) {
            await this.$store.dispatch("CategoriaClick", id)
        },

        // Autocomplete
        verifyTag() {
            let match = 0

            // Filter
            this.$store.state.community.tag.forEach(elemento => {
                // If
                if (elemento.nombre_rubro.toLowerCase() === this.buscarTag.toLowerCase()) {
                    match = 1
                    this.$router.push({
                        name: "Catalogo",
                        params: { slug: elemento.slug }
                    })
                }
            })

            // Const
            const body = {
                input: this.buscarTag,
                cant: this.searchTag.length
            }

            // Router
            if (match != 1) {
                this.$store.dispatch("Search", body)
                this.$router.push({
                    name: 'Servicios-Completos',
                })
            }
        },


    },
};
</script>
