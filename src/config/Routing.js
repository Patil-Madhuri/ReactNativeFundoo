import {
    createStackNavigator,
} from 'react-navigation';
import Login from '../components/Pages/Login';
import Register from '../components/Pages/Register';
import ForgotPassword from '../components/Pages/ForgotPassword';
import Home from '../components/Pages/Home';
import AddNote from '../components/Notes/Actions/AddNote';
import ArchiveNotes from '../components/Notes/Actions/ArchiveNotes';
import TrashNotes from '../components/Notes/Actions/TrashNotes';
import CreateLabel from '../components/Notes/Actions/CreateLabel';
import ReminderNotes from '../components/Notes/Actions/ReminderNotes';

const Router = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword },
    AddNote: { screen: AddNote },
    Home: { screen: Home, navigationOptions: { header: null } },
    ArchiveNotes: { screen: ArchiveNotes, navigationOptions: { header: null } },
    TrashNotes: { screen: TrashNotes, navigationOptions: { header: null } },
    CreateLabel: { screen: CreateLabel },
    ReminderNotes : { screen : ReminderNotes }
},
    {
        initialRouteName: 'Login'
    },
    {
        headerMode: 'screen'
    }
);

export default Router;