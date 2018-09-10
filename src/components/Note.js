import React, { Component } from "react";
import { Text, Modal, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import AddNote from "./AddNote";
import UpdateNote from "./UpdateNote";

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
        // let {setModalVisible} = this.props;
        return (
            <Card key={noteKey} containerStyle={{ width: '40%'}}>
                <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                    <Text style={{fontSize: 20, fontWeight : 'bold'}}>{note.Notetitle}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                    <Text style={{fontSize: 20}}>{note.NoteDesc}</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                   >
                    <UpdateNote note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                     onClick={this.setModalVisible}/>
                </Modal>
            </Card>

        )
    }
}