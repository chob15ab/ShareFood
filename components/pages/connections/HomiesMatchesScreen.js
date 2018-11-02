import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomiesMatchesScreen extends React.Component {
    static navigationOptions = {
        title: "HomiesMatches"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Homies matches, good food, many matches,!</Text>
        </View>
      );
    }
  }