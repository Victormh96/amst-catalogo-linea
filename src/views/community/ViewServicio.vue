<template>
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
                        <h3>TODOS LOS SERVICIOS</h3>
                    </div>

                    <!--Div-->
                    <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4 mx-auto mb-5">

                        <!--Input-->
                        <input type="text" class="form-control text-center mb-2" :placeholder="placeholder() + '...'"
                            v-model="buscar">

                        <!--Title-->
                        <h6 v-if="cant == 0">No se encontro ninguna coincidencia con "{{ text }}", prueba
                            con estas categorias</h6>
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
                                    <img :src="this.url + `/storage/${l.imagen}`" class="svgcolor" :alt="`${l.slug}`">

                                    <!--Title-->
                                    <p class="mt-3 mb-0">{{ l.nombre_rubro[this.idioma] }}</p>
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
            cant: '',
            text: '',
            buscar: '',
            idioma: null,
            skeleton: false
        }
    },

    async mounted() {
        // Const
        const { input, cant } = this.$store.state.community.search
        this.text = input
        this.cant = cant
        var rubro = []

        // Vuex
        await this.$store.dispatch("CategoriasCompletas")
        this.$store.state.community.tag.forEach(categoria => {
            categoria.nombre_rubro = categoria.nombre_rubro.split(',')
            rubro.push(categoria)
        })
        this.$store.state.community.categoria = rubro

        // Language
        this.idioma = this.$store.state.community.idioma

        // If
        if (cant > 0) {
            input ? this.buscar = input : this.buscar = '';
        } else {

            // Vuex
            await this.$store.dispatch("BusquedaFallida", input)
        }

        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 250)
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

        // Placeholder
        placeholder() {
            const place = this.$store.state.community.categoria.sort(() => Math.random()).slice(0, 3)

            // If
            if (this.$store.state.community.idioma == 0) {
                return place[0].nombre_rubro[0] + ', ' + place[1].nombre_rubro[0] + ', ' + place[2].nombre_rubro[0]
            } else {
                return place[0].nombre_rubro[1] + ', ' + place[1].nombre_rubro[1] + ', ' + place[2].nombre_rubro[1]
            }
        },
    },

    computed: {
        // Search
        lista() {
            return this.$store.state.community.tag.filter(categoria => {
                return categoria.tag.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase().includes(this.buscar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase())
            })
        }
    },
};
</script>