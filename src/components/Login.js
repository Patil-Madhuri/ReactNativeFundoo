import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';


var styleSheet = require('../css/styles');
var styles = styleSheet.style;
export default class Login extends Component {
  render() {
    return (
      <View style={{padding : 8}}>
        <Card>
          <Header centerComponent={{
            text: 'Login', style: {
              fontWeight: 'bold',
              fontSize: 30,
              textAlign: 'center',
              color: '#fff'
            }
          }}
          ></Header>

          <TextInput placeholder="Username" style={styles.username} />
          <TextInput secureTextEntry={true} placeholder="Password" style={styles.username} />
          <Button
            title="Login"
          
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 100,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              alignSelf : "center"
            }}
            containerStyle={{ marginTop: 20 }}
          />
        </Card>
      </View>

    );
  }




}

