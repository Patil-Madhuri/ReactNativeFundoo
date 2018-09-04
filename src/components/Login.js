import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Card, Button, Icon, Divider } from 'react-native-elements';

var styleSheet = require('../css/styles');
var styles = styleSheet.style;
export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ padding: 8, marginTop: 100 }}>
        <Card>
          <Text style={styles.titleText}>Login</Text>

          <View style={styles.flexRow}>
            <Icon color="grey" name='email' size={24} />
            <TextInput placeholder="Username" style={styles.username} />
          </View>

          <View style={styles.flexRow}>
            <Icon color="grey" name='vpn-key' size={24} />
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.username} />
          </View>


          <Button
            title="Login"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={styles.loginBtn}
            containerStyle={{ marginTop: 20 }}
          />
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />

          <View style={styles.registerLink}>
            <Text style={{ fontSize: 15 }}>Don't have an account ?
              <Text style={styles.links} onPress={() =>
                navigate('Register')} >
                Register
              </Text>
            </Text>
          </View>

          <View style={styles.registerLink}>
            <Text style={styles.links}  onPress={() =>
                navigate('ForgotPassword')} >
              {"\n"} Forgot Password
              </Text>
          </View>

        </Card>
      </View>

    );
  }




}

