var userService = require('../services/UserService');
// import UserService from '../services/UserService';
// const userService = new UserService();

module.exports = {
    registerUser: function (Firstname, Lastname, email, Password, cnfPassword) {
        var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(Firstname != "" && Lastname != "" && email != "" && Password != "" && cnfPassword != ""){
            if(email.matches(emailExp)){
                if(Password == cnfPassword){
                    userService.registerUser(Firstname, Lastname, email, Password);
                }
            }
        }
    }
}