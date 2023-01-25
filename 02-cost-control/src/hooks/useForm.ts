import { useEffect, useMemo, useState } from 'react';


export const useForm = < 
		T extends IsForm<string >, 
		S extends IsFormValidation<string >
	> (initialForm:T, formValidations:S) => {

	const [ formState, setFormState] = useState(initialForm);
	const [ formValidation, setFormValidation] = useState< S >(formValidations)

	useEffect( () =>{
		setFormState(initialForm)
	}, [initialForm])

	useEffect(() => {
		handleValidations()
	}, [formState])

	const isFormValid = useMemo( () =>{
		for (const formValue of Object.keys( formValidation )) {
			if( formValidation[formValue] !== null ) return false;
		}

		return true;
		
	},[formValidation])		

	const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
		const {name, value} = e.target;

		setFormState({
				...formState,
			[name]: value
		});
	}

	const handleReset = () => {
		setFormState(initialForm)
	}

	const handleValidations = () => {
		const checkedValues:IsCheckedFields = {}
		for (const formField of Object.keys( formValidations) ) {

			const [fn, errorMessage] =  formValidations[`${formField}`]

			checkedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
			//[formField:string]: [(value:T)=>boolean , null | string]
		}
		setFormValidation(checkedValues);
	}

	return{
		formState,
		...formState,
		handleChange,
		handleReset,

		formValidation,
	...formValidation,

	isFormValid,
	}
}

export interface IsForm<T> {
	[name:string]:T,
}

export type IsCheckedFields =
{[field:string]:null | string}


export interface IsFormValidation<S>  {
	[formField:string]: [(value:S)=>boolean , null | string]
}

