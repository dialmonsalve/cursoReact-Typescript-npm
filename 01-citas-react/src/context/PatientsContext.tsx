import {  createContext } from "react";
import { patientForm, IsPatient } from "../interfaces";

interface PatientContextType {
	patientState:IsPatient[],	
	editPatient:IsPatient,
	onAddPatient(patient:IsPatient):void
	onEditForm(patient:IsPatient):void
	onDeletePatient(id:string):void
	onUpdatePatient(patient:IsPatient):void,
	
}
const patients:PatientContextType ={
	patientState: [patientForm],
	onAddPatient: function (): void { },
	onEditForm: function (): void { },
	onDeletePatient: function (): void { },
	onUpdatePatient: function (): void { },
	editPatient: {id:'', date:'',email:'', owner:'', pet:'', area:'' }
}

export const PatientsContext = createContext<PatientContextType>(patients) 