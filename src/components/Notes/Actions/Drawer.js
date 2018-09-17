import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Icon, Divider } from 'react-native-elements';
import localStorage from 'react-native-sync-localstorage';
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

export default class Drawer extends Component {


    logOut() {
        localStorage.clear();
        this.props.navigation.navigate('Login');
    }

    // onSelected(noteType) {
    //     switch (noteType) {
    //         case Constant.NOTES:
    //             console.log("inside notes");
    //             this.props.onItemSelected(noteType, Constant.HEADER_COLOR_DARK_YELLOW);
    //             break;
    //         case Constant.REMINDERS:
    //             console.log("inside reminders");
    //             this.props.onItemSelected(noteType, Constant.HEADER_COLOR_DARK_GRAY);
    //             break;
    //         case Constant.ARCHIVE:
    //             console.log("inside archive");
    //             this.props.onItemSelected(noteType, Constant.HEADER_COLOR_DARK_GRAY);
    //             break;
    //         case Constant.TRASH:
    //             console.log("inside Trash");
    //             this.props.onItemSelected(noteType, Constant.HEADER_COLOR_DARK_BROWN);
    //             break;
    //         case Constant.LABEL:
    //             console.log("inside Label");
    //             this.props.onItemSelected(noteType, Constant.HEADER_COLOR_DARK_GRAY);
    //             break;
    //         default:
    //             console.log("inside default case");
    //             break;
    //     }
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <View style={{ height: 150 }}>
                        <ImageBackground source={require('../../../assets/drawerCover.webp')} style={styles.backgroundImage} >
                            <View >
                                <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 20 }}>
                                <Text style={styles.nameFont}>Madhuri Patil</Text>
                                <Text style={{ fontSize: 15 }}>madhuripatil506@gmail.com</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{ height: '100%' }}>
                        {/* <TouchableOpacity onPress={() => { this.onSelected(Constant.NOTES) }}> */}
                        <TouchableOpacity>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='lightbulb-outline' size={30} />
                                <Text style={styles.sidebarText}>Notes</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => { this.onSelected(Constant.REMINDERS) }}> */}
                        <TouchableOpacity>
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

                        {/* <TouchableOpacity onPress={() => { this.onSelected(Constant.LABEL) }}> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateLabel')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='add' size={30} />
                                <Text style={styles.sidebarText} >Create new label</Text>
                            </View>
                        </TouchableOpacity>

                        <Divider style={{ marginTop: 10, marginBottom: 10 }} />

                        {/* <TouchableOpacity onPress={() => { this.onSelected(Constant.ARCHIVE)}}> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ArchiveNotes')}>
                            <View style={styles.sidebarBtn} >
                                <Icon color="grey" name='archive' size={30} />
                                <Text style={styles.sidebarText}>Archive</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={() => { this.onSelected(Constant.TRASH) }}> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TrashNotes')}>
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