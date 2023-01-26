
import { useContext, useState } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import { BudgeController } from './BudgeController'
import { NewBudget } from './NewBudget'
import Iconewspend from '../assets/nuevo-gasto.svg'
import { Modal } from './FormModal/Modal'
import { ExpenseList } from './ExpenseList'

export const Header = () => {

	const [ modal, setModal ] = useState<boolean>(false)
	const [ anmiateModal, setAnmiateModal ] = useState(false)

	const { isFormValid } = useContext(ExpenseContext)

	const handelNewSpend =() =>{

		setModal(true)

		setTimeout(() => {
			setAnmiateModal(true)
		}, 500);
	}

	return (
		<header className={modal ? 'fijar' : ''}>
			<h1>Expense planner</h1>

			{ isFormValid ? (<BudgeController/>) :( <NewBudget/>)}

			{isFormValid &&(
				<>
					<main>
						<ExpenseList/>
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
				/* saveExpense = {saveExpense} */
				/>}
			

			</header>
	)
}
