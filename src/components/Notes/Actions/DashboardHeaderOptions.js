import React, { Component } from "react";
import { View, Text, TouchableOpacity} from "react-native";
var styleSheet = require('../../.././css/styles');
var styles = styleSheet.style;
export default class DashboardHeaderOptions extends Component {
    render() {
        switch (noteType) {
            case 'Trash':
                return (
                    <View style={styles.parentStyle}>
                        <View style={styles.viewFirst}>
                            <TouchableOpacity onPress={this.props.onBackPress}>
                                <View style={styles.buttonsGroupStyle}><Icon name='arrow-back' type='MaterialIcons' size={24} color={Constant.colorButtonGrey}></Icon></View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMiddle}>
                            <Text style={styles.textStyle}>{this.props.title}</Text>
                        </View>
                        <View style={styles.viewLast}>

                            <View style={{ justifyContent: 'center' }}>
                                {/* <TouchableOpacity onPress={this.props.onRestorePress}> */}
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='backup-restore' type='material-community' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                {/* </TouchableOpacity> */}
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                {/* <TouchableOpacity onPress={this.props.onOptionPress}> */}
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='dots-vertical' type='material-community' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                {/* </TouchableOpacity> */}
                            </View>

                        </View>
                    </View>
                );
            default:
                return (
                    <View style={styles.parentStyle}>
                        <View style={styles.viewFirst}>
                            <TouchableOpacity onPress={this.props.onBackPress}>
                                <View style={styles.buttonsGroupStyle}><Icon name='arrow-back' type='MaterialIcons' size={24} color={Constant.colorButtonGrey}></Icon></View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewMiddle}>
                            <Text style={styles.textStyle}>{this.props.title}</Text>
                        </View>
                        <View style={styles.viewLast}>

                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.props.onPinPress}>
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='pin' type='material-community' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.props.onReminderPress}>
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='reminder' type='material-community' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.props.onColorPress}>
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='color-lens' type='MaterialIcons' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.props.onOptionPress}>
                                    <View style={{ padding: 10, justifyContent: 'center' }}><Icon name='dots-vertical' type='material-community' size={24} color={Constant.colorButtonGrey}></Icon></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
        }
    }
}