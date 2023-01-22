import { IsPatient } from "../../interfaces";
import { DivError, InputForm } from "./"

type props ={
	handelSubmit(e:React.FormEvent<HTMLFormElement | HTMLInputElement>):void
	handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void
	pet:string;
	petValid:string;
	owner:string;
	ownerValid:string;
	email:string;
	emailValid:string;
	date:string;
	dateValid:string;
	area:string;
	areaValid:string;
	isFormValid:boolean;
	formSubmitted:boolean;
	formState:IsPatient
}

export const Form = ({pet, petValid, owner, ownerValid, email, emailValid, date, dateValid, area, areaValid,formState, handelSubmit, handleChange,  isFormValid, formSubmitted }:props) => {
	return (
		<form 
				onSubmit={ handelSubmit }
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3">

				<InputForm 
					title="Pet name"
					name="pet"
					type="text"
					handleChange={handleChange}
					id="pet"
					value={pet}	/>
					<DivError
					message={petValid as string} 
					error={isFormValid} 
					formValid={formSubmitted}	
					/>

				<InputForm 
					title="Owner name"
					name="owner"
					type="text"
					handleChange={handleChange}
					id="owner" 
					value={owner}	 />
					<DivError
					message={ownerValid as string} 
					error={isFormValid} 
					formValid={formSubmitted}	
					/>

				<InputForm 
					title="email"
					name="email"
					type="email"
					handleChange={ handleChange } 
					id="email"
					value={email}	 />
					<DivError
					message={emailValid as string} 
					error={isFormValid} 
					formValid={formSubmitted}	
					/>

				<InputForm 
					title="Date"
					name="date"
					type="date"
					handleChange={ handleChange } 
					id="date"
					value={date}	 />
					<DivError
					message={dateValid as string} 
					error={isFormValid} 
					formValid={formSubmitted}	/>

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
						<DivError
						message={areaValid as string} 
						error={isFormValid} 
						formValid={formSubmitted}	/>
				</div>

				<input 
					type="submit"
					className="bg-indigo-600 cursor-pointer w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors rounded-md"
					value={formState.id ? 'Edit' : "Add patient"}
					onSubmit={ handelSubmit }
				/>
				
			</form>
	)
}
