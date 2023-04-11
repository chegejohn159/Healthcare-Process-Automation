import AvailabilityService from '../services/availability.service';

export const availability = {
  namespaced: true,
  state: {
    slots: []
  },
  actions: {
    add_slot({ commit }, slot_data) {
      // { name }
      return AvailabilityService.add_availability(slot_data).then(
        res => {
          commit('ADD_SLOT', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    change_status({ commit }, upload_params) {
      // { name }
      return AvailabilityService.change_status(upload_params).then(
        res => {
          commit('CHANGE_SLOT_STATUS', res.data);
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    doc_slots({ commit }, id) {
      // {}
      return AvailabilityService.doc_availability(id).then(
        res => {
          commit('GET_DOC_SLOTS');
          return Promise.resolve(res);
        },
        error => {

          return Promise.reject(error);
        }
      );
    },

    delete_doc_slot({ commit }, id) {
      // { slotId }
      return AvailabilityService.delete_doc_slot(id).then(
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
    ADD_SLOT(state, data) {
      // state.slots = [...state.slots, ...data]
      // console.log('data', state.slots)

    },
    GET_DOC_SLOTS(state, data) {
      state.slots = data
    },

    DELETE_DOC(state, data) {
      let slots = state.slots;
      let update_slot = slots.reduce((updated_slots, slot) => {
        if (slot.id !== data.id) updated_slots.push(slot)

        return updated_slots
      },[])

      state.slots = update_slot
    },

    CHANGE_SLOT_STATUS(state, data) {
      let slots = state.slots;
      let update_slot = slots.reduce((updated_slots, slot) => {
        if (slot.id !== data.id) updated_slots.push(slot)

        return updated_slots
      },[])

      state.slots = update_slot
    }
  }
};
