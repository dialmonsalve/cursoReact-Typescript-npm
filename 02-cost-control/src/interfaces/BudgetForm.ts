import { Form, FormErrorMessages,  FormFieldsValidation } from "../hooks/useForm";

export interface BudgetForm extends Form<number>{
	budget:number,
}

export interface BudgetFormValidField extends FormFieldsValidation {
	budget: [(value: number)=>boolean , null | string]
}

export interface ErrorBudgetMessage extends FormErrorMessages{
	budgetValid: string,
}

