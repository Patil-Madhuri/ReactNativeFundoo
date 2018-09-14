import React, { Component } from 'react';
import { View, TextInput } from "react-native";
import { Card, Icon, Text } from 'react-native-elements';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
const { SlideInMenu } = renderers;
var noteService = require('../services/NoteService');
var styleSheet = require('../css/styles');
var style = styleSheet.style;

export default class AddNote extends Component {
    static navigationOptions = ({ navigation }) => {

        const params = navigation.state.params || { noteTitle: "", noteDescription: "" };
        return {
            headerLeft: (
                <Icon name="arrow-back"
                    onPress={() => { navigation.goBack(); noteService.createNote(params) }}
                    size={30} color="grey"
                    iconStyle={{ paddingLeft: 8 }} />
            ),
            headerTitle:
                <View style={{ flexDirection: 'row', marginLeft: 220 }}>
                    <Icon name='pin' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }} />
                    <Icon name='reminder' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }} />
                    <Icon name='archive' size={30} color="grey" iconStyle={{ padding: 5 }} />
                </View>
        }
    }

    constructor() {
        super();
        var currentTime = new Date().toLocaleTimeString();
        this.state = {
            title: '',
            description: '',
            time: currentTime,
            log: []
        }
    }

    render() {
        return (
            <View onPress={this.props.newComponent} style={{ position: 'relative', flexDirection: 'column', flex: 1,zIndex : 0 }}>
                <View>
                    <TextInput placeholder="Title" style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}
                        onChangeText={(title) => this.props.navigation.setParams({ noteTitle: title })} />

                    <TextInput placeholder="Note" style={{ fontSize: 20, padding: 15 }}
                        selectTextOnFocus={true} multiline={true}
                        onChangeText={(description) => this.props.navigation.setParams({ noteDescription: description })} />

                </View>

                <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}>
                    <View>
                        <Card containerStyle={{
                            width: '100%', height: 60, padding: 0,
                            marginLeft: 0, flexDirection: 'row',
                            position  :'relative'
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '20%'}}>
                                    <MenuProvider style={{ flex: 1}}>
                                        <Menu name="numbers" renderer={SlideInMenu}  >
                                            <MenuTrigger customStyles={{
                                                trigger: {
                                                    padding: 5,
                                                    margin: 5,
                                                }
                                            }}>
                                                <Icon name='add-box' size={30} color="grey" iconStyle={{ paddingTop: 12, paddingLeft: 15}} />
                                            </MenuTrigger>
                                            <MenuOptions customStyles={{optionWrapper: {position: 'relative' , zIndex:3} }}>
                                                <MenuOption text='Option one' />
                                                <MenuOption text='Option two' />
                                                <MenuOption text='Option three' />
                                                <MenuOption text='Option four' />
                                                <MenuOption text='Option five' />
                                            </MenuOptions>
                                        </Menu>
                                    </MenuProvider>
                                </View>
                                <View style={{ width: '60%', paddingTop: 8 }}>
                                    <Text style={{ fontSize: 20 }}>Edited {this.state.time}</Text>
                                </View>
                                <View style={{ width: '20%' }} >
                                    <Icon name='more' size={30} color="grey" iconStyle={{ paddingTop: 8 }} />
                                </View>
                            </View>
                        </Card>


                    </View>
                </View>

            </View>
        );
    }
}