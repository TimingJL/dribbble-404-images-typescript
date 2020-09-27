import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import Navigation from 'containers/Navigation';
import MainPage from 'containers/MainPage';
import Footer from 'containers/Footer';
import GithubCorner from 'react-github-corner';

const FullScreenContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const App = () => {
	const navigationMemo = useMemo(() => <Navigation />, []);
	return (
		<>
			<FullScreenContainer>
				{navigationMemo}
				<MainPage />
				<Footer />
			</FullScreenContainer>
			<GithubCorner href="https://github.com/TimingJL/dribbble-404-images-typescript" />
		</>
	);
};

export default App;
