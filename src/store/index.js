// Imports
import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Community
import community from './modules/community'

export default createStore({
    state: {
    },

    getters: {
    },

    mutations: {

    },

    actions: {

    },

    modules: {
        community
    },

    plugins: [createLogger(), createPersistedState()]
})