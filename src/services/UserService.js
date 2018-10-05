import app from '../config/Firebase';
import AppCache from '../config/AppCache';
import { Platform } from "react-native";
import RNFetchBlob from 'react-native-fetch-blob';

var ImagePicker = require('react-native-image-picker');

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
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

  getUser: function (email, password, callback) {
    var database = app.database();
    var userRef = database.ref('/users');
    userRef.orderByChild("Email").equalTo(email).once('value', function (snap) {
      snap.forEach(function (snap) {
        var value = snap.val();
        var key = snap.key;
        if (value.Password == password) {
          AppCache.setItem('userKey', key, function (err) {
            if (err != null) {
              console.error(err);
            }
          });
          AppCache.getItem('userKey', (error, key) => {
            if (error != null) {
              console.error(error);
            }
            console.log(key)
            userRef.child(key).once('value', function (snap) {
              var userData = snap.val();
              AppCache.setItem('email', userData.Email, function (err) {
                if (err != null) {
                  console.error(err);
                }
              });

              AppCache.setItem('firstName', userData.Firstname, function (err) {
                if (err != null) {
                  console.error(err);
                }
              });

              AppCache.setItem('lastName', userData.Lastname, function (err) {
                if (err != null) {
                  console.error(err);
                }
              });

              AppCache.setItem('imageUrl', userData.ImageUrl, function (err) {
                if (err != null) {
                  console.error(err);
                }
              });
            })
          })


          callback(true);
        }
        else {
          alert("Wrong Password");
        }
      })
    })
  },

  uploadProfilePic(userKey, imageurl) {
    console.log("inside UploadImage service............", imageurl);
    var update = {
      ImageUrl: imageurl
    }
    var database = app.database();
    var userRef = database.ref('users');
    userRef.child(userKey).update(update);
  },
  
  uploadImage(uri, mime = 'application/octet-stream') {

    AppCache.getItem('userKey', (error, value) => {
      if (error != null) {
        console.error(error);
      }

      return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        let uploadBlob = null

        const imageRef = app.storage().ref('images').child(mime)
        fs.readFile(uploadUri, 'base64')
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
          })
          .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          }).then(() => {
            return imageRef.getDownloadURL().then(function (imageurl) {
              this.uploadProfilePic(value, imageurl);
            })
          })
          .catch((error) => {
            reject(error)
          })
      })
    })
  },
  chooseProfilePicImage() {
    console.log("inside choose image...........");
    var options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response.fileName);
      var image = response.fileName;
      console.log("Path....", response.path);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log(response.uri);
        console.log(image);
        this.uploadImage(response.uri, image);
        
      }
    })
  }
}



