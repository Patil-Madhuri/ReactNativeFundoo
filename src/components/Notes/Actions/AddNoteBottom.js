import React, {Component} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Icon } from 'react-native-elements';
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

export default class AddNoteBottom extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
         <View style={styles.parentStyle}>
            <View style={styles.viewFirst}>
                <TouchableOpacity onPress={this.props.onPressPlus}>
                    <View style={styles.buttonsGroupStyle}><Icon name='add-box' type='MaterialIcons' size={24} color="grey"></Icon></View>
                </TouchableOpacity>
            </View>
            <View style={styles.viewMiddle}>
                <Text style={styles.textStyle}>Edited {this.props.time}</Text>
            </View>
            <View style={styles.viewLast}>
                <TouchableOpacity onPress={this.props.onPressMore}>
                    <View style={styles.buttonsGroupStyle}><Icon name='more' type='MaterialCommunityIcons' size={24} color="grey"></Icon></View>
                </TouchableOpacity>
            </View>

        </View>
        );
    }

}
