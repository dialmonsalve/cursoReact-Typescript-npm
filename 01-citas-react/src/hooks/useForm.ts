import { useEffect, useMemo, useState } from "react"
import { IsForm, IsValidation, Valid } from "../interfaces/IsForm"

const form:IsForm = {
	pet:'',
	owner:'',
	email:'',
	date:'',
	area:'',
}

export const useForm = (initialForm:IsForm, formValidations:IsValidation ) => {

	const [formState, setFormState] = useState<IsForm>(form)
	const [formValidation, setFormValidation] = useState<IsValidation | Valid>({});

	useEffect( () => {
		createValidators();
	}, [formState]);

	useEffect( () =>{
		setFormState(initialForm)
	}, [initialForm])

	const isFormValid = useMemo( () =>{

	
		for (const formValue of Object.keys( formValidation )) {
			if( formValidation[formValue] !== null ) return false;
		}

		return true;
		
	},[formValidation])	

	const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{

		const { name, value } = e.target
		setFormState({
			...formState,
			[name]:value.toLowerCase()
		})
	}

	const onResetForm = () =>{
		setFormState(initialForm);
	};

	const createValidators = () =>{

		const formCheckedValues:Valid ={}
		for (const formField of Object.keys(formValidations)) {
			const [fn, errorMessage] = formValidations[formField];

			formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
		}

		setFormValidation( formCheckedValues );
	}

	const onEditForm = (formState:IsForm) =>{
		setFormState(formState)

	}

	return {
		formState,
		handleChange,
		onResetForm,
		onEditForm,

		formValidation,
		isFormValid,
		
	}
}
