import { useState } from 'react'
import { COINS, CRYPTOCURRENCY } from '../interfaces'

export const useApi = () => {

	const [cryptos, setCryptos] = useState<COINS[]>([]);

	const consultApi = async () => {
		const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
	
		const response = await fetch(url);
		const result:CRYPTOCURRENCY = await response.json();
	
		const arrayCrypto = result.Data.map( crypto =>{
			const obj = {
				id:crypto.CoinInfo.Name,
				name: crypto.CoinInfo.FullName,
			}	
			return obj;
		});
		setCryptos(arrayCrypto)

	};
	return{
		consultApi,
		cryptos
	};
};


