import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import { Icon, Divider, Button } from 'react-native-elements';

var styleSheet = require('../css/styles');
var styles = styleSheet.style;
export default class Drawer extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%' }}>
                    <View style={{ backgroundColor: 'purple', height: 150 }}>
                        <Text>Profile Pic</Text>
                        <Text>Madhuri Patil</Text>
                        <Text>madhuripatil506@gmail.com</Text>
                    </View>

                    <View>
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='lightbulb-outline' size={30} />
                            <Text style={styles.sidebarReminderText}>Notes</Text>
                        </View>
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='touch-app' size={30} />
                            <Text style={styles.sidebarReminderText}>Reminders</Text>
                        </View>

                        {/* <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='touch-app' size={30} />
                            <Text style={styles.sidebarReminderText}>Reminders</Text>
                        </View> */}

                        <Divider />
                        <View style={{flexDirection : 'row',marginTop : 10}}>
                                <Text style={{fontSize : 20}}>Labels</Text>

                                <Button title="Edit" buttonStyle={{justifyContent : 'flex-end',height : 15,right : 0}}></Button>
                        </View>
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='add' size={30} />
                            <Text style={styles.sidebarReminderText}>Create new label</Text>
                        </View>

                        <Divider />

                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='archive' size={30} />
                            <Text style={styles.sidebarReminderText}>Archive</Text>
                        </View>
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='delete' size={30} />
                            <Text style={styles.sidebarReminderText}>Trash</Text>
                        </View>

                        <Divider />
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='settings' size={30} />
                            <Text style={styles.sidebarReminderText}>Settings</Text>
                        </View>
                        <View style={styles.sidebarReminderBtn} >
                            <Icon color="grey" name='help' size={30} />
                            <Text style={styles.sidebarReminderText}>Help & feedback</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}