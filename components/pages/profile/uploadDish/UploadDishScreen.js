import React, { Component } from 'react'
import { StyleSheet, Text, Button, TextInput, DatePickerIOS, View, TouchableHighlight, Alert } from 'react-native';
import firebase from "firebase";
import { Permissions, ImagePicker } from "expo";

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

      onChooseImagePress = async () => {
        let result = await ImagePicker.launchCameraAsync();
        
        
    
        if (!result.cancelled) {
          this.uploadImage(result.uri, "test-image")
            .then(() => {
              Alert.alert("Success");
            })
            .catch((error) => {
              Alert.alert(error);
            });
        }
      }
    
    
      uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
    
        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob);
      }
    
    
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
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

                <Button title="Choose image..." onPress={this.onChooseImagePress} />

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
                    <Text>Upload</Text>
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