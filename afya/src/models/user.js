export default class User {
  constructor(name, username, phoneNumber, password) {
    this.name = name;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.role = []
  }
}
