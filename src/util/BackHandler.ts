import {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const useBackHandler = (shouldShowAlert) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!shouldShowAlert) return;

    const backAction = () => {
      if (isFocused) {
        Alert.alert(
          'Hold on!',
          'Are you sure you want to go back and exit the app?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ],
        );
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isFocused, shouldShowAlert]);
};

export default useBackHandler;
