import { useEffect } from 'react';
import { useSearchCoins } from './';

type CURRENCIES = {
	currency: string;
	cryptocurrency: string;
}
export const useHeader = () => {

	const {	load,	resultApi, quoteCrypto, currencies, setCurrency} =useSearchCoins();
	
	useEffect(() => {
		if (Object.keys(currencies).length > 0) {
			quoteCrypto();
		}
	}, [currencies]);

	const onNewSearch = (currencies: CURRENCIES) => {
		setCurrency(currencies);
	}

	return {
		onNewSearch,
		resultApi,
		load
	};
};