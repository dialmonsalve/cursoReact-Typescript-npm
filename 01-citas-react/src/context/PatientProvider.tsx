import { useEffect, useState } from "react"
import { IsForm, Patients } from "../interfaces/IsForm"
import { PatientsContext } from "./PatientsContext"

type props={
	children: JSX.Element | JSX.Element[],
}

interface Patient{}

export const PatientProvider = ({children}:props) => {

	const [patients, setPatients] = useState<Patients[] >([])
	const [patient, setpatient] = useState<Patient>({})

	const getLC = () =>{
		const value = localStorage.getItem('patients')
	
		if (typeof value === 'string') {
			const patients = JSON.parse(value)
			return setPatients(patients)
		}
	}

	useEffect(() => {	
		getLC()
	}, []);

	useEffect(() => {		
		localStorage.setItem('patients', JSON.stringify( patients) )
	}, [patients])

	const onAddPatient = (patient:IsForm) =>{
		if (patient.id){
			onUpdateForm(patient, patients)
		}else{
			
			onNewPatient(patient)
		}
	}

	const onEditPatient = (patient:Patient)=>{
		if(typeof patient === "undefined") return
		setpatient(patient)
	}

	const onNewPatient = (patient:IsForm)=>{
		const dataForm = {
			id:generateId(),
			pet: patient.pet,
			area: patient.area,
			date:patient.date,
			email:patient.email,
			owner:patient.owner
		}
		setPatients([...patients, dataForm ])		
	}

	const onUpdateForm = (patient:IsForm, patients:Patients[])=>{
		const updatePatients = patients.map(patientState =>  patientState.id ===patient.id ? patient : patientState 
		)
		setPatients(updatePatients as Patients[])
		setpatient({})
	}

	const onDelete = ( id:string )=>{

		const deletePatients = patients.filter(patientState=> patientState.id !== id )

		setPatients(deletePatients)

	}

	const generateId = ()=>{
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36)
		return random + fecha
	}
	return (
		<PatientsContext.Provider 
		value={
				{
					patient, 
					patients, 
					onAddPatient,  
					onEditPatient, 
					onDelete
				} 
						
			}>
			{children}
		</PatientsContext.Provider>
	)
}
