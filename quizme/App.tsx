import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
