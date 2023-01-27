import { createContext, useReducer } from 'react';
import { ActionTypes, ExpenseForm } from '../interfaces';

type FormContextType = {
  budget: number;
  isFormValid: boolean;
  addNewBudget(value: number, isFormValid: boolean): void;
  expenseState: ExpenseForm[];
  onAddExpense(expense: ExpenseForm, amount:number): void;
  onUpdateExpense(expense: ExpenseForm): void;
  onRemoveExpense(id: string): void;
  onEditExpenseForm(expense: ExpenseForm):void
};

const ValidForm: FormContextType = {
  budget: 0,
  isFormValid: false,
  addNewBudget(e, isFormValid = false) {},
  expenseState: [
    {
      id:'',
      expenseName: '',
      amount: '',
      category: '',
    },
  ],
  onAddExpense(expense: ExpenseForm, amount:number) {},
  onUpdateExpense(expense: ExpenseForm) {},
  onRemoveExpense(id: string) {},
  onEditExpenseForm(expense: ExpenseForm) {},
};

export const ExpenseContext = createContext<FormContextType>(ValidForm);
