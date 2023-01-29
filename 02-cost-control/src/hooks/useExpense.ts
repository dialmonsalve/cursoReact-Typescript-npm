import { useEffect, useReducer } from 'react'
import { expenseReducer } from '../context/expenseReducer';
import { formatDate, generateId } from '../helpers';
import { ActionTypes, expenseForm, ExpenseForm } from '../interfaces';
import { useEditExpenseForm } from './useEditExpenseForm';

const init = () => {
  const value = localStorage.getItem('expenses')

  if (typeof value === 'string') {
    const expenses = JSON.parse(value)
    return expenses
  }
  return []
}
export const useExpense = () => {

	const [expenseState, dispatch] = useReducer(expenseReducer, expenseForm, init);
  const { onEditExpenseForm, stateEditExpenseForm } = useEditExpenseForm();

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenseState));
  }, [expenseState]);

  const onAddExpense = (expense: ExpenseForm) => {  
    const { amount } = expense
    const date = new Date().getTime()

    const actions: ActionTypes = {
      type: '[BUDGET Add budget]',
      payload: {
        ...expense, 
        date: formatDate(date), amount:Number(amount),
        id:generateId()
      },
    };
    dispatch(actions);
  };

  const onUpdateExpense = (expense: ExpenseForm) => {
    const { amount } = expense
    const date = new Date().getTime();

    const actions: ActionTypes = {
      type: '[BUDGET Update budget]',
      payload: { 
        ...expense, 
        date: formatDate(date), amount:Number(amount), id:expense.id
      }
    }
    dispatch(actions)
  }

  const onRemoveExpense = (id: string) => {
    dispatch({
      type: '[BUDGET Remove budget]',
      payload: id
    })
  }

  const onRemoveAllExpenses = ()=>{
    dispatch({
      type:'[BUDGET RemoveAll budget]'
    })
  }
  return {
    expenseState,
    onAddExpense,
    onUpdateExpense,
    onRemoveExpense,
    onRemoveAllExpenses,

    stateEditExpenseForm,
    onEditExpenseForm
	}	
}
