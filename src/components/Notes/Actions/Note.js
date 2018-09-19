import React, { Component } from "react";
import { Text, Modal, TouchableOpacity, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import UpdateNote from "../Actions/UpdateNote";

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
            <Card key={noteKey} containerStyle={{ width: '45%', margin: 7 }} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{note.Notetitle}</Text>
                    </TouchableOpacity>
                    {note.isPin === true ?
                        <Icon name='pin' type='material-community' size={25} color="#4285f4" iconStyle={{ alignItems: 'flex-end' }} />
                        : null
                    }
                </View>

                <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                    <Text style={{ fontSize: 20 }}>{note.NoteDesc}</Text>
                </TouchableOpacity>
                

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log('Modal closed');
                    }}>
                    <UpdateNote note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                        onClick={this.setModalVisible} />
                </Modal>
            </Card>

        )
    }
}