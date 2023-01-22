import { useEffect, useMemo, useState } from "react"
import { IsForm } from "../interfaces"

export const useForm = (initialForm:IsForm) => {

	const [formState, setFormState] = useState<IsForm>(initialForm)
	const [ isValidForm, setisValidForm ] = useState<string>('')

	useEffect( () =>{
		setFormState(initialForm)
	}, [initialForm])

	const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement >)=>{
		const {name, value} = e.target

		setFormState({
			...formState,
			[name]:value.toLowerCase()	
		})
	};

	const isFormValid = useMemo( ()=>{

		for (const fieldForm of Object.keys(formState)) {
			if(fieldForm.length <=1) return true	
			console.log(fieldForm);		
		}
		return false
	},[formState])

	const onResetForm = ()=>{
		setFormState(initialForm)
	}

	return {
		formState,
		...formState,
		isValidForm,

		handleChange,
		onResetForm,
		isFormValid,
	}
}
