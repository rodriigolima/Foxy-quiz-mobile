import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/home';

import {Splash} from '../pages/splash';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={{ headerShown: true }}
         >
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}         
        />
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
