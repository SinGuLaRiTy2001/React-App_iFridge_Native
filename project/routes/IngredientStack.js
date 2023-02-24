import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IngredientScreen from '../Screens/Ingredient/index'
import AddScreen from '../Screens/Add/index';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function IngredientStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Ingredient" component={IngredientScreen} 
          options={{
            title: 'Ingredient',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity/>
            ),
          }}
          />
          <Stack.Screen name="Add" component={AddScreen} 
          options={{
            title: 'Add Ingredient',
            headerStyle: {
              backgroundColor: 'green',
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

export default IngredientStack;