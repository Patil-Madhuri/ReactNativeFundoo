import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { Icon, Header } from 'react-native-elements';
import CheckBox from 'react-native-check-box';
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;
export default class MoreBtnLabel extends Component {
    constructor() {
        super();
        this.state = {
            labelName: null,
            labels: [],
            isChecked: false,
        }
    }
    componentDidMount() {
        var self = this;
        noteService.getLabels(function (labelList) {
            if (labelList !== null && labelList !== undefined) {
                self.setState({ labels: labelList });
            }
            else {
                self.setState({ labels: [] });
            }
        });
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isChecked: checked,
        });
    }


    renderHeader() {
        return (
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Icon name="arrow-back"
                    onPress={() => { this.props.onClick(!this.props.modalVisible) }}
                    size={30} color="black" iconStyle={{ marginRight: 20 }}
                />
                <View>
                    <TextInput placeholder="Enter label name" style={style.takeLabelInput} />
                </View>
            </View>
        )
    }
    render() {
        var note = this.props.note;
        var noteKey = this.props.noteKey;
        return (
            <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                <Header
                    leftComponent={this.renderHeader()}
                    backgroundColor="white"
                />

                <View>
                    <View style={{ flexDirection: 'column' }}>
                        {Object.keys(this.state.labels).map((key) => {
                            var labelId = key;
                            var label = this.state.labels[labelId];
                            if (label) {
                                return (
                                    <View style={{ flexDirection: 'row', padding: 10 }}>
                                        <Icon name="label" color="grey" size={30} iconStyle={{ alignItems: 'flex-start', paddingLeft: 15 }} />
                                        <Text style={style.displayLabelName1}>{label.labelName}</Text>
                                        <CheckBox
                                            style={{ flex: 1, padding: 10 }}
                                            onClick={() => {
                                                this.setState({
                                                    isChecked: !this.state.isChecked
                                                })
                                            }}
                                            isChecked={this.state.isChecked}
                                        />

                                    </View>
                                );
                            }
                            else {
                                <View></View>
                            }
                        })}
                    </View>
                </View>
            </View>
        );
    }
}