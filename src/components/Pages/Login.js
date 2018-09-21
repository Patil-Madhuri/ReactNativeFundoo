import React, { Component } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { Card, Button, Icon, Divider } from 'react-native-elements';
// import localStorage from 'react-native-sync-localstorage';
var userService = require('../../services/UserService');
var styleSheet = require('../../css/styles');
var styles = styleSheet.style;

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(email, password) {    
    console.log("This is login User...........", email);
    
    var emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email == '' || !emailExp.test(email)) {
      Alert.alert('Invalid email');
      return;
    }
    if (password == '') {
      Alert.alert("Invalid password");
      return;
    }
    userService.getUser(email, password, (success) => {
      if (success) {
        this.props.navigation.navigate('Home');
      }

    });
  }

  clearInput(){
    this.textInput.clear();
    this.textInput1.clear();
  }
  componentDidMount(){
    var userKey = localStorage.getItem('userKey');     
    if(userKey){
      this.props.navigation.navigate('Home');
    }else{
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ padding: 8, marginTop: 100 }}>
        <Card>
          <Text style={styles.titleText}>Login</Text>

          <View style={styles.flexRow}>
            <Icon color="grey" name='email' size={24} />
            <TextInput placeholder="Username" style={styles.username}
              onChangeText={(email) => this.setState({ email })} 
              ref={input => { this.textInput = input }}/>
          </View>

          <View style={styles.flexRow}>
            <Icon color="grey" name='vpn-key' size={24} />
            <TextInput secureTextEntry={true} placeholder="Password" style={styles.username}
              onChangeText={(password) => this.setState({ password })} 
              ref={input1 => { this.textInput1 = input1 }}/>
          </View>


          <Button
            title="Login"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={styles.loginBtn}
            containerStyle={{ marginTop: 20 }}
            onPress={() => { this.clearInput();this.loginUser(this.state.email, this.state.password) }}
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
            <Text style={styles.links} onPress={() =>
              navigate('ForgotPassword')} >
              {"\n"} Forgot Password
              </Text>
          </View>

        </Card>
      </View>

    );
  }




}

