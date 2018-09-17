import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
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
            showEdit: true
        }
    }
    render() {
        return (
            <View style={{ width: '100%', flexDirection: 'column' }}>
                <Card containerStyle={style.labelCard}>
                    <View style={style.labelCardView}>
                        <Icon name="close" color="grey" size={30} iconStyle={{ alignItems: 'flex-start' }} />
                        <TextInput placeholder="Create new label" selectTextOnFocus={true}
                            onChangeText={(labelName) => this.setState({ labelName })} style={{ width: '80%', fontSize: 20 }} />
                        <Icon name="done" color="grey" size={30} iconStyle={{ alignItems: 'flex-end' }} />
                    </View>

                </Card>
            </View>
        );
    }
}