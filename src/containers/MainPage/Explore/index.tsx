import React, { useCallback, useState } from 'react';
import styled from 'styled-components/macro';
import {
	SIZE_THUMB,
	COLOR_RED,
	COLOR_YELLOW,
	COLOR_GREEN,
	COLOR_BLUE_LIGHT,
	COLOR_BLUE_DARK,
	COLOR_PURPLE,
} from './constants';
import { convertLengthToColor } from './utils';

const Container = styled.div`
	margin-top: 32px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 0;
	input[type='range'] {
		-webkit-appearance: none;
		background: linear-gradient(
			to right,
			${COLOR_RED},
			${COLOR_YELLOW},
			${COLOR_GREEN},
			${COLOR_BLUE_LIGHT},
			${COLOR_BLUE_DARK},
			${COLOR_PURPLE},
			${COLOR_RED}
		);
		width: 320px;
		height: 6px;
		border-radius: 5px;
		outline: none;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: ${SIZE_THUMB}px;
		height: ${SIZE_THUMB}px;
		border-radius: 50%;
		border: 2px solid white;
		background: white;
		border: 0.4em solid ${props => props.color};
		cursor: pointer;
	}
`;

const Explore = () => {
	const defaultValue = 50;
	const defaultColor = convertLengthToColor(defaultValue, 100);
	const [pickedColor, setPickedColor] = useState(defaultColor);
	const handleOnDrag = useCallback(event => {
		const color = convertLengthToColor(Number(event.target.value), 100);
		setPickedColor(color);
	}, []);
	return (
		<Container color={pickedColor}>
			<input
				type="range"
				min="0"
				max="100"
				defaultValue={defaultValue}
				onChange={handleOnDrag}
			/>
		</Container>
	);
};

export default Explore;
