import React, { Component } from "react";
import { View } from "react-native";
import Note from "./Note";
import Constant from '../config/Constant';
var noteService = require('../services/NoteService');

export default class DisplayNotes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            fetchNoteType: Constant.NOTES
        }
    }
    componentDidMount() {
        var self = this;
        // noteService.getNotes(function (notesList) {
        //     if (notesList !== null && notesList !== undefined) {
        //         self.setState({ notes: notesList });
        //     }
        //     else {
        //         self.setState({ notes: [] });
        //     }
        // })

            var noteType = self.state.fetchNoteType;
           this.getNotesToDisplay(noteType);
    }

    getNotesToDisplay(noteType) {
        noteService.getNotes(noteType, (notesList) => {
            if (notesList !== null || notesList !== undefined) {
                this.setState({ notes: notesList });
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
                        return (
                            <Note note={note} noteKey={noteKey} />
                        )
                    })}
                </View>
            </View>
        )
    }
}
