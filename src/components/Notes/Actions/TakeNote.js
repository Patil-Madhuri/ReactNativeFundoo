import React, { Component } from 'react';
import { View,  TextInput, TouchableOpacity } from "react-native";
import { Icon, Card } from 'react-native-elements';
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

export default class TakeNote extends Component {
    constructor(){
        super();
        this.state ={
            modalVisible : true
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    render() {
        return (
            <View style={{ alignSelf: 'flex-end',position: 'absolute', bottom: 0 }}>
                <View >
                    <Card containerStyle={styles.takeNoteCard}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '50%', paddingLeft: 30 }}>
                                <TouchableOpacity onPress={this.props.newComponent}>
                                <TextInput placeholder="Take a note..." style={{ fontSize: 20 }} editable={false} selectTextOnFocus={false} />
                          </TouchableOpacity> 
                                {/* <Text >Take a note....</Text> */}
                            </View>
                            <View style={styles.takeNoteCardIcon}>
                                <Icon color="grey" name='list' size={30} iconStyle={{ padding: 8 }} />
                                <Icon color="grey" name='edit' size={30} iconStyle={{ padding: 8 }} />
                                <Icon color="grey" name='keyboard-voice' size={30} iconStyle={{ padding: 8 }} />
                                <Icon color="grey" name='camera-alt' size={30} iconStyle={{ padding: 8 }} />

                            </View>

                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}