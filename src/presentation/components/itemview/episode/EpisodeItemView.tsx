import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {dynamicStyles, style} from './EpisodeItemView.style.ts';
import {EpisodeDetailModelDomain} from '../../../../domain/episode/model/EpisodeModelDomain.ts';

function EpisodeItemView({data}: {data: EpisodeDetailModelDomain}) {
  return (
    <View style={style.episodeItemContainer}>
      <View style={style.episodeItemTextContainer}>
        <Text style={style.episodeItemTextTitle} numberOfLines={1}>
          {data.name}
        </Text>
        <View style={dynamicStyles(6).viewSpacerHeight} />
        <Text style={style.episodeItemTextEpisode}>{data.episode}</Text>
        <View style={dynamicStyles(6).viewSpacerHeight} />
        <Text style={style.episodeItemTextDate}>{data.airDate}</Text>
      </View>
      <TouchableOpacity style={style.episodeItemButtonContainer}>
        <Text style={style.episodeItemButtonText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EpisodeItemView;
