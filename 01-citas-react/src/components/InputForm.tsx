type props = {
	title?:string,
	name:string,
	type:string,
	id:string,
	value:string,
	handleChange(e:React.ChangeEvent<HTMLInputElement> ):void
}
export const InputForm = ({title, name, type,  id, value,  handleChange}:props) => {
	return (
		<div className="mb-5">
					<label htmlFor={ id } className="block text-gray-700 uppercase font-bold" 
					>
						{ title }
					</label>
					<input
						id={ id }
						type={ type }
						placeholder={ title }
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						name={ name}
						onChange={ handleChange }
						value={value}
						
					/>
				</div>
	)
}
