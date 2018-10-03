import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Platform } from "react-native";
import { Icon } from 'react-native-elements';
import app from '../../../config/Firebase';
import RNFetchBlob from 'react-native-fetch-blob';
var ImagePicker = require('react-native-image-picker');
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
export default class HandleAddPress extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: ''
        }
        this.chooseImage = this.chooseImage.bind(this);
    }
    openCamera() {
        var options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({ imageUrl: response.uri });
            }
        });
    }
    uploadImage(uri, mime = 'application/octet-stream') {
        var noteKey = this.props.noteKey;
        // var noteKey = this.props.noteKey;                
        console.log("inside uploadImage................");

        return new Promise((resolve, reject) => {
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            let uploadBlob = null

            const imageRef = app.storage().ref('images').child(mime)
            fs.readFile(uploadUri, 'base64')
                .then((data) => {
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                }).then(() => {
                    return imageRef.getDownloadURL().then(function (imageurl) {
                        noteService.uploadImageOnNote(noteKey,imageurl)
                    })
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    chooseImage() {
        console.log("inside choose image...........");
        var options = {
            title: 'Select Avatar',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response.fileName);
            var image = response.fileName;
            console.log("Path....", response.path);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                console.log(response.uri);
                console.log(image);
                this.uploadImage(response.uri, image);
            }
        })
    }

    render() {
        return (
            <View style={style.slideMenuStyle}>
                <ScrollView style={{ height: this.props.openAddMenu ? 255 : 0 }}>
                    <TouchableOpacity onPress={() => this.openCamera(this)}>
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