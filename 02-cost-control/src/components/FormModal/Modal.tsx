import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { ExpenseContext } from '../../context/ExpenseContext';

import { expenseForm, expenseFormValidation } from "../../interfaces";

import { Message } from "../../helpers/Message";
import closeBtn from "../../assets/cerrar.svg";

type props = {
  animateModal: boolean;
  setModal(modal: boolean): void;
  setAnimateModal(modal: boolean): void;
};

export const Modal = ({ animateModal, setModal, setAnimateModal }: props) => {
  const { onAddExpense } = useContext(ExpenseContext);

  const {
    formState,
    expenseName,
    amount,
    category,
    onChangeForm,
    onResetForm,
    onFormSubmitted,
    formValidation: { amountValid, expenseNameValid, categoryValid },
    isFormValid,
    formSubmitted,
  } = useForm(expenseForm, expenseFormValidation);

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      onFormSubmitted(true);
      return;
    }

    onAddExpense({...formState}, Number(amount));
    onResetForm();

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={closeBtn} alt="Close Modal" onClick={hideModal} />
      </div>
      <form
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
        onSubmit={onSubmit}
      >
        <legend>New expense</legend>

        <div className="campo">
          <label htmlFor="campo">Name Expense</label>
          <input
            id="campo"
            type="text"
            placeholder="Add the expense name"
            value={expenseName}
            name="expenseName"
            onChange={onChangeForm}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Amount</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Add your expense amount eg:200"
            name="amount"
            value={ amount}
            onChange={onChangeForm}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Category</label>
          <select
            id="categoria"
            name="category"
            value={category}
            onChange={onChangeForm}
          >
            <option value="">---Select---</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscribes">Subscribes</option>
          </select>
        </div>

        <input type="submit" value="Add Expense" />
        <div className="alertas">
          {formSubmitted && expenseNameValid && (
            <Message type="error">{expenseNameValid}</Message>
          )}
          {formSubmitted && amountValid && (
            <Message type="error">{amountValid}</Message>
          )}
          {formSubmitted && categoryValid && (
            <Message type="error">{categoryValid}</Message>
          )}
        </div>
      </form>
    </div>
  );
};
