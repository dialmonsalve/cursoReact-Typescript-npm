
export const useButton = (name:string, colors:string, fn:React.MouseEventHandler<HTMLButtonElement> | undefined) => {

	const Button = ()=>(
		<button 
			className={`py-2 px-10 ${colors} text-white font-bold uppercase rounded-lg`}
			onClick={ fn }
				>{name}
		</button>	
	)



	return [ Button ]
}
