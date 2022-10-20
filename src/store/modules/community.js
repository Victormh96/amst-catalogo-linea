// Imports
import axios from "axios"
import { toast } from "vue3-toastify"
import {
    Portada,
    BusquedaFallida,
    Tag,
    Categoria,
    CategoriaRegistro,
    CategoriaDestacado,
    CategoriaClick,
    CatalogoCategoria,
    Cuenta,
    RegistroServicio,
    RegistroEmpresa,
    Entidad,
    Publicidad,
    PublicidadClick,
    CatalogoConcepto,
    CategoriaConcepto
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            portada: null,
            fallida: null,
            tag: null,
            categoria: null,
            categoriadestacado: null,
            cuenta: null,
            concepto: null,
            catalogocategoria: null,
            registroservicio: null,
            rubroconcepto: null,
            registroempresa: null,
            errorregistro: null,
            entidad: null,
            search: null,
            publicidad: null,
            publicidadclick: null,
            idioma: 0
        }
    },

    mutations: {
        MutationPortada(state, data) {
            state.portada = data
        },

        MutationSearch(state, data) {
            state.search = data
        },

        MutationBusqueda(state, data) {
            state.fallida = data
        },

        MutationTag(state, data) {
            state.tag = data
        },

        MutationCategoria(state, data) {
            state.categoria = data
        },

        MutationCategoriaDestacado(state, data) {
            state.categoriadestacado = data
        },

        MutationCategoriaClick(state) {
            state.categoriaclick = true
        },

        MutationCatalogoCategoria(state, data) {
            state.catalogocategoria = data
        },

        MutationCategoriaConcepto(state, data) {
            state.rubroconcepto = data
        },

        MutationCuenta(state, data) {
            state.cuenta = data
        },

        MutationRegistroServicio(state, data) {
            state.registroservicio = data
            state.errorregistro = false
        },

        MutationRegistroEmpresa(state, data) {
            state.registroempresa = data
            state.errorregistro = false
        },

        MutationErrorServicio(state, data) {
            state.registroservicio = data
            state.errorregistro = true
        },

        MutationErrorEmpresa(state, data) {
            state.registroempresa = data
            state.errorregistro = true
        },

        MutationEntidad(state, data) {
            state.entidad = data
        },

        MutationPublicidad(state, data) {
            state.publicidad = data
        },

        MutationPublicidadClick(state) {
            state.publicidadclick = true
        },

        MutationConcepto(state, data) {
            state.concepto = data
        },

        MutationIdioma(state) {
            state.idioma === 0 ? state.idioma = 1 : state.idioma = 0
        }
    },

    actions: {
        async Portada({ commit }, body) {
            await axios
                .get(Portada() + body)
                .then((response) => {
                    commit('MutationPortada', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async BusquedaFallida({ commit }, body) {
            await axios
                .get(BusquedaFallida() + body)
                .then((response) => {
                    commit('MutationBusqueda', response.data[0])
                    commit('MutationSearch', '')
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Tag({ commit }) {
            let buscador = []
            await axios
                .get(Tag())
                .then((response) => {
                    response.data[0].forEach(tag => {
                        let sinonimos = tag.tag.split(',')
                        sinonimos.forEach(nombre => {
                            const data = {
                                id: tag.id,
                                nombre_rubro: nombre,
                                slug: tag.slug,
                                imagen: tag.imagen
                            }
                            buscador.push(data)
                        })
                    })
                    buscador.sort((a, b) => a.nombre_rubro.localeCompare(b.nombre_rubro));
                    commit('MutationTag', buscador)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async CategoriasCompletas({ commit }) {
            await axios
                .get(Tag())
                .then((response) => {
                    commit('MutationTag', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Entidad({ commit }) {
            await axios
                .get(Entidad())
                .then((response) => {
                    commit('MutationEntidad', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Categoria({ commit }, body) {
            await axios
                .get(Categoria() + body)
                .then((response) => {
                    commit('MutationCategoria', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async CategoriaRegistro({ commit }, body) {
            await axios
                .get(CategoriaRegistro() + body)
                .then((response) => {
                    commit('MutationCategoria', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async CategoriaConcepto({ commit }, body) {
            await axios
                .get(CategoriaConcepto() + body)
                .then((response) => {
                    commit('MutationCategoriaConcepto', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async CategoriaDestacado({ commit }) {
            await axios
                .get(CategoriaDestacado())
                .then((response) => {
                    commit('MutationCategoriaDestacado', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async CategoriaClick({ commit }, body) {
            await axios
                .get(CategoriaClick() + body)
                .then(() => {
                    commit('MutationCategoriaClick')
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async CatalogoCategoria({ commit }, body) {
            await axios
                .get(CatalogoCategoria() + body)
                .then((response) => {
                    commit('MutationCatalogoCategoria', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async CatalogoConcepto({ commit }, body) {
            await axios
                .get(CatalogoConcepto() + body)
                .then((response) => {
                    commit('MutationConcepto', response.data[1][0])
                    commit('MutationCatalogoCategoria', response.data[0])

                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async Cuenta({ commit }, body) {
            await axios
                .get(Cuenta() + body)
                .then((response) => {
                    commit('MutationCuenta', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async RegistroServicio({ commit }, body) {
            commit('MutationLoading', true)
            await axios
                .post(RegistroServicio(), body)
                .then(response => {
                    if (response.status === 200) {
                        commit('MutationRegistroServicio', response)
                    }
                })
                .catch((err) => {
                    commit('MutationErrorServicio', err.response.data[0])
                })
        },

        async RegistroEmpresa({ commit }, body) {
            commit('MutationLoading', true)
            await axios
                .post(RegistroEmpresa(), body)
                .then(response => {
                    if (response.status === 200) {
                        commit('MutationRegistroEmpresa', response)
                    }
                })
                .catch((err) => {
                    commit('MutationErrorEmpresa', err.response.data[0])
                })
        },

        async Publicidad({ commit }) {
            await axios
                .get(Publicidad())
                .then((response) => {
                    commit('MutationPublicidad', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                    toast("Error Interno de Servidor", {
                        type: toast.TYPE.ERROR,
                        position: toast.POSITION.TOP_CENTER,
                        transition: toast.TRANSITIONS.ZOOM,
                        autoClose: false,
                    })
                })
        },

        async PublicidadClick({ commit }, body) {
            await axios
                .get(PublicidadClick() + body)
                .then(() => {
                    commit('MutationPublicidadClick')
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        Search({ commit }, body) {
            commit('MutationSearch', body)
        },

        CambiarIdioma({ commit }) {
            commit('MutationIdioma')
        },

        Loading({ commit }, data) {
            commit('MutationLoading', data)
        },
    },
};