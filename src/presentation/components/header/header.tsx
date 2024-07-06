import {Text, View} from 'react-native';
import React from 'react';
import style from './Header.style.ts';

type HeaderProps = {
  title: string;
};

function header({title}: HeaderProps) {
  return (
    <View style={style.headerContainer}>
      <Text style={style.headerText}>{title}</Text>
    </View>
  );
}
export default header;
