<template>
    <!--Div-->
    <footer id="footer">
        <div class="container">
            <div class="row">

                <!--Tickets-->
                <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                    <h5><i class="fa-solid fa-cog fa-spin"></i>ENTRADAS</h5>
                    <ul>
                        <li>
                            <a href="/" target="_blank">Inicio</a>
                        </li>
                        <li>
                            <a href="https://www.santatecla.gob.sv/" target="_blank">Alcaldia municipal santa tecla</a>
                        </li>
                        <li>
                            <a href="https://www.santatecla.gob.sv/noticias" target="_blank">Noticias</a>
                        </li>

                    </ul>
                </div>

                <!--Services-->
                <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                    <h5><i class="fa-solid fa-cog fa-spin"></i>Servicios</h5>
                    <ul>
                        <li><a href="/">Iniciar sesión</a></li>
                        <li>
                            <router-link :to="{ name: 'Sobre-Nosotros' }">Sobre Nosotros</router-link>
                        </li>
                        <li><a href="/">Términos y condiciones</a></li>
                    </ul>
                </div>

                <!--Our Catalog-->
                <div class="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                    <h5><i class="fa-solid fa-cog fa-spin"></i>NUESTRO CATÁLOGO</h5>
                    <ul>
                        <li><a href="/servicios-completos">Todas los servicios</a></li>
                    </ul>
                </div>

                <!--Follow Us-->
                <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 redes">
                    <h5><i class="fa-solid fa-cog fa-spin"></i>SÍGUENOS</h5>
                    <ul>
                        <li>
                            <a href="https://es-la.facebook.com/SantaTeclaSV" target="_blank"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/santateclasv" target="_blank"><i
                                    class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/santateclasv/" target="_blank"><i
                                    class="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                    <br>
                    <h5><i class="fa-solid fa-cog fa-spin"></i>UBICACIÓN</h5>
                    <ul>
                        <li><a href="https://goo.gl/maps/APB1fjrxkFhyAgfEA" target="_blank"><i
                                    class="fa-solid fa-location-dot"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!--Div-->
    <div id="sub-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <p>© {{ year() }} – Alcaldía Municipal de Santa Tecla.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!--=======Script=======-->
<script>
import { getYear } from "@/utils/index.js"

export default {
    methods: {
        year() {
            return getYear()
        }
    },
};
</script>