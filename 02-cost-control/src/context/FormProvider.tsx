import { useState } from "react"
import { FormContext } from "./FormContext"

type props={
	children: JSX.Element | JSX.Element[],
}

export const FormProvider = ({children}:props) => {

		
	return (
		<FormContext.Provider value={ { }}>
			{children}
		</FormContext.Provider>
	)
}
