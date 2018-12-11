import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button'

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
      
      <Button
          title='French'

          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 100,
            height: 35,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 15
          }}
        />

        <Button
          title='American'

          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 100,
            height: 35,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 15
          }}
        />

      </View>
    );
  }
}