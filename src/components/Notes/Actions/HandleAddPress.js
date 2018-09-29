import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
import ImageCropPicker from 'react-native-image-crop-picker';
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class HandleAddPress extends Component {
    constructor(){
        super();
        this.chooseImage = this.chooseImage.bind(this);
    }
    chooseImage () {
        var noteKey = this.props.noteKey;

        console.log("inside choose image...........");
        console.log("ImagePicker..........");
        ImageCropPicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            noteService.uploadImageOnNote(noteKey,image)
            console.log("Image..................",image);
          });
    }
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
                    <TouchableOpacity onPress={() => this.chooseImage(this)}>
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