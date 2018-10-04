import React, { Component } from "react";
import { View } from "react-native";
import Note from "./Note";
var noteService = require('../../../services/NoteService');

export default class OtherNotes extends Component{
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
                        if(note.isArchive === false && note.isTrash === false && note.isPin === false){
                            return (
                                <Note note={note} noteKey={noteKey} layout={this.props.layout}/>
                            )
                        }
                     
                    })}
                </View>
            </View>
        )
    }
}