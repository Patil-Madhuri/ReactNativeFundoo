import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
const SideMenu = require('react-native-side-menu');
var styleSheet = require('../css/styles');
var style = styleSheet.style;

export default class Navigation extends Component {
    render() {
        return (
            <View>
                {/************************ Navigation Bar ******************/}

                <View style={{ backgroundColor: '#fb0', width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Icon name='menu' size={30} color='white' navigator={navigator} />

                        <Text style={style.notesTitle}>Notes</Text>

                        <View style={style.navigationButton}>
                            <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }} />

                            {/* <Button icon={{ name: 'view-stream', size: 30 }}
                            buttonStyle={{
                                backgroundColor: 'transparent',
                            }} /> */}
                        </View>
                    </View>
                </View>

                {/************************ Side Bar ******************/}
                <View>
                    <View>
                        <Text>Madhuris</Text>
                    </View>
                </View>
            </View>
        );
    }
}
