import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/theme/Theme.ts';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.abuabumuda,
  },
});

const dynamicStyles = (height: number) => StyleSheet.create({});

export {style, dynamicStyles};
