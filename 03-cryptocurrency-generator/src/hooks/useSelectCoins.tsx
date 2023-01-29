import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Coins } from '../interfaces'

const Label = styled.label`
	color:#fff;
	display: block;
	font-family: 'Lato';
	font-size: 24px;
	font-weight: 700;
	margin: 15px 0;
`
const Select = styled.select`
	width: 100%;
	font-size: 18px;
	padding: 14px;
	border-radius: 10px;
	text-align:center;
`


export const useSelectCoins = (label:string, options:Coins) => {

	const [state, setState] = useState('')

	const SelectCoins = () => (
		<>
			<Label >{label}</Label>
			<Select
				value ={state}
				onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setState(e.target.value)}
			>	
				<option value="">Select</option>
				
				{options.map(option=>(
					<option
						key={option.id}
						value={option.id}
					>
						{option.name}
					</option>
				))}
			</Select>
		</>
	)

	return [
		state,
		SelectCoins,
	]
}
