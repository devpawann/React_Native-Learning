import {createContext, useReducer} from 'react';
import {DUMMY_EXPENSE} from '../constants/dummy';
import React from 'react';

const ACTION = {
  ADD: 'Add',
  UPDATE: 'Update',
  DELETE: 'Delete',
};

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: expense => {},
  deleteExpense: id => {},
  updateExpense: expense => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case ACTION.ADD:
      return [action.payload, ...state];

    case ACTION.DELETE:
      return state.filter(expense => {
        return expense.id !== action.payload;
      });

    case ACTION.UPDATE:
      const updatableItemIndex = state.findIndex(
        e => e.id === action.payload.id,
      );
      const updatedItem = action.payload;
      const updatedState = [...state];
      updatedState[updatableItemIndex] = updatedItem;
      return updatedState;

    default:
      return state;
  }
}

export default function ExpensesContextProvider({children}) {
  const [state, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSE);

  function addExpense(expenseData) {
    dispatch({type: ACTION.ADD, payload: expenseData});
  }
  function updateExpense(expenseData) {
    dispatch({type: ACTION.UPDATE, payload: expenseData});
  }
  function deleteExpense(id) {
    dispatch({type: ACTION.DELETE, payload: id});
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
