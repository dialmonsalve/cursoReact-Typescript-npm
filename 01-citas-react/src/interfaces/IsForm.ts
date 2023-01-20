export interface IsForm{
	[name:string]:string
}

export interface IsValidation {
	[formField:string]: [(value:string)=>boolean , string ]
}

export type Valid={
	[field:string]:null | string
}

export interface Patients{
	id:string,
	pet:string,
	area:string,
	date:string,
	email:string,
	owner:string,
}