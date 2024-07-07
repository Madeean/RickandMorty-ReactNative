import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EpisodeScreen from '../episode/EpisodeScreen';
import EpisodeDetailScreen from '../episode/detail/EpisodeDetailScreen';
import {Routes} from './Routes.ts';

const Stack = createStackNavigator();

const EpisodeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.EpisodeDetailScreen}
        component={EpisodeDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default EpisodeStackNavigator;
