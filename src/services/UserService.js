import app from '../config/Firebase';
import { AsyncStorage } from "react-native"

module.exports = {
  registerUser: function (user) {
    var database = app.database();
    var userRef = database.ref('/users');
    userRef.push({
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      Email: user.email,
      Password: user.Password,
      ImageUrl: ''
    })
  },

  getUser: function (email, password) {
    var database = app.database();
    var userRef = database.ref('/users');
    userRef.orderByChild("Email").equalTo(email).once('value', function (snapshot) {
      var value = snapshot.val();
      if (value.Password === password) {
        AsyncStorage.setItem("userKey", snapshot.key);
        var userKey = AsyncStorage.getItem("userKey");
        usersRef.child(userKey).once('value', function (snap) {
          var userData = snap.val();
          console.log(userData);
          AsyncStorage.setItem('email', userData.Email);
          AsyncStorage.setItem('name', userData.Firstname);
          AsyncStorage.setItem('name', userData.Lastname);
          AsyncStorage.setItem('imageUrl', userData.ImageUrl)
        })
      }
    })
  }
}
