import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Card, Icon, Text, Header } from 'react-native-elements';
var noteService = require('../../../services/NoteService');

export default class UpdateNote extends Component {
   
    constructor() {
        super();
        var currentTime = new Date().toLocaleTimeString([], { hour12: true});
        this.state = {
            title: '',
            description: '',
            time : currentTime
        }
    }
 
    renderHeader() {
        var noteKey = this.props.noteKey;
        var note = this.props.note;
        return (
            <View style={{flexDirection : 'row'}}>
                <Icon name="arrow-back"
                    onPress={() => {this.props.onClick(!this.props.modalVisible);noteService.updateNote(this.state.title,this.state.description,noteKey)}}
                    size={30} color="black"
                   />

                <View style={{ flexDirection: 'row', marginLeft: 220 }}>
                    <Icon name='pin' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }} 
                    onPress={() => {noteService.isPinNote(noteKey,note)}}/>

                    <Icon name='reminder' type='material-community' size={30} color="grey" iconStyle={{ padding: 5 }} />

                    <Icon name='archive' size={30} color="grey" iconStyle={{ padding: 5 }} 
                    onPress={() => {noteService.isArchiveNote(noteKey,note)}}/>
                </View>
            </View>
        )
    }
    render() {
        var note = this.props.note;
        
        return (
            <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                <Header
                    centerComponent={this.renderHeader()}
                    backgroundColor="white"
                />
                <View>
                    <TextInput placeholder="Title" style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}
                    defaultValue={note.Notetitle}
                        onChangeText={(title) => this.setState({ title })} />

                    <TextInput placeholder="Note" style={{ fontSize: 20, padding: 15 }} multiline={true}
                    defaultValue={note.NoteDesc}
                        onChangeText={(description) => this.setState({ description })} />

                </View>

                <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}>
                    <View>
                        <Card containerStyle={{
                            width: '100%', height: 60, padding: 0,
                            marginLeft: 0, flexDirection: 'row'
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '20%' }}>
                                    <Icon name='add-box' size={30} color="grey" iconStyle={{ paddingTop: 8 }} />
                                </View>
                                <View style={{ width: '60%', paddingTop: 8 }}>
                                <Text style={{ fontSize: 15 }}>Edited {this.state.time}</Text>
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
