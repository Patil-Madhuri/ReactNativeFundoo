import React, { Component } from "react";
import { View,Text } from "react-native";
import { Header, Icon } from 'react-native-elements';
import Note from "../Actions/Note";
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class ArchiveNotes extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }
    componentDidMount() {
        var self = this;
        noteService.getNotes(function (notesList) {
            if (notesList !== null && notesList !== undefined) {
                self.setState({ notes: notesList });
            }
            else {
                self.setState({ notes: [] });
            }
        })
    }

    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {Object.keys(this.state.notes).map((key) => {
                        var noteKey = key;
                        var note = this.state.notes[noteKey];
                        note.isSelected = false;
                        if(note.isArchive === true)
                        {
                            return (
                                <Note note={note} noteKey={noteKey} />
                            )
                        }                
                    })}
                </View>
            </View>
        );
    }
}