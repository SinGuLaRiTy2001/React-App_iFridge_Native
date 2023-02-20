import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Pages from './project/index'


export default function App() {
  return (
    <NavigationContainer>
      <Pages />
    </NavigationContainer>
  );
}