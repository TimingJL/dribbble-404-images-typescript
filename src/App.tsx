import React from 'react';
import styled from 'styled-components/macro';
import Navigation from 'containers/Navigation';
import MainPage from 'containers/MainPage';
import Footer from 'containers/Footer';

const FullScreenContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const App = () => {
	return (
		<FullScreenContainer>
			<Navigation />
			<MainPage />
			<Footer />
		</FullScreenContainer>
	);
};

export default App;
