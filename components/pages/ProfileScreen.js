import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { DrawerNavigator } from 'react-navigation';
import firebase from 'firebase';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={styles.main}>

      
        <Text style={styles.textStyle}>Profile!           
        </Text>
             
        
        <Button 

          title="Profile Info"
          color="black"

          onPress={() => this.props.navigation.navigate('ProfileInfo')}

         
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
          color="black"

          onPress={() => this.props.navigation.navigate('Payment')}

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
          color="color"

          onPress={() => this.props.navigation.navigate('AreYouSatisfiedWithTheApp')}

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






