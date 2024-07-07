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
import store from './src/redux/Store.ts';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
