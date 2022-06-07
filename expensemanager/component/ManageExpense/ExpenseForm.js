//@ts-check
import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from './input';
import CustomButton from '../CustomButton';
import ExpenseModel from '../../models/ExpenseModel';

/**
 * @param {{
 * btnLabel:String,
 * cancelHandler:()=>void,
 * defaultExpense:ExpenseModel
 * }} props
 */

export default function ExpenseForm({
  cancelHandler,
  btnLabel,
  submitHandler,
  defaultExpense,
}) {
  const [inputValue, setInputValue] = useState({
    Amt: {
      value: defaultExpense?.amount.toString() || '',
      isValid: true,
    },
    Date: {
      value: defaultExpense?.date.toISOString().slice(0, 10) || '',
      isValid: true,
    },
    Title: {value: defaultExpense?.title || '', isValid: true},
  });

  function inputChangeHandler(identifier, enteredAmount) {
    setInputValue(currentInput => {
      return {
        ...currentInput,
        [identifier]: {value: enteredAmount, isValid: true},
      };
    });
  }

  return (
    <View>
      <View style={styles.inputRow}>
        <CustomInput
          isValid={inputValue.Amt.isValid}
          style={styles.rowInput}
          label={inputValue.Amt.isValid ? 'Amount' : 'Err'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, InputIdentifier.AMOUNT),
            value: inputValue[InputIdentifier.AMOUNT].value,
          }}
        />
        <CustomInput
          isValid={inputValue.Date.isValid}
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, InputIdentifier.DATE),
            value: inputValue[InputIdentifier.DATE].value,
          }}
        />
      </View>
      <CustomInput
        isValid={inputValue.Title.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, InputIdentifier.TITLE),
          value: inputValue[InputIdentifier.TITLE].value,
        }}
      />
      <View style={styles.btnRow}>
        <CustomButton
          style={styles.btn}
          btnLabel="Cancel"
          onPress={cancelHandler}
          mode="flat"
        />
        {/*Submit or update btn*/}
        <CustomButton
          style={styles.btn}
          btnLabel={btnLabel}
          onPress={() => {
            console.log(inputValue.Date.value);
            const amountIsValid =
              !isNaN(inputValue[InputIdentifier.AMOUNT].value) &&
              inputValue[InputIdentifier.AMOUNT].value > 0;

            const dateIsValid =
              new Date(inputValue[InputIdentifier.DATE].value).toString() !==
              'Invalid Date';

            const titleIsValid =
              inputValue[InputIdentifier.TITLE].value.trim().length > 0;

            if (amountIsValid && dateIsValid && titleIsValid) {
              const expenseModel = new ExpenseModel(
                defaultExpense?.id,
                inputValue[InputIdentifier.TITLE].value,
                +inputValue[InputIdentifier.AMOUNT].value,
                new Date(inputValue[InputIdentifier.DATE].value),
              );
              console.log(expenseModel);
              submitHandler(expenseModel);
            } else {
              setInputValue(currentValue => {
                return {
                  Amt: {value: currentValue.Amt.value, isValid: amountIsValid},
                  Date: {value: currentValue.Date.value, isValid: dateIsValid},
                  Title: {
                    value: currentValue.Title.value,
                    isValid: titleIsValid,
                  },
                };
              });
            }
          }}
        />
      </View>
    </View>
  );
}
const InputIdentifier = {AMOUNT: 'Amt', DATE: 'Date', TITLE: 'Title'};

const styles = StyleSheet.create({
  inputRow: {flexDirection: 'row', justifyContent: 'space-around'},
  rowInput: {flex: 1},
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {minWidth: 120, marginHorizontal: 8},
});
