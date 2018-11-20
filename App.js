import React from 'react';
import { Button, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import firebase from "firebase";
import Login from "./components/login/Login";
import NavigationScreen from "./components/NavigationScreen";


 export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      
      apiKey: "AIzaSyB584w4uiG4mVqMm2tWTKBW8tQZnN9f17c",
      authDomain: "sharefood-d55fd.firebaseapp.com",
      databaseURL: "https://sharefood-d55fd.firebaseio.com",
      projectId: "sharefood-d55fd",
      storageBucket: "sharefood-d55fd.appspot.com",
      messagingSenderId: "642111795548"
            });
      
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }
  
    render() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <View style={styles.container}>
              <NavigationScreen/>
            </View>
          );
        case false:
          return (
            <View style={styles.container}>
            <Login />
            </View>
          );
        default:
          return <ActivityIndicator size="large" />

          
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });