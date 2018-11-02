import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileInfoScreen extends React.Component {
    static navigationOptions = {
        title: "ProfileInfo"
      };
      
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
          <Text>Profilios - tjalala!</Text>
        </View>
      );
    }
  }