import { useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { BudgetForm, BudgetFormValidField } from "../interfaces";
import { useForm } from "../hooks/useForm";
import { Message } from "../helpers/Message";

const expenseForm: BudgetForm = {
  budget: localStorage.getItem('budget') ?? '',
};

const budgetFormValidation: BudgetFormValidField = {
  budget: [
    (value: number) => value >= 1,
    "The field has an invalid budget",
  ],
};

export const NewBudget = () => {
  const [{  }, { addNewBudget }, ]= useContext(ExpenseContext);

  const {
    budget,
    formValidation: { budgetValid },
    onChangeForm,
    onResetForm,
    isFormValid,
    formSubmitted,
    onFormSubmitted,
  } = useForm(expenseForm, budgetFormValidation);

  useEffect(() => {
    
    localStorage.setItem('budget', budget.toString())  
	
  }, [budget])

  const onNewBudget = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      onFormSubmitted(true);
      return;
    }

    addNewBudget(Number(budget), isFormValid);
    onResetForm();
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={onNewBudget} className="formulario">
        <div className="campo">
          <label>Define your budget</label>

          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Add your budget"
            name="budget"
            value={budget}
            onChange={onChangeForm}
          />
        </div>
        <input type="submit" value="Add" />

        {formSubmitted && budgetValid && (
          <Message type="error">{budgetValid}</Message>
        )}
      </form>
    </div>
  );
};
