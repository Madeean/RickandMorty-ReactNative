import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import style from './EpisodeScreen.style.ts';
import Header from '../components/header/header.tsx';
import Search from '../components/search/Search.tsx';

function EpisodeScreen() {
  const [searchText, setSearchText] = useState('');
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
    </SafeAreaView>
  );
}

export default EpisodeScreen;
