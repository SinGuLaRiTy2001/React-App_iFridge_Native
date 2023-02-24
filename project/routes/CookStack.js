import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CookScreen from '../Screens/Cook/index';


const Stack = createNativeStackNavigator();

function CookStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Cook" component={CookScreen} 
          options={{
            title: 'Dishes',
            headerStyle: {
              backgroundColor: 'rgb(230, 175, 0)',
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

export default CookStack;