import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class PaymentScreen extends React.Component {
    static navigationOptions = {
        title: "Payment"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Paymentos - tjalala!</Text>
        </View>
      );
    }
  }