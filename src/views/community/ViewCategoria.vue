<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section id="categoria">
            <div class="container">
                <div class="row">

                    <!--Title-->
                    <div class="col-12 text-center mb-5 mt-4 mt-sm-5">
                        <h3>{{ slug == 'empresas' ? "EMPRESAS" : "SERVICIOS PROFESIONALES" }}</h3>
                    </div>

                    <!--Search-->
                    <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4 mx-auto mb-5">
                        <input type="text" class="form-control text-center"
                            placeholder="Albañil, Farmacias, Pupuserias..." v-model="buscar">
                    </div>

                    <!--Tags-->
                    <div class="col-md-12 text-center" v-if="this.lista.length > 0">
                        <div class="row">
                            <div class="col-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 mb-5"
                                v-for="(l, index) in this.lista" v-bind:key="index">
                                <router-link :to="{ name: 'Catalogo', params: { slug: l.slug } }"
                                    @click="clickcategoria(l.id)">
                                    <img :src="this.url + `/storage/${ l.imagen }`">
                                    <p class="mt-3 mb-0">{{ l.nombre_rubro }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!--Error-->
                    <div class="col-12 mb-5 text-center mb-5" v-else>
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
            skeleton: false
        }
    },

    async mounted() {
        // Vuex
        await this.$store.dispatch("Categoria", this.slug)

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
    },

    computed: {
        // Search
        lista() {
            return this.$store.state.community.categoria[0].filter(categoria => {
                return categoria.tags.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase().includes(this.buscar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase())
            })
        }
    },

    props: ["slug"]
};
</script>