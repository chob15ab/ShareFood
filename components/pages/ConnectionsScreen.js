import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ConnectionsScreen extends React.Component {
  static navigationOptions = {
    title: "Connections"
  };
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
        <Text>Connections!</Text>
        <Button style={{alignItems: 'center'}}
          title="Home Cooking"
          onPress={() => this.props.navigation.navigate('HomeCooking')}
        />
        <Button
          title="Restaurant Cooking"
          onPress={() => this.props.navigation.navigate('RestaurantCooking')}
        />
        <Button
          title="Homies"
          onPress={() => this.props.navigation.navigate('HomiesMatches')}
        />
        <Button
          title="Restaurants"
          onPress={() => this.props.navigation.navigate('RestaurantMatches')}
        />
      </View>
    );
  }
}