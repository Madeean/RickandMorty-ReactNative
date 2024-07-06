import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import UserComponent from './UserComponent.tsx';

function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <UserComponent userId={6} />
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

export default SplashScreen;
