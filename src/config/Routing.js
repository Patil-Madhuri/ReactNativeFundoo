import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';

const Router = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword : { screen : ForgotPassword}
  },
  {
      initialRouteName:'Login'
  }
);

export default Router;