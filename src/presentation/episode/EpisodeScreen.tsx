import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/header/header.tsx';
import Search from '../components/search/Search.tsx';
import EpisodeItemView from '../components/itemview/episode/EpisodeItemView.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store.ts';
import {getEpisode} from '../../redux/slices/EpisodeSlice.ts';
import {style} from './EpisodeScreen.style.ts';
import {useAppDispatch} from '../../redux/hooks.ts';

function EpisodeScreen() {
  const [searchText, setSearchText] = useState('');

  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.episode.data);
  const status = useSelector((state: RootState) => state.episode.status);
  const page = useSelector((state: RootState) => state.episode.page);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getEpisode(page));
    }
  }, [dispatch, status]);

  const handleLoadMore = () => {
    if (status === 'succeeded') {
      dispatch(getEpisode(page));
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Header title={'Episode'} />

      <Search
        placeholder={'Search Episode'}
        onTextChange={(text: string) => {
          console.log(text);
          setSearchText(text);
        }}
      />
      <FlatList
        data={data}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => <EpisodeItemView data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          status === 'loading' ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null
        }
      />
    </SafeAreaView>
  );
}

export default EpisodeScreen;
