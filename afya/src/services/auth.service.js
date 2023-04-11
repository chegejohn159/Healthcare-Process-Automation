
// const API_URL = 'https://afyayetu.net/api/';
import authHeader from './auth-header';

import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(user) {
    return api
      .post("auth/signin", user)
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  confirmReg(param) {
    return api
      .post(`verify/email/${param}`)
      .then((response) => {
        return response.data;
      })
  }

  reConfirm(param) {
    return api
      .post(`verify/email/resend/${param}`)
      .then((response) => {
        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(user) {

    return api.post("auth/signup/doctor", user);
  }

  patientRegister(user) {

    return api.post("auth/signup/patient", user);
  }

  forgotPassword(email) {
    const pass = new FormData()
    pass.append('email', email)

    return api.post("auth/forgot/password", pass);
  }

  resetPassword(user) {

    const pass = new FormData()
    pass.append('userId', user.userId)
    pass.append('newPassword', user.newPassword)

    return api.post("auth/reset/password", pass)

  }



}

export default new AuthService();
