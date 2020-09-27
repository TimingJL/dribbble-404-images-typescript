import React from 'react';
import styled from 'styled-components/macro';
import Message from './Message';
import Collage from './Collage';
import Explore from './Explore';

const Container = styled.main`
	flex: 1 1 auto;
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
