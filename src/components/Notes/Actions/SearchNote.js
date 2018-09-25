import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;
export default class SearchNote extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:
                <View style={{ width: '100%' }}>
                    <TextInput placeholder="Search notes" style={{ fontSize: 15, width: '100%' }} />
                </View>
        }
    }

    goToReminder () {
        console.log("inside goToReminder.................");
        
        this.props.navigation.navigate('ReminderNotes');
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Types</Text>
                <View style={styles.searchCard}>
                <TouchableOpacity onPress={this.goToReminder}>
                    <View style={styles.searchCardView1} >                   
                        <View style={styles.searchCardView2} >
                            <Image source={require('../../../assets/reminder.png')} style={styles.searchCardIcons} />
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Reminders</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                            <Image source={require('../../../assets/images.png')} style={styles.searchCardIcons} />
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Images</Text>
                        </View>
                    </View>
                    <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                        <Image source={require('../../../assets/url.png')} style={styles.searchCardIcons} />
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>URL's</Text>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}