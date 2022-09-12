<template>
  <!--Title-->
  <title>Alcaldia Municipal Santa Tecla</title>

  <!--Navbar-->
  <Navbar />

  <!--Main-->
  <main v-if="(skeleton)" class="top">

    <!--Section-->
    <section id="catalogo">
      <div class="container">
        <div class="row">

          <!--Search-->
          <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4 mx-auto mb-5 mt-5 mt-m-5">
            <input type="text" class="form-control text-center" placeholder="Albañil, Farmacias, Pupuserias...">
          </div>
        </div>

        <!--Div-->
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4" v-for="(l, index) in this.lista" v-bind:key="index">

              <!--Info-->
              <small class="delivery">ADOMICILIO</small>
              <div class="row">

                <!--Img-->
                <div class="col-md-2">
                  <router-link :to="{ name: 'Cuenta', params: { slug: l.slug } }">
                    <img :src="this.url + `/storage/${ l.foto }`" :alt="`${ l.slug }`" v-if="l.foto">
                    <img src="@/../public/img/assets/shapex14.png" alt="default" v-else>
                  </router-link>
                </div>

                <!--Description-->
                <div class="col-md-9">
                  <router-link :to="{ name: 'Cuenta', params: { slug: l.slug } }">
                    <h5 class="mb-1">{{ l.nombre_cuenta }}</h5>
                  </router-link>
                  <span class="me-2 mb-1" v-for="(r, index) in l.servicio" v-bind:key="index">
                    {{ r.rubro.nombre_rubro }}
                  </span>
                  <p class="descrpcion">
                    {{ l.descripcion }}
                  </p>
                </div>
              </div>

              <!--Options-->
              <ul class="mt-2">
                <li class="d-inline-flex">
                  <button @click="marker(l.latitud, l.longitud)">
                    <i class="fas fa-map-marker-alt"></i>
                  </button>
                </li>
                <li class="d-inline-flex">
                  <a :href="`https://www.google.com/maps/dir//${ l.latitud },${ l.longitud }`" target="_blank"
                    class="d-flex">
                    <i class="fas fa-map-marked-alt maps"></i>
                    <p>Google</p>
                  </a>
                </li>
                <li class="d-inline-flex">
                  <a :href="`https://www.waze.com/ul?ll=${ l.latitud },${ l.longitud }&navigate=yes&zoom=16`"
                    target="_blank" class="d-flex">
                    <i class="fab fa-waze waze"></i>
                    <p>Waze</p>
                  </a>
                </li>
                <li class="d-inline-flex">
                  <div v-for="(c, index) in l.contacto" v-bind:key="index">
                    <a :href="`https://api.whatsapp.com/send?phone=503${ c.descripcion }&text=¡Hola ${ l.nombre_cuenta }! Quisiera mas información de sus servicios. 📢📢`"
                      target="_blank" class="d-flex" v-if="c.id === 6">
                      <i class="fa-brands fa-whatsapp"></i>
                      <p>Whatsapp</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!--Maps-->
          <div class="col-md-6">
            <div id="map"></div>
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
import L from "leaflet"
import "leaflet.locatecontrol"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
  data() {
    return {
      map: '',
      buscar: '',
      lista: [],
      skeleton: false,
    }
  },

  async mounted() {
    // Vuex
    await this.$store.dispatch("CatalogoCategoria", this.slug)
    this.lista = this.$store.state.community.catalogocategoria[0]

    // Skeleton
    setTimeout(() => {
      this.skeleton = true
    }, 950)

    // Leaflet
    setTimeout(() => {
      this.maps()
    }, 950)
  },

  components: {
    Navbar,
    Footer
  },

  methods: {
    maps() {
      // Initial
      this.map = L.map('map').setView([13.675997400000004, -89.28905480533759], 15)
      var map = this.map
      var url = this.url

      // Setting
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        zoom: 16,
      }).addTo(this.map)

      // Localization
      L.control.locate({
        showPopup: false,
        locateOptions: {
          maxZoom: 18
        }
      }).addTo(this.map)

      // Pin
      this.lista.map(function (element) {
        L.marker([element.latitud, element.longitud],).bindPopup("<img src=" + url + "/storage/" + element.foto + "/>").addTo(map)
      })
    },

    marker(lat, long) {
      // Move
      this.map.setView([lat, long], 18)
    }
  },

  props: ["slug"]
};
</script>

