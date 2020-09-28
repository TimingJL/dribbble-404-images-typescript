import React from 'react';
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

interface ICollage {
	characters: string;
}

const Collage = ({ characters }: ICollage) => {
	const characterList = characters.split('');
	return (
		<Section data-testid="collage" size={characterList.length}>
			{characterList.map((character, index) => (
				<Character
					key={makeKey(character, index)}
					character={character}
					charId={index}
				/>
			))}
		</Section>
	);
};

export default Collage;
