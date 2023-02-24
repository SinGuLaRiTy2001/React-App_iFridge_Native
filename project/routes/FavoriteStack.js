import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../Screens/Favorite';
import Sharesreen from '../Screens/Share';


const Stack = createNativeStackNavigator();

function FavoriteStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Favorite" component={FavoriteScreen} 
          options={{
            title: 'Favourites',
            headerStyle: {
              backgroundColor: '#F26B8A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />

          <Stack.Screen name="Share" component={Sharesreen} 
          options={{
            title: 'Share',
            headerStyle: {
              backgroundColor: '#F26B8A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />
        </Stack.Navigator>
    )
}

export default FavoriteStack;