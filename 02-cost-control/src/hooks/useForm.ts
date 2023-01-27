import { useEffect, useMemo, useState } from 'react';

export const useForm = <T extends Form<string | number>>(
	initialForm: T,
	formValidations: FormFieldsValidation) => {

	const [formState, setFormState] = useState<T>(initialForm);
	const [formValidation, setFormValidation] = useState<FormErrorMessages>({})
	const [formSubmitted, setFormSubmitted] = useState(false)

	useEffect(() => {
		setFormState(initialForm)
	}, [initialForm])

	useEffect(() => {
		createValidations()
	}, [formState])

	const isFormValid = useMemo(() => {
		for (const formValue of Object.keys(formValidation)) {
			if (formValidation[formValue] !== null) return false;
		}

		return true;

	}, [formValidation])


	const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value
		});
	}

	const onResetForm = () => {
		setFormState(initialForm)
	}

	const createValidations = () => {

		const checkedValues: FormErrorMessages = {}
		for (const formField of Object.keys(formValidations)) {

			if (typeof formState[formField] === 'string') {

				const [fn, errorMessage] = formValidations[`${formField}`]
				checkedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
			}

		}
		setFormValidation(checkedValues);
	}
	const onFormSubmitted = (value: boolean) => {

		setFormSubmitted(value)

	}

	return {
		formState,
		...formState,
		onChangeForm,
		onResetForm,

		formValidation,
		...formValidation,
		isFormValid,

		formSubmitted,
		onFormSubmitted,
	}
}

export interface Form<T> {
	[name: string]: T;
}

export type FormErrorMessages = {
	[field: string]: null | string
}

export interface FormFieldsValidation {
	[formField: string]: [(value: any) => boolean, (null | string)]
}