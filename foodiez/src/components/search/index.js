import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';

function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.design_text_input} 
        placeholder="Search" />

      <TouchableOpacity >
        <Icon 
            style ={styles.design_icon_search}
            name="search1" type="AntDesign"
         />
      </TouchableOpacity>
    </View>

  );
}
export default SearchBar;
