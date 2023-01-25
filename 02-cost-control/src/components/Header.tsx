
import { useContext, useState } from "react"
import { FormContext } from "../context/FormContext"
import { BudgeController } from "./BudgeController"
import { NewBudget } from "./NewBudget"
import Iconewspend from '../assets/nuevo-gasto.svg'
import { Modal } from "./FormModal/Modal"
import { ExpenseList } from "./ExpenseList"
import { IsExpenseForm } from "../interfaces"

export const Header = () => {

	const [modal, setModal] = useState<boolean>(false)
	const [anmiateModal, setAnmiateModal] = useState(false)
	const { isvalidBudget } = useContext(FormContext)

	const expenses = [
		{
			id:"123456",
			category:"food",
			name:"Restaurant",
			date:Date.now(),
			amount:2500
		},

		{
			id:"123456789",
			category:"health",
			name:"Visit veterinary",
			date:Date.now(),
			amount:300
	
		},
		{
			id:"1234568910",
			category:"leisure",
			name:"Coffee",
			date:Date.now(),
			amount:200
		},

]

	const handelNewSpend =() =>{

		setModal(true)

		setTimeout(() => {
			setAnmiateModal(true)
		}, 500);
	}

	const saveExpense = (expense:IsExpenseForm)=>{

	}

	return (
		<header className={modal ? 'fijar' : ''}>
			<h1>Expense planner</h1>

			{ isvalidBudget ? (<BudgeController/>) :( <NewBudget/>)}

			{isvalidBudget &&(
				<>
					<main>
						<ExpenseList 
							expenses={ expenses}
						/>
					</main>
					<div className="nuevo-gasto">
						<img 
							src={Iconewspend}
							alt="Ico new sped"
							onClick={ handelNewSpend } />

					</div>
				</>
			)}

			{modal && <Modal 
				setModal={ setModal }
				anmiateModal= { anmiateModal }
				setAnmiateModal ={ setAnmiateModal }
				saveExpense = {saveExpense}
				/>}
			

			</header>
	)
}
