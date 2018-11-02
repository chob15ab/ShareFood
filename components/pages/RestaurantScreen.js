import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class RestaurantScreen extends React.Component {
    static navigationOptions = {
        title: "Restaurant"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Restaurant!</Text>
        </View>
      );
    }
  }