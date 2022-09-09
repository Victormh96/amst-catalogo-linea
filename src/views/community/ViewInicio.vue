<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="portada" class="d-flex align-items-center"
            v-bind:style="[this.portadainicio.imagen ? { 'background-image': 'url(' + this.url + '/storage/' + this.portadainicio.imagen + ')' } : null]">
            <div class="container z-index">
                <div class="row">
                    <!--Title-->
                    <div class="col-md-12 mb-4">
                        <h1>¿QUÉ BUSCAS?</h1>
                    </div>
                    <!--Description-->
                    <div class="col-md-8 m-auto mb-5">
                        <p>La Alcaldía Municipal de Santa Tecla pone a tu disposición el catálogo de Servicios
                            Profesionales,
                            Micro y pequeñas Empresas Tecleñas.</p>
                    </div>
                    <!--Search-->
                    <div class="col-md-5 m-auto mt-4">
                        <input type="text" class="form-control" placeholder="Doctor, Albañil, Farmacias, Pupuserias..."
                            v-model="buscarTag" v-on:keyup.enter="verifyTag">
                        <ul v-if="searchTag.length" class="auto-completado">
                            <li v-for="tag in searchTag" :key="tag.nombre_rubro" @click="selectTag(tag)"
                                class="p-2 hover"> {{ tag.nombre_rubro }}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>

        <!--Steps-->
        <section id="pasos" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <h3>¿CÓMO BUSCAR?</h3>
                    </div>
                    <div class="col-md-7 m-auto mb-5">
                        <p>Puedes seguir estos pasos para encontrar el listado de diversos servicios que se ofrecen en
                            el
                            Municipio de Santa Tecla </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card arrow">
                            <img src="@/../public/img/assets/shapex2.png" class="mb-3" alt="Busqueda AMST">
                            <h4 class="mb-3">BUSCA TU SERVICIO</h4>
                            <span>En el buscador escribe el oficio, el servicio o palabras claves de lo que necesitas
                                buscar.</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card arrow">
                            <img src="@/../public/img/assets/shapex3.png" class="mb-3" alt="Perfil AMST">
                            <h4 class="mb-3">REVISA SU PERFIL</h4>
                            <span>Puedes verificar el listado con la información relacionada a los servicios que
                                ofrecen.</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src="@/../public/img/assets/shapex4.png" class="mb-3" alt="Contacto AMST">
                            <h4 class="mb-3">PONTE EN CONTÁCTO</h4>
                            <span>Podrás encontrar los datos de contacto de los profesionales y las empresas, Redes
                                sociales.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Outstanding-->
        <section id="destacado" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5">
                        <h3>SERVICIOS MÁS BUSCADOS</h3>
                    </div>
                    <div class="col-md-12 text-center">
                        <div class="row">
                            <div class="col-md-4 col-xl-2 mb-5" v-for="(s, index) in this.servicios" v-bind:key="index">
                                <router-link :to="{ name: 'Catalogo', params: { slug: s.slug } }"
                                    @click="ClickCategoria(s.id)">
                                    <img :src="this.url + `/storage/${s.imagen}`">
                                    <p class="mt-3 mb-0">{{ s.nombre_rubro }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div class="row">
                            <div class="col-md-4 col-xl-2 mb-5" v-for="(e, index) in this.empresas" v-bind:key="index">
                                <router-link :to="{ name: 'Catalogo', params: { slug: e.slug } }"
                                    @click="ClickCategoria(e.id)">
                                    <img :src="this.url + `/storage/${e.imagen}`">
                                    <p class="mt-3 mb-0">{{ e.nombre_rubro }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Sign Up-->
        <section id="inscribete">
            <div class="container">
                <div class="row row d-flex align-items-center">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12 mb-4 text-left">
                                <h2>¡QUE ESTAS ESPERANDO!</h2>
                            </div>
                            <div class="col-md-12 mb-5 text-left">
                                <p>Unete al catálogo de Servicios Profesionales, Micro y pequeñas Empresas y se
                                    reconocido
                                    en todo Santa Tecla.</p>
                            </div>
                            <div class="col-md-12 text-left">
                                <a href="/registro-servicio" class="me-4 mb-3">INSCRIBE TUS SERVICIOS</a>
                                <a href="/registro-empresa" class="white">INSCRIBE TU EMPRESA</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src="@/../public/img/assets/shapex5.png" alt="Telefono AMST">
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!--Footer-->
    <Footer />
</template>

<!--=======Script=======-->
<script>
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router"

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        let buscarTag = ref('')

        const searchTag = computed(() => {
            if (buscarTag.value === '') {
                return []
            }

            let matches = 0

            return store.state.community.tag.filter(tag => {
                if (
                    tag.nombre_rubro.toLowerCase().includes(buscarTag.value.toLowerCase())
                    && matches < 5
                ) {
                    matches++
                    return tag
                }
            })
        });

        const selectTag = (tag) => {
            router.push({
                name: "Catalogo",
                params: { slug: tag.slug }
            });
            buscarTag.value = ''
        }

        return {
            buscarTag,
            searchTag,
            selectTag,
        }
    },
    data() {
        return {
            url: process.env.VUE_APP_URL_BASE,
            portadainicio: [],
            servicios: [],
            empresas: [],
            skeleton: false
        };
    },

    mounted() {
        this.skeleton = true
    },

    async created() {
        //Portada
        await this.$store.dispatch("PortadaInicio")
        this.portadainicio = this.$store.state.community.portadainicio[0][0]

        //Destacado
        await this.$store.dispatch("CategoriaDestacado")
        this.empresas = this.$store.state.community.categoriadestacado[1]
        this.servicios = this.$store.state.community.categoriadestacado[0]

        //rubros
        await this.$store.dispatch("Tag")
        this.$store.dispatch("Search", '')
    },

    components: {
        Navbar,
        Footer,
    },

    methods: {
        async ClickCategoria(id) {
            await this.$store.dispatch("CategoriaClick", id)
        },

        verifyTag() {
            let match = 0
            this.$store.state.community.tag.forEach(elemento => {
                if (elemento.nombre_rubro.toLowerCase() === this.buscarTag.toLowerCase()) {
                    match = 1
                    this.$router.push({
                        name: "Catalogo",
                        params: { slug: elemento.slug }
                    });
                }
            }
            );

            if (match != 1) {
                this.$store.dispatch("Search", this.buscarTag)
                this.$router.push({
                    name: 'servicios-completos',
                });
            }







        }

    },
};
</script>
