import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import TakeNote from '../Notes/Actions/TakeNote';
import Drawer from '../Notes/Actions/Drawer';
import { Header, Icon } from 'react-native-elements';
import DisplayNotes from '../Notes/DisplayNotes';
import ArchiveNotes from '../Notes/Actions/ArchiveNotes';
import TrashNotes from '../Notes/Actions/TrashNotes';
var styleSheet = require('../../css/styles');
var style = styleSheet.style;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }
    changeView = () => {
        this.props.navigation.push('AddNote');
    }

    renderHeader() {
        return (
            <View style={style.view1}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Icon name='menu' size={30} color='white'
                        iconStyle={{ marginLeft: -10 }}
                        onPress={() => { this.drawer.openDrawer() }}
                    />
                    <Text style={style.notesTitle}>Notes</Text>

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
            <Drawer navigation={this.props.navigation} />
        );

        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header
                    centerComponent={this.renderHeader()}
                    backgroundColor= "#fb0"
                />
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                    <DisplayNotes />
                    {/* <ArchiveNotes />
                    <TrashNotes/> */}
                    <TakeNote newComponent={this.changeView} />
                </View>
            </DrawerLayoutAndroid>


        );
    }
}