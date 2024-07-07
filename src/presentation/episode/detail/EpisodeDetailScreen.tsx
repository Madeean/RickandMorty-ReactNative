import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

type EpisodeDetailScreenProps = {
  route: RouteProp<{params: {dataDetail: any}}, 'params'>;
  navigation: StackNavigationProp<any, any>;
};

function EpisodeDetailScreen({route}: EpisodeDetailScreenProps) {
  const {dataDetail} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name: {dataDetail.name}</Text>
      <Text>Episode: {dataDetail.episode}</Text>
      <Text>Air Date: {dataDetail.airDate}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EpisodeDetailScreen;
