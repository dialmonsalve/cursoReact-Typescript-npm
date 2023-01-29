import { useContext, useEffect, useState } from 'react';

import { Modal } from './FormModal/Modal';
import { ExpenseContext } from '../context/ExpenseContext';
import { ExpenseList } from './ExpenseList';
import { NewBudget } from './NewBudget';
import { BudgeController } from './BudgeController';

import IconExpense from "../assets/nuevo-gasto.svg";
import { expenseForm } from '../interfaces';
import { Filters } from './Filters';

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [
    { onEditExpenseForm, onRemoveExpense}, 
    { isFormValid },
    { stateEditExpenseForm }
  ] = useContext(ExpenseContext);

  useEffect(() => {

    //!This is an alternate method for using setTimeout to call multiple functions after a specified time period.
    /* const functionOne =()=>{
      setModal(true);
    }
    const functionTwo =()=>{
      setAnimateModal(true);
    }
    const functions = [functionOne, functionTwo]
    let i = 0
    const execute = ()=>{
      functions[i]();
      i++
      if(i< functions.length){
        setTimeout(execute, 500);
      }
    }
    setTimeout(execute, 800) *///!End of the function

    

    if(!stateEditExpenseForm.id) return
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }, [stateEditExpenseForm])

  const onNewSpend = () => {
    setModal(true);
    onEditExpenseForm(expenseForm);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  return (
    <header className={modal ? "fijar" : ""}>
      <h1>Expense planner</h1>

      {isFormValid ? <BudgeController /> : <NewBudget />}

      {isFormValid && (
        <>
          <main>
            <Filters/>
            <ExpenseList />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconExpense}
              alt="Ico new sped"
              onClick={onNewSpend}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </header>
  );
};

