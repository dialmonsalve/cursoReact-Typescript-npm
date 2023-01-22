import { useState } from 'react'

import { useForm } from '../hooks/useForm'
import { IsForm } from '../interfaces'
import { Message } from './Message'

import closeBtn from '../assets/cerrar.svg'


type props ={
	setModal(modal:boolean):void,
	anmiateModal:boolean,
	setAnmiateModal(modal:boolean):void,
	saveExpense(expense:IsForm):void
}

const expenseForm:IsForm={
	name:'',
	amount:'',
	category:''
}
export const Modal = ({setModal, anmiateModal, setAnmiateModal, saveExpense }:props) => {

	const { 
		formState, 
		formState:{ 
			name, amount, category 
		}, 
		handleChange ,
		isFormValid
	} =useForm(expenseForm)

	const hideModal = ()=>{
		setAnmiateModal(false)		
		setTimeout(() => {
			setModal(false)
		}, 500);
	}

	const [message, setMessage] = useState<string>('')

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
		e.preventDefault();

		if([name.trim(), amount, category].includes('')){

			setMessage('All fields are requierd')

			setTimeout(() => {
				setMessage('')
			}, 2000);
			return;
		}

		saveExpense({name, amount, category})
	}
	
	return (
		<div className="modal">
			<div className="cerrar-modal">

				<img 
					src={closeBtn}
					alt="Close Modal"
					onClick={hideModal}	
				/>
			</div>
			<form 
				className={`formulario ${anmiateModal ? 'animar' : 'cerrar'}`}
				onSubmit={ handleSubmit }	
			>
				<legend>New expense</legend>
				{message && <Message type='error'>{ message }</Message>}
				<div className="campo">
					<label htmlFor="campo">Name Expense</label>
					<input
						id="campo" 
						type="text"
						placeholder="Add the expense name"
						name="name"
						value={ name }
						onChange={handleChange}

					/>
				</div>

				<div className="campo">
					<label htmlFor="cantidad">Amount</label>
					<input
						id="cantidad" 
						type="number"
						placeholder="Add your expense amount eg:200"
						name="amount"
						value={ Number(amount) }
						onChange={handleChange}
					/>
				</div>

				<div className="campo">
					<label htmlFor="categoria">Category</label>
					<select 
						id="categoria" name='category' value={category} onChange={handleChange}>
							<option value="">---Select---</option>
							<option value="saving">Saving</option>
							<option value="food">Food</option>
							<option value="home">Home</option>
							<option value="miscellaneous">Miscellaneous expenses</option>
							<option value="leisure">Leisure</option>
							<option value="health">Health</option>
							<option value="subscribes">Subscribes</option>
						</select>
				</div>
				<input type="submit" value="Add Expense" />
			</form>
			
		</div>
	)
}
