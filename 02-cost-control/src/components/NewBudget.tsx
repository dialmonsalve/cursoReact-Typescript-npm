import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { Message } from "./Message"

export const NewBudget = () => {

	const {handleBuget, budget, handleChange, message} = useContext(FormContext)


	return (
		<div className="contenedor-presupuesto contenedor sombra">

			<form onSubmit={  handleBuget } className="formulario">
				<div className="campo">
					<label >Define your budget</label>

					<input
						className="nuevo-presupuesto" 
						type="number"
						placeholder="Add your budget"
						value={ budget }
						onChange={ handleChange }
						/>
				</div>
					<input type="submit" value="Add" />

					{message && <Message type="error">{ message }</Message>}
			</form>
			</div>
	)
}
