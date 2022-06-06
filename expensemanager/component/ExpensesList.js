//@ts-check

import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ItemExpenses from './ItemExpenses';

function renderExpenseItem(item) {
  return <ItemExpenses item={item.item} />;
}

export default function ExpensesList({expenses}) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
