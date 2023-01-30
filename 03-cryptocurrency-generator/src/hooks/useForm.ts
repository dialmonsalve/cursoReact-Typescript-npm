import { useEffect, useState } from 'react'

import { useApi, useSelectCoins } from './'
import { coins } from '../data/coins'


export const useForm = () => {

	const { consultApi, cryptos } = useApi();

	const [error, setError] = useState(false);
	const [ currency, SelectCoins ] = useSelectCoins('Quote your currency', coins);
	const [ cryptocurrency, SelectCryptocurrency ] = useSelectCoins('Quote your cryptocurrency', cryptos);

	useEffect(() => {

		consultApi();
	
	}, []);

	return {
		error,
		SelectCoins,
		SelectCryptocurrency,
		currency,
		cryptocurrency,
		setError
	};
};

