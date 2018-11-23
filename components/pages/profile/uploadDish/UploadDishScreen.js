import React, { Component } from 'react'
import { StyleSheet, Text, Button, TextInput, DatePickerIOS, View, TouchableHighlight } from 'react-native';
import firebase from "firebase";

export default class UploadDishScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            chosenDate: new Date(),
        }

        this.setDate = this.setDate.bind(this);
    }



    static navigationOptions = {
        title: "UploadDish"
    };

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

  

    insertIntoFB = () => {
        //if (this.state.title != "" && this.state.description != "") {
            var that = this;
            firebase.database().ref('dish').push({
                title: that.state.title,
                description: that.state.description,
                date: that.state.chosenDate
            });
        //}

    }

    render() {
        return (
            <View style={styles.container}>


                <TextInput
                    label='Title'
                    placeholder='Title'
                    keyboardType="Title"
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })} />

                <TextInput
                    label='Description'
                    placeholder='Description'
                    keyboardType="Description"
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })} />

                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                />


                <TouchableHighlight onPress={this.insertIntoFB}>
                    <Text>Sign up</Text>
                </TouchableHighlight>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})