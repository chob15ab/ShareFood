import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AreYouSatisfiedWithTheAppScreen extends React.Component {
    static navigationOptions = {
        title: "AreYouSatisfiedWithTheApp"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>AreYouSatisfiedWithTheApplios - tjalala!</Text>
        </View>
      );
    }
  }