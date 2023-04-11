import api from "./api";
import TokenService from "./token.service";


const API_URL = 'https://afyayetu.net/api';

class AvailabilityService {
  add_availability(data) {
  //   {
  //     "userId":3,
  //     "timeSlot":"11.30 AM - 12.00 AM",
  //     "dayOfWeek":1,
  //     "active":1
  // }
    return api
      .post(`/availability`, data)
      .then((response) => {
        return response.data;
      })

  }

  change_status(data) {
    //   {
    //     "userId":3,
    //     "timeSlot":"11.30 AM - 12.00 AM",
    //     "dayOfWeek":1,
    //     "active":1
    // }
      return api
        .post(`/availability`, data)
        .then((response) => {
          return response.data;
        })

    }

  doc_availability(id) {
    return api
      .get(`/open/availability/${id}`)
      .then((response) => {
        return response.data;
      })

  }

  delete_doc_slot(id) {
    const da = new FormData()
    da.append('slotId', id)
    return api
    .post(`/availability/delete`, da)
      .then((response) => {
        return response.data;
      })

  }
}

export default new AvailabilityService();
