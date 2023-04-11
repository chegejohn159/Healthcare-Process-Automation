import AppointmentService from '../services/appointment.service';

export const appointment = {
  namespaced: true,
  state: {
    appointments: []
  },
  actions: {
    add_appt({ commit }, slot_data) {
      // { name }
      return AppointmentService.addAppointment(slot_data).then(
        res => {
          commit('ADD_APPT', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

  },
  mutations: {
    ADD_APPT(state, data) {
      // state.appointments = [...state.appointments, ...data]
      // console.log('data', state.appointments)

    },
  }
};
