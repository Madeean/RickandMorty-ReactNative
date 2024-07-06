import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import useBackHandler from '../../util/BackHandler.ts';

type HomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

function Home() {
  useBackHandler();
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
