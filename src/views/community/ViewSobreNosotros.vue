<template>
    <!--Title-->
    <title>Alcaldia Municipal Santa Tecla</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--About us-->
        <section id="nosotros" class="mb-5 mt-5 mt-m-5">
            <div class="container">
                <div class="row ">
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-m-5">
                        <img src="@/../public/img/assets/shapex6.png" alt="Busqueda AMST">
                    </div>
                    <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <h4 class="mb-3 ps-4 ps-m-0">SOBRE NOSOTROS</h4>
                        <p class="mb-3 ps-4 ps-m-0">Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
                            en
                            demostraciones
                            de
                            tipografías o
                            de borradores de diseño para probar el diseño visual antes de insertar el texto final.</p>
                        <p class="ps-4 ps-m-0">
                            Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de
                            tipografías
                            o de borradores de diseño para probar el diseño visual antes de insertar el texto finales el
                            texto
                            que se usa habitualmente en diseño.</p>
                    </div>
                </div>
            </div>
        </section>

        <!--Benefits-->
        <section id="beneficios">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex7.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Empresas</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex8.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 5000 Profesionales</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex9.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 8000 Categorías</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex10.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 1000 Empresas</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex11.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 5000 Profesionales</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="tag">
                            <img src="@/../public/img/assets/shapex12.png" class="mx-auto d-block" alt="Busqueda AMST">
                            <h6 class="mb-3 mt-3 mb-m-0">+ 8000 Categorías</h6>
                            <p class="d-none d-sm-none d-md-block">Lorem ipsum es el texto que se usa habitualmente en
                                diseño gráfico en demostraciones de
                                tipografías o de borradores de diseño para probar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Sign Up-->
        <section id="inscribete">
            <div class="container">
                <div class="row row d-flex align-items-center">
                    <div class="col-12 col-md-12 col-lg-7 col-xl-6 col-xxl-6">
                        <div class="row">
                            <div class="col-md-12 mb-4 text-left">
                                <h2>¡QUE ESTAS ESPERANDO!</h2>
                            </div>
                            <div class="col-md-12 mb-5 mb-m-7 text-left">
                                <p>Unete al catálogo de Servicios Profesionales, Micro y pequeñas Empresas y se
                                    reconocido
                                    en todo Santa Tecla.</p>
                            </div>
                            <div class="col-md-12 text-left">
                                <a href="/registro-servicio" class="me-4 mb-m-4">INSCRIBE TUS SERVICIOS</a>
                                <a href="/registro-empresa" class="white mb-m-6">INSCRIBE TU EMPRESA</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-5 col-xl-6 col-xxl-6 text-center">
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
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            skeleton: false,
        }
    },

    mounted() {
        //Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)
    },

    components: {
        Navbar,
        Footer
    },
};
</script>