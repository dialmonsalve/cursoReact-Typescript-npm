import { IsCheckedFields, IsForm, IsFormValidation } from "../hooks/useForm";

//Interface to implement expense form
export interface IsExpenseForm extends IsForm<string>{
	name:string,
	amount:string,
	category:string,
}

//Interface to implement Validation in  expense form fields
export interface validFields extends IsFormValidation<string> {
	name: [(value:string)=>boolean , null | string],
	amount:[(value:string)=>boolean , null | string],
	category:[(value:string)=>boolean , null | string],
}

//Interface to implement the valid Fields on the expense form
export interface IsCheckFields extends IsCheckedFields{
	nameValid: string,
	amountValid:string,
	categoryValid: string,
}

