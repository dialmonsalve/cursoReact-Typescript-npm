import styled from '@emotion/styled';

import { Form, Result } from './';
import { Spinner } from './Spinner';
import ImagenCripto from '../assets/imagen-criptos.png';
import { useHeader } from '../hooks';

const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
};
`

const Heading = styled.h1`
	font-family: 'lato', sans-serif;
	color: #FFF;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after{
		content:'';
		width: 100px;
		height: 6px;
		background-color: #66A2FE;
		display:block;
		margin: 10px auto 0
};
`

const Image = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
	`

export const Header = () => {

	const { load, onNewSearch, resultApi } = useHeader();

	return (
		<Container>
			<Image
				src={ImagenCripto}
				alt="Cryptocurrency Image"
			/>
			<div>
				<Heading>Quote cryptocurrencies instantly</Heading>
				<Form
					onNewSearch={onNewSearch}
				/>
				{load && <Spinner />}
				{resultApi.PRICE && <Result resultApi={resultApi} />}

			</div>
		</Container>
	);
};
