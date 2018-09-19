import React,{ Component } from "react";
import { View,Text } from "react-native";
import { Header, Icon } from 'react-native-elements';
import Note from "../Actions/Note";
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class TrashNotes extends Component {
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
    // renderHeader() {
    //     return (
    //         <View style={style.view1}>
    //             <View style={{ flexDirection: 'row', width: '100%' }}>
    //                 <Icon name='menu' size={30} color='white'
    //                     iconStyle={{ marginLeft: -10 }}
    //                     onPress={() => { this.drawer.openDrawer() }}
    //                 />
    //                 <Text style={style.notesTitle}>Trash</Text>

    //                 <View style={style.navigationButton}>
    //                     <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
    //                     <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
    //                     <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }}  />
    //                     <Icon name='view-quilt' size={30} color='white' iconStyle={{ padding: 10 }}
    //                     />
    //                 </View>
    //             </View>
    //         </View>
    //     );
    // }
    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'column' }}>
             {/* <Header
                    centerComponent={this.renderHeader()}
                    backgroundColor =  "#636363"
                /> */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {Object.keys(this.state.notes).map((key) => {
                        var noteKey = key;
                        var note = this.state.notes[noteKey];
                        if(note.isTrash === true)
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