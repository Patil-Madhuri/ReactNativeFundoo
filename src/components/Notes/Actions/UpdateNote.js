import React, { Component } from "react";
import { View, TextInput, ScrollView, Text, Button } from "react-native";
import { Icon, Header } from 'react-native-elements';
import HandleMorePress from "./HandleMorePress";
import AddNoteBottom from "./AddNoteBottom";
import HandleAddPress from "./HandleAddPress";
import { Dialog } from "react-native-simple-dialogs";
import RadioButton from 'react-native-radio-button'
import { Dropdown } from 'react-native-material-dropdown';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import  ReminderFunction  from '../../../config/ReminderFunction';
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class UpdateNote extends Component {

    constructor(props) {
        super(props);
        var currentTime = new Date().toLocaleTimeString([], { hour12: true });
        this.changeColor = this.changeColor.bind(this);
        this.setValue = this.setValue.bind(this);
        this.getSelectedValue = this.getSelectedValue.bind(this);
        // this.showDateTimePicker = this.showDateTimePicker.bind(this);
        // this.hideDateTimePicker = this.hideDateTimePicker.bind(this);
        // this.handleDatePicked = this.handleDatePicked.bind(this);
        var month = new Date().toDateString().split(' ')[1];
        var date = new Date().toDateString().split(' ')[2];
        var currentDate = month + "  " + date;
        console.log("CurrentDate:-----", currentDate);
        this.state = {
            title: '',
            description: '',
            time: currentTime,
            color: '',
            isOpenedMoreMenu: false,
            isOpenedPlusMenu: false,
            showDialog: false,
            isSelectedRadioBtn: true,
            isDateTimePickerVisible: false,
            value: currentDate
        }
    }

    setValue(value) {
        this.setState({ value: value });
    }

    getSelectedValue(value) {
        var noteKey = this.props.noteKey;
        var note = this.props.note;
        if (value === 'Today') {
            var today = new Date();
            today.setHours(20);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.Reminder = today;
            this.setValue(today);
            noteService.setReminder(noteKey, note);
        }
        else if (value === 'Tommorrow') {
            var tommorow = new Date();
            tommorow.setDate(tommorow.getDate() + 1);
            tommorow.setHours(8);
            tommorow.setMinutes(0);
            tommorow.setMilliseconds(0);
            note.Reminder = tommorow;
            this.setValue(tommorow);
            noteService.setReminder(noteKey, note);
        }
        else if (value === 'Next Week') {
            var nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 6);
            nextWeek.setHours(8);
            nextWeek.setMinutes(0);
            nextWeek.setMilliseconds(0);
            note.Reminder = nextWeek;
            this.setValue(nextWeek);
            noteService.setReminder(noteKey, note);
        }
    }

    changeColor(color) {
        this.setState({ color: color });
    }

    handleMorePress = () => {
        this.setState({ isOpenedMoreMenu: !this.state.isOpenedMoreMenu });
    }

    handleAddPress = () => {
        this.setState({ isOpenedPlusMenu: !this.state.isOpenedPlusMenu });
    }

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    handleRadioButtonClick(isSelected) {
        this.setState({
            isSelectedRadioBtn: !isSelected
        })
    }

    // showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    // hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    // handleDatePicked = (date) => {
    //     console.log('A date has been picked: ', date);
    //     this.hideDateTimePicker();
    // };

    renderHeader() {
        var noteKey = this.props.noteKey;
        var note = this.props.note;
        let data = [{
            value: 'Today',
        }, {
            value: 'Tommorrow',
        }, {
            value: 'Next Week',
        },
        {
            value: 'Pick a date...'
        }];

        let data2 = [{
            value: 'Pick a time...'
        }]

        var month = new Date().toDateString().split(' ')[1];
        var date = new Date().toDateString().split(' ')[2];
        var currentDate = month + "  " + date;
        console.log("CurrentDate:-----", this.state.value);
        return (
            <View style={{ flexDirection: 'row' }}>
                <Icon name="arrow-back"
                    onPress={() => { this.props.onClick(!this.props.modalVisible); noteService.updateNote(this.state.title, this.state.description, this.state.color, noteKey) }}
                    size={30} color="black"
                />

                <View style={{ flexDirection: 'row', marginLeft: 220 }}>
                    {
                        note.isPin ? <Icon name='pin' type='material-community' size={30} color="#4285f4" iconStyle={{ padding: 8, alignItems: 'flex-end' }}
                            onPress={() => { noteService.isPinNote(noteKey, note) }} />
                            :
                            <Icon name='pin' type='material-community' size={30} color="grey" iconStyle={{ padding: 8 }}
                                onPress={() => { noteService.isPinNote(noteKey, note) }} />
                    }
                    <Icon name='reminder' type='material-community' size={30} color="grey" iconStyle={{ padding: 8 }}
                        onPress={() => this.openDialog(true)} />

                    {
                        note.isArchive === true ?
                            <Icon name='unarchive' size={30} color="grey" iconStyle={{ padding: 5, paddingRight: 10 }}
                                onPress={() => { noteService.isArchiveNote(noteKey, note) }} />
                            :
                            <Icon name='archive' size={30} color="grey" iconStyle={{ padding: 5, paddingRight: 10 }}
                                onPress={() => { noteService.isArchiveNote(noteKey, note) }} />
                    }

                </View>
                <Dialog
                    visible={this.state.showDialog}
                    title="Add reminder"
                    onTouchOutside={() => this.openDialog(false)}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    animationType="fade">
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', paddingRight: 20 }}>
                            <RadioButton
                                animation={'bounceIn'}
                                isSelected={this.state.isSelectedRadioBtn}
                                onPress={() => this.handleRadioButtonClick(this.state.isSelectedRadioBtn)}
                            />
                            <Text style={{ paddingLeft: 10, textAlignVertical: 'center', fontSize: 15 }}>Time</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                animation={'bounceIn'}
                                isSelected={!this.state.isSelectedRadioBtn}
                                onPress={() => this.handleRadioButtonClick(this.state.isSelectedRadioBtn)}
                            />
                            <Text style={{ paddingLeft: 10, textAlignVertical: 'center', fontSize: 15 }}>Place</Text>
                        </View>
                    </View>

                    {this.state.isSelectedRadioBtn ?
                        <View>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Dropdown
                                    value={this.state.value}
                                    data={data}
                                    containerStyle={{ width: '80%' }}
                                    onChangeText={this.getSelectedValue} />
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Dropdown
                                    value={'Pick a date...'}
                                    data={data2}
                                    containerStyle={{ width: '80%' }} />
                            </View>
                        </View>
                        :
                        <View style={{ width: '100%' }}>
                            <TextInput placeholder="Edit Location" underlineColorAndroid="black"
                            />
                        </View>
                    }
                    <View style={style.flexRow}>
                        <Button title="Delete" onPress={() => noteService.removeRemainder(noteKey,note)}/>
                        <Button title="Cancel" onPress={() => this.openDialog(false)}  />
                        <Button title="Save" onPress={this.getSelectedValue}  />
                    </View>

                </Dialog>
            </View>
        )
    }
    render() {
        var note = this.props.note;
        var noteKey = this.props.noteKey;
        var redirect = this.props.redirect;
        const reminderStyle = note.Reminder === '' ? style.reminderContainerHideStyle : style.reminderContainerStyle;

        return (
            <View style={{ position: 'relative', flexDirection: 'column', flex: 1, backgroundColor: note.color }}>
                <Header
                    leftComponent={this.renderHeader()}
                    backgroundColor="white"
                />
                <ScrollView>
                    <TextInput placeholder="Title" style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}
                        defaultValue={note.Notetitle}
                        onChangeText={(title) => this.setState({ title })} />

                    <TextInput placeholder="Note" style={{ fontSize: 20, padding: 15 }} multiline={true}
                        defaultValue={note.NoteDesc}
                        onChangeText={(description) => this.setState({ description })} />

                    <View>
                        <View style={reminderStyle}>
                            <View style={style.reminderSubContainerStyle}>
                                <Icon name='access-time' size={18} color="grey"></Icon>
                                <Text style={style.reminderTextStyle}>{ReminderFunction.getDisplayReminderDate(note.Reminder)}</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>

                <View style={style.slideMenuStyle}>
                    <HandleAddPress openAddMenu={this.state.isOpenedPlusMenu} />
                    <HandleMorePress oncolorChange={this.changeColor} openMoreMenu={this.state.isOpenedMoreMenu} note={note} noteKey={noteKey}/>
                </View>

                <View style={[style.addNoteBottomStyle, { backgroundColor: 'white', height: 50, flexDirection: 'row', justifyContent: 'center' }]}>
                    <AddNoteBottom time={this.state.time} onPressPlus={this.handleAddPress} onPressMore={this.handleMorePress}></AddNoteBottom>
                </View>

            </View>
        );
    }
}
