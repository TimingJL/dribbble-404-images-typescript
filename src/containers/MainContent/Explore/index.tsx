import React from 'react';
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
import { convertLengthToColor } from 'containers/MainContent/Explore/utils';

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
		transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
		&:hover {
			transform: scale(1.1);
			box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.15);
		}
		&:active {
			cursor: grabbing;
			transform: scale(0.975);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
			border: 1.5em solid ${props => props.color};
		}
	}
`;

interface IExplore {
	rangeValue: number;
	handleOnDrag: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnMouseUp: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Explore = ({ rangeValue, handleOnDrag, handleOnMouseUp }: IExplore) => {
	const pickedColor = convertLengthToColor(rangeValue % 101, 100);
	return (
		<Container data-testid="explore" color={pickedColor}>
			<input
				type="range"
				min="0"
				max="100"
				onChange={handleOnDrag}
				onMouseUp={handleOnMouseUp}
			/>
		</Container>
	);
};

export default Explore;
