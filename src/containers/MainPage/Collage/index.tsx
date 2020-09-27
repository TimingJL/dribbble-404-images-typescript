import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Character from './Character';

interface ISection {
	size: number;
}

const Section = styled.section<ISection>`
	display: flex;
	font-weight: 900;
	font-size: ${props => 90 / props.size}vw;
`;

const makeKey = (character: string, index: number) => `character-${character}_${index}`;

const Collage = () => {
	const [characters] = useState('404');
	const characterList = characters.split('');

	return (
		<Section size={characterList.length}>
			{characterList.map((character, index) => (
				<Character key={makeKey(character, index)} character={character} />
			))}
		</Section>
	);
};

export default Collage;
