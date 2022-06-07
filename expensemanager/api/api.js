import ExpenseModel from '../models/ExpenseModel';
import axios from 'axios';
import {FIREBASE_BASE_URL} from '../secret_keys/keys';

export async function insertExpenseToFirebase(expense: ExpenseModel) {
  const response = await axios.post(
    FIREBASE_BASE_URL + 'expense.json',
    expense.toJson(),
  );
  return response.data.name;
}

export async function fetchExpensesFromFirebase() {
  const response = await axios.get(FIREBASE_BASE_URL + 'expense.json');
  const fetchedExpenses = [];

  for (const key in response.data) {
    const newExpense = new ExpenseModel(
      key,
      response.data[key].title,
      response.data[key].amount,
      new Date(response.data[key].date),
    );
    fetchedExpenses.push(newExpense);
  }
  return fetchedExpenses;
}

export function updateExpenseOnFirebase(expenseModel: ExpenseModel) {
  return axios.put(
    FIREBASE_BASE_URL + 'expense/' + expenseModel.id + '.json',
    expenseModel.toJson(),
  );
}
export function deleteExpenseFromFirebase(expenseId) {
  return axios.delete(FIREBASE_BASE_URL + 'expense/' + expenseId + '.json');
}
