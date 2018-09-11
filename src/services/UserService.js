import app from '../config/Firebase';
import localStorage from 'react-native-sync-localstorage';
import Home from '../components/Home';
var noteService = require('../services/NoteService');

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

  getUser: function (email, password,callback) {
    var database = app.database();
    var userRef = database.ref('/users');
    userRef.orderByChild("Email").equalTo(email).once('value', function (snap) {
      snap.forEach(function (snap) {
        var value = snap.val();
        var key = snap.key;
        if (value.Password == password) {
          localStorage.setItem('userKey', key);
          var userKey = localStorage.getItem('userKey');
          userRef.child(userKey).once('value', function (snap) {
            var userData = snap.val();
            localStorage.setItem('email', userData.Email);
            localStorage.setItem('firstName', userData.Firstname);
            localStorage.setItem('lastName', userData.Lastname);
            localStorage.setItem('imageUrl', userData.ImageUrl);
          })
          callback(true);
        }
      })
    })
  },


}



