import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from "react-native";
import { Icon, Divider, Button } from 'react-native-elements';

var styleSheet = require('../css/styles');
var styles = styleSheet.style;
export default class Drawer extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <View style={{ height: 200 }}>
                        <ImageBackground source={require('../assets/drawerCover.webp')} style={styles.backgroundImage} >
                            <View >
                                <Image source={require('../assets/profile.png')} style={styles.profileImage} />
                            </View>
                            <View style={{marginTop : 20,marginLeft : 20}}>
                                <Text style={styles.nameFont}>Madhuri Patil</Text>
                                <Text style={{fontSize : 15}}>madhuripatil506@gmail.com</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='lightbulb-outline' size={30} />
                            <Text style={styles.sidebarText}>Notes</Text>
                        </View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='reminder' type='material-community' size={30} />
                            <Text style={styles.sidebarText}>Reminders</Text>
                        </View>

                        {/* <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='touch-app' size={30} />
                            <Text style={styles.sidebarText}>Reminders</Text>
                        </View> */}

                        <Divider />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.labelText}>Labels</Text>
                            <Text style={{ fontSize: 20}}>EDIT</Text>
                        </View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='add' size={30} />
                            <Text style={styles.sidebarText}>Create new label</Text>
                        </View>

                        <Divider />

                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='archive' size={30} />
                            <Text style={styles.sidebarText}>Archive</Text>
                        </View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='delete' size={30} />
                            <Text style={styles.sidebarText}>Trash</Text>
                        </View>

                        <Divider />
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='settings' size={30} />
                            <Text style={styles.sidebarText}>Settings</Text>
                        </View>
                        <View style={styles.sidebarBtn} >
                            <Icon color="grey" name='help' size={30} />
                            <Text style={styles.sidebarText}>Help & feedback</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}