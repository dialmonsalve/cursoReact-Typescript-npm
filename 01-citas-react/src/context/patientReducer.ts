import { IsPatient, patientForm, ActionTypes } from '../interfaces'

export const patientReducer = (statePatient: typeof patientForm[], action:ActionTypes):IsPatient[] => {
	

	switch (action.type) {
		case '[PATIENT Add patient]':
			return [...statePatient, action.payload ]

		case '[PATIENT Update patient]':
			return statePatient.map( patient =>  patient.id=== action.payload.id ? action.payload : patient)//*Forma corta
			
					/* const updatePatient = action.payload;
			statePatient.map( (patient) =>{
				if (patient.id === action.payload.id){

					patient.area = updatePatient.area;
					patient.date = updatePatient.date;
					patient.email = updatePatient.email;
					patient.owner = updatePatient.owner;
					patient.pet = updatePatient.pet;
				}
				return [...statePatient, action.payload ]
			}); *///!Forma larga

		case '[PATIENT Delete patient]':
			return statePatient.filter(patient=> patient.id !== action.payload)

		default:
			return statePatient
	}
}

