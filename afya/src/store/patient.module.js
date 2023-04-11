import PatientService from '../services/patient.service';
import searchresults from '../assets/json/patient/searchresults.json';

export const patient = {
  namespaced: true,
  state: {
    search_results: []
  },
  getters: {
    search_results: (state) =>{
      return state.search_results
    },
    search_results_count: (state) =>{
      return state.search_results.length
    }
  },
  actions: {
    doctor_search({ commit }, upload_params) {
      // { name }
      return PatientService.doctor_search(upload_params).then(
        res => {
          commit('SEARCH_RESULTS', res);
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    SEARCH_RESULTS(state, data) {
      state.search_results  = data
    },
  }
};
