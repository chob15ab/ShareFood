import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ConnectionsScreen from './components/pages/ConnectionsScreen';
import ProfileScreen from './components/pages/ProfileScreen';
import HomiesScreen from './components/pages/HomiesScreen';
import SearchScreen from './components/pages/SearchScreen';
import RestaurantScreen from './components/pages/RestaurantScreen';
import { Ionicons } from '@expo/vector-icons';
import RestaurantCookingScreen from './components/pages/connections/RestaurantCookingScreen';
import HomeCookingScreen from './components/pages/connections/HomeCookingScreen';
import RestaurantMatchesScreen from "./components/pages/connections/RestaurantMatchesScreen";
import HomiesMatchesScreen from "./components/pages/connections/HomiesMatchesScreen";
import ProfileInfoScreen from "./components/pages/profile/profileInfo/ProfileInfoScreen";
import PaymentScreen from "./components/pages/profile/payment/PaymentScreen";
import PoliciesScreen from './components/pages/profile/policies/PoliciesScreen';
import LogoutScreen from "./components/pages/profile/LogoutScreen";
import DeliveryScreen from "./components/pages/profile/delivery/DeliveryScreen";
import AreYouSatisfiedWithTheAppScreen from "./components/pages/profile/AreYouSatisfiedWithTheAppScreen";

/*
import { AppRegistry } from "react-native";


import login from "./components/Login";
import Secured from "./components/Secured";

class ReactNativeStormpath extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if(this.state.isLoggedIn)
    return < Secured
    onLogoutPress={() => this.setState({isLoggedIn: false})}
    />;
    elsereturn < login

    onLoginPress={() => this.setState({isLoggedIn: true})}

    />;
  }
}

AppRegistry.registerComponent(ReactNativeStormPath , () => ReactNativeStormpath );

Link: https://scotch.io/tutorials/react-native-app-with-authentication-and-user-management-in-15-minutes#toc-set-up-your-login-page

Vi har yderligere oprettet en component kaldet "login"

Der hvor der står stormpath, erstat det med firebase - tjek med Emil. 
*/






const HomiesStack = createStackNavigator({
  Homies: { screen: HomiesScreen },
});

const SearchStack = createStackNavigator({
  Search: { screen: SearchScreen },
});

const RestaurantStack = createStackNavigator({
  Restaurant: { screen: RestaurantScreen },
});

const ConnectionsStack = createStackNavigator({
  Connections: { screen: ConnectionsScreen },
  RestaurantCooking: { screen: RestaurantCookingScreen },
  HomeCooking: { screen: HomeCookingScreen },
  HomiesMatches: { screen: HomiesMatchesScreen },
  RestaurantMatches: { screen: RestaurantMatchesScreen}, 
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen },
  ProfileInfo: { screen: ProfileInfoScreen},
  Payment: { screen: PaymentScreen},
  Delivery: { screen: DeliveryScreen},
  Policies: { screen: PoliciesScreen},
  AreYouSatisfiedWithTheApp: { screen: AreYouSatisfiedWithTheAppScreen},
  Logout: { screen: LogoutScreen},
});


export default createBottomTabNavigator(
  {
    Profile: { screen: ProfileStack }, /*Her du sætter navigationsrækkefølge*/
    Homies: { screen: HomiesStack },
    Search: { screen: SearchStack },
    Restaurant: { screen: RestaurantStack },
    Connections: { screen: ConnectionsStack },
  },


  {
    initialRouteName: 'Homies',
    navigationOptions: ({ navigation }) => ({


      tabBarIcon: ({ focused, tintColor }) => {

        const { routeName } = navigation.state;
        var iconName;

        if (routeName === 'Connections') {
          iconName = 'md-contacts';
        } else if (routeName === 'Profile') {
          iconName = 'md-person';
        } else if (routeName === 'Homies') {
          iconName = 'md-home';
        } else if (routeName === 'Restaurant') {
          iconName = 'md-restaurant';
        }
        else if (routeName === 'Search') {
          iconName = 'md-search';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
