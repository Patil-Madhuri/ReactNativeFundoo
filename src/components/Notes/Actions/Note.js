import React, { Component } from "react";
import { Text, Modal, TouchableOpacity, View, Image, PanResponder, Animated } from "react-native";
import { Card, Icon } from "react-native-elements";
import UpdateNote from "../Actions/UpdateNote";
import ReminderFunction from '../../../config/ReminderFunction';

var styleSheet = require('../../../css/styles');
var styles = styleSheet.style;

export default class Note extends Component {
    constructor() {
        super();
        this.setModalVisible = this.setModalVisible.bind(this);
        this.state = {
            modalVisible: false,
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1)
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                // Set the initial value to the current state
                this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
                this.state.pan.setValue({ x: 0, y: 0 });
                Animated.spring(
                    this.state.scale,
                    { toValue: 1.1, friction: 3 }
                ).start();
            },

            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),

            onPanResponderRelease: (e, { vx, vy }) => {
                // Flatten the offset to avoid erratic behavior
                this.state.pan.flattenOffset();
                Animated.spring(this.state.scale, { toValue: 1, friction: 3 }).start();
            }
        });
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        var note = this.props.note;
        var noteKey = this.props.noteKey;
        const reminderStyle = note.Reminder === '' ? styles.reminderContainerHideStyle : styles.reminderContainerStyle;
        const labelStyle = note.labels === '' ? styles.reminderContainerHideStyle : styles.reminderContainerStyle;
        var layout = this.props.layout;
        console.log("Layout+++++++++++++", layout);
        let { pan } = this.state;

        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];
        let scale = this.state.scale;
        let rotate = '0deg';

        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };
        return (
            <View style={layout ? styles.gridView : styles.listView}>
                <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
                    <Card key={noteKey} containerStyle={{ backgroundColor: note.color, margin: 7 }}>
                        <View >
                            <Image source={{ uri: note.ImageUrl }} style={{ height: 120, width: '100%' }}></Image>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{note.Notetitle}</Text>
                            </TouchableOpacity>
                            {note.isPin === true ?
                                <Icon name='pin' type='material-community' size={25} color="#4285f4" />
                                : null
                            }
                        </View>

                        <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                            <Text style={{ fontSize: 20 }}>{note.NoteDesc}</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={reminderStyle}>
                                <View style={styles.reminderSubContainerStyle}>
                                    <Icon name='access-time' size={18} color="grey"></Icon>
                                    <Text style={styles.reminderTextStyle}>{ReminderFunction.getDisplayReminderDate(note.Reminder)}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={labelStyle}>
                                <View style={styles.reminderSubContainerStyle}>
                                    <Text style={styles.reminderTextStyle}>{note.labels}</Text>
                                </View>
                            </View>
                        </View>


                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                console.log('Modal closed');
                            }}>
                            <UpdateNote note={note} noteKey={noteKey} modalVisible={this.state.modalVisible}
                                onClick={this.setModalVisible} redirect={this.props.navigation} />
                        </Modal>
                    </Card>
                </Animated.View>

            </View>

        );
    }
}