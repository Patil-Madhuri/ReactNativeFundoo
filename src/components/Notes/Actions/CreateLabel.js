import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
var noteService = require('../../../services/NoteService');
var styleSheet = require('../../../css/styles');
var style = styleSheet.style;

export default class CreateLabel extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <Icon name="close"
                    onPress={() => { navigation.goBack() }}
                    size={30} color="white"
                    iconStyle={{ paddingLeft: 6 }} />
            ),
            headerTitle: <Text style={style.notesTitle}>Edit Labels</Text>,
            headerStyle: {
                backgroundColor: "#607D8B",
                height: 60
            }
        }
    }
    constructor() {
        super();
        this.state = {
            labelName: null,
            labels: [],
            showEditLabel: true
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

    changeViewToEditLabel(isEditView) {        
        this.setState({
            showEditLabel: !isEditView
        })
    }

    render() {        
        return (
            <View style={{ width: '100%', flexDirection: 'column' }}>
                <Card containerStyle={style.labelCard}>
                    <View style={style.labelCardView}>
                        <Icon name="close" color="grey" size={30} iconStyle={{ alignItems: 'flex-start' }} />
                        <TextInput placeholder="Create new label" selectTextOnFocus={true}
                            onChangeText={(labelName) => this.setState({ labelName })} style={{ width: '80%', fontSize: 20 }}
                            ref={input => { this.textInput = input }} />
                        <Icon name="done" color="grey" size={30} iconStyle={{ alignItems: 'flex-end' }}
                            onPress={() => { this.textInput.clear(); noteService.createLabel(this.state.labelName) }} />
                    </View>
                </Card>


                <View style={{ flexDirection: 'column' }}>
                    {Object.keys(this.state.labels).map((key) => {
                        var labelId = key;
                        var label = this.state.labels[labelId];
                        if (label) {
                            return (
                                <View>
                                    {
                                        this.state.showEditLabel ?
                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                <Icon name="label" color="grey" size={30} iconStyle={{ alignItems: 'flex-start', paddingLeft: 15 }} />
                                                <Text style={style.displayLabelName}
                                                    onPress={() => this.changeViewToEditLabel(this.state.showEditLabel)}
                                                >{label.labelName}</Text>
                                                <Icon name="edit" color="grey" size={30} iconStyle={{ alignItems: 'flex-end' }} />
                                            </View>

                                            :
                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                <Icon name="delete" color="grey" size={30} iconStyle={{ alignItems: 'flex-start', paddingLeft: 15 }} 
                                                onPress={() => noteService.deleteLabel(labelId)}/>
                                                <TextInput defaultValue={label.labelName}  onChangeText={(labelName) => this.setState({ labelName })} style={{ width: '80%', fontSize: 20 }}/>
                                                <Icon name="check" color="#4285f4" size={30} iconStyle={{ alignItems: 'flex-end' }} 
                                                onPress={() => {this.changeViewToEditLabel(this.state.showEditLabel);noteService.renameLabel(labelId,this.state.labelName)}}/>
                                            </View>

                                    }
                                </View>
                            )

                        }
                        else {
                            <View></View>
                        }
                    })}
                </View>


            </View>
        );
    }
}