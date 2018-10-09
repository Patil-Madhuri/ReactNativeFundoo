import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { Icon, Divider } from 'react-native-elements';
import AppCache from '../../../config/AppCache';
import app from '../../../config/Firebase';
import Firebase from 'firebase';
var noteService = require('../../../services/NoteService');
var userService = require('../../../services/UserService')
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;


export default class Drawer extends Component {
    constructor() {
        super();
        this.state = {
            labels: [],
            email: null,
            firstName: null,
            lastName: null,
            imageUrl: null
        }
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
        AppCache.getItem('email', (error, value) => {
            if (error != null) {
                console.error(error);
            }
            console.log("Value.........", value);
            
            this.setState({
                email: value
            })
        });
        AppCache.getItem('firstName', (error, value) => {
            if (error != null) {
                console.error(error);
            }
            this.setState({
                firstName: value
            })
        });
        AppCache.getItem('lastName', (error, value) => {
            if (error != null) {
                console.error(error);
            }
            this.setState({
                lastName: value
            })
        });
        AppCache.getItem('imageUrl', (error, value) => {
            if (error != null) {
                console.error(error);
            }
            this.setState({
                imageUrl: value
            })
        });
    }

    logout() {
        console.log("Logging Out....");

        Alert.alert(
            null,
            'Do you want to logout ?',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Yes', onPress: () => {
                        try {
                            AppCache.clearAll(function (err) {
                                if (err !== null) {
                                    console.log(err);
                                }
                                Firebase.auth().signOut();
                                this.props.navigation.navigate('Login');
                            });

                        } catch (e) {
                            console.log(e);
                        }
                    }
                },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%' }}>
                    <View style={{ height: 150 }}>
                        <ImageBackground source={require('../../../assets/drawerCover.webp')} style={styles.backgroundImage} >
                            <View>
                                <TouchableOpacity onPress={() => { userService.chooseProfilePicImage() }}>
                                    {
                                        this.state.imageUrl ?
                                            <Image source={{ uri: this.state.imageUrl }} style={styles.profileImage} />
                                            :
                                            <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 15, marginLeft: 20 }}>
                                <Text style={styles.nameFont}>{this.state.firstName + " " + this.state.lastName}</Text>
                                <Text style={{ fontSize: 15 }}>{this.state.email}</Text>
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

                        <TouchableOpacity onPress={() => { this.logout() }}>
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