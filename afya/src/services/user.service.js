import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/test/home');
  }

  getUserBoard() {
    return api.get('/test/profile');
  }

  getModeratorBoard() {
    return api.get('/test/mod');
  }

  getAdminBoard() {
    return api.get('/test/admin');
  }
}

export default new UserService();
