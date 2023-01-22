import { createContext } from "react";

type FormContextType={
	budget:number;
	message:string;
	isvalidBudget:boolean;
	handleChange(e: React.ChangeEvent<HTMLInputElement>):void;
	handleBuget(e: React.FormEvent<HTMLFormElement>):void;
}

const ValidForm: FormContextType ={
	budget:0,
	message:'',
	isvalidBudget:false,
	handleChange(){},
	handleBuget(){},
}


export const FormContext = createContext<FormContextType>(ValidForm)