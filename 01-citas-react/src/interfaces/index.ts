export interface IsForm{
	[name:string]:string
}

export interface IsPatient extends IsForm{
	pet:string,
	area:string,
	date:string,
	email:string,
	owner:string,
}

export const patientForm:IsPatient = {
	pet:'',
	owner:'',
	email:'',
	date:'',
	area:'',
}

export interface ValidFields{
	[field:string]:null | string
}

export interface IsPatientValid extends ValidFields {
	petValid:string,
	areaValid:string,
	dateValid:string,
	emailValid:string,
	ownerValid:string,
}

export interface IsFormValidation {
	[formField:string]: [(value:string)=>boolean , null | string] ,
}

export type ActionTypes = 

|{type:'[PATIENT Add patient]', payload:IsPatient}
|{type:'[PATIENT Update patient]', payload:IsPatient}
|{type:'[PATIENT Delete patient]', payload:string}

export type props ={
	handelSubmit(e:React.FormEvent<HTMLFormElement | HTMLInputElement>):void
	handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void
	pet:string;
	petValid:string | null;
	owner:string;
	ownerValid:string | null;
	email:string;
	emailValid:string | null;
	date:string;
	dateValid:string | null;
	area:string;
	areaValid:string | null;
	isFormValid:boolean;
	formSubmitted:boolean;
	formState:IsPatient
}

