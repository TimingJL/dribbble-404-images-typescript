import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components/macro';
import Message from './Message';
import Collage from './Collage';
import Explore from './Explore';
import { convertLengthToColor } from 'containers/MainPage/Explore/utils';
import { CollageContext } from './context';

const Container = styled.main`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MainPage = () => {
	const defaultValue = 50;
	const defaultColor = convertLengthToColor(defaultValue, 100);
	const [pickedColor, setPickedColor] = useState(defaultColor);
	const [rangeValue, setRangeValue] = useState(defaultValue);
	const [characters] = useState('404');

	const handleOnMouseUp = useCallback(
		event => {
			const color = convertLengthToColor(Number(event.target.value), 100);
			setPickedColor(color);
		},
		[setPickedColor]
	);
	const handleOnDrag = useCallback(
		event => {
			setRangeValue(event.target.value);
		},
		[setRangeValue]
	);

	const messageMemo = useMemo(() => <Message />, []);
	const collageMemo = useMemo(() => <Collage characters={characters} />, [pickedColor]);

	return (
		<Container>
			{messageMemo}
			<CollageContext.Provider value={{ pickedColor, rangeValue }}>
				{collageMemo}
			</CollageContext.Provider>
			<Explore
				rangeValue={rangeValue}
				handleOnDrag={handleOnDrag}
				handleOnMouseUp={handleOnMouseUp}
			/>
		</Container>
	);
};

export default MainPage;
