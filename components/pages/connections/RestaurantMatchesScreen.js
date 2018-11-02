import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class RestaurantMatchesScreen extends React.Component {
    static navigationOptions = {
        title: "RestaurantMatches"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Restaurant matches, good food, many matches,!</Text>
        </View>
      );
    }
  }