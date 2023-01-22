type props={
	message:string,
	error:boolean,
	formValid:boolean
}
export const DivError = ({error, message, formValid}:props) => {
	return (
		<div className={`${formValid&& message ? 'text-white bg-red-500 py-1 mb-2 pl-3 rounded-xl': 'hidden'}`}>
						{
							!error  && formValid ? (<h2>{ message }</h2>) : null
						}
					</div>
	)
}
