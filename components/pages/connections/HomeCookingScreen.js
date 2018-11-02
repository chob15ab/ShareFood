import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeCookingScreen extends React.Component {
    static navigationOptions = {
        title: "HomeCooking"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Home Cooking - tjalala!</Text>
        </View>
      );
    }
  }