import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import Header from './../components/header/header.tsx';
import Search from './../components/search/Search.tsx';
import EpisodeItemView from './../components/itemview/episode/EpisodeItemView';
import {useSelector} from 'react-redux';
import {RootState} from './../../redux/Store';
import {getEpisode} from './../../redux/slices/EpisodeSlice';
import {style} from './EpisodeScreen.style';
import {useAppDispatch} from './../../redux/hooks';

function EpisodeScreen() {
  const [searchText, setSearchText] = useState('');

  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.episode.data);
  const status = useSelector((state: RootState) => state.episode.status);
  const page = useSelector((state: RootState) => state.episode.page);
  const hasMore = useSelector((state: RootState) => state.episode.hasMore);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getEpisode({page, episode: searchText}));
    }
  }, [dispatch, status]);

  const handleLoadMore = () => {
    if (status === 'succeeded' && searchText === '' && hasMore) {
      dispatch(getEpisode({page, episode: searchText}));
    }
  };

  const handleSearchEpisode = (text: string) => {
    dispatch(getEpisode({page: 1, episode: text}));
    setSearchText(text);
  };

  return (
    <SafeAreaView style={style.container}>
      <Header title={'Episode'} />

      <Search
        placeholder={'Search Episode'}
        onTextChange={(text: string) => {
          handleSearchEpisode(text);
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
