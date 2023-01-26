import { IsCheckedFields, IsForm, IsFormValidation } from "../hooks/useForm";

export interface IsBudgetForm extends IsForm{
	budget:string
}

export interface validField extends IsFormValidation {
	budget: [(value: string)=>boolean , null | string]
}

export interface IsCheckField extends IsCheckedFields{
	budgetValid: string,
}

