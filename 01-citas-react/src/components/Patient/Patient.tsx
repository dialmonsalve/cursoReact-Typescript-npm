
import { useContext } from 'react'
import { PatientsContext } from '../../context'
import { useButton } from '../../hooks/useButton'
import { IsPatient } from '../../interfaces'
import { PatientParagraph } from './'

type props = {
	pacient:IsPatient
}

export const Patient = ({ pacient, pacient:{ area, date, owner, email, pet, id } }:props) => {

	const { onEditForm, onDeletePatient } = useContext(PatientsContext);

	const handelEliminar = ()=>{
		const resp = confirm('Do you want delete this patient?')
		if(resp){
			onDeletePatient(id)
		}
	}

	const [ BtnEdit ] = useButton(
		"Edit",
		"bg-indigo-600 hover:bg-indigo-700",
		()=> onEditForm( pacient ))

	const [ BtnDelete ] = useButton(
		"Delete", 
		"bg-red-600 hover:bg-red-700",
		handelEliminar)

	return (
		
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl"> 

			<PatientParagraph title="Pet Name" propPatient={ pet } />
			<PatientParagraph title="Owner" propPatient={ owner } />
			<PatientParagraph title="Email" propPatient={ email } />
			<PatientParagraph title="Date" propPatient={ date } />
			<PatientParagraph title="Symptom" propPatient={ area } />

			<div className="flex justify-between">
				<BtnEdit/>
				<BtnDelete/>
			</div>
			
		</div>
	)
}
