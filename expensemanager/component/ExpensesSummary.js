//@ts-check
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';

/**
 * @param  {{
 *  expense:ExpenseModel,
 *  periodName:String
 * }} props
 */

export default function ExpensesSummary({expenses, periodName}) {
  const expenseTotal = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{periodName}</Text>
      <Text style={styles.price}>{expenseTotal.toFixed(2)}$</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  title: {
    fontSize: 12,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
