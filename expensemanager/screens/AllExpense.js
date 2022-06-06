import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Expenses from '../component/Expenses';
import {ExpensesContext} from '../store/expenses-context';

export default function AllExpense() {
  const context = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <Expenses
        periodName="Total"
        expenses={context.expenses}
        fallbackText="No expense found, Try adding some :)"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
});
