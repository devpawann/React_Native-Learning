//@ts-check
import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';

/**
 * @param {{
 * label:String,
 * textInputConfig:Object,
 * style:Object,
 * isValid:boolean
 * }}props
 */

export default function CustomInput({label, textInputConfig, style, isValid}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={isValid ? styles.label : styles.inValidLabel}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          styles.input,
          textInputConfig.multiline && styles.inputMultiline,
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 14,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inValidLabel: {
    color: GlobalStyles.colors.error500,
  },
});
