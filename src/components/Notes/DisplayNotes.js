import React, { Component } from "react";
import { View, Text } from "react-native";
import PinnedNotes from "../Notes/Actions/PinnedNotes";
import OtherNotes from "../Notes/Actions/OtherNotes";
var styles = require('../../css/styles');
var style = styles.style;
export default class DisplayNotes extends Component {
    render() {        
        return (
            <View style={{ width: '100%', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={{width : '100%'}}>
                        <View><Text style={style.noteStatus}>Pinned</Text></View>
                        <PinnedNotes/>
                    </View>

                    <View style={{width : '100%'}}>
                        <View><Text style={style.noteStatus}>Others</Text></View>
                        <OtherNotes/>
                    </View>
                </View>
            </View>
        );
    }
}
