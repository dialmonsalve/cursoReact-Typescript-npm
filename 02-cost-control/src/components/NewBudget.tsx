import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { Message } from "../helpers/Message"
import { useForm } from "../hooks/useForm"
import { IsBudgetForm, validField } from "../interfaces"

const expenseForm:IsBudgetForm = {
	budget: '',
}

const validForm: validField = {
	budget: [(value:string) => Number(value) >= 1, "The field has an invalid budget"],
}

export const NewBudget = () => {

	const { addNewBudget } = useContext(ExpenseContext)

	const { 
		budget ,formValidation:{ budgetValid } , onChangeForm, onResetForm,  isFormValid,
		formSubmitted, onFormSubmitted } = useForm(expenseForm, validForm)

	const onNewBuget = (e:React.FormEvent< HTMLFormElement>) =>{
		e.preventDefault();

		if( !isFormValid ){
			onFormSubmitted(true)
			return
		}

		addNewBudget(Number( budget ), isFormValid)
		onResetForm()

	}

	return (
		<div className="contenedor-presupuesto contenedor sombra">

			<form onSubmit={ onNewBuget } className="formulario">
				<div className="campo">
					<label >Define your budget</label>

					<input
						className="nuevo-presupuesto" 
						type="number"
						placeholder="Add your budget"
						name="budget"
						value={ budget }
						onChange={ onChangeForm }
						/>
				</div>
					<input type="submit" value="Add" />

					{ formSubmitted && budgetValid&& <Message type="error">{ budgetValid }</Message>}
			</form>
			</div>
	)
}
