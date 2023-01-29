import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { Expense } from './Expense';


export const ExpenseList = () => {
  const [{ expenseState }, { }, { }, { expenseFiltered, isFiltered }] = useContext(ExpenseContext);

  return (
    <div className="listado-gastos contenedor">
    {
    isFiltered ? (
        <>
          <h2>{
            expenseFiltered.length ? "Expenses" : "No matches in this category"
            }
          </h2>
          {
            expenseFiltered.map(expense =>
              <Expense key={expense.id} expense={ expense }/>) 
          }
        </>
      ) : 
          <>
            <h2>{
              expenseState.length ? "Expenses" : "No expenses yet"
              }
            </h2>
            {
              expenseState.map((expense) => (
                <Expense key={expense.id} expense={ expense } />
                ))
            }
          </>
      }
    </div>
  );
};

