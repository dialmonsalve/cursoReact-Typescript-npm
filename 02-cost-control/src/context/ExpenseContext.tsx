import { createContext } from "react";
import { IsExpenseForm } from "../interfaces";

type FormContextType={
	budget:number;
	isFormValid:boolean;
	addNewBudget(value:number, isFormValid:boolean):void;
	expenses:IsExpenseForm[],
	onAddExpense(expense:IsExpenseForm):void
}

const ValidForm: FormContextType ={
	budget:0,
	isFormValid:false,
	addNewBudget(e, isFormValid=false){},
	expenses:[{
		name: "",
		amount: "",
		category: ""
	}],
	onAddExpense(expense:IsExpenseForm){}

}

export const ExpenseContext = createContext<FormContextType>(ValidForm)