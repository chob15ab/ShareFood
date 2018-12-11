import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={styles.main}>
     
       <Button
          title="Upload dish"
          
          onPress={() => this.props.navigation.navigate('UploadDish')}
          titleStyle={{ color: "black", textAlign: "left" }}

          buttonStyle={{
            backgroundColor: "lightgrey",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
          />
        
        <Button 

          title="Profile Info"

          onPress={() => this.props.navigation.navigate('ProfileInfo')}
          titleStyle={{ color: "black" }}

         
           buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
        />
      
        <Button
          title="Payment"

          onPress={() => this.props.navigation.navigate('Payment')}
          titleStyle={{ color: "black" }}

          buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
        />
        <Button
          title="Delivery"
          color="black"

          onPress={() => this.props.navigation.navigate('Delivery')}
          titleStyle={{ color: "black" }}

          buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
        />
        <Button
          title="Policies"
          color="black"

          onPress={() => this.props.navigation.navigate('Policies')}
          titleStyle={{ color: "black" }}

          buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
          />
        <Button
          title="Are you satisfied with the app?"
          color="black"

          onPress={() => this.props.navigation.navigate('AreYouSatisfiedWithTheApp')}
          titleStyle={{ color: "black" }}

          buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
        />
        <Button
          title="Logout"
          color="black"

          onPress={() => {firebase.auth().signOut()}}
          titleStyle={{ color: "black" }}

          buttonStyle={{
            backgroundColor: "white",
            width: 400, 
            height: 45,
            borderColor: "lightgrey",
            borderWidth: 1,
            
          }}
        />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    backgroundColor: "white", 
    alignItems: "flex-start",
    justifyContent: "space-evenly"
   },

   
})






