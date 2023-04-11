import api from "./api";
import TokenService from "./token.service";

const API_URL = 'https://afyayetu.net/api';

class RoleService {
  add_role(data) {
    return api
      .post(`/roles?=${data.name}`)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        if (err.response.status === 401) {

          this.$store.dispatch('auth/logout')
          this.$router.push('/login');

        }
      })
  }

  get_all_roles(data) {
    return api
      .get(`/roles`)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        if (err.response.status === 401) {

          this.$store.dispatch('auth/logout')
          this.$router.push('/login');

        }
      })
  }

  rename_role(data) {
    const renameRole = new FormData()
    renameRole.append('id', data.id)
    renameRole.append('name', data.name)

    return api
      .put("/roles", renameRole)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        if (err.response.status === 401) {

          this.$store.dispatch('auth/logout')
          this.$router.push('/login');

        }
      })
  }

  delete_role(data) {
    return api
      .delete(`/roles/${data.roleId}`)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        if (err.response.status === 401) {

          this.$store.dispatch('auth/logout')
          this.$router.push('/login');

        }
      })
  }
}

export default new RoleService();
