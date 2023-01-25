import { IsCheckedFields, IsForm, IsFormValidation } from "../hooks/useForm";

export interface IsBudgetForm extends IsForm<string>{
	budget:string
}

export interface validField extends IsFormValidation<string> {
	budget: [(value:string)=>boolean , null | string],
}

export interface IsCheckField extends IsCheckedFields{
	budgetValid: string,

}