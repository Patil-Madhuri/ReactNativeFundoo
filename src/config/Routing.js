import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard';

const Router = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword : { screen : ForgotPassword},
    Dashboard : {screen : Dashboard}
  },
  {
      initialRouteName:'Login'
  }
);

export default Router;