import { useEffect, useReducer, useState } from 'react';

import { ExpenseContext } from './ExpenseContext';
import { expenseReducer } from './expenseReducer';
import { ActionTypes, ExpenseForm } from '../interfaces';
import { formatDate, generateId } from '../helpers';
import { useFormBudget } from '../hooks';

type props = {
  children: JSX.Element | JSX.Element[];
};

const init = () => {
  const value = localStorage.getItem('expenses')

  if (typeof value === 'string') {
    const expenses = JSON.parse(value)
    return expenses
  }
  return []

}

export const ExpenseProvider = ({ children }: props) => {

  const { budget, isFormValid, addNewBudget } = useFormBudget()

  const [expenseState, dispatch] = useReducer(expenseReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenseState))
  }, [expenseState])

  const onAddExpense = (expense: ExpenseForm, amount: number) => {

    const date = new Date().getTime()
    const { amount: deletedString, ...newExpense } = expense

    const actions: ActionTypes = {
      type: '[BUDGET Add budget]',
      payload: { ...newExpense, id: generateId(), date: formatDate(date), amount },
    };

    dispatch(actions);
  };

  const onUpdateExpense = (expense: ExpenseForm) => {
    const date = new Date().getTime().toString();

    const actions: ActionTypes = {
      type: '[BUDGET Update budget]',
      payload: { ...expense, date }
    }
    dispatch(actions)
  }
  const onRemoveExpense = (id: string) => {
    dispatch({
      type: '[BUDGET Remove budget]',
      payload: id
    })
  }

  const onEditExpenseForm = (expense: ExpenseForm) =>{


    console.log(expense)
  }

  return (
    <ExpenseContext.Provider
      value={{
        budget,
        isFormValid,
        expenseState,
        addNewBudget,
        onAddExpense,
        onUpdateExpense,
        onRemoveExpense,
        onEditExpenseForm
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
