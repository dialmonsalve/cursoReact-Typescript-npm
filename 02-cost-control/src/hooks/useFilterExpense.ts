import { useState } from 'react'
import { ExpenseForm, expenseForm } from '../interfaces'

export const useFilterExpense = () => {

	const [expenseFiltered, setExpenseFiltered] = useState([expenseForm])
	const [isFiltered, setFiltered] = useState(false)

	const onFilterExpense = (expenseState:ExpenseForm[], category:string )=>{

		const expenseFilter = expenseState.filter(expense => expense.category === category)

		setExpenseFiltered( expenseFilter )

		if (expenseFilter.length ===0 && category === ""){		
			setFiltered(false)	
		}	else if(expenseFilter.length > 0 && category !== ""){
			setFiltered(true)
		}else{
			setFiltered(true)
		}
		
		if(expenseFilter.length < 1){
			setExpenseFiltered([])
		}
	}

	return {
		expenseFiltered,
		isFiltered,
    onFilterExpense,
	}
}
