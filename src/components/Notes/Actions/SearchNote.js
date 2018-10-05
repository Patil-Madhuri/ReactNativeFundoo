import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;
export default class SearchNote extends Component {
    constructor(props) {
        super(props);
    }
  

    static navigationOptions = () => {
        return {
            headerTitle:
                <View style={{ width: '100%' }}>
                    <TextInput placeholder="Search notes" style={{ fontSize: 15, width: '100%' }} />
                </View>
        }
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Types</Text>
                <View style={styles.searchCard}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ReminderNotes')}>
                        <View style={styles.searchCardView1} >
                            <View style={styles.searchCardView2} >
                                <Image source={require('../../../assets/reminder.png')} style={styles.searchCardIcons} />
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Reminders</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ImagesNotes')}>
                        <View style={styles.searchCardView1}>
                            <View style={styles.searchCardView2}>
                                <Image source={require('../../../assets/images.png')} style={styles.searchCardIcons} />
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Images</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                            <Image source={require('../../../assets/url.png')} style={styles.searchCardIcons} />
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>URL's</Text>

                        </View>
                    </View> */}
                </View>
            </View>
        );
    }
}