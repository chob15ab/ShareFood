import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Profile"
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
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
          onPress={() => this.props.navigation.navigate('Logout')}
        />
      </View>
    );
  }
}