import {FlatList, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/header/header.tsx';
import Search from '../components/search/Search.tsx';
import EpisodeItemView from '../components/itemview/episode/EpisodeItemView.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store.ts';
import {getEpisode} from '../../redux/slices/EpisodeSlice.ts';
import {style} from './EpisodeScreen.style.ts';

function EpisodeScreen() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    (state: RootState) => state.episode,
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getEpisode(page));
  }, [page]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

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

      {data ? (
        <>
          <FlatList
            data={data}
            renderItem={({item}) => <EpisodeItemView data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      ) : (
        <Text>User not found</Text>
      )}
    </SafeAreaView>
  );
}

export default EpisodeScreen;
