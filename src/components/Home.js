import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import TakeNote from './TakeNote';
import Drawer from './Drawer';
import { Header, Icon } from 'react-native-elements';
import DisplayNotes from './DisplayNotes';
import Constant from '../config/Constant';
// var Constant = require('../config/Constant');
var noteService = require('../services/NoteService');
var styleSheet = require('../css/styles');
var style = styleSheet.style;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
        this.state = {
            noteType : Constant.NOTES,
            headerColor : Constant.HEADER_COLOR_DARK_YELLOW,
            headerTitle : Constant.NOTES
        }
    }
    changeView = () => {
        this.props.navigation.push('AddNote');
    }
    didSelectMenuItem = (noteType,headerColor) =>{
        this.setState ({
            noteType : noteType,
            headerColor : headerColor
        })
    }

    renderHeader() {
        return (
            <View style={style.view1}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Icon name='menu' size={30} color='white'
                        iconStyle={{ marginLeft: -10 }}
                        onPress={() => { this.drawer.openDrawer() }}
                    />
                    <Text style={style.notesTitle}>{this.state.noteType}</Text>

                    <View style={style.navigationButton}>
                        <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
                        <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
                        <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }}  />
                        <Icon name='view-quilt' size={30} color='white' iconStyle={{ padding: 10 }}
                        />
                    </View>
                </View>
            </View>
        );
    }
    render() {
        var navigationView = (
            <Drawer navigation={this.props.navigation} onItemSelected={(noteType,headerColor)=> {
                    this.didSelectMenuItem(noteType,headerColor)
            }} />
        );

        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header
                    centerComponent={this.renderHeader()}
                    backgroundColor= {this.state.headerColor}
                />
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                    <DisplayNotes />
                    <TakeNote newComponent={this.changeView} />
                </View>
            </DrawerLayoutAndroid>


        );
    }
}