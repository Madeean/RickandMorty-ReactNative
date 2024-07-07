import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faPerson,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import EpisodeScreen from '../episode/EpisodeScreen';
import CharacterScreen from '../character/CharacterScreen';
import LocationScreen from '../location/LocationScreen';
import {COLORS} from '../../assets/theme/Theme.ts';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'Episode',
      title: 'Episode',
      focusedIcon: () => (
        <FontAwesomeIcon icon={faHouse} color={COLORS.abuabumuda} />
      ),
      unfocusedIcon: () => (
        <FontAwesomeIcon icon={faHouse} color={COLORS.hitam} />
      ),
    },
    {
      key: 'Character',
      title: 'Character',
      focusedIcon: () => (
        <FontAwesomeIcon icon={faPerson} color={COLORS.abuabumuda} />
      ),
      unfocusedIcon: () => (
        <FontAwesomeIcon icon={faPerson} color={COLORS.hitam} />
      ),
    },
    {
      key: 'Location',
      title: 'Location',
      focusedIcon: () => (
        <FontAwesomeIcon icon={faLocationDot} color={COLORS.abuabumuda} />
      ),
      unfocusedIcon: () => (
        <FontAwesomeIcon icon={faLocationDot} color={COLORS.hitam} />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Episode: EpisodeScreen,
    Character: CharacterScreen,
    Location: LocationScreen,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        activeColor={COLORS.abuabumuda}
        inactiveColor={COLORS.hitam}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.barStyle}
        shifting={false}
        sceneAnimationEnabled={false}
        theme={{colors: {secondaryContainer: 'transparent'}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.abuabumuda,
  },
  barStyle: {
    tintColor: COLORS.abuabumuda,
    backgroundColor: COLORS.biru,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    elevation: 5, // Adds a shadow effect on Android
    shadowColor: '#000', // Adds a shadow effect on iOS
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

export default HomeScreen;
