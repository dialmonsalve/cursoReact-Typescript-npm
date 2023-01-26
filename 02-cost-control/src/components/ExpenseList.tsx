import { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { Expense } from './Expense'

export const ExpenseList = () => {

	const {expenses} = useContext(ExpenseContext)


	return (
		<div className="listado-gastos contenedor">
			<h2>{expenses.length ?  'Expenses': "No expenses yet"}</h2>

			{
				expenses.map(expense =>(
					<Expense
						key={ expense.id }
						expense={ expense }
					/>
				))
			}

		</div>
	)
}
