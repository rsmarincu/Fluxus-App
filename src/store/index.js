import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        datasets: [],
        flux_file: null,
        editor: null,
        loading: false,
        openml_datasets: []
    },
    getters:{
        datasets: state => {
            return state.datasets
        },

        dataset: (state) => (id) => {
            return state.datasets.find(dataset => dataset.id == id)
        },

        flux_file: state => {
            return state.flux_file
        },

        editor: state => {
            return state.editor.toJSON()
        },

        openml_datasets: state => {
            return state.openml_datasets
        }

    },
    mutations:{
        ADD_FILE(state, dataset) {
            if (!state.datasets.includes(dataset))
            {
                state.datasets.push(dataset)
            }
        },

        LOAD_FLUX_FILE(state, file) {
            state.flux_file = file
        },

        SAVE_EDITOR(state, editor) {
            state.editor = editor
        },

        SET_FLUX(state, file) {
            state.flux_file = file
        },

        LOAD_DATASETS(state, to_load) {
            state.openml_datasets = to_load
        }


    },
    actions:{

    }
})