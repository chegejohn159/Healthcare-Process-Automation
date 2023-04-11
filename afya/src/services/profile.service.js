
import api from "./api";
import TokenService from "./token.service";

const API_URL = 'https://afyayetu.net/api';

class ProfileService {
  add_doc(data) {
    const profile_data = new FormData()
    profile_data.append('title', data.title)
    profile_data.append('county', data.county)
    profile_data.append('area', data.area)
    profile_data.append('street', data.street)
    profile_data.append('insurance', data.insurance)
    profile_data.append('file', data.file)
    profile_data.append('cost', data.cost)
    profile_data.append('userId', data.userId)
    return api
      .post(`/doctor/details`, profile_data)
      .then((response) => {
        return response.data;
      })

  }

  get_doc(id) {
    return api
      .get(`/doctor/profile/${id}`)
      .then((response) => {
        return response.data;
      })
      // .catch(err => {
      //   console.log('ssss', err.response.status )
      //   if (err.response.status === 401) {

      //     this.$store.dispatch('auth/logout')
      //     this.$router.push('/login');

      //   }
      // })
  }

  update_doc(data) {
    const renameRole = new FormData()
    renameRole.append('id', data.id)
    renameRole.append('name', data.name)

    return api
      .put(`/doctor/profile/${data.id}`)
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

  delete_doc(data) {
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

export default new ProfileService();
