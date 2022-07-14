import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Access, Log} from './src/pages/Login';

const StackNavigator = createStackNavigator();

export function Routes() {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Access" component={Access} />
      <StackNavigator.Screen name="Log" component={Log} />
    </StackNavigator.Navigator>
  );
}
