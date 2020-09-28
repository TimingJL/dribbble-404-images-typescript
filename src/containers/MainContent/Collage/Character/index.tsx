import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import CollageImages from './CollageImages';

const invisibleAnimation = keyframes`
  0% {
    color: #eee;
  }
  100% {
    color: white;
    opacity: 0;
  }
`;

const Container = styled.div`
	position: relative;
	perspective: 500px; /* Give a 3D-positioned element some perspective */
`;

const BackgroundShape = styled.h1`
	color: #eee;
	animation: ${invisibleAnimation} 1.5s ease-in;
	animation-fill-mode: forwards; /* 保持動畫結束後的狀態 */
`;

interface ICharacter {
	character: string;
	charId: number;
}

const Character = ({ character, charId }: ICharacter) => {
	return (
		<Container data-testid="character">
			<BackgroundShape>{character}</BackgroundShape>
			<CollageImages character={character} charId={charId} />
		</Container>
	);
};

export default Character;
