import styled from '@emotion/styled';

import { RESULT2 } from '../interfaces';

type Props = {
	resultApi: RESULT2;
}

const Container = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;
	display: flex;
	align-items: center;
`;

const Img = styled.img`
	display: block;
	width: 120px;
`;

const Text = styled.p`
	font-size: 18px;
	span{
		font-weight: 700;
	}
`;

const Price = styled.p`
	font-size: 24px;
	span{
		font-weight: 700;
	}
`;

export const Result = ({ resultApi }: Props) => {

	const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultApi;

	return (
		<Container>
			<Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image crypto" />
			<div>
				<Price>The price is: <span>{PRICE}</span></Price>
				<Text>Heist price of day <span>{HIGHDAY}</span></Text>
				<Text>Lowest price of day: <span>{LOWDAY}</span></Text>
				<Text>Variation since 24 hours <span>{CHANGEPCT24HOUR}</span></Text>
				<Text>Last Update: <span>{LASTUPDATE}</span></Text>
			</div>
		</Container>
	)
}
