import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/Theme.ts';

const style = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    color: COLORS.abuabumuda,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingVertical: 20,
    backgroundColor: COLORS.biru,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
});

export default style;
