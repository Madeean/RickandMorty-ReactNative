// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import EpisodeScreen from '../episode/EpisodeScreen.tsx';
// import CharacterScreen from '../character/CharacterScreen.tsx';
// import LocationScreen from '../location/LocationScreen.tsx';
// import useBackHandler from '../../util/BackHandler.ts';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {
//   faHouse,
//   faLocationDot,
//   faPerson,
// } from '@fortawesome/free-solid-svg-icons';
//
// const Tab = createBottomTabNavigator();
//
// function HomeScreen() {
//   useBackHandler();
//
//   return (
//     <Tab.Navigator
//       initialRouteName="Episode"
//       screenOptions={{
//         tabBarActiveTintColor: '#e91e63',
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           backgroundColor: 'white',
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           shadowColor: '#000',
//           shadowOffset: {width: 0, height: 10},
//           shadowOpacity: 0.25,
//           shadowRadius: 3.5,
//           elevation: 5,
//           paddingBottom: -30,
//           paddingTop: -30,
//         },
//       }}>
//       <Tab.Screen
//         name="Episode"
//         component={EpisodeScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <FontAwesomeIcon icon={faHouse} color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Character"
//         component={CharacterScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({color, size}) => (
//             <FontAwesomeIcon icon={faPerson} color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Location"
//         component={LocationScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color, size}) => (
//             <FontAwesomeIcon icon={faLocationDot} color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
//
// // <Tab.Screen name="Episode" component={EpisodeScreen} />
// // <Tab.Screen name="Character" component={CharacterScreen} />
// // <Tab.Screen name="Location" component={LocationScreen} />
//
// export default HomeScreen;

//

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
      focusedIcon: () => <FontAwesomeIcon icon={faHouse} />,
      unfocusedIcon: () => <FontAwesomeIcon icon={faHouse} />,
    },
    {
      key: 'Character',
      title: 'Character',
      focusedIcon: () => <FontAwesomeIcon icon={faPerson} />,
      unfocusedIcon: () => <FontAwesomeIcon icon={faPerson} />,
    },
    {
      key: 'Location',
      title: 'Location',
      focusedIcon: () => <FontAwesomeIcon icon={faLocationDot} />,
      unfocusedIcon: () => <FontAwesomeIcon icon={faLocationDot} />,
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
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.barStyle}
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
