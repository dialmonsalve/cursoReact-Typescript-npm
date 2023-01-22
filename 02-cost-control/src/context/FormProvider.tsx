import { useState } from "react"
import { FormContext } from "./FormContext"

type props={
	children: JSX.Element | JSX.Element[],
}

export const FormProvider = ({children}:props) => {

		const [budget, setBudget] = useState<number>(0)
		const [message, setMessage] = useState<string>('')
		const [isvalidBudget, setIsvalidBuget] = useState<boolean>(false)

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
			const value = Number(e.target.value)		
			setBudget(value)
		}

		const handleBuget = (e: React.FormEvent<HTMLFormElement>)=>{
			e.preventDefault()
	
			if(Number(budget) <= 0){
				setMessage(`Not a valid quote` )
				return
			}
			setMessage('')
			setIsvalidBuget(true)

		}

	return (
		<FormContext.Provider value={ { 
			budget, 
			message, 
			isvalidBudget,
			handleChange, 
			handleBuget }}>
			{children}
		</FormContext.Provider>
	)
}
