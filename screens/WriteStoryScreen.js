import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component(){
    render(){
        return(
            <View>
                <View style = {styles.container}>
                    <Text>Write Story</Text>
                </View>
                <View style = {styles.inputView}>
                <TextInput style = {styles.inputBox}
                placeholder = "Name of story"/>
                </View>
                <View style = {styles.container}>
                <Text>Write Story</Text>
                </View>
                <View style = {styles.inputView}>
                <TextInput style = {styles.inputBox}
                placeholder = "Name of Author"/>
                </View>
                <View style = {styles.container}>
                <Text>Write Story</Text>
                </View>
                <View style = {styles.inputView}>
                <TextInput style = {styles.inputBox}
                placeholder = "Story"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    inputView : {
        flexDirection : "row",
        margin : 20
    },
    inputBox : {
        width : 200,
        height : 40,
        borderWidth : 1.5,
        borderRightWidth : 0,
        fontSize : 20
    }
})