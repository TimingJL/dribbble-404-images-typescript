import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Character from './Character';

const Section = styled.section`
	display: flex;
`;

const makeKey = (character: string, index: number) => `character-${character}_${index}`;

const Collage = () => {
	const [characters] = useState('404');
	const characterList = characters.split('');

	return (
		<Section>
			{characterList.map((character, index) => (
				<Character key={makeKey(character, index)} character={character} />
			))}
		</Section>
	);
};

export default Collage;
