import React from 'react'
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from './AddgreStack';
import IngredientScreen from './IngredientStack';
import CookScreen from './CookStack';
import FavoriteScreen from './FavoriteStack';
import CommunityScreen from './CommunityStack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


function MyTabs_1() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ingredient') {
              iconName = focused? 'cube' : 'cube-outline';
            } else if (route.name === 'Cook') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Community') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })
      }
      >
      <Tab.Screen  name="Ingredient" component={IngredientScreen} />
      <Tab.Screen  name="Cook" component={CookScreen} />
      <Tab.Screen  name="Favorite" component={FavoriteScreen} />
      <Tab.Screen  name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
}

export default function index() { 

    return (
        <MyTabs_1 />
    )
}
