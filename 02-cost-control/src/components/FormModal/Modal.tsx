import { useForm } from '../../hooks/useForm'
import {  IsExpenseForm, validFields } from '../../interfaces'
import { Message } from '../../helpers/Message'
import closeBtn from '../../assets/cerrar.svg'
import { IsCheckFields } from '../../interfaces/isExpenseForm'

type props ={
	anmiateModal:boolean,
	setModal(modal:boolean):void,
	setAnmiateModal(modal:boolean):void,
	saveExpense(expense:IsExpenseForm):void
}

export const expenseForm:IsExpenseForm = {
	name:"",
	amount:"",
	category:"",
}

export const validForm: validFields = {
	name: [(value:string) => value?.length >= 1, "Field name is requiered"],
	amount: [(value:string) => Number(value) >= 1, "Field amount is requiered"],
	category: [(value:string) => value.length >= 1, "Field amount is requiered"],
}

export const Modal = ({anmiateModal, setModal, setAnmiateModal, saveExpense }:props) => {

	const { 
		formState, name, amount, category, handleChange, handleReset,
		formValidation, nameValid, amountValid, categoryValid, isFormValid
	} =useForm<IsExpenseForm, IsCheckFields>( expenseForm, validForm )

	const hideModal = ()=>{
		setAnmiateModal(false)		
		setTimeout(() => {
			setModal(false)
		}, 500);
	}

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

		e.preventDefault();

		if(isFormValid) {

			setTimeout(() => {
				handleReset()
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

				<div className="campo">
					<label htmlFor="campo">Name Expense</label>
					<input
						id="campo" 
						type="text"
						placeholder="Add the expense name"
						value={ name }
						name="name"
						onChange={handleChange}

					/>
				</div>
				{nameValid 
					&& <Message type='error'>{ nameValid }</Message>
					}

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
				{amountValid 
					&& <Message type='error'>{ amountValid }</Message>
					}

				<div className="campo">
					<label htmlFor="categoria">Category</label>
					<select 
						id="categoria" name='category' value={category} onChange={ handleChange }>
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
				{categoryValid 
					&& <Message type='error'>{ categoryValid }</Message>
					}
				<input type="submit" value="Add Expense" />
			</form>
			
		</div>
	)
}
