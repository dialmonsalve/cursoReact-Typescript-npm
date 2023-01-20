
import { useContext } from "react"
import { PatientsContext } from "../context/PatientsContext"
import { Patients } from "../interfaces/IsForm"

type props = {
	pacient:Patients
}

export const Patient = ({ pacient, pacient:{ area, date, owner, email, pet } }:props) => {

	const { onEditPatient, onDelete } = useContext(PatientsContext);

	const handelEliminar = ()=>{
		const resp = confirm('Do you want delete this patient?')

		if(resp){

			onDelete(pacient.id)

		}
	}

	return (
		
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl"> 
				
				<p className="font-bold mb-3 text-gray-700 uppercase">Name: {" "}
					<span className="font-normal normal-case">{ pet }</span>
					
				</p>

				<p className="font-bold mb-3 text-gray-700 uppercase">Owner: {" "}
					<span className="font-normal normal-case">{ owner }</span>
				</p>

				<p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
					<span className="font-normal normal-case">{ email }</span>
				</p>

				<p className="font-bold mb-3 text-gray-700 uppercase">Date: {" "}
					<span className="font-normal normal-case">{ date }</span>
				</p>

				<p className="font-bold mb-3 text-gray-700 uppercase">Symptom: {" "}
					<span className="font-normal normal-case">{ area }</span>
				</p>

				<div className="flex justify-between">
					<button 
						className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
						onClick={()=> onEditPatient( pacient ) }
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
