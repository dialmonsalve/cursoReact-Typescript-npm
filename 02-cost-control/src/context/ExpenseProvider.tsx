
import { ExpenseContext } from './ExpenseContext';
import { useFormBudget } from '../hooks';
import { useExpense } from '../hooks/useExpense';
import { useFilterExpense } from '../hooks/useFilterExpense';

type props = {
  children: JSX.Element | JSX.Element[];
};

export const ExpenseProvider = ({ children }: props) => {

  const { 
    expenseState, onAddExpense, onUpdateExpense, onRemoveExpense, 
    stateEditExpenseForm, onEditExpenseForm, onRemoveAllExpenses } = useExpense();
  
  const { budget, isFormValid, addNewBudget, onRemoveBudget } = useFormBudget();

  const {expenseFiltered,  onFilterExpense, isFiltered} = useFilterExpense()

  return (
    <ExpenseContext.Provider
      value={[{
        expenseState,
        onAddExpense,
        onUpdateExpense,
        onRemoveExpense,
        onRemoveAllExpenses,
        onEditExpenseForm,        
      },
      {
        budget,
        isFormValid,
        addNewBudget,
        onRemoveBudget,
      },
      {
        stateEditExpenseForm,
      },
      {
        expenseFiltered,
        onFilterExpense,
        isFiltered
      }
    ]}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
