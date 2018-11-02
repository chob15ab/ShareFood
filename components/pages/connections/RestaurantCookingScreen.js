import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class RestaurantCookingScreen extends React.Component {
    static navigationOptions = {
        title: "RestaurantCooking"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Restaurant Cooking - blaalalla!</Text>
        </View>
      );
    }
  }