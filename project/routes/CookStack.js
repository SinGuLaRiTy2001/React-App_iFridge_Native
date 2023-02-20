import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CookScreen from '../Screens/Cook';


const Stack = createNativeStackNavigator();

function CookStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Cook" component={CookScreen} />
        </Stack.Navigator>
    )
}

export default CookStack;