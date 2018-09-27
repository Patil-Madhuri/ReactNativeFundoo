import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
import AddNoteBottom from './AddNoteBottom';
import HandleMorePress from './HandleMorePress';
import HandleAddPress from './HandleAddPress';
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
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
                    <Icon name='pin' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }}
                        onPress={() => { noteService.isPinNote(noteKey, note) }} />
                    <Icon name='reminder' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }} />
                    <Icon name='archive' size={30} color="grey" iconStyle={{ padding: 5 }}
                        onPress={() => { noteService.isArchiveNote(noteKey, note) }} />
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
            log: [],
            isOpenedPlusMenu: false,
            isOpenedMoreMenu: false
        }
    }
    handleAddPress = () => {
        this.setState({ isOpenedPlusMenu: !this.state.isOpenedPlusMenu });
    }

    handleMorePress = () => {
        this.setState({ isOpenedMoreMenu: !this.state.isOpenedMoreMenu });
    }
  
    render() {
        return (
            <View onPress={this.props.newComponent} style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                <ScrollView>
                    <TextInput placeholder="Title" style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}
                        onChangeText={(title) => this.props.navigation.setParams({ noteTitle: title })} />

                    <TextInput placeholder="Note" style={{ fontSize: 20, padding: 15 }}
                        selectTextOnFocus={true} multiline={true}
                        onChangeText={(description) => this.props.navigation.setParams({ noteDescription: description })} />
                </ScrollView>

                <View style={style.slideMenuStyle}>
                    <HandleAddPress openAddMenu={this.state.isOpenedPlusMenu} />
                    {/* <HandleMorePress openMoreMenu={this.state.isOpenedMoreMenu} /> */}
                </View>
                <View style={[style.addNoteBottomStyle, { backgroundColor: 'white', height: 50, flexDirection: 'row', justifyContent: 'center' }]}>
                    <AddNoteBottom time={this.state.time} onPressPlus={this.handleAddPress} onPressMore={this.handleMorePress}></AddNoteBottom>
                </View>
            </View>
        );
    }
}