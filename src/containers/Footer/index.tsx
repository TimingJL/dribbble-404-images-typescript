import React, { useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import InputSearch from './InputSearch';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 95px;
`;

const Footer = () => {
	const [isOnFocus, setIsOnFocus] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const handleOnChange = useCallback(
		event => {
			setInputValue(event.target.value);
		},
		[setInputValue]
	);
	const handleOnClearValue = useCallback(() => {
		setInputValue('');
	}, [setInputValue]);
	return (
		<Container>
			<InputSearch
				isOnFocus={isOnFocus}
				inputValue={inputValue}
				handleOnChange={handleOnChange}
				handleOnClearValue={handleOnClearValue}
				setIsOnFocus={setIsOnFocus}
			/>
		</Container>
	);
};

export default Footer;
