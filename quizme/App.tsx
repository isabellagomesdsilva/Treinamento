import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultNavigation} from './src/pages/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <DefaultNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
