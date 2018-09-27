import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Icon } from 'react-native-elements';
import ColorList from './ColorList';
import MoreBtnLabel from "./MoreBtnLabel";
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;
export default class HandleMorePress extends Component {
    constructor() {
        super();
        this.state = {
            color: "#fafafa",
            modalVisible: false
        }
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    onNoteColorChange = (color) => {
        this.setState({ color: color });
        this.props.oncolorChange(color);
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        var note = this.props.note;
        var noteKey = this.props.noteKey;
        return (
            <View style={style.slideMenuStyle}>
                {
                    note.isTrash === true ?
                        <ScrollView style={{ height: this.props.openMoreMenu ? 100 : 0 }}>
                         <TouchableOpacity onPress={() => noteService.isTrashNote(noteKey, note)} >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='restore'  size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Restore</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => noteService.deleteNoteForever(noteKey)} >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='delete-forever' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Delete Forever</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        :
                        <ScrollView style={{ height: this.props.openMoreMenu ? 264 : 0 }}>
                            {/* {
                        note.isPin === true ?
                        <TouchableOpacity onPress={() => {noteService.isPinNote(noteKey,note);noteService.isTrashNote(noteKey, note)}} >
                            <View style={style.slidemenustyle}>
                                <View style={{ padding: 8 }}><Icon name='delete' type='material-community' size={24} color="grey"></Icon></View>
                                <Text style={style.slideMenuCellTextStyle}>Delete</Text>
                            </View>
                            </TouchableOpacity>
                            :
                            null
                    }
                    {
                        note.isPin === false ? */}
                            <TouchableOpacity onPress={() => noteService.isTrashNote(noteKey, note)} >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='delete' type='material-community' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                            {/* :
                            null

                    } */}
                            <TouchableOpacity >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='content-copy' type='material-community' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Make a copy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='send' type='material-community' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Send</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='person-add' type='MaterialIcons' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Collaborator</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                                <View style={style.slidemenustyle}>
                                    <View style={{ padding: 8 }}><Icon name='label' type='material-community' size={24} color="grey"></Icon></View>
                                    <Text style={style.slideMenuCellTextStyle}>Labels</Text>
                                </View>
                            </TouchableOpacity>

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    console.log('Modal closed');
                                }}>
                                <MoreBtnLabel note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                                    onClick={this.setModalVisible} />
                            </Modal>

                            <View style={[style.slideMenuCellStyle, { paddingLeft: 0 }]}>
                                <ColorList onColorChanged={(color) => {
                                    this.onNoteColorChange(color);
                                }}></ColorList>
                            </View>
                        </ScrollView>
                }
            </View>

        );
    }
}