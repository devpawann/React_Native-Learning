import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Expenses from '../component/Expenses';
import {ExpensesContext} from '../store/expenses-context';
import {fetchExpensesFromFirebase} from '../api/api';
import LoadingIndicator from '../component/LoadingIndicator';

export default function RecentExpense() {
  const context = useContext(ExpensesContext);

  const recentExpense = context.expenses.filter(expense => {
    const date7DaysAgo = getDateDaysAgo(new Date(), 7);
    return expense.date > date7DaysAgo;
  });

  useEffect(() => {
    async function get() {
      setIsLoading(true);
      const fe = await fetchExpensesFromFirebase();
      context.setExpense(fe);
      setIsLoading(false);
    }
    get();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <Expenses
        periodName="Recent Expenses"
        expenses={recentExpense}
        fallbackText="No Recent Expenses found, try adding some :)"
      />
    </View>
  );
}

function getDateDaysAgo(date, day) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDay() - day);
}
const styles = StyleSheet.create({container: {flex: 1}});
