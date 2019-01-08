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
        
        var that = this;
    
        if (!result.cancelled) {
          let r = Math.random().toString(36).substring(7);
          this.uploadImage(result.uri, r)
            .then(res => {
              Alert.alert("Success");
              console.log(res)
              that.setState({img: res}) 
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
        var url = ref.put(blob).then(snapshot => {
            return snapshot.ref.getDownloadURL();
        });
        return url;
      }
    
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      }




    insertIntoFB = () => {
        var that = this;
        var img = this.state.img;
        firebase.database().ref('dish').push({
            title: that.state.title,
            description: that.state.description,
            date: that.state.chosenDate,
            img: img
        });
        alert("Dish uploaded");

    }

    render() {
        return (
            <View style={styles.container}>

                <Button title="Choose image..." onPress={this.onChooseImagePress} />

                <TextInput
                    label='Title'
                    placeholder='Title'
                    keyboardType= 'default'
                    value={this.state.title}
                    onChangeText={title => this.setState({ title })} />

                <TextInput
                    label='Description'
                    placeholder='Description'
                    keyboardType='default'
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