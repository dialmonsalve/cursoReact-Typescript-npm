import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Expense } from './Expense';

export const ExpenseList = () => {
  const { expenseState } = useContext(ExpenseContext);

  return (
    <div className="listado-gastos contenedor">
      <h2>{expenseState.length ? "Expenses" : "No expenses yet"}</h2>

      {expenseState.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

