/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/presentation/navigation/Navigation.tsx';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/Store.ts';
import {PersistGate} from 'redux-persist/integration/react';
import { PaperProvider } from "react-native-paper";

// type SectionProps = PropsWithoutRef<{
//   title: string;
// }>;
//
// function Section({title = ''}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
