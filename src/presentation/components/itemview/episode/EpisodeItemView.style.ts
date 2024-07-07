import {StyleSheet} from 'react-native';
import { COLORS } from "../../../../assets/theme/Theme.ts";

const style = StyleSheet.create({
  episodeItemContainer: {
    flexDirection: 'column',
    backgroundColor: COLORS.white,
    height: 120,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 5,
  },
  episodeItemTextContainer: {
    padding: 15,
  },
  episodeItemTextTitle: {
    color: COLORS.hitam,
    fontSize: 18,
    fontWeight: 'bold',
  },
  episodeItemTextEpisode: {
    color: COLORS.hitam,
    fontSize: 16,
  },
  episodeItemTextDate: {
    fontSize: 14,
    fontWeight: 'thin',
  },
  episodeItemButtonContainer: {
    position: 'absolute',
    end: 0,
    bottom: 0,
    margin: 15,
    backgroundColor: COLORS.biru,
    borderRadius: 18,
  },
  episodeItemButtonText: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: COLORS.abuabumuda,
  },
});

const dynamicStyles = (height: number) =>
  StyleSheet.create({
    viewSpacerHeight: {
      height: height,
    },
  });

export {style, dynamicStyles};
