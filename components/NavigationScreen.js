import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ConnectionsScreen from './pages/ConnectionsScreen';
import ProfileScreen from './pages/ProfileScreen';
import HomiesScreen from './pages/HomiesScreen';
import SearchScreen from './pages/SearchScreen';
import RestaurantScreen from './pages/RestaurantScreen';
import { Ionicons } from '@expo/vector-icons';
import RestaurantCookingScreen from './pages/connections/RestaurantCookingScreen';
import HomeCookingScreen from './pages/connections/HomeCookingScreen';
import RestaurantMatchesScreen from "./pages/connections/RestaurantMatchesScreen";
import HomiesMatchesScreen from "./pages/connections/HomiesMatchesScreen";
import ProfileInfoScreen from "./pages/profile/profileInfo/ProfileInfoScreen";
import PaymentScreen from "./pages/profile/payment/PaymentScreen";
import PoliciesScreen from './pages/profile/policies/PoliciesScreen';
import LogoutScreen from "./pages/profile/LogoutScreen";
import DeliveryScreen from "./pages/profile/delivery/DeliveryScreen";
import AreYouSatisfiedWithTheAppScreen from "./pages/profile/AreYouSatisfiedWithTheAppScreen";
import UploadDishScreen from "./pages/profile/uploadDish/UploadDishScreen";



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
  UploadDish: { screen: UploadDishScreen },
  ProfileInfo: { screen: ProfileInfoScreen},
  Payment: { screen: PaymentScreen},
  Delivery: { screen: DeliveryScreen},
  Policies: { screen: PoliciesScreen},
  AreYouSatisfiedWithTheApp: { screen: AreYouSatisfiedWithTheAppScreen},
  Logout: { screen: LogoutScreen},
});


export default createBottomTabNavigator({
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