
import { usePatients } from '../hooks'
import { PatientsContext } from './'

type props={
	children: JSX.Element | JSX.Element[],
}

export const PatientProvider = ({children}:props) => {

	const { 
		patientState, 
		editPatient, 
		onAddPatient, 
		onDeletePatient, 
		onUpdatePatient, 
		onEditForm} = usePatients()

	return (
		<PatientsContext.Provider 
		value={
				{
					patientState,
					editPatient,
					onAddPatient, 
					onDeletePatient,
					onUpdatePatient,
					onEditForm
				} 
			}>
			{children}
		</PatientsContext.Provider>
	)
}
