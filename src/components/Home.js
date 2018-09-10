import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import TakeNote from './TakeNote';
import Drawer from './Drawer';
import { Header, Icon } from 'react-native-elements';
import DisplayNotes from './DisplayNotes';

var styleSheet = require('../css/styles');
var style = styleSheet.style;

export default class Home extends Component {
    constructor(){
        super();
        this.changeView = this.changeView.bind(this);
    }
    changeView=() => {
            this.props.navigation.push('AddNote');
      }
    
    renderHeader() {
        return (
            <View style={style.view1}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Icon name='menu' size={30} color='white'
                    onPress={() => { this.drawer.openDrawer() }}
                    />
                    <Text style={style.notesTitle}>Notes</Text>

                    <View style={style.navigationButton}>
                        <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
                        <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
                        <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }} />
                    </View>
                </View>
            </View>
        );
    }
    render() {
        var navigationView = (
            <Drawer />
        );

        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header
                    centerComponent={this.renderHeader()}
                    backgroundColor="#fb0"
                />
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                    <DisplayNotes />
                    <TakeNote  newComponent={this.changeView}/>
                </View>
            </DrawerLayoutAndroid>
           

        );
    }
}