import React from 'react';

interface ICharacter {
	character: string;
}

const Character = ({ character }: ICharacter) => {
	return <div>{character}</div>;
};

export default Character;
