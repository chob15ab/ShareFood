import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DeliveryScreen extends React.Component {
    static navigationOptions = {
        title: "Delivery"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Deliverios - tjalala!</Text>
        </View>
      );
    }
  }