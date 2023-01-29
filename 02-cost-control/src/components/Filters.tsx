import { useContext, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Form, FormFieldsValidation, useForm } from "../hooks"

interface FormSelect extends Form<string>{
	category:string
}
interface CategoryFormValidFields extends FormFieldsValidation {
	category:[(value: string)=> boolean , null | string];
}

const formSelect:FormSelect = {
	category:''
}
const validFormSelect:CategoryFormValidFields={
	category: [(value:string)=> value.length > 0, 'Empty'],
}

export const Filters = () => {

	const [{ expenseState}, { }, { }, {onFilterExpense}] = useContext(ExpenseContext)

	const {
		category, onChangeForm, formValidation:{ }
	} = useForm(formSelect, validFormSelect)

	useEffect(() => {
		onFilterExpense(expenseState, category)

	}, [category])

	return (
		<div className="filtros sombra contenedor">
			<form >
				<div className="campo">
					<label>Filter expend</label>
					<select name="category" value={category} onChange={onChangeForm } >
            <option value="">All Categories</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscribes">Subscribes</option>
          </select>
				</div>
			</form>
		</div>
	)
}
