import React, { Component } from "react";
import { View, TextInput, ScrollView} from 'react-native';
import Note from "./Note";
var noteService = require('../../../services/NoteService');

export default class NotesWithImages extends Component {
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

    static navigationOptions = () => {
        return {
            headerTitle:
                <View style={{ width: '100%' }}>
                    <TextInput placeholder="Images" style={{ fontSize: 15, width: '100%' }} />
                </View>
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {Object.keys(this.state.notes).map((key) => {
                            var noteKey = key;
                            var note = this.state.notes[noteKey];

                            if (note.ImageUrl && note.isTrash === false) {
                                return (
                                    <Note note={note} noteKey={noteKey} layout={this.props.layout} />
                                )
                            }
                        })}
                    </View>
                </View>
            </ScrollView>
        );
    }
}