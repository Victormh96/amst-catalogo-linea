<template>
    <!--Title-->
    <title>Ubícalo En Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="categoria">
            <div class="container mt-4 mt-sm-5">
                <div class="row">

                    <!--Title-->
                    <div class="col-12 text-center mb-5">
                        <h3>{{ this.titulo }}</h3>
                    </div>

                    <!--Search-->
                    <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4 mx-auto mb-5">
                        <input type="text" class="form-control text-center" :placeholder="this.buscador"
                            v-model="buscar">
                    </div>

                    <!--Div-->
                    <div class="col-md-12 text-center mb--5" v-if="this.lista.length > 0">
                        <div class="row">

                            <!--Group-->
                            <div class="col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mb-5 d-flex justify-content-center"
                                v-for="(l, index) in this.lista" v-bind:key="index">

                                <!--Items-->
                                <router-link :to="{ name: 'Catalogo', params: { slug: l.slug } }"
                                    @click="clickcategoria(l.id)">

                                    <!--Img-->
                                    <img :src="this.url + `/storage/${ l.imagen }`" :alt="`${ l.slug }`"
                                        class="svgcolor">

                                    <!--Description-->
                                    <p class="mt-3 mb-0">{{ l.nombre_rubro[idioma] }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!--Error-->
                    <div class="col-12 text-center mb-5" v-else>
                        <i class="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
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
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            buscar: '',
            titulo: '',
            buscador: '',
            idioma: null,
            categoria: [],
            skeleton: false
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Categoria", this.slug)
        this.$store.state.community.categoria.forEach(categoria => {
            categoria.nombre_rubro = categoria.nombre_rubro.split(',')
            this.categoria.push(categoria)
        })
        this.$store.state.community.categoria = this.categoria

        // Language
        this.idioma = this.$store.state.community.idioma

        // Methods
        this.CambiarIdioma()

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)
    },

    components: {
        Navbar,
        Footer
    },

    methods: {
        // Vuex
        async clickcategoria(id) {
            await this.$store.dispatch("CategoriaClick", id)
        },

        CambiarIdioma() {
            // If
            if (this.idioma == 0) {
                this.titulo = this.slug == 'empresas' ? "EMPRESAS" : "SERVICIOS PROFESIONALES"
                this.buscador = 'Albañil, Farmacias, Pupuserias...'
            } else {
                this.titulo = this.slug == 'empresas' ? "COMPANIES" : "PROFESSIONAL SERVICES"
                this.buscador = 'Bricklayer, Pharmacy, pupuserias...'
            }
        }
    },

    computed: {
        // Search
        lista() {
            return this.$store.state.community.categoria.filter(categoria => {
                return categoria.tag.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase().includes(this.buscar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase())
            })
        }
    },

    props: ["slug"]
};
</script>