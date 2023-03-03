import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Pages from './project/index'
import {Provider as StoreProvider} from 'react-redux'
import store from './project/redux/store';


export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Pages />
      </NavigationContainer>
    </StoreProvider>
  );
}