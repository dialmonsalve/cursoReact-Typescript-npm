import { Form, FormErrorMessages,  FormFieldsValidation } from "../hooks/useForm";

//Interface to implement expense form
export interface ExpenseForm extends Form<string | number>{
	id:string,
	expenseName:string,
	amount:string | number,
	category:string,
}

//Interface to implement Validation in  expense form fields
export interface ExpenseFormValidFields extends FormFieldsValidation {
	expenseName: [(value: string)=> boolean , null | string];
	amount:[(value: number)=> boolean , null | string];
	category:[(value: string)=> boolean , null | string];
}

//Interface to implement the valid Fields on the expense form
export interface ErrorExpenseMessages extends FormErrorMessages{
	expenseNameValid: string,
	amountValid:string,
	categoryValid: string,
}

// Type of action for Reducer expense
export type ActionTypes =
	| { type: '[BUDGET Add budget]', payload: ExpenseForm }
	| { type: '[BUDGET Update budget]', payload: ExpenseForm }
	| { type: '[BUDGET Remove budget]', payload:string}

