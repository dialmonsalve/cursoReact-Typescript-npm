import { Form, FormErrorMessages,  FormFieldsValidation } from "../hooks/useForm";

export interface BudgetForm extends Form<string>{
	budget:string,
}

export interface BudgetFormValidField extends FormFieldsValidation {
	budget: [(value: number)=>boolean , null | string]
}

export interface ErrorBudgetMessage extends FormErrorMessages{
	budgetValid: string,
}

