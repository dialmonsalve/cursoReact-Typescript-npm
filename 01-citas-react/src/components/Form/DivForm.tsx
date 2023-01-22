import { useContext, useEffect, useState } from 'react';

import { useForm } from '../../hooks';
import { IsFormValidation, patientForm } from '../../interfaces';
import { PatientsContext } from '../../context';
import { Form } from './';

const formValidations:IsFormValidation = {
	pet:[(value:string ) =>value?.length >= 1,'The pet name is requierd'],
	owner:[(value:string ) =>value?.length >= 1,'The owner name is required'],
	email:[(value:string ) =>value?.includes('@'), 'Field email is invalid'],
	date:[(value:string ) =>value?.length >= 1,'Field date is requierd'],
	area:[(value:string ) =>value?.length >= 1,'Field symptom is requierd'],
}

export const DivForm = () => {
	const { editPatient ,patientState, onAddPatient, onUpdatePatient } = useContext(PatientsContext)

	const [formSubmitted, setFormSubmitted] = useState(false)

	const { 
		formState,  pet, owner, email, date, area, handleChange,	handleEditForm,	onResetForm, 	
		formValidation:{ petValid, ownerValid, emailValid, dateValid, areaValid}, isFormValid
	} =  useForm (patientForm, formValidations)

	const handelSubmit = (e:React.FormEvent<HTMLFormElement | HTMLInputElement>) =>{

		e.preventDefault();
		setFormSubmitted(true)

		if( !isFormValid ) return;

		if( formState.id ){
			onUpdatePatient(formState)
			setFormSubmitted(false)
		}else{
			onAddPatient(formState);
			setFormSubmitted(false)
		}
		onResetForm()
	}

	useEffect(() => {

		const patientFound = patientState.find(patient => patient.id === editPatient.id)

		if(patientFound){
			handleEditForm(patientFound)
		}
	
	}, [editPatient.id])

	return (
		
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Patient follow-up</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Add patient and {" "}
				<span className="text-indigo-600 font-bold ">Manage them</span>
			</p>

			<Form 			
				handelSubmit={ handelSubmit }
				handleChange = { handleChange }
				pet={ pet }
				petValid={ petValid as string }
				owner={ owner }
				ownerValid={ ownerValid as string }
				email={ email }
				emailValid={ emailValid as string }
				date={ date }
				dateValid={ dateValid as string }
				area={ area }
				areaValid={ areaValid as string }
				isFormValid={ isFormValid }
				formSubmitted={ formSubmitted }
				formState={ formState }
			/>

		</div>
	)
}
