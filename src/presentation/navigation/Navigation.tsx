import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from './Routes.ts';
import SplashScreen from '../splashscreen/SplashScreen.tsx';
import HomeScreen from '../home/HomeScreen.tsx';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SplashScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
