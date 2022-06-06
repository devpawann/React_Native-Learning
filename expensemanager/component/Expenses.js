import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ExpensesList from './ExpensesList';
import {DUMMY_EXPENSE} from '../constants/dummy';
import ExpensesSummary from './ExpensesSummary';
import {GlobalStyles} from '../constants/styles';

export default function Expenses({periodName, expenses, fallbackText}) {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 24,
    flex: 1,
  },
  fallbackText: {color: 'white', textAlign: 'center', marginTop: 24},
});
