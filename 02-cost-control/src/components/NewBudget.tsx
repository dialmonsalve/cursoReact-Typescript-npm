import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { Message } from "../helpers/Message"
import { useForm } from "../hooks/useForm"
import { IsBudgetForm, validField } from "../interfaces"

const expenseForm:IsBudgetForm = {
	budget: ""
}

const validForm: validField = {
	budget: [(value: string) => Number(value) >= 1, "The field has an invalid budget"],
}

export const NewBudget = () => {

	const { budget, budgetValid, handleChange, isFormValid } = useForm<IsBudgetForm, validField>(expenseForm, validForm)

	
	const {handleBuget,  message} = useContext(FormContext)


	return (
		<div className="contenedor-presupuesto contenedor sombra">

			<form onSubmit={  handleBuget } className="formulario">
				<div className="campo">
					<label >Define your budget</label>

					<input
						className="nuevo-presupuesto" 
						type="number"
						placeholder="Add your budget"
						name="budget"
						value={ budget }
						onChange={ handleChange }
						/>
				</div>
					<input type="submit" value="Add" />

					{budgetValid && <Message type="error">{ budgetValid }</Message>}
			</form>
			</div>
	)
}
