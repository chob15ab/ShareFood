import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LogoutScreen extends React.Component {
    static navigationOptions = {
        title: "Logout"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Logoutios</Text>
        </View>
      );
    }
  }