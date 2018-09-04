import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzlTvaNA-nblNtVRj8mw2BSFhY8hhOtjo",
    authDomain: "fundooreactnative.firebaseapp.com",
    databaseURL: "https://fundooreactnative.firebaseio.com",
    projectId: "fundooreactnative",
    storageBucket: "fundooreactnative.appspot.com",
    messagingSenderId: "544532343579"
  };

 const app = firebase.initializeApp(config);
 
  export default app;