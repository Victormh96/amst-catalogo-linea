// Imports
import axios from "axios"
import {
    PortadaInicio,
    PortadaRegistro,
    PortadaNosotros,
    BusquedaFallida,
    Tag,
    Categoria,
    CategoriaDestacado,
    CategoriaClick,
    CatalogoCategoria,
    Cuenta,
    RegistroServicio,
    RegistroEmpresa,
    Publicidad,
    PublicidadClick
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            portadainicio: null,
            portadaregistro: null,
            portadanosotros: null,
            fallida: null,
            tag: null,
            categoria: null,
            categoriadestacado: null,
            catalogocategoria: null,
            cuenta: null,
            registroservicio: null,
            registroempresa: null,
            search: null,
            publicidad: null,
            publicidadclick: null,
        }
    },

    mutations: {
        MutationPortadaInicio(state, data) {
            state.portadainicio = data
        },

        MutationPortadaRegistro(state, data) {
            state.portadaregistro = data
        },

        MutationPortadaNosotros(state, data) {
            state.portadanosotros = data
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

        MutationCuenta(state, data) {
            state.cuenta = data
        },

        MutationRegistroServicio(state) {
            state.registroservicio = true
        },

        MutationRegistroEmpresa(state) {
            state.registroempresa = true
        },

        MutationClearServicio(state) {
            state.registroservicio = false
        },

        MutationClearEmpresa(state) {
            state.registroempresa = false
        },

        MutationPublicidad(state, data) {
            state.publicidad = data
        },

        MutationPublicidadClick(state) {
            state.publicidadclick = true
        }
    },

    actions: {
        async PortadaInicio({ commit }) {
            await axios
                .get(PortadaInicio())
                .then((response) => {
                    commit('MutationPortadaInicio', response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async PortadaRegistro({ commit }) {
            await axios
                .get(PortadaRegistro())
                .then((response) => {
                    commit('MutationPortadaRegistro', response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async PortadaNosotros({ commit }) {
            await axios
                .get(PortadaNosotros())
                .then((response) => {
                    commit('MutationPortadaNosotros', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async BusquedaFallida({ commit }, body) {
            await axios
                .post(BusquedaFallida(), body)
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
                        let sinonimos = tag.tags.split(',')
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

        async Categoria({ commit }, body) {
            await axios
                .get(Categoria() + body)
                .then((response) => {
                    commit('MutationCategoria', response.data[0])
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
                .post(CategoriaClick() + body)
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
                })
        },

        async RegistroServicio({ commit }, body) {
            await axios
                .post(RegistroServicio(), body)
                .then(response => {
                    console.log('soy la respuesta', response)
                    if (response.status === 200) {
                        commit('MutationRegistroServicio')
                    }
                })
                .catch((err) => {
                    commit('MutationClearServicio')
                    console.log('fallo', err)
                })
        },

        async RegistroEmpresa({ commit }, body) {
            await axios
                .post(RegistroEmpresa(), body)
                .then(response => {
                    if (response.status === 200) {
                        commit('MutationRegistroEmpresa')
                    }
                })
                .catch((err) => {
                    commit('MutationClearEmpresa')
                    console.log('fallo', err)
                })
        },

        Search({ commit }, body) {
            commit('MutationSearch', body)
        },

        ClearServicio({ commit }) {
            commit('MutationClearServicio')
        },

        ClearEmpresa({ commit }) {
            commit('MutationClearEmpresa')
        },

        async Publicidad({ commit }) {
            await axios
                .get(Publicidad())
                .then((response) => {
                    commit('MutationPublicidad', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async PublicidadClick({ commit }, body) {
            await axios
                .post(PublicidadClick() + body)
                .then(() => {
                    commit('MutationPublicidadClick')
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
};