import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import Home from '../components/Home';
import AddNote from '../components/AddNote';
import React from 'react';
import UpdateNote from '../components/UpdateNote';

const Router = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword : { screen : ForgotPassword},
    AddNote : {screen : AddNote},
    Home : {screen : Home, navigationOptions : {header : null}},
  },
  {
      initialRouteName:'Home'
  },
  { 
    headerMode: 'screen' 
  }
);

export default Router;