import { useContext, useState } from 'react';

import { Modal } from './FormModal/Modal';
import { ExpenseContext } from '../context/ExpenseContext';
import { ExpenseList } from './ExpenseList';
import { NewBudget } from './NewBudget';
import { BudgeController } from './BudgeController';

import IconExpense from "../assets/nuevo-gasto.svg";

export const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [animateModal, setAnimateModal] = useState(false);

  const { isFormValid } = useContext(ExpenseContext);

  const onNewSpend = () => {
    setModal(true);

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
          /* saveExpense = {saveExpense} */
        />
      )}
    </header>
  );
};
