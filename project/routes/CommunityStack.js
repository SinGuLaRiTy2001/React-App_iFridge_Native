import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommunityScreen from '../Screens/Community';


const Stack = createNativeStackNavigator();

function CommunityStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Community" component={CommunityScreen}
          options={{
            title: 'Community',
            headerStyle: {
              backgroundColor: 'deepskyblue',
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

export default CommunityStack;