import React, { Component } from "react";
import { View,Text, TouchableOpacity,ScrollView} from "react-native";
import {  Icon } from 'react-native-elements';
import ColorList from './ColorList';
// var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;
export default class HandleMorePress extends Component{
    render(){
        return(
                <View style={style.slideMenuStyle}>
            <ScrollView style={{ height: this.props.openMoreMenu ? 264 : 0 }}>
                <TouchableOpacity >
                    <View style={style.slidemenustyle}>
                        <View style={{ padding: 8 }}><Icon name='delete' type='material-community' size={24} color="grey"></Icon></View>
                        <Text style={style.slideMenuCellTextStyle}>Delete</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={style.slidemenustyle}>
                        <View style={{ padding: 8 }}><Icon name='content-copy' type='material-community' size={24} color="grey"></Icon></View>
                        <Text style={style.slideMenuCellTextStyle}>Make a copy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={style.slidemenustyle}>
                        <View style={{ padding: 8 }}><Icon name='send' type='material-community' size={24} color="grey"></Icon></View>
                        <Text style={style.slideMenuCellTextStyle}>Send</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={style.slidemenustyle}>
                        <View style={{ padding: 8 }}><Icon name='person-add' type='MaterialIcons' size={24} color="grey"></Icon></View>
                        <Text style={style.slideMenuCellTextStyle}>Collaborator</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={style.slidemenustyle}>
                        <View style={{ padding: 8 }}><Icon name='label' type='material-community' size={24} color="grey"></Icon></View>
                        <Text style={style.slideMenuCellTextStyle}>Labels</Text>
                    </View>
                </TouchableOpacity>
                    <View style={[style.slideMenuCellStyle,{paddingLeft:0}]}>
                        <ColorList onColorChanged={(color)=>{
                            this.onNoteColorChange(color);
                        }}></ColorList>
                    </View>
            </ScrollView>
        </View>
     
        );
    }
}