import api from "./api";
import TokenService from "./token.service";

const API_URL = 'https://afyayetu.net/api';
class AdminService {
  addCounty(data) {
    const county = new FormData()
    county.append('countyName', data)
    return api
      .post(`/county`, county)
      .then((response) => {
        return response.data;
      })

  }

  editCounty(data) {
    const editCounty = new FormData()
    edit.append('id', data.id)
    edit.append('name', data.name)

    return api
      .post(`/county/edit`, editCounty)
      .then((response) => {
        return response.data;
      })


  }

  getCounties() {
    return api
      .get(`/open/county`)
      .then((response) => {
        return response.data;
      });
  }

  deleteCounty(id) {
    return api
      .post(`/county/${id}`)
      .then((response) => {
        return response.data;
      })
      .then(() => {})

  }

  createSpeciality(data) {
  //   {
  //     "name" : "Peditrician",
  //     "description" : "For kids"
  // }
    return api
      .post(`/speciality`, data)
      .then((response) => {
        return response.data;
      })

  }

  editSpeciality() {
  //   {
  //     "id": 3,
  //     "name": "Peditrician",
  //     "description": "For kids updated"
  // }
    return api
      .post(`/speciality/edit/`, profile_data)
      .then((response) => {
        return response.data;
      })

  }

  getSpeciality() {
      return api
        .get(`/open/speciality`)
        .then((response) => {
          return response.data;
        });
    }

    deleteSpeciality(id) {
      return api
        .post(`/speciality/delete/${id}`)
        .then((response) => {
          return response.data;
        })

    }

    getDoctorList() {
      return api
        .get(`/doctors/list/`)
        .then((response) => {
          return response.data;
        })

    }

    getPatientList() {
      return api
        .get(`/patients/list/`)
        .then((response) => {
          return response.data;
        })

    }

  doctor_confirm_status(data) {
    const doctor_confirm_status = new FormData()
    doctor_confirm_status.append('userId', data.userId)
    doctor_confirm_status.append('status', data.status)
    return api
      .post(`/user/change/status`, doctor_confirm_status)
      .then((response) => {
        return response.data;
      })

  }

  makeUseAdmin(userId) {
    const makeUseAdmin = new FormData()
    makeUseAdmin.append('userId', userId)

    return api
      .post(`/user/make/admin`, makeUseAdmin)
      .then((response) => {
        return response.data;
      })
  }
}

export default new AdminService();
