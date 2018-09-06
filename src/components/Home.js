import React, { Component } from 'react';
import { View } from 'react-native';

import Navigation from './Navigation';
import Drawer from './DrawerContent';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Navigation/>,
        drawerLabel : <Drawer />
      };    

      render(){
          return(
            <View></View>
          );
      }
}