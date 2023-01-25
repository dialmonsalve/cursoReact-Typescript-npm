
export const useDivError = (formValid:boolean, message:(null|string), error:boolean) => {


	const divError = () =>(

		<>

			<div className={`${formValid&& message ? 'text-white bg-red-500 py-1 mb-2 pl-3 rounded-xl': 'hidden'}`}>
						{
							!error  && formValid ? (<h2>{ message }</h2>) : null
						}


					</div>
		</>
	)
	return [ divError ]
}
