import React, { Component } from 'react';
import { View } from 'react-native';

import Navigation from './Navigation';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Navigation/>
      };    

      render(){
          return(
            <View></View>
          );
      }
}