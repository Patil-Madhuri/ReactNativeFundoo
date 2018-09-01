import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Login';

const Router = createStackNavigator({
    Login: { screen: Login }
    // Profile: { screen: ProfileScreen },
  },
  {
      initialRouteName:'Login'
  }
);

export default Router;