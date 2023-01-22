import { useEffect, useMemo, useState } from 'react'
import { IsPatientValid, IsPatient,  IsFormValidation, patientForm } from '../interfaces/'

export const useForm = (initialForm:IsPatient, formValidations:IsFormValidation={} ) => {

	const [formState, setFormState] = useState<IsPatient>(patientForm)
	const [formValidation, setFormValidation] = useState<IsFormValidation | IsPatientValid>({});

	useEffect( () =>{
		setFormState(initialForm)
	}, [initialForm])

	useEffect(() => {
		createValidator()	
	}, [formState])

	const isFormValid = useMemo(()=>{

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

	const createValidator = () =>{
		const CheckedValues:IsPatientValid = {
			petValid: "",
			areaValid: "",
			dateValid: "",
			emailValid: "",
			ownerValid: ""
		};

		for (const formField of Object.keys(formValidations)) {
			const [ fn , message ] = formValidations[formField]

			CheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null: message;			
		};

		setFormValidation(CheckedValues);
	};

	const onResetForm = () =>{
		setFormState(initialForm);
	};

	const handleEditForm = (formState:{}) =>{
		setFormState(formState as IsPatient)
	};

	return {
		formState,
		...formState,
		handleChange,
		onResetForm,
		handleEditForm,

		formValidation,
		...formValidation,
		isFormValid,

	}
}
