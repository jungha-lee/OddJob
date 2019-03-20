export class User {

  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  profilePic: string;
  description: string;

  constructor(
    id: number,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    profilePic: string,
    description: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.profilePic = profilePic;
    this.description = description;
  }
}
