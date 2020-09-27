import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const signed = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const getRandomArbitrary = (min: number, max: number) =>
	Math.random() * (max - min) + min;

const transformAnimation = () => {
	const x = signed() * 1000 * Math.random();
	const y = signed() * 1000 * Math.random();
	const z = 100 * Math.random();
	const s = getRandomArbitrary(2, 10);
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
	position: any;
	imageUrl: string;
}

interface IImages {
	position: any;
	imageUrl: string;
	color: string;
}

const StyledImages = styled.div<IStyledImages>`
	position: absolute;
	width: 18%;
	height: 8%;
	border-radius: 5px;

	background-image: url(${props => props.imageUrl}),
		linear-gradient(${props => props.color}, ${props => props.color});
	background-blend-mode: multiply;
	background-size: cover;
	background-position: center;

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

	animation: ${() => transformAnimation()} 2s ease-in-out;
`;

const Images = ({ position, imageUrl, color }: IImages) => {
	return <StyledImages position={position} imageUrl={imageUrl} color={color} />;
};

export default Images;
