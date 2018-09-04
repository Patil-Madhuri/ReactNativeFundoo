var userService = require('../services/UserService');
import {Alert} from 'react-native';
import app from '../config/Firebase';


module.exports = {
    registerUser: function (Firstname, Lastname, email, Password, cnfPassword) {
        var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;  
        if(Firstname == null){
            Alert.alert("Invalid name");
            return;
        }
        if(Password.length < 4 && cnfPassword.length < 4){
            Alert.alert("Password length not matched");
            return;
        }
        if(Password === cnfPassword){
            app.auth().createUserWithEmailAndPassword(email,Password)
            .then( () => {
            const user = {
                Firstname : Firstname,
                Lastname : Lastname,
                email : email,
                Password : Password
                }
                userService.registerUser(user);
            }).then( () =>{
                Alert.alert("sucess");

            }
            )
        }
        
    }
}