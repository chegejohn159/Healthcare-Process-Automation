
import { createStore } from 'vuex'
import { auth } from './auth.module';
import { roles } from './roles.module';
import { profile } from './profile.module';
import { availability } from './availability.module';
import { patient } from './patient.module';
import { admin } from './admin.module';
import { appointment } from './appointment.module';


const store = createStore({
  modules: {
    auth,
    roles,
    profile,
    availability,
    patient,
    admin,
    appointment
  }
  });

  export default store;
