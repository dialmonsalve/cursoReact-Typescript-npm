import { useReducer, useState } from "react"
import { ActionTypes, IsExpenseForm } from "../interfaces"
import { expenseReducer } from "./expenseReducer"
import { ExpenseContext } from "./ExpenseContext"
import { formatDate, generateId } from "../helpers"

type props={
	children: JSX.Element | JSX.Element[],
}

export const FormProvider = ({children}:props) => {

	//Controlls the expenses form
	const [expenses, dispatch] = useReducer(expenseReducer, [],)

	const onAddExpense = (expense:IsExpenseForm)=>{
		const date =  new Date().getTime().toString()

		const action:ActionTypes = {
			type:'[BUDGET Add budget]',
			payload:{...expense, id:generateId(), date: formatDate(date)}
		}

		dispatch(action)
	}

	//Controlls the budget form
	const [budget, setBudget] = useState(0)
	const [isFormValid, setIsFormValid] = useState(false)

	const addNewBudget =(budget:number, isFormValid:boolean) =>{

		setBudget(budget);
		setIsFormValid(isFormValid)
	}

	return (
		<ExpenseContext.Provider value={ { 
				budget, 
				isFormValid, 
				expenses , 
				addNewBudget, 
				onAddExpense
			}}>
			{children}
		</ExpenseContext.Provider>
	)
}
