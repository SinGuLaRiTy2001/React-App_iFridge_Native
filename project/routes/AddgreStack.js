import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../Screens/Add/index'


const Stack = createNativeStackNavigator();

function AddgreStack () {
    return (
        <Stack.Navigator initialRouteName="Ingredient">
          <Stack.Screen name="Ingredient" component={AddScreen} />
        </Stack.Navigator>
    )
}

export default AddgreStack;