import RoleService from '../services/roles.service';

export const roles = {
  namespaced: true,
  state: {
    roles: []
  },
  actions: {
    addRole({ commit }, upload_params) {
      // { name }
      return RoleService.add_role(upload_params).then(
        res => {
          commit('ADD_ROLE', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      )
    },

    getAllRoles({ commit }, get_params) {
      // {}
      return RoleService.get_all_roles(get_params).then(
        res => {
          commit('ALL_ROLES');
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    renameRole({ commit }, rename_params) {
      // { id, name }
      return RoleService.rename_role(rename_params).then(
        res => {
          commit('RENAME_ROLE');
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    deleteRole({ commit }, delete_params) {
      // { roleId }
      return RoleService.delete_role(delete_params).then(
        res => {
          commit('DELETE_ROLE', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    ADD_ROLE(state, data) {
      state.roles.push(data)
    },
    ALL_ROLES(state, data) {
      state.roles = data
    },
    RENAME_ROLE(state, data) {
      let roles = state.roles;
      let update_role = roles.reduce((updated_roles, role) => {
        if (role.id === data.id)
            updated_roles.push(data)
            else
            updated_roles.push(roles)

        return updated_roles
      },[])

      state.roles = update_role
    },

    DELETE_ROLE(state, data) {
      let roles = state.roles;
      let update_role = roles.reduce((updated_roles, role) => {
        if (role.id !== data.id) updated_roles.push(role)

        return updated_roles
      },[])

      state.roles = update_role
    }
  }
};
