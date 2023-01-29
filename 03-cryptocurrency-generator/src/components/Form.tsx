import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { coins } from '../data/coins'
import { useSelectCoins } from '../hooks/useSelectCoins'
import { Cryptocurrency } from '../interfaces/CryptoCurrency'

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
}
`
export const Form = () => {

	const [cryptos, setCryptos] = useState([])

	const [ currency, SelectCoins ] = useSelectCoins('Quote your currency', coins)
	const [ cryptocurrency, SelectCryptocurrency ] = useSelectCoins('Quote your cryptocurrency', cryptos)

	const consultApi = async () => {

		const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

		const response = await fetch(url)
		const result:Cryptocurrency = await response.json()

		const arrayCrypto = result.Data.map( crypto =>{
			const obj = {
				id:crypto.CoinInfo.Name,
				name: crypto.CoinInfo.FullName
			}
			return obj;
		})

		setCryptos(arrayCrypto)

	}

	useEffect(() => {

		consultApi()
	
	}, [])
	


	return (
		<form>
			<SelectCoins/>
			<SelectCryptocurrency/>

			{/* <SelectCryptoCurrency/> */}
			<InputSubmit type="submit" value="Quote" />
		</form>
	)
}
