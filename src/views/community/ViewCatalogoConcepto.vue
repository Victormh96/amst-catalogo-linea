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
          <!--Maps-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-2 mt-4 mt-xl-0">
            <div class="text-center mt-2">Filtrar Por Categorias</div>
            <div v-for="(rubro, index) of this.rubro" :key="index" class="filtro">
              <div class="form-check ps-5">
                <input class="form-check-input " type="checkbox" :value="rubro.nombre_rubro" :id="rubro.id"
                  @click="filtro(rubro.id)">
                <label class="form-check-label" :for="rubro.id">
                  <img :src="this.url + `/storage/${ rubro.imagen }`"> {{rubro.nombre_rubro}}
                </label>
              </div>

            </div>
          </div>
          <!--Maps-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-10 mt-4 mt-xl-0">
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
      rubro: [],
      listaRubros: [],
      lista: [],
      listafiltrada: [],
      buscar: '',
      skeleton: false,
      domicilio: false,
      listaPaginada: [],
      elementosPorPagina: 5
    }
  },

  async mounted() {
    // Vuex
    await this.$store.dispatch("CatalogoConcepto", this.slug)
    this.lista = this.$store.state.community.catalogocategoria[0]

    await this.$store.dispatch("CategoriaConcepto", this.slug)
    this.rubro = this.$store.state.community.rubroconcepto

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

    //filtrar
    filtro(value) {
      if (this.listaRubros.includes(value)) {
        this.listaRubros = this.listaRubros.filter((item) => item !== value)
      } else {
        this.listaRubros.push(value)
      }
      this.lista = this.$store.state.community.catalogocategoria
      this.listafiltrada = []

      this.listaRubros.forEach(rubro => {
        this.lista.forEach(cuenta => {
          cuenta.servicio.forEach(servicio => {
            if (servicio.id_rubro == rubro) {
              var cant = this.listafiltrada.filter((lista) => lista.id == cuenta.id)
              if (cant.length == 0) {
                this.listafiltrada.push(cuenta)
              }
            }
          })
        }
        )
      })
      // Methods
      this.map.off()
      this.map.remove()
      this.maps(this.listafiltrada)
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

      var LeafIcon = L.Icon.extend({
        options: {
          iconSize: [50, 50],
          shadowSize: [50, 64],
          shadowAnchor: [4, 62],
          iconAnchor:   [22, 94],
          popupAnchor: [-3, -76],
          className: 'burbuja'
        }
      });

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

      pines.map(function (element) {
        var icon = new LeafIcon({ iconUrl: url + "/storage/" + element.foto });
        if (element.local != false) {
          L.marker([element.concepto[0].latitud, element.concepto[0].longitud], { icon: icon })
            .bindPopup("<a href=/cuenta/" + element.slug + "><img src=" + url + "/storage/" + element.foto + "/><center><span>" + element.nombre_cuenta + "</span></center></a>").addTo(map)
        }
      })

    },

    // Marker
    marker(lat, long) {
      // Move
      this.map.setView([lat, long], 18)

      // Scroll
      window.scrollTo({
        top: document.getElementById("map").offsetTop - 120,
        behavior: "smooth",
      })
    }
  },

  props: ["slug"]
};
</script>


