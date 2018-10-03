import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity,Platform } from "react-native";
import { Icon, Divider } from 'react-native-elements';
import localStorage from 'react-native-sync-localstorage';
import app from '../../../config/Firebase';
import RNFetchBlob from 'react-native-fetch-blob';
var ImagePicker = require('react-native-image-picker');
var noteService = require('../../../services/NoteService');
var userService = require('../../../services/UserService')
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
export default class Drawer extends Component {
    constructor() {
        super();
        this.state = {
            labels: []
        }
    }
    logOut() {
        localStorage.clear();
        this.props.navigation.navigate('Login');
    }
    uploadImage(uri, mime = 'application/octet-stream') {

        var userKey = localStorage.getItem('userKey');
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
                        userService.uploadProfilePic(userKey, imageurl)
                    })
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    chooseProfilePicImage() {
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
    componentDidMount() {
        var self = this;
        noteService.getLabels(function (labelList) {
            if (labelList !== null && labelList !== undefined) {
                self.setState({ labels: labelList });
            }
            else {
                self.setState({ labels: [] });
            }
        });
    }

    render() {
        var userEmail = localStorage.getItem('email');
        var userName = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');

        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%' }}>
                    <View style={{ height: 150 }}>
                        <ImageBackground source={require('../../../assets/drawerCover.webp')} style={styles.backgroundImage} >
                            <View>
                                <TouchableOpacity onPress={() => this.chooseProfilePicImage(this)}>
                                    <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />

                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                <Text style={styles.nameFont}>{userName}</Text>
                                <Text style={{ fontSize: 15 }}>{userEmail}</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{ height: '100%' }}>
                        <TouchableOpacity onPress={() => this.props.viewState('home')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='lightbulb-outline' size={30} />
                                <Text style={styles.sidebarText}>Notes</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.viewState('reminders')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='reminder' type='material-community' size={30} />
                                <Text style={styles.sidebarText}>Reminders</Text>
                            </View>
                        </TouchableOpacity>
                        <Divider style={{ marginTop: 10 }} />

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.labelText}>Labels</Text>
                            <Text style={{ fontSize: 20 }}>EDIT</Text>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            {Object.keys(this.state.labels).map((key) => {
                                var labelId = key;
                                var label = this.state.labels[labelId];
                                if (label) {
                                    return (
                                        <View style={{ flexDirection: 'row', padding: 10 }}>
                                            <Icon name="label" color="grey" size={30} iconStyle={{ alignItems: 'flex-start', paddingLeft: 15 }} />
                                            <Text style={styles.displayLabelName}>{label.labelName}</Text>
                                            <Icon name="edit" color="grey" size={30} iconStyle={{ alignItems: 'flex-end' }} />
                                        </View>
                                    );
                                }
                                else {
                                    <View></View>
                                }
                            })}
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateLabel')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='add' size={30} />
                                <Text style={styles.sidebarText} >Create new label</Text>
                            </View>
                        </TouchableOpacity>

                        <Divider style={{ marginTop: 10, marginBottom: 10 }} />

                        <TouchableOpacity onPress={() => this.props.viewState('archive')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='archive' size={30} />
                                <Text style={styles.sidebarText}>Archive</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.viewState('trash')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='delete' size={30} />
                                <Text style={styles.sidebarText}>Trash</Text>
                            </View>
                        </TouchableOpacity>

                        <Divider />

                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='settings' size={30} />
                            <Text style={styles.sidebarText}>Settings</Text>
                        </View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='help' size={30} />
                            <Text style={styles.sidebarText}>Help & feedback</Text>
                        </View>

                        <TouchableOpacity onPress={() => { this.logOut() }}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='power-settings-new' size={30} />
                                <Text style={styles.sidebarText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}