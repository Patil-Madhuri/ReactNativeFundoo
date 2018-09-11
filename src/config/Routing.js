import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import Home from '../components/Home';
import AddNote from '../components/AddNote';
// import React from 'react';

const Router = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword : { screen : ForgotPassword},
    AddNote : {screen : AddNote},
    Home : {screen : Home, navigationOptions : {header : null}},
  },
  {
      initialRouteName:'Login'
  },
  { 
    headerMode: 'screen' 
  }
);

export default Router;