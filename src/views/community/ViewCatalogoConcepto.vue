<template>
  <!--Title-->
  <title>Alcaldia Municipal Santa Tecla</title>

  <!--Navbar-->
  <Navbar />

  <!--Main-->
  <main v-if="(skeleton)" class="top">

    <!--Section-->
    <section id="concepto">
      <div class="container mb-4 mb-sm-5 mt-4 mt-sm-5">

        <!--Div-->
        <div class="row">

          <!--Div-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">

            <!--Title-->
            <P class="text-center mb-3 mb-xl-2">Filtrar Categorías</P>

            <!--Filtro-->
            <div class="filtro">

              <!--Div-->
              <div class="row">

                <!--Group-->
                <div v-for="(rubro, index) of this.rubro" :key="index" class="col-6 col-md-4 col-lg-3 col-xl-12 mb-3">

                  <!--Tag-->
                  <div class="d-flex ">

                    <!--Img-->
                    <img :src="this.url + `/storage/${ rubro.imagen }`" class="icono me-2">

                    <!--Input-->
                    <input type="checkbox" :value="rubro.nombre_rubro" :id="rubro.id" @click="filtro(rubro.id)"
                      :checked="rubro.id == '2' ? true:false">

                    <!--Title-->
                    <label :for="rubro.id">
                      {{rubro.nombre_rubro}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Div-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-10 col-xxl-10 mt-4 mt-xl-0">

            <!--Group-->
            <div id="map">

              <!--Title-->
              <div class="titulo">{{this.concepto}}</div>
            </div>
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
      rubro: [],
      lista: [],
      concepto: '',
      skeleton: false,
      listafiltrada: [],
      listaRubros: ['2']
    }
  },

  async mounted() {
    // Vuex
    await this.$store.dispatch("CatalogoConcepto", this.slug)
    this.lista = this.$store.state.community.catalogocategoria

    // If
    if (this.lista.length < 1) {
      this.$router.push({
        name: 'Servicios-Completos'
      })
    }

    // Vuex
    this.concepto = this.$store.state.community.concepto.descripcion

    // Vuex
    await this.$store.dispatch("CategoriaConcepto", this.slug)
    this.rubro = this.$store.state.community.rubroconcepto

    // Method
    this.llenarLista()

    // Skeleton
    setTimeout(() => {
      this.skeleton = true
    }, 950)

    // Leaflet
    setTimeout(() => {
      this.maps(this.listafiltrada)
    }, 950)
  },

  components: {
    Navbar,
    Footer
  },

  methods: {
    // Filtrar
    filtro(value) {
      // If
      if (this.listaRubros.includes(value)) {
        this.listaRubros = this.listaRubros.filter((item) => item !== value)
      } else {
        this.listaRubros.push(value)
      }

      // Methods
      this.llenarLista()
      this.map.off()
      this.map.remove()
      this.maps(this.listafiltrada)
    },

    llenarLista() {
      // Const
      this.lista = this.$store.state.community.catalogocategoria
      this.listafiltrada = []

      // Foreach
      this.listaRubros.forEach(rubro => {

        // Foreach
        this.lista.forEach(cuenta => {

          // Foreach
          cuenta.servicio.forEach(servicio => {

            // If
            if (servicio.id_rubro == rubro) {
              var cant = this.listafiltrada.filter((lista) => lista.id == cuenta.id)

              // If
              if (cant.length == 0) {
                this.listafiltrada.push(cuenta)
              }
            }
          })
        })
      })
    },

    // Map
    maps(lista) {
      // Normal
      var normalBase = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 17,
        Zoom: 18
      })

      // Satellite
      var satelliteBase = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        minZoom: 17,
        Zoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })

      // Initial
      var map = new L.Map('map', {
        layers: [normalBase]
      }).setView([13.675997400000004, -89.28905480533759], 15)

      // Const
      this.map = map
      var url = this.url
      var pines = this.lista
      var baseMaps = {
        "Normal": normalBase,
        "Satelital": satelliteBase
      }

      // Icon
      var LeafIcon = L.Icon.extend({
        options: {
          iconSize: [40, 40],
          popupAnchor: [0, -16],
          className: 'burbuja'
        }
      })

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
          maxZoom: 24
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

      // Pines
      pines.map(function (element) {

        // Const
        var icon = new LeafIcon({ iconUrl: url + "/storage/" + element.foto })

        // If
        if (element.local != false) {
          L.marker([element.concepto[0].latitud, element.concepto[0].longitud], { icon: icon })
            .bindPopup("<a href=/cuenta/" + element.slug + "><img src=" + url + "/storage/" + element.foto + "/><center><span>" + element.nombre_cuenta + "</span></center></a>").addTo(map)
        }
      })
    },
  },

  props: ["slug"]
};
</script>