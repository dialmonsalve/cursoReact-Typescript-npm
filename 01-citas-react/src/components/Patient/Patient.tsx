
import { useContext } from 'react'
import { PatientsContext } from '../../context'
import { IsPatient } from '../../interfaces'
import { PatientParragraph } from './'

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
	return (
		
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl"> 

			<PatientParragraph title="Pet Name" propPatient={ pet } />
			<PatientParragraph title="Owner" propPatient={ owner } />
			<PatientParragraph title="Email" propPatient={ email } />
			<PatientParragraph title="Date" propPatient={ date } />
			<PatientParragraph title="Symptom" propPatient={ area } />

				<div className="flex justify-between">

					<button 
						className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
						onClick={()=> onEditForm( pacient ) }
							>Edit</button>
							
					<button 
						className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
						onClick={ handelEliminar }
						>
							
							Delete
						</button>
				</div>
				
			</div>
	)
}
