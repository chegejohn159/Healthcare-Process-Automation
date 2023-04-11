import AdminService from '../services/admin.service';

export const admin = {
  namespaced: true,
  state: {
    counties_results: [],
    specialties_results: []
  },
  getters: {
    get_counties: (state) =>{
      return state.counties_results
    },
    get_specialities: (state) =>{
      return state.specialties_results
    }
  },
  actions: {
    getCounties({ commit }, params) {
      // { name }
      return AdminService.getCounties(params).then(
        res => {

          commit('COUNTIES_RESULTS', res);
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

    getSpeciality({ commit }) {
      // { name }
      return AdminService.getSpeciality().then(
        res => {
          commit('SPECIALTIES_RESULTS', res);
          return Promise.resolve(res);
        },
        error => {
          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    COUNTIES_RESULTS(state, data) {
      state.counties_results = data
    },
    SPECIALTIES_RESULTS(state, data) {
      state.specialties_results  = data
    },
  }
};
