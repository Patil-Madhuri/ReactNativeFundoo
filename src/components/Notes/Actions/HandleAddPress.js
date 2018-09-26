import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
// var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class HandleAddPress extends Component {

    render() {
        return (
            <View style={style.slideMenuStyle}>
                <ScrollView style={{ height: this.props.openAddMenu ? 255 : 0 }}>
                    <TouchableOpacity >
                        <View style={style.slidemenustyle}>
                            <View style={{ padding: 9 }}><Icon name='camera-alt' size={24} color="grey"></Icon></View>
                            <Text style={style.slideMenuCellTextStyle}>Take Photo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={style.slidemenustyle}>
                            <View style={{ padding: 9 }}><Icon name='photo' size={24} color="grey"></Icon></View>
                            <Text style={style.slideMenuCellTextStyle}>Choose image</Text>
                        </View>
                    </TouchableOpacity>   
                    <TouchableOpacity >
                        <View style={style.slidemenustyle}>
                            <View style={{ padding: 9 }}><Icon name='pen' type='material-community' size={24} color="grey"></Icon></View>
                            <Text style={style.slideMenuCellTextStyle}>Drawing</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={style.slidemenustyle}>
                            <View style={{ padding: 9 }}><Icon name='keyboard-voice' size={24} color="grey"></Icon></View>
                            <Text style={style.slideMenuCellTextStyle}>Recording</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={style.slidemenustyle}>
                            <View style={{ padding: 9 }}><Icon name='format-list-checkbox' type='material-community' size={24} color="grey"></Icon></View>
                            <Text style={style.slideMenuCellTextStyle}>Checkboxes</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}