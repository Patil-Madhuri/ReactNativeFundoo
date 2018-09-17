import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
var styleSheet = require('../../css/styles');
var styles = styleSheet.style;
export default class ForgotPassword extends Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ padding: 8, marginTop: 100 }}>
                <Card>
                    <Text style={styles.titleText}>Forgot Password</Text>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='email' size={24} />
                        <TextInput placeholder="Username" style={styles.username} />
                    </View>

                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.username} />
                    </View>


                    <View style={styles.flexRow}>
                        <Icon color="grey" name='vpn-key' size={24} />
                        <TextInput secureTextEntry={true} placeholder="Confirm Password" style={styles.username} />
                    </View>
                    <Button
                        title="Forgot Password"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.loginBtn}
                        containerStyle={{ marginTop: 20 }}
                    />

                </Card>
            </View>

        );
    }




}

