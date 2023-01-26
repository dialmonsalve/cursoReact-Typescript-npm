import  { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

export const BudgeController = () => {

	const { budget } = useContext( ExpenseContext )


	const formatCant = (cant:number)=>{
		return cant.toLocaleString('en-US',{
			style:'currency',
			currency:'USD'
		})
	}

	return (
		<div className='contenedor-presupuesto contenedor sombra dos-columnas'>
			<div>
				<p>Grafica aqui</p>
			</div>

			<div className='contenido-presupuesto'>
				<p>
					<span>Budget: </span>{ formatCant(budget) }
				</p>

				<p>
					<span>Avalaible: </span>{ formatCant(0) }
				</p>

				<p>
					<span>Expends: </span>{ formatCant(0) }
				</p>

			</div>
		</div>

	)
}
