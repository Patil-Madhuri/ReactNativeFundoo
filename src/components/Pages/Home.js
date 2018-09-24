import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import TakeNote from '../Notes/Actions/TakeNote';
import Drawer from '../Notes/Actions/Drawer';
import { Header, Icon } from 'react-native-elements';
import DisplayNotes from '../Notes/DisplayNotes';
import ArchiveNotes from '../Notes/Actions/ArchiveNotes';
import TrashNotes from '../Notes/Actions/TrashNotes';
import ReminderNotes from '../Notes/Actions/ReminderNotes';
// import DashboardHeaderOptions from '../Notes/Actions/DashboardHeaderOptions';
var noteService = require('../../services/NoteService');
var styleSheet = require('../../css/styles');
var style = styleSheet.style;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
        this.changeViewState = this.changeViewState.bind(this);
        this.state = {
            viewState: "home",
            notes: [],
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

    changeView = () => {
        this.props.navigation.push('AddNote');
    }

    changeViewState(viewState) {
        this.setState({ viewState: viewState });
        this.drawer.closeDrawer();
    }

    renderHeader() {
        let title;
        if (this.state.viewState === 'home') {
            title = "Notes";
        } else if (this.state.viewState === "archive") {
            title = "Archive";
        }
        else if (this.state.viewState === "trash") {
            title = "Trash"
        }
        else if (this.state.viewState === "reminders") {
            title = "Reminders"
        }
        return (
            <View style={style.view1} >
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Icon name='menu' size={30} color='white'
                        iconStyle={{ marginLeft: -10 }}
                        onPress={() => { this.drawer.openDrawer() }}
                    />
                    <Text style={style.notesTitle}>{title}</Text>

                    {this.state.viewState === 'trash' ?
                        <View>
                            <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />

                        </View>
                        :
                        <View style={style.navigationButton}>
                            <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='search' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 10 }} />
                            <Icon name='view-quilt' size={30} color='white' iconStyle={{ padding: 10 }}
                            />
                        </View>
                    }

                </View>
            </View >
        );
    }

    render() {
        let view;
        let noteKey;
        let note;
        var navigationView = (
            <Drawer navigation={this.props.navigation} viewState={this.changeViewState} />
        );
        Object.keys(this.state.notes).map((key) => {
            noteKey = key;
            note = this.state.notes[noteKey];
            note.isSelected = false;
        })
        if (this.state.viewState === 'home') {
            view = <DisplayNotes />
        } else if (this.state.viewState === 'archive') {
            view = <ArchiveNotes />
        }
        else if (this.state.viewState === 'trash') {
            view = <TrashNotes />
        }
        else if (this.state.viewState === 'reminders') {
            view = <ReminderNotes />
        }
        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header
                    leftComponent={this.renderHeader()}
                    backgroundColor={this.state.viewState === 'home' ? "#fb0" : null ||
                        this.state.viewState === 'trash' ? "#636363" : null ||
                            this.state.viewState === 'archive' ? "#607D8B" : null ||
                                this.state.viewState === 'reminders' ? "#607D8B" : null}
                />
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                    {view}
                    <TakeNote newComponent={this.changeView} />
                </View>
            </DrawerLayoutAndroid>


        );
    }
}