import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import PinnedNotes from "../Notes/Actions/PinnedNotes";
import OtherNotes from "../Notes/Actions/OtherNotes";
var styles = require('../../css/styles');
var style = styles.style;

export default class DisplayNotes extends Component {
    render() {
        return (
            <ScrollView style={{ marginBottom: 65 }}>
                <View style={{ width: '100%', flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                        <View style={{ width: '100%' }}>
                            <View><Text style={style.noteStatus}>Pinned</Text></View>
                            <PinnedNotes layout={this.props.layout}/>
                        </View>

                        <View style={{ width: '100%' }}>
                            <View><Text style={style.noteStatus}>Others</Text></View>
                            <OtherNotes layout={this.props.layout}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
