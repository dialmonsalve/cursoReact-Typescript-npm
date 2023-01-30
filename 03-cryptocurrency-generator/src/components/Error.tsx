import styled from '@emotion/styled';

const Text = styled.div`
	background-color: #B7322C;
	color: #FFF;
	padding: 15px;
	font-size: 22px;
	text-transform: uppercase;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	text-align: center;
`;

type Props ={
	children:string
};

export const Error = ({children}:Props) => {
	return (
		<Text>{children}</Text>
	);
};
