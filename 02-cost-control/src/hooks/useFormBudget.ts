import { useEffect, useState } from "react";

const init = () =>{
	const value = Number(localStorage.getItem('budget')) 
	if(typeof value === 'number'){
		return value
	}
	return 0
}

export const useFormBudget = () =>{
	//Controller the budget form
	
	const [budget, setBudget] = useState(init());
	const [isFormValid, setIsFormValid] = useState(false);
	
	useEffect(() => {
		if(init() > 0){
			setIsFormValid(true)
		}
	}, [])

	const addNewBudget = (budget: number, isFormValid: boolean) => {

			setBudget(Number(budget));

			setIsFormValid(isFormValid);
		};

		const onRemoveBudget = () =>{

			setBudget(0)
			setIsFormValid(false)
		}
	
	return{
		budget,
		isFormValid,
		addNewBudget,
		setIsFormValid,
		onRemoveBudget
	}
}

