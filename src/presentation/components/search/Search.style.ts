import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/theme/Theme.ts';

const style = StyleSheet.create({
  searchEpisodeContainer: {
    marginHorizontal: 18,
    marginTop: 8,
    borderColor: COLORS.hitam,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  searchEpisodeTextInput: {
    flex: 1,
    marginLeft: 8,
  },
});

export default style;
