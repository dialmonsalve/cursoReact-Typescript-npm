import { ExpenseFormValidFields, ExpenseForm, } from "./ExpenseForm";

//Initial state of the Expense form
export const expenseForm: ExpenseForm = {
	expenseName: '',
	amount: '',
	category: '',
}

// Validation to Expense form
export const expenseFormValidation: ExpenseFormValidFields = {
	expenseName: [(value: string) => value?.length >= 1, "Field expense name is required"],
	amount: [(value: number) => value >= 1, "Field amount is required"],
	category: [(value: string) => value.length >= 1, "Field category is required"],
}
