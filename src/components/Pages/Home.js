import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text } from 'react-native';
import TakeNote from '../Notes/Actions/TakeNote';
import Drawer from '../Notes/Actions/Drawer';
import { Header, Icon } from 'react-native-elements';
import DisplayNotes from '../Notes/DisplayNotes';
import ArchiveNotes from '../Notes/Actions/ArchiveNotes';
import TrashNotes from '../Notes/Actions/TrashNotes';
import ReminderNotes from '../Notes/Actions/ReminderNotes';
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
            isLayoutChange: true
        }
        this.layoutChange = this.layoutChange.bind(this);
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

    layoutChange() {
        this.setState({
            isLayoutChange: !this.state.isLayoutChange
        })
    }
    changeView = () => {
        this.props.navigation.push('AddNote');
    }

    changeViewState(viewState) {
        this.setState({ viewState: viewState });
        this.drawer.closeDrawer();
    }

    renderLeftHeader() {
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
                </View>
            </View >
        );
    }
    renderRightHeader() {
        const layoutIcon = this.state.isLayoutChange ?
            <Icon name='view-stream' size={30} color='white' iconStyle={{ padding: 8 }} 
            onPress={this.layoutChange}/>
            :
            <Icon name='view-quilt' size={30} color='white' iconStyle={{ padding: 8 }} 
            onPress={this.layoutChange}/>


        return (
            <View>
                {this.state.viewState === 'trash' ?
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Icon name='more-vert' size={30} color='white' />
                    </View>
                    :
                    <View style={style.navigationButton}>
                        <Icon name='refresh' size={30} color='white' iconStyle={{ padding: 8 }} />
                        <Icon name='search' size={30} color='white' iconStyle={{ padding: 8 }}
                            onPress={() => {this.props.navigation.push('SearchNote')}} />
                        {layoutIcon}
                    </View>
                }

            </View>
        )
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
            view = <DisplayNotes layout={this.state.isLayoutChange}/>
        } else if (this.state.viewState === 'archive') {
            
            view = <ArchiveNotes layout={this.state.isLayoutChange}/>
        }
        else if (this.state.viewState === 'trash') {
            view = <TrashNotes layout={this.state.isLayoutChange}/>
        }
        else if (this.state.viewState === 'reminders') {
            view = <ReminderNotes layout={this.state.isLayoutChange}/>
        }
       
        return (
            <DrawerLayoutAndroid
                ref={(_drawer) => this.drawer = _drawer}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <Header
                    leftComponent={this.renderLeftHeader()}
                    backgroundColor={this.state.viewState === 'home' ? "#fb0" : null ||
                        this.state.viewState === 'trash' ? "#636363" : null ||
                            this.state.viewState === 'archive' ? "#607D8B" : null ||
                                this.state.viewState === 'reminders' ? "#607D8B" : null}
                    rightComponent={this.renderRightHeader()}
                />
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                    {view}
                    <TakeNote newComponent={this.changeView} />
                </View>
            </DrawerLayoutAndroid>


        );
    }
}