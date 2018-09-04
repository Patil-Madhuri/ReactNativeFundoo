import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
var styleSheet = require('../css/styles');
var styles = styleSheet.style;
var userCtrl = require('../controllers/UserCtrl');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: null,
            Lastname: null,
            email: null,
            Password: null,
            cnfPassword: null
        }
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(Firstname,Lastname,email,Password,cnfPassword){
       userCtrl.registerUser(Firstname,Lastname,email,Password,cnfPassword)
    }
    render() {
        return (
            <View style={{ padding: 8, marginTop: 50 }}>
                <Card>
                    <Text style={styles.titleText}>Register</Text>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='person' size={24} />
                        <TextInput placeholder="Firstname" style={styles.username}
                            onChangeText={(event) => this.setState({ Firstname: event.target.value })} />
                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='person' size={24} />
                        <TextInput placeholder="Lastname" style={styles.username}
                            onChangeText={(event) => this.setState({ Lastname: event.target.value })} />

                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='email' size={24} />
                        <TextInput placeholder="Username" style={styles.username}
                            onChangeText={(event) => this.setState({ email: event.target.value })} />

                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.username}
                            onChangeText={(event) => this.setState({ Password: event.target.value })} />

                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.username}
                            onChangeText={(event) => this.setState({ cnfPassword: event.target.value })} />

                    </View>


                    <Button
                        title="Register"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.loginBtn}
                        containerStyle={{ marginTop: 20 }}
                        onPress={()=>this.registerUser(this.state.Firstname,this.state.Lastname,this.state.email,this.state.Password,this.state.cnfPassword)}
                    />

                </Card>
            </View>

        );
    }
}

