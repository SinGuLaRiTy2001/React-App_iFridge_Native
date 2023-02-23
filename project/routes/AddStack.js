import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../Screens/Add/index';

const Stack = createNativeStackNavigator();


function AddStack() {
    return (
        <Stack.Navigator initialRouteName="Add">
          <Stack.Screen  component={AddScreen} />
        </Stack.Navigator>
    )
}

export default AddStack;