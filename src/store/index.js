// Imports
import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Community
import community from './modules/community'
import verify from './modules/verify'

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
        community,
        verify
    },

    plugins: [createLogger(), createPersistedState()]
})