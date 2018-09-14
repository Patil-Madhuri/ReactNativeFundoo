import React, { Component } from "react";
import { Text, Modal, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
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
        return (
            <Card key={noteKey} containerStyle={{ width: '45%',margin: 7 }} className="notes">
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
                    onRequestClose={() => {
                        console.log('Modal closed');
                      }}                   >
                    <UpdateNote note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                     onClick={this.setModalVisible}/>
                </Modal>
            </Card>

        )
    }
}