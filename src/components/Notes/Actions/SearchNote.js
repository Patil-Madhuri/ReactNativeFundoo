import React, { Component } from "react";
import { View, Text, TextInput, Image } from 'react-native';
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

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Types</Text>
                <View style={styles.searchCard}>
                    <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                            {/* <Icon name='touch-app' size={30} color="white"  iconStyle={{height: 30,width : 30}}/> */}
                            <Image source={require('../../../assets/reminder.png')} style={styles.searchCardIcons}/>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Reminders</Text>
                        </View>
                    </View>
                    <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                            <Image source={require('../../../assets/images.png')} style={styles.searchCardIcons} />
                            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Images</Text>

                        </View>
                    </View>
                    <View style={styles.searchCardView1}>
                        <View style={styles.searchCardView2}>
                            <Icon name='reminder' type='material-community' size={30} color="white" iconStyle={styles.searchSvg}
                            />
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}