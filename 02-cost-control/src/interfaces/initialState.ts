import { IsFormValidation } from "../hooks/useForm";
import { IsExpenseForm } from "./isExpenseForm";


//Initial state Expense form
export const expenseForm:IsExpenseForm = {
	name:'',
	amount:'',
	category:'',
}

// Validation to Expense form
export const validForm: IsFormValidation = {
	name: [(value:string) => value?.length >= 1, "Field name is requiered"],
	amount: [(value:string) => Number(value) >= 1, "Field amount is requiered"],
	category: [(value:string) => value.length>= 1, "Field amount is requiered"],
}

// Type of action for Reducer expense
export type ActionTypes =
|{type: '[BUDGET Add budget]', payload:IsExpenseForm}
|{type: '[BUDGET Update budget]', payload:IsExpenseForm}
|{type: '[BUDGET Remove budget]'}