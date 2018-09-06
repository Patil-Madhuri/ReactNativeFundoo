import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { TouchableHighlight, Text, View } from 'react-native';

// import Drawer from 'react-native-drawer';
var styleSheet = require('../css/styles');
var style = styleSheet.style;

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    

    render() {
        return (
            <View style={{ width: '100%' }}>
                <View style={style.view1}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Icon name='menu' size={30} color='white'
                            iconStyle={{ paddingLeft: 10 }}
                            oonPress={() => { this._drawer.open() }}

                        />
                        <Text style={style.notesTitle}>Notes</Text>

                        <View style={style.navigationButton}>
                            <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }} />
                        </View>
                    </View>
                </View>

              
            </View>
        );

       

    }
}
