import { useState } from 'react'
import { expenseForm, ExpenseForm } from '../interfaces'

export const useEditExpenseForm = () => {

	const [stateEditExpenseForm, setStateEditExpenseForm] = useState<ExpenseForm>(expenseForm)

	const onEditExpenseForm = (expense: ExpenseForm) =>{

		setStateEditExpenseForm(expense);
  }
	return {
		onEditExpenseForm,
		stateEditExpenseForm
	}
}
