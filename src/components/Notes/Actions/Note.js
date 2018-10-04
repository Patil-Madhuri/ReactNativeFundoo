import React, { Component } from "react";
import { Text, Modal, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import UpdateNote from "../Actions/UpdateNote";
import ReminderFunction from '../../../config/ReminderFunction';

var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

export default class Note extends Component {
    constructor() {
        super();
        this.setModalVisible = this.setModalVisible.bind(this);
        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {        
        var note = this.props.note;
        var noteKey = this.props.noteKey;
        const reminderStyle = note.Reminder === '' ? styles.reminderContainerHideStyle : styles.reminderContainerStyle;
        const labelStyle = note.labels === '' ? styles.reminderContainerHideStyle : styles.reminderContainerStyle;
        var layout = this.props.layout;
        
        return (
            // backgroundColor: note.color 

            <Card key={noteKey} containerStyle={layout ? styles.gridView : styles.listView}>
                <View >
                    <Image source={{ uri: note.ImageUrl }} style={{ height: 100, width: '100%' }}></Image>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{note.Notetitle}</Text>
                    </TouchableOpacity>
                    {note.isPin === true ?
                        <Icon name='pin' type='material-community' size={25} color="#4285f4" />
                        : null
                    }
                </View>

                <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                    <Text style={{ fontSize: 20 }}>{note.NoteDesc}</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <View style={reminderStyle}>
                        <View style={styles.reminderSubContainerStyle}>
                            <Icon name='access-time' size={18} color="grey"></Icon>
                            <Text style={styles.reminderTextStyle}>{ReminderFunction.getDisplayReminderDate(note.Reminder)}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={labelStyle}>
                        <View style={styles.reminderSubContainerStyle}>
                            <Text style={styles.reminderTextStyle}>{note.labels}</Text>
                        </View>
                    </View>
                </View>


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log('Modal closed');
                    }}>
                        <UpdateNote note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                            onClick={this.setModalVisible} redirect={this.props.navigation} />
                </Modal>
            </Card>
        )
    }
}