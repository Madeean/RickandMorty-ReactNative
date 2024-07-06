import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './SplashScreen.style.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Routes} from '../navigation/Routes.ts';
import {StackNavigationProp} from '@react-navigation/stack';

type SplashScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

function SplashScreen({navigation}: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToHomeScreen();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToHomeScreen = () => {
    navigation.navigate(Routes.Home); // Adjust navigation method based on your setup
  };

  return (
    <LinearGradient
      colors={['#50CE8A', '#5066CE']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <View style={styles.container}>
        <Image
          source={require('./../../assets/images/rickandmorty.png')} // Adjust the path based on your setup
          style={styles.image}
        />
      </View>
    </LinearGradient>
  );
}

export default SplashScreen;
