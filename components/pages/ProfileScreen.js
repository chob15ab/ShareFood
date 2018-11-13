import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import firebase from 'firebase';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={styles.main}>
        <Text>Profile!</Text>
        
        <Button 
          title="Profile Info"
          onPress={() => this.props.navigation.navigate('ProfileInfo')}
        />
        <Button
          title="Payment"
          onPress={() => this.props.navigation.navigate('Payment')}
        />
        <Button
          title="Delivery"
          onPress={() => this.props.navigation.navigate('Delivery')}
        />
        <Button
          title="Policies"
          onPress={() => this.props.navigation.navigate('Policies')}
          />
        <Button
          title="Are you satisfied with the app?"
          onPress={() => this.props.navigation.navigate('AreYouSatisfiedWithTheApp')}
        />
        <Button
          title="Logout"
          onPress={() => {firebase.auth().signOut()}}
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
    justifyContent: "center"
   },
})




