//@ts-check
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GlobalStyles} from '../constants/styles';

/**
 * @param {{
 * iconName:String,
 * size:number,
 * color:String
 * }}props
 */

export default function IconButton({iconName, onPress, size, color}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.root}>
        <Icon name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 8,

    borderRadius: 30,
  },
  pressed: {opacity: 0.7},
});
