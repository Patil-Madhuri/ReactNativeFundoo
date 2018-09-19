import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Card, Button, Text, Icon } from 'react-native-elements';
export default class ColorList extends Component {

    
    colorsList = [
        {
            id: '1',
            color: "#fafafa",
            isColorSelected: true
        },
        {
            id: '2',
            color: "#d8ccc9",
            isColorSelected: false
        },
        {
            id: '3',
            color: "#81b1ff",
            isColorSelected: false
        },
        {
            id: '4',
            color: "#ccff90",
            isColorSelected: false
        },
        {
            id: '5',
            color: "#d0d8dd",
            isColorSelected: false
        },
        {
            id: '6',
            color: "#fdd180",
            isColorSelected: false
        },
        {
            id: '7',
            color:  "#f8bbd0",
            isColorSelected: false
        },
        {
            id: '8',
            color: "#fb8a7f",
            isColorSelected: false
        },
        {
            id: '9',
            color: "#a7ffeb",
            isColorSelected: false
        },
        {
            id: '10',
            color: "#7fd8ff",
            isColorSelected: false
        },
        {
            id: '11',
            color: "#ffff8c",
            isColorSelected: false
        }
    ];

    constructor(props) {
        super(props)
        this.state = {
            colorsList: this.colorsList,
            selected:0
        }
    }

    isColorSelectedForNote = (color) => {
        console.log('Selected Color:' + color);
        this.colorsList.forEach((item)=>{
            item.isSelected = false;
            if(item.color===color){
                item.isSelected=true;
            }
        });
        this.setState({selected:this.state.selected+1});
        this.props.onColorChanged(color);
    }

    renderIcon = ({ item }) => (

        <View style={{ height: 44, width: 44, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={ ()=>{
                this.isColorSelectedForNote(item.color)}}>
                <View style={{ height: 32, width: 32, backgroundColor: item.color, borderRadius: 32 / 2, justifyContent: 'center' }}>
                    <Icon name='check' type='MaterialCommunityIcons' size={item.isColorSelected === true ? 18 : 0} color="grey" ></Icon>
                </View>
            </TouchableOpacity>
        </View>

    );


    render() {

        return (
            <View style={{ height: 44, width: '100%' }}>
                <FlatList
                    data={this.state.colorsList}
                    extraData={this.state.selected}
                    horizontal={true}
                    renderItem={this.renderIcon}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}