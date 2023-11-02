import {View, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchbar = ({placeholder, onChangeText}) => {
  return (
    <View style={[Styles.container]}>
      <TextInput
        style={Styles.textInput}
        numberOfLines={1}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#707070"
      />
      <View>
        <Icon name="search" size={13} color="#00000066" />
      </View>
    </View>
  );
};

export default Searchbar;
