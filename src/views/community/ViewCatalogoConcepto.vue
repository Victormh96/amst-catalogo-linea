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
        <!--Div-->
        <div class="row">

          <!--Maps-->
          <div class="col-12 col-md-12 col-lg-12 col-xl-12 mt-4 mt-xl-0">
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
    await this.$store.dispatch("CatalogoConcepto", this.slug)
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
      this.map.remove()
      this.maps(lista)
    },

    // Map
    maps(lista) {
      // Normal
      var normalBase = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 16,
        Zoom: 18
      })

      // Satellite
      var satelliteBase = new L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        minZoom: 16,
        Zoom: 18,
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
          iconSize: [50,50],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
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

      pines.map(function (element) {
        var icon = new LeafIcon({ iconUrl: url + "/storage/" + element.foto });
        if (element.local != false) {
          L.marker([element.latitud, element.longitud], { icon: icon })
            .bindPopup("<a href=/cuenta/" + element.slug + "><img src=" + url + "/storage/" + element.foto + "/><center><span>" + element.nombre_cuenta + "</span></center></a>").addTo(map)
        }
      })

      // Methods
      this.onClickHandler(1)
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


