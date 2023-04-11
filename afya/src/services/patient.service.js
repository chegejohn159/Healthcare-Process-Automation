import api from "./api";
import TokenService from "./token.service";

const API_URL = 'https://afyayetu.net/api';

class PatientService {

  doctor_search(data) {
    const search_data = new FormData()

    data.county ? search_data.append('county', data.county) : ''
    data.speciality ? search_data.append('speciality', data.speciality) : ''
    data.area ? search_data.append('area', data.area) : ''
    data.street ? search_data.append('street', data.street) : ''
    return api
      .post(`/open/doctor/search`, search_data)
      .then((response) => {
        return response.data;
      });
  }

}

export default new PatientService();
