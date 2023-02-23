import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../Screens/Favorite';


const Stack = createNativeStackNavigator();

function FavoriteStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoriteScreen} 
      options={{
        title: 'Favorites',
        headerStyle: {
          backgroundColor: '#F26B8A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
    </Stack.Navigator>
)
}

export default FavoriteStack;