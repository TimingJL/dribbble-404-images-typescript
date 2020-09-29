import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const transformAnimation = () => {
	const x = 0 * Math.random();
	const y = 0 * Math.random();
	const z = 1000 * Math.random();
	return keyframes`
    0% {
      opacity: 0;
			transform: translateZ(${x}px) translateZ(${y}px) translateZ(${z}px) scale(2);
    }
    100% {
      opacity: 1;
      transform: translateZ(0px);
    }
  `;
};

interface IStyledImages {
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

	background-blend-mode: multiply;
	background-size: cover;
	background-position: center;

	cursor: pointer;
	transition: all 0.1s ease-in-out;

	&:hover {
		z-index: 1;
		transform: scale(1.5);
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
		transition: all 0.1s ease-in-out;
	}

	animation: ${transformAnimation} ${props => props.charId + 1}s ease-in-out;
`;

const Images = ({ position, imageUrl, color, charId }: IImages) => {
	const imageStyle = {
		backgroundImage: `url(${imageUrl}), linear-gradient(${color}, ${color})`,
		left: `${position[0]}%`,
		top: `${position[1]}%`,
	};
	return <StyledImages style={imageStyle} charId={charId} />;
};

export default Images;
