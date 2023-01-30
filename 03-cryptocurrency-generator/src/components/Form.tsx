import styled from '@emotion/styled';

import { Error } from './'
import { useForm } from '../hooks';

type Currencies = {
	currency:string | (() => JSX.Element),
	cryptocurrency:string | (() => JSX.Element)
};
type Props = {
	onNewSearch(currencies:Currencies):void
};

const InputSubmit = styled.input`
	background-color:#9497FF;
	border:none;
	width: 100%;
	padding: 10px;
	color: #FFF;
	font-weight: 700px;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	transition: background-color .3s ease;
	margin-top: 30px;

		&:hover{
			background-color: #7A7DEF;
			cursor: pointer;
		};
`
export const Form = ({ onNewSearch }:Props) => {
	const {
		error, 
		SelectCoins, 
		SelectCryptocurrency, 
		currency,
		cryptocurrency, 
		setError  
	} =  useForm();

	const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
		e.preventDefault();

		if([currency,cryptocurrency].includes('')){
			setError(true);
			return;
		}
		setError(false)

		onNewSearch({
			currency,
			cryptocurrency
		});
	};

	return (
		<>
			{error && <Error>All fields are required</Error>}

			<form onSubmit={ onSubmit }>
				<SelectCoins/>
				<SelectCryptocurrency/>

				<InputSubmit type="submit" value="Quote" />
			</form>
		</>
	);
};
