import { createContext } from 'react';
import { expenseForm, ExpenseForm } from '../interfaces';

type expenseContextType ={
  expenseState: ExpenseForm[];
  onAddExpense(expense: ExpenseForm): void;
  onUpdateExpense(expense: ExpenseForm): void;
  onRemoveExpense(id: string): void;
  onRemoveAllExpenses():void;
  onEditExpenseForm(expense: ExpenseForm):void;
}
const expenseFormState:expenseContextType ={
  expenseState: [expenseForm],
  onAddExpense(expense: ExpenseForm) {},
  onUpdateExpense(expense: ExpenseForm) {},
  onRemoveExpense(id: string) {},
  onRemoveAllExpenses() {},
  onEditExpenseForm(expense: ExpenseForm) {},
}

type BudgetContextType = {
  budget: number;
  isFormValid: boolean;
  addNewBudget(value: number, isFormValid: boolean): void;
  onRemoveBudget():void
};
const budgetForm: BudgetContextType = {
  budget: 0,
  isFormValid: false,
  addNewBudget(e, isFormValid = false) {},
  onRemoveBudget() {},
};

type StateEditExpenseType= {
  stateEditExpenseForm:ExpenseForm,
}
const stateEditExpense:StateEditExpenseType ={
  stateEditExpenseForm:{ id:'', expenseName: '',amount: '',category: '', date:''},
}

type Filter = {
  expenseFiltered:ExpenseForm[];
  onFilterExpense(expensesFiltered: ExpenseForm[],category: string):void;
  isFiltered:boolean;
}

const FilterExpense:Filter={
  expenseFiltered:  [expenseForm],
  isFiltered:false,
  onFilterExpense(expensesFiltered: ExpenseForm[],category: string){},
}

export const ExpenseContext = createContext<[
  expenseContextType,BudgetContextType, StateEditExpenseType, Filter
]>( [expenseFormState, budgetForm, stateEditExpense, FilterExpense] );