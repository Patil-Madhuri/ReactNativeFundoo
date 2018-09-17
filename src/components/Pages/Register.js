import React, { Component } from 'react';
import { Text, View, TextInput,Alert } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
var styleSheet = require('../../css/styles');
var styles = styleSheet.style;
// var userCtrl = require('../controllers/UserCtrl');
var userService = require('../../services/UserService');
import app from '../../config/Firebase';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: null,
            Lastname: null,
            email: '',
            Password: '',
            cnfPassword: ''
        }
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(Firstname, Lastname, email, Password, cnfPassword) {
        var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (Firstname == null) {
            Alert.alert("Invalid name");
            return;
        }
        if(email == '' || !emailExp.test(email)){
            Alert.alert('Invalid email');
            return;
          }
        if (Password.length < 4 || cnfPassword.length < 4) {
            Alert.alert("Password length not matched");
            return;
        }
        if (Password === cnfPassword) {
            app.auth().createUserWithEmailAndPassword(email, Password)
                .then(() => {
                    const user = {
                        Firstname: Firstname,
                        Lastname: Lastname,
                        email: email,
                        Password: Password
                    }
                    userService.registerUser(user);
                }).then(() => { 
                    this.props.navigation.navigate('Login')
                }
                )
        }
        else{
            Alert.alert("Invalid Password");
            return;
        }
    }

    render() {
        return (
            <View style={{ padding: 8, marginTop: 50 }}>
                <Card>
                    <Text style={styles.titleText}>Register</Text>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='person' size={24} />
                        <TextInput placeholder="Firstname" style={styles.username}
                            onChangeText={(Firstname) => this.setState({ Firstname })}
                        />
                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='person' size={24} />
                        <TextInput placeholder="Lastname" style={styles.username}
                            onChangeText={(Lastname) => this.setState({ Lastname })} />

                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='email' size={24} />
                        <TextInput placeholder="Username" style={styles.username}
                            onChangeText={(email) => this.setState({ email })} />
                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.username}
                            onChangeText={(Password) => this.setState({ Password })} />

                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.username}
                            onChangeText={(cnfPassword) => this.setState({ cnfPassword })} />

                    </View>


                    <Button
                        title="Register"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.loginBtn}
                        containerStyle={{ marginTop: 20 }}
                        onPress={() => this.registerUser(this.state.Firstname, this.state.Lastname, this.state.email, this.state.Password, this.state.cnfPassword)}
                    />

                </Card>
            </View>

        );
    }
}

