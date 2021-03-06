import React, { useContext, useMemo } from 'react';
import styled from 'styled-components/macro';
import { imagePositions, imagePool } from './constants';
import Images from './Images';
import { CollageContext } from 'containers/MainContent/context';

const getRandomImage = () => imagePool[Math.floor(Math.random() * imagePool.length)];
const makeKey = (position: number[]) => `key_${position[0]}-${position[1]}`;

interface ICollageImages {
	character: string;
	charId: number;
}

const Container = styled.div`
	position: absolute;
	top: 0px;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
`;

const CollageImages = ({ character, charId }: ICollageImages) => {
	const positions = imagePositions[character];
	const { pickedColor } = useContext(CollageContext);
	return useMemo(
		() => (
			<Container>
				{positions.map((position: number[]) => {
					return (
						<Images
							key={makeKey(position)}
							position={position}
							imageUrl={getRandomImage()}
							color={pickedColor}
							charId={charId}
						/>
					);
				})}
			</Container>
		),
		[pickedColor, charId, positions]
	);
};

export default CollageImages;
