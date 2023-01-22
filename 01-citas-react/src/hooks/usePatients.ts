import { useEffect, useReducer, useState } from "react"

import { patientReducer } from "../context"
import { ActionTypes, IsPatient, patientForm } from "../interfaces"
import { generateId } from "../helpers/generateId"

const init = () => {
	const value = localStorage.getItem('patients')

	if (typeof value === 'string') {
		const patients = JSON.parse(value)
		return patients
	}else{
		return[]
	}
}

export const usePatients =()=> {

	const [patientState, dispatch] = useReducer(patientReducer, patientForm, init)
	const [editPatient, setEditPatient] = useState<IsPatient>(patientForm)

	useEffect(() => {		
		localStorage.setItem('patients', JSON.stringify( patientState) )
	}, [patientState])

	const onAddPatient = (patient:IsPatient) =>{
		const actions:ActionTypes = {
			type:'[PATIENT Add patient]',
			payload:{...patient, id: generateId()}
		}
		dispatch(actions)
	}

	const onUpdatePatient = (patient:IsPatient)=>{
		const actions:ActionTypes = {
			type:'[PATIENT Update patient]',
			payload:patient
		}
		dispatch(actions)
	}

	const onDeletePatient = ( id:string )=>{		
		dispatch({ type:'[PATIENT Delete patient]', payload:id })
	}
	const onEditForm = (patient:IsPatient)=>{
		if(typeof patient === 'undefined') return

		setEditPatient(patient)
	}

	return {
		patientState,
		editPatient,
		onAddPatient, 
		onDeletePatient,
		onUpdatePatient,
		onEditForm
	}			
}