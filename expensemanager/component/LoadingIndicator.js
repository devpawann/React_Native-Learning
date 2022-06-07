//@ts-check
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';

/**
 * @param {{
 * }}props
 */

export default function LoadingIndicator() {
  return (
    <View style={styles.root}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
