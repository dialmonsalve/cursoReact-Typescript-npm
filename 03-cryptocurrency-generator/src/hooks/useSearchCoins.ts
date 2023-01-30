import { useState } from 'react';
import { PRICECURRENCY, RESULT2 } from "../interfaces";

type CURRENCIES = {
	currency: string;
	cryptocurrency: string;
}

export const useSearchCoins = () => {

	const [load, setLoad] = useState(false);
	const [currencies, setCurrency] = useState({} as CURRENCIES);
	const [resultApi, setResultApi] = useState<RESULT2>({} as RESULT2);

	const quoteCrypto = async () => {

		setLoad(true);
		setCurrency({} as CURRENCIES);

		const { currency, cryptocurrency } = currencies;

		const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

		const response = await fetch(url);
		const result: PRICECURRENCY = await response.json();
		setResultApi(result.DISPLAY[cryptocurrency][currency]);

		setLoad(false);
	}

	return {
		load,
		resultApi,
		currencies,
		quoteCrypto,
		setCurrency
	};
};
