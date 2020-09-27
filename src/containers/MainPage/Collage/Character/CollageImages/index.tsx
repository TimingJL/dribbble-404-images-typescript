import React from 'react';
import styled from 'styled-components/macro';
import { imagePositions, imagePool } from './constants';
import Images from './Images';

const getRandomImage = () => imagePool[Math.floor(Math.random() * imagePool.length)];

interface ICollageImages {
	character: string;
}

const Container = styled.div`
	position: absolute;
	top: 0px;
	width: 100%;
	height: 100%;
	perspective: 500px; /* Give a 3D-positioned element some perspective */
`;

const CollageImages = ({ character }: ICollageImages) => {
	const positions = imagePositions[character];
	return (
		<Container>
			{positions.map(position => (
				<Images
					key={position}
					position={position}
					imageUrl={getRandomImage()}
					color={'#f04'}
				/>
			))}
		</Container>
	);
};

export default CollageImages;
