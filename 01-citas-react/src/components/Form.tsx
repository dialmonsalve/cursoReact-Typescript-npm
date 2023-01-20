import { InputForm } from "./InputForm";
import { useState, useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { IsForm, IsValidation } from "../interfaces/IsForm";
import { PatientsContext } from "../context/PatientsContext";

const formData:IsForm = {
	id:'',
	pet:'',
	owner:'',
	email:'',
	date:'',
	area:'',
}
export const Form = () => {

	const { patient, patients, onAddPatient } = useContext(PatientsContext)

	useEffect(() => {		
		if (Object.keys(patient).length > 0){
			onEditForm(patient as IsForm)
		}
	}, [patient])

	const formValidation:IsValidation = {
		pet:[(value:string ) =>value.length >= 1,'The pet name is requierd'],
		owner:[(value:string ) =>value?.length >= 1,'The owner name is required'],
		email:[(value:string ) =>value?.includes('@'), 'El correo debe tener una @'],
		date:[(value:string ) =>value?.length >= 1,'El nombre es obligatorio'],
		area:[(value:string ) =>value?.length >= 1,'El nombre es obligatorio'],
	}

	const { 
		formState,
		formState: {
			pet, 
			owner, 
			email, 
			date, 
			area
		}, 
		handleChange,
		onEditForm,
		onResetForm, 
		isFormValid, 
		formValidation:{
			petValid, 
			ownerValid, 
			emailValid,  
			areaValid 
		}		
	} =  useForm (formData, formValidation)

	const [formSubmitted, setFormSubmitted] = useState(false)

	const handelSubmit = (e:React.FormEvent<HTMLFormElement | HTMLInputElement>) =>{

		e.preventDefault();

		setFormSubmitted(true);

		if( !isFormValid ) return;

		onAddPatient(formState);
		onResetForm()
	}

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Patient follow-up</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Add patient and {" "}
				<span className="text-indigo-600 font-bold ">Manage them</span>
			</p>

			<form 
				onSubmit={ handelSubmit }
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3">

				<InputForm 
					title="Pet name"
					name="pet"
					type="text"
					handleChange={handleChange}
					id="pet"
					value={pet}			/>
					
				<InputForm 
					title="Owner name"
					name="owner"
					type="text"
					handleChange={handleChange}
					id="owner" 
					value={owner}					 />
				<InputForm 
					title="Owner email"
					name="email"
					type="email"
					handleChange={ handleChange } 
					id="email"
					value={email}	 />
				<InputForm 
					title="Date"
					name="date"
					type="date"
					handleChange={ handleChange } 
					id="date"
					value={date}	 />

				<div className="mb-5">
					<label 
							htmlFor="symptom"
							className="block text-gray-700 uppercase font-bold"
						>
							Symptom
						</label>
						<textarea  
							id="symptom" 
							className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							placeholder="Describe the symptoms"
							name="area"
							onChange={ handleChange }
							value={area}
						>
						</textarea>
				</div>

				<input 
					type="submit"
					className="bg-indigo-600 cursor-pointer w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors rounded-md"
					value={formState.id ? 'Edit' : "Add patient"}
					onSubmit={ handelSubmit }
				/>
				
			</form>

		</div>
	)
}
