//@ts-check
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../constants/styles';
import {useNavigation} from '@react-navigation/native';

/**
 * @param {{
 * item:ExpenseModel
 * }}props
 */

export default function ItemExpenses({item}) {
  const navigation = useNavigation();

  function ExpensePressHandler() {
    navigation.navigate('ManageExpenseScreen', {expenseId: item.id});
  }
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={ExpensePressHandler}>
      <View style={styles.root}>
        <View>
          <Text style={[styles.baseText, styles.descText]}>{item.title}</Text>
          <Text style={styles.baseText}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function getFormattedDate(date) {
  return `${date?.getFullYear()}-${date?.getMonth() + 1}-${date?.getDate()}`;
}

const styles = StyleSheet.create({
  pressed: {opacity: 0.7},
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    borderRadius: 8,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 8,
  },
  amountContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  baseText: {color: GlobalStyles.colors.primary50},
  descText: {fontWeight: 'bold'},
});
