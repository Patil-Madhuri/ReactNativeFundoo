import React, {Component} from 'react';
import { View, Alert, Text } from 'react-native';
// import Firebase from 'firebase';
import AppCache from '../../config/AppCache';
import { style } from '../../css/styles';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            loggedInUser : '',
            loggedInUserEmail : ''
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        AppCache.getItem('userKey', (error, value) =>{
            if (error != null) {
                console.error(error);
            }
            this.alreadyLogin(value);
        });
    }
    newUserLogin = (user) => {
        this.setState({ loggedInUser: user })
        setTimeout(() => {
            this.props.navigation.navigate(user ? 'Home' : 'Login');
        }, 1000);
    }

    alreadyLogin = (userKey) => {
        AppCache.getItem('email', (error, value) => {
            if (error != null) {
                console.error(error);
            }
            this.setState({ loggedInUserEmail: value })
           var timer = setTimeout(() => {
            this.props.navigation.navigate(userKey ? 'Home' : 'Login');
                clearTimeout(timer);
            }, 2000);
        });  
    }
    render() {
        const { currentUserEmail } = this.state
        const data = currentUserEmail ? currentUserEmail : '';
        return (
            <View style={[style.splashScreen]}>
                <Text style={style.splashScreenTitle}>Fundoo Notes</Text>
                <Text>Welcome {data}</Text>
            </View>
        );
    }
}