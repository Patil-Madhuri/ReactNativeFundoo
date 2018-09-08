import React, { Component } from 'react';
import { View, TextInput } from "react-native";
import { Card, Icon, Text, Header } from 'react-native-elements';
var noteService = require('../services/NoteService');
var styleSheet = require('../css/styles');
var styles = styleSheet.style;
export default class AddNote extends Component {
    static navigationOptions = {
        headerTitle:
            <View style={{ flexDirection: 'row', marginLeft: 220}}>
                <Icon name='fiber-pin' size={30} color="grey" iconStyle={{padding : 5}}/>
                <Icon name='touch-app' size={30} color="grey" iconStyle={{padding : 5}}/>
                <Icon name='archive' size={30} color="grey" iconStyle={{padding : 5}}/>
            </View>,
            header: () => ({
                left: ( <Icon name={'chevron-left'} onPress={ () => { noteService.createNote() } }  /> ),  
            }),
    }

   

    constructor(){
        super();
        this.state = {
            title : '',
            description : ''
        }
    }
    componentDidMount(){
        this.navigation.setParams({
            title: this.state.title,
            description : this.state.description
           })
    }
  
    render() {
        return (
            <View onPress={this.props.newComponent} style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
                <View>
                    <TextInput placeholder="Title" style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }} 
                     onChangeText={(title) => this.setState({ title })}/>

                    <TextInput placeholder="Note" style={{ fontSize: 20, padding: 15 }} multiline={true} 
                                  onChangeText={(description) => this.setState({ description })}/>

                </View>

                <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 0 }}>
                    <View>
                        <Card containerStyle={{
                            width: '100%', height: 60, padding: 0,
                            marginLeft: 0, flexDirection: 'row'
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '20%' }}>
                                    <Icon name='add-box' size={30} color="grey" iconStyle={{ paddingTop: 8 }} />
                                </View>
                                <View style={{ width: '60%', paddingTop: 8 }}>
                                    <Text style={{ fontSize: 20 }}>Mukesh</Text>
                                </View>
                                <View style={{ width: '20%' }} >
                                    <Icon name='more' size={30} color="grey" iconStyle={{ paddingTop: 8 }} />
                                </View>
                            </View>
                        </Card>
                    </View>
                </View>

            </View>
        );
    }
}