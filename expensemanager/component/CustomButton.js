//@ts-check
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';

/**
 * @param {{
 * btnLabel:String,
 * mode:String
 * }}props
 */

export default function CustomButton({btnLabel, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.btnCommon, mode === 'flat' && styles.flatButton]}>
          <Text
            style={[styles.commonLabel, mode === 'flat' && styles.flatLabel]}>
            {btnLabel}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
  btnCommon: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 8,
    borderRadius: 4,
  },
  flatButton: {backgroundColor: 'transparent'},
  commonLabel: {color: 'white', textAlign: 'center'},
  flatLabel: {color: GlobalStyles.colors.primary200},
});
