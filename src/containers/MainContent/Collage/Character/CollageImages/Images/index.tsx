import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const getRandomSigned = () => [1, -1][Math.floor(Math.random() * 2)];
const getRandomInteger = (min: number, max: number) => Math.random() * (max - min) + min;

const transformAnimation = () => {
	const x = getRandomSigned() * 1000 * Math.random();
	const y = getRandomSigned() * 1000 * Math.random();
	const z = 100 * Math.random();
	const s = getRandomInteger(2, 10);
	return keyframes`
    0% {
      opacity: 0;
      transform: translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${s});
    }
    100% {
      opacity: 1;
      transform: translateZ(0px) scale(1);
    }
  `;
};

interface IStyledImages {
	position: number[];
	imageUrl: string;
	charId: number;
}

interface IImages {
	position: number[];
	imageUrl: string;
	color: string;
	charId: number;
}

const StyledImages = styled.div<IStyledImages>`
	position: absolute;
	width: 18%;
	height: 8%;
	border-radius: 5px;

	left: ${props => `${props.position[0]}%;`};
	top: ${props => `${props.position[1]}%;`};

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		z-index: 1;
		transform: scale(1.5);
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
		transition: all 0.1s ease-in-out;
	}

	animation: ${transformAnimation} ${props => props.charId * 0.5 + 1.5}s ease-in-out;
`;

const Images = ({ position, imageUrl, color, charId }: IImages) => {
	const imageStyle = {
		backgroundImage: `url(${imageUrl}), linear-gradient(${color}, ${color})`,
		backgroundBlendMode: 'multiply',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};
	return (
		<StyledImages
			style={imageStyle}
			position={position}
			imageUrl={imageUrl}
			color={color}
			charId={charId}
		/>
	);
};

export default Images;