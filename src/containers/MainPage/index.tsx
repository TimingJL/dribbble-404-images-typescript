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
	const handleOnMouseUp = useCallback(event => {
		const color = convertLengthToColor(Number(event.target.value), 100);
		setPickedColor(color);
	}, []);
	const handleOnDrag = useCallback(
		event => {
			setRangeValue(event.target.value);
		},
		[setRangeValue]
	);

	const collageMemo = useMemo(() => <Collage />, [pickedColor]);

	return (
		<Container>
			<Message />
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
