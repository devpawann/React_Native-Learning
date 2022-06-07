import {createContext, useReducer} from 'react';
import React from 'react';

const ACTION = {
  ADD: 'Add',
  UPDATE: 'Update',
  DELETE: 'Delete',
  SET: 'Set',
};

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: expense => {},
  deleteExpense: id => {},
  updateExpense: expense => {},
  setExpense: expenses => {},
});

/**
 * Dispatcher calls reducer with action
 * Based on action and current state Reducer throws new Fresh State
 */

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

    case ACTION.SET:
      return action.payload.reverse();

    default:
      return state;
  }
}

export default function ExpensesContextProvider({children}) {
  const [state, dispatch] = useReducer(expenseReducer, []);

  function addExpense(expenseData) {
    dispatch({type: ACTION.ADD, payload: expenseData});
  }

  function updateExpense(expenseData) {
    dispatch({type: ACTION.UPDATE, payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: ACTION.DELETE, payload: id});
  }

  function setExpense(expenses) {
    dispatch({type: ACTION.SET, payload: expenses});
  }

  const value = {
    expenses: state,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpense: setExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
