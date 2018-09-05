import app from '../config/Firebase';
module.exports = {
  registerUser: function (user) {
    var database = app.database();
    var userRef = database.ref('/users');
    userRef.push({
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      Email: user.email,
      Password: user.Password
    })
    
  }
}
