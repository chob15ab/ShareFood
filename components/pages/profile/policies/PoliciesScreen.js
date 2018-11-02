import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PoliciesScreen extends React.Component {
    static navigationOptions = {
        title: "Policies"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Policios - tjalala!</Text>
        </View>
      );
    }
  }