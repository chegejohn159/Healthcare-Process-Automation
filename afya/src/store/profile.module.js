import ProfileService from '../services/profile.service';

export const profile = {
  namespaced: true,
  state: {
    profiles: []
  },
  actions: {
    addDoc({ commit }, upload_params) {
      // { name }
      return ProfileService.add_doc(upload_params).then(
        res => {
          commit('ADD_DOC', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    getDocDetails({ commit }, id) {
      // {}
      return ProfileService.get_doc(id).then(
        res => {
          commit('GET_DOC_DETAILS');
          return Promise.resolve(res);
        },
        error => {
          if (error.response.status === 403) {
            localStorage.removeItem('user');
            this.$router.push('/login')
          }
          return Promise.reject(error);
        }
      );
    },

    updateDocDetails({ commit }, rename_params) {
      // { id, name }
      return ProfileService.update_doc(rename_params).then(
        res => {
          commit('UPDATE_DOC_DETAILS');
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    deleteDocDetails({ commit }, delete_params) {
      // { profileId }
      return ProfileService.delete_doc(delete_params).then(
        res => {
          commit('DELETE_DOC', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    ADD_DOC(state, data) {
      console.log('data', data)
      state.profiles = data
    },
    GET_DOC_DETAILS(state, data) {
      state.profiles = data
    },
    UPDATE_DOC_DETAILS(state, data) {
      let profiles = state.profiles;
      let update_profile = profiles.reduce((updated_profiles, profile) => {
        if (profile.id === data.id)
            updated_profiles = data
            else
            updated_profiles = profiles

        return updated_profiles
      },[])

      state.profiles = update_profile
    },

    DELETE_DOC(state, data) {
      let profiles = state.profiles;
      let update_profile = profiles.reduce((updated_profiles, profile) => {
        if (profile.id !== data.id) updated_profiles.push(profile)

        return updated_profiles
      },[])

      state.profiles = update_profile
    }
  }
};
