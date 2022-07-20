import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Access, Login} from './src/pages';

const StackNavigator = createStackNavigator();

export function Routes() {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Access" component={Access} />
      <StackNavigator.Screen name="Login" component={Login} />
    </StackNavigator.Navigator>
  );
}
