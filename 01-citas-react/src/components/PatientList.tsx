import { useContext } from "react"
import { PatientsContext } from "../context/PatientsContext"
import { Patient } from "./Patient"

export const PatientList = () => {

	const { patients } = useContext(PatientsContext)	

	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

			{
				patients && patients.length ? (
					<>
						<h2 className="font-black text-3xl text-center">Patient List</h2>
						<p className="text-xl mt-5 mb-10 text-center">
							Manage your {" "}
							<span className="text-indigo-600 font-bold">patients and appointments</span>
						</p>

			{
				patients.map((pacient)=>(
					<Patient
						key={pacient.id}
						pacient={pacient}
						/>
				))
			}
					</>
	
				) : (
					<>
					<h2 className="font-black text-3xl text-center">No patients</h2>
						<p className="text-xl mt-5 mb-10 text-center">
							Star add your patients {" "}
							<span className="text-indigo-600 font-bold">and they'll appear here.</span>
						</p>
					</>
				)}
			
		</div>
		
	)
}
