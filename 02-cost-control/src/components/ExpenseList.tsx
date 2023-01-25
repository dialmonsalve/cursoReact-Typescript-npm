import { Expense } from './Expense'

type props={
	expenses:[]
}


export const ExpenseList = ({expenses}:props) => {
	return (
		<div className="listado-gastos contenedor">
			<h2>{expenses.length ?  'Expenses': "No expenses yet"}</h2>

			{
				expenses.map(expense =>(
					<Expense
						key={expense.id}
						expense={expense}
					/>
				))
			}

		</div>
	)
}
