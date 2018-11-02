import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: "Search"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Search!</Text>
        </View>
      );
    }
  }