// Imports
import axios from "axios"

import {
    CuentaVerify,
    Concepto,
    RegistroConcepto,
    Portada
} from "../../services/paths"

// Vuex
export default {
    state() {
        return {
            portada: null,
            cuenta: null,
            concepto: null,
            errorregistro: null,
        }
    },

    mutations: {
        MutationPortada(state, data) {
            state.portada = data
        },

        MutationCuenta(state, data) {
            state.cuenta = data
        },

        MutationRegistroConcepto(state, data) {
            state.concepto = data
            state.errorregistro = false
        },

        MutationErrorConcepto(state, data) {
            state.concepto = data
            state.errorregistro = true
        },

        MutationConcepto(state, data) {
            state.concepto = data
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
                })
        },

        async Concepto({ commit }) {
            await axios
                .get(Concepto())
                .then((response) => {
                    commit('MutationConcepto', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async CuentaVerify({ commit }, body) {
            await axios
                .get(CuentaVerify() + body)
                .then((response) => {
                    commit('MutationCuenta', response.data[0])
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async RegistroConcepto({ commit }, body) {
            await axios
                .post(RegistroConcepto(), body)
                .then(response => {
                    if (response.status === 200) {
                        commit('MutationRegistroConcepto', response)
                    }
                })
                .catch((err) => {
                    commit('MutationErrorConcepto', err.response.data[0])
                })
        },


    },
};