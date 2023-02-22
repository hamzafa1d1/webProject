export class FacebookUser {
  private id : String ;
  private name: String ;
  private email : String ;
  private photoUrl: String ;
  private firstName : String ;
  private lastName : String ;
 private authToken : String ;

  constructor(id: String, name: String, email: String, photoUrl: String, firstName: String, lastName: String, authToken: String) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.photoUrl = photoUrl;
    this.firstName = firstName;
    this.lastName = lastName;
    this.authToken = authToken;
  }
}
