import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import IconButton from '../component/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContext} from '../store/expenses-context';
import ExpenseForm from '../component/ManageExpense/ExpenseForm';

export default function ManageExpense({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditingMode = !!editedExpenseId;
  const context = useContext(ExpensesContext);
  const SelectedExpenseToEdit = context.expenses.find(expense => {
    return expense.id === editedExpenseId;
  });

  useEffect(() => {
    navigation.setOptions({
      title: isEditingMode ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditingMode]);

  function deleteExpenseHandler() {
    context.deleteExpense(editedExpenseId);
    closeSheet();
  }
  function cancelExpenseHandler() {
    closeSheet();
  }
  function confirmExpenseHandler(expense) {
    if (isEditingMode) {
      context.updateExpense(expense);
    } else {
      context.addExpense(expense);
    }

    closeSheet();
  }
  function closeSheet() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        btnLabel={isEditingMode ? 'Update' : 'Confirm'}
        cancelHandler={cancelExpenseHandler}
        submitHandler={confirmExpenseHandler}
        defaultExpense={SelectedExpenseToEdit}
      />

      {isEditingMode && (
        <View style={styles.trashContainer}>
          <IconButton
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {minWidth: 120, marginHorizontal: 8},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },
  trashContainer: {
    borderTopWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    paddingTop: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
