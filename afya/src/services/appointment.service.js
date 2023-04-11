import api from "./api";
import TokenService from "./token.service";

const API_URL = 'https://afyayetu.net/api';

class AppointmentService {
  addAppointment(data) {
    console.log('sqq', data)
    const county = new FormData()
    county.append('patientId', data.patientId)
    county.append('slotId', data.slotId)
    county.append('appointmentDate', data.appointmentDate)
    return api
      .post(`/appointment`, county)
      .then((response) => {
        return response.data;
      })

  }

  docApproveAppt(data) {
    const editCounty = new FormData()
    edit.append('appointmentId', data.appointmentId)

    return api
      .post(`/appointment/doctor/approve`, editCounty)
      .then((response) => {
        return response.data;
      })

  }

  getPatientAppts(id) {
    return api
      .get(`/appointment/patient/${id}`)
      .then((response) => {
        return response.data;
      })

  }

  getDoctorAppts(id) {
    return api
      .get(`/appointment/doctor/${id}`)
      .then((response) => {
        return response.data;
      })

  }

  docCancelAppt(id) {
    return api
      .post(`/appointment/doctor/cancel/${id}`)
      .then((response) => {
        return response.data;
      })

  }

  patientCancelAppt(id) {
    return api
      .post(`/appointment/patient/cancel/${id}`)
      .then((response) => {
        return response.data;
      })


  }


  completeAppt(data) {
    const appointmentId = new FormData()
    appointmentId.append('appointmentId', data.appointmentId)
    return api
      .post(`/appointment/complete`, appointmentId)
      .then((response) => {
        return response.data;
      })

  }

  checkDocAvailability(data) {
    const da = new FormData()
    da.append('doctorId', data.doctorId)
    da.append('startDate', data.startDate)
    da.append('endDate', data.endDate)

    return api
      .post(`/open/appointment/slots/booked`, da)
      .then((response) => {
        return response.data;
      })

  }
}

export default new AppointmentService();
