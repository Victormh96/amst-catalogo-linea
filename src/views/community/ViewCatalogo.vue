<template>
  <!--Title-->
  <title>Alcaldia Municipal Santa Tecla</title>

  <!--Navbar-->
  <Navbar />

  <!--Main-->
  <main v-if="(skeleton)" class="top">

    <!--Section-->
    <section id="catalogo">
      <div class="container mb-4 mb-sm-5 mt-4 mt-sm-5">
        <div class="row">

          <!--Search-->
          <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4 mx-auto mb-4 mb-xxl-5">

            <!--Input-->
            <input type="text" class="form-control text-center mb-3 mb-xl-2"
              placeholder="Albañil, Farmacias, Pupuserias..." v-model="buscar" @keyup="refresh(listaFiltrada)">

            <!--Checks-->
            <div class="text-center">

              <!--All-->
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="todos" name="delivery" v-model="this.domicilio"
                  @change="filtrar()" value="0" checked>
                <label class="form-check-label" for="todos">Todos</label>
              </div>

              <!--Delivery-->
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="domicilio" name="delivery" v-model="this.domicilio"
                  @change="filtrar()" value="1">
                <label class="form-check-label" for="domicilio">Servicio a domicilio</label>
              </div>

              <!--Place-->
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="local" name="delivery" v-model="this.domicilio"
                  @change="filtrar()" value="2">
                <label class="form-check-label" for="local">En el lugar</label>
              </div>
            </div>
          </div>
        </div>

        <!--Div-->
        <div class="row">

          <!--Cards-->
          <div class="col-12 col-md-12 col-lg-9 col-xl-5 mx-auto" v-if="this.lista.length > 0">
            <div class="card mb-4" v-for="(l, index) in this.listaPaginada" v-bind:key="index">

              <!--Group-->
              <small class="delivery">{{ l.servicio_domicilio == 1 ? 'A DOMICILIO' : 'EN EL LUGAR' }}</small>
              <div class="row">

                <!--Img-->
                <div class="col-md-3 mb-2 mb-sm-0">
                  <router-link :to="{ name: 'Cuenta', params: { slug: l.slug } }">
                    <img :src="this.url + `/storage/${ l.foto }`" :alt="`${ l.slug }`">
                  </router-link>
                </div>

                <!--Group-->
                <div class="col-md-9">

                  <!--Heading-->
                  <router-link :to="{ name: 'Cuenta', params: { slug: l.slug } }">
                    <h5 class="mb-1">

                      <!--Title-->
                      {{ l.nombre_cuenta }}

                      <!--Img-->
                      <img src="@/../public/img/assets/shapex15.png" class="ms-1 verify" v-if="l.verificado == 1">
                    </h5>
                  </router-link>

                  <!--Service-->
                  <span class="me-2 mb-2" v-for="(r, index) in l.servicio" v-bind:key="index">
                    {{ r.rubro.nombre_rubro }}
                  </span>

                  <!--Description-->
                  <p class="descripcion">
                    {{ l.descripcion }}
                  </p>
                </div>
              </div>

              <!--Items-->
              <ul class="mt-2" v-if="l.verificado == true">

                <!--Map-->
                <li class="d-inline-flex align-items-center" v-if="l.local == 1">
                  <button @click="marker(l.latitud, l.longitud, l.nombre_cuenta, l.foto, l.slug)">
                    <i class="fa-solid fa-location-crosshairs"></i>
                  </button>
                </li>

                <!--Google-->
                <li class="d-inline-flex align-items-center" v-if="l.local == 1">
                  <a :href="`https://www.google.com/maps/dir//${ l.latitud },${ l.longitud }`" target="_blank"
                    class="d-flex">
                    <i class="fa-brands fa-google"></i>
                  </a>
                </li>

                <!--Waze-->
                <li class="d-inline-flex align-items-center" v-if="l.local == 1">
                  <a :href="`https://www.waze.com/ul?ll=${ l.latitud },${ l.longitud }&navigate=yes&zoom=16`"
                    target="_blank" class="d-flex">
                    <i class="fab fa-waze waze others"></i>
                  </a>
                </li>

                <!--Whatsapp Or Mobile-->
                <li class="d-inline-flex align-items-center" v-for="(c, index) in l.contacto" v-bind:key="index">
                  <a v-if="c.id_detalle_contacto == 5"
                    :href="`https://api.whatsapp.com/send?phone=503${ c.descripcion }&text=¡Hola ${ l.nombre_cuenta }! Quisiera mas información de tus servicios. 📢📢`"
                    target="_blank" class="d-flex">
                    <i class="fa-brands fa-whatsapp others"></i>
                  </a>

                  <!--Or-->
                  <a v-if="c.id_detalle_contacto == 7" :href="`tel:${ c.descripcion }`" class="d-flex">
                    <i class="fa-solid fa-mobile-screen-button phones"></i>
                  </a>
                </li>
              </ul>
            </div>

            <!--Pagination-->
            <div id="paginacion" class="paginacion text-center mb-4 mb-xxl-0" v-if="lista.length > elementosPorPagina">
              <vue-awesome-paginate :total-items="lista.length" :on-click="onClickHandler"
                prev-button-content="Anterior" :current-page="1" :items-per-page="elementosPorPagina"
                :max-pages-shown="5" next-button-content="Siguiente">
              </vue-awesome-paginate>
            </div>
          </div>

          <!--Error-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-5 mb-4 mb-sm-5 text-center" v-else>
            <i class="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
          </div>

          <!--Maps-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-7 mt-4 mt-xl-0">
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
import "leaflet.fullscreen"
import "leaflet.locatecontrol"
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
  data() {
    return {
      map: '',
      popup: '',
      lista: [],
      buscar: '',
      skeleton: false,
      domicilio: false,
      listaPaginada: [],
      elementosPorPagina: 5
    }
  },

  async mounted() {
    // Vuex
    await this.$store.dispatch("CatalogoCategoria", this.slug)
    this.lista = this.$store.state.community.catalogocategoria

    // If
    if (this.lista.length < 1) {
      this.$router.push({
        name: 'Servicios-Completos',
      })
    }

    // Function
    this.onClickHandler(1)

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
    // Pagination
    onClickHandler(page) {
      this.listaPaginada = []
      var inicio = (page * this.elementosPorPagina) - this.elementosPorPagina
      var fin = (page * this.elementosPorPagina)

      // Foreach
      for (let index = inicio; index < fin; index++) {

        // If
        if (this.lista[index]) {
          this.listaPaginada.push(this.lista[index])
        }
      }
    },

    // Filter
    filtrar() {
      this.lista = this.$store.state.community.catalogocategoria

      // If
      if (this.domicilio == 1) {
        this.lista = this.lista.filter(categoria => {
          return categoria.servicio_domicilio == 1
        })
      }

      // If
      if (this.domicilio == 2) {
        this.lista = this.lista.filter(categoria => {
          return categoria.servicio_domicilio == 0
        })
      }

      // Methods
      this.map.off()
      this.map.remove()
      this.maps()
    },

    // Refresh
    refresh(lista) {
      this.lista = lista

      // If
      if (this.domicilio == 1) {
        this.lista = this.lista.filter(categoria => {
          return categoria.servicio_domicilio == 1
        })
      }

      // If
      if (this.domicilio == 2) {
        this.lista = this.lista.filter(categoria => {
          return categoria.servicio_domicilio == 0
        })
      }

      // Methods
      this.map.off()
      this.map.remove()
      this.maps(lista)
    },

    // Map
    maps(lista) {
      // Normal
      var normalBase = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 14,
        Zoom: 16
      })

      // Satellite
      var satelliteBase = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        minZoom: 14,
        Zoom: 16,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })

      // Initial
      var map = new L.Map('map', {
        tap: false,
        layers: [normalBase]
      }).setView([13.675997400000004, -89.28905480533759], 15)

      // Const
      this.map = map
      var url = this.url
      var pines = this.lista
      var popup
      var baseMaps = {
        "Normal": normalBase,
        "Satelital": satelliteBase
      }

      // If
      if (lista !== undefined) {
        pines = lista
      }

      // Layers
      L.control.layers(baseMaps).addTo(map)

      // Controller
      L.control.locate({
        showPopup: false,
        locateOptions: {
          maxZoom: 18
        }
      }).addTo(map)

      // Full Screen
      L.control.fullscreen({
        position: 'topleft',
        content: null,
        forceSeparateButton: true,
        forcePseudoFullscreen: true,
        fullscreenElement: false
      }).addTo(map);

      // Pin
      pines.map(function (element) {
        if (element.local != false) {
          popup = L.marker([element.latitud, element.longitud],)
            .bindPopup("<a href=/cuenta/" + element.slug + "><img src=" + url + "/storage/" + element.foto + "/><center><span>" + element.nombre_cuenta + "</span></center></a>").addTo(map)

        }
      })

      // Const
      this.popup = popup

      // Methods
      this.onClickHandler(1)
    },

    // Marker
    marker(lat, long, nombre_cuenta, foto, slug) {
      //Popup
      this.popup.openPopup([lat, long]).bindPopup("<a href=/cuenta/" + slug + "><img src=" + this.url + "/storage/" + foto + "/><center><span>" + nombre_cuenta + "</span></center></a>");

      // Move
      this.map.setView([lat, long], 18)

      // Scroll
      window.scrollTo({
        top: document.getElementById("map").offsetTop - 120,
        behavior: "smooth",
      })
    }
  },

  computed: {
    // Search
    listaFiltrada() {
      return this.$store.state.community.catalogocategoria.filter(categoria => {
        return categoria.nombre_cuenta.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
          .toLowerCase().includes(this.buscar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
            .toLowerCase())
          ||
          categoria.tags.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
            .toLowerCase().includes(this.buscar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')
              .toLowerCase())
      })
    }
  },

  props: ["slug"]
};
</script>


