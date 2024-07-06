import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import style from './Search.style.ts';

type SearchProps = {
  placeholder: string;
  onTextChange: (text: string) => void;
};

function Search({placeholder, onTextChange}: SearchProps) {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);

  const handleSubmitEditing = () => {
    onTextChange(search);
  };

  return (
    <View style={style.searchEpisodeContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <TextInput
        returnKeyType="search"
        value={search}
        ref={textInputRef}
        style={style.searchEpisodeTextInput}
        placeholder={placeholder}
        onChangeText={value => setSearch(value)}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

export default Search;
