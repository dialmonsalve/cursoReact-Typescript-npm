import {  createContext } from "react";
import { IsForm, Patients } from "../interfaces/IsForm";
interface Patient{}

interface PatientContextType {
	patient:Patient,
	patients:Patients[],	
	onAddPatient(form:IsForm):void
	onEditPatient(patient:Patient):void,
	onDelete(id:string):void,
}
export const patients:PatientContextType ={
	patient: {},
	patients: [{
		id:'',
		pet: '',
		area: '',
		date: '',
		email: '',
		owner: ''
	}],
	onAddPatient: function (): void {	},
	onEditPatient: function (): void {	},
	onDelete: function (): void {	},
}


export const PatientsContext = createContext<PatientContextType>(patients) 