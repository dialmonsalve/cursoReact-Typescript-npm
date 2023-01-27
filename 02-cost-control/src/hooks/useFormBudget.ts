import { useState } from "react";

export const useFormBudget = () =>{

	  //Controller the budget form
		const [budget, setBudget] = useState(0);
		const [isFormValid, setIsFormValid] = useState(false);
	
		const addNewBudget = (budget: number, isFormValid: boolean) => {
			setBudget(budget);
			setIsFormValid(isFormValid);
		};

	return{
		budget,
		isFormValid,
		addNewBudget,
	}

}

