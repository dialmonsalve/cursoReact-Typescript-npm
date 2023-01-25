import { useDivError } from '../../hooks';
import { props } from '../../interfaces';
import { InputForm } from './InputForm';

export const Form = ({pet, petValid, owner, ownerValid, email, emailValid, date, dateValid, area, areaValid,formState, handelSubmit, handleChange,  isFormValid, formSubmitted }:props) => {

	const [ PetDiviError ] = useDivError( formSubmitted, petValid, isFormValid)
	const [ OwnerDiviError ] = useDivError( formSubmitted, ownerValid, isFormValid)
	const [ EmailDiviError ] = useDivError( formSubmitted, emailValid, isFormValid)
	const [ DateDiviError ] = useDivError( formSubmitted, dateValid, isFormValid)
	const [ AreaDiviError ] = useDivError( formSubmitted, areaValid, isFormValid)

	return (
		<form 
				onSubmit={ handelSubmit }
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3">

				<InputForm 
					title="Pet name"
					name="pet"
					type="text"
					handleChange={ handleChange }
					id="pet"
					value={pet}	/>
					<PetDiviError />

				<InputForm 
					title="Owner name"
					name="owner"
					type="text"
					handleChange={ handleChange }
					id="owner" 
					value={owner}	/>
					<OwnerDiviError />

				<InputForm 
					title={email}
					name="email"
					type="email"
					handleChange={ handleChange } 
					id="email"
					value={email}	/>
					<EmailDiviError />

				<InputForm 
					title="Date"
					name="date"
					type="date"
					handleChange={ handleChange } 
					id="date"
					value={date} />
					<DateDiviError />

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
						<AreaDiviError />
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
