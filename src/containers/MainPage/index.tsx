import React from 'react';
import styled from 'styled-components/macro';
import Message from './Message';
import Collage from './Collage';
import Explore from './Explore';

const Container = styled.main`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const MainPage = () => {
	return (
		<Container>
			<Message />
			<Collage />
			<Explore />
		</Container>
	);
};

export default MainPage;
