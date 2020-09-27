import React from 'react';
import styled from 'styled-components/macro';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 32px;
`;

const Banner = styled.a`
	font-family: 'Pacifico', cursive;
	font-size: 26px;
	text-decoration: none;
	color: #bebebe;
`;

const Navigation = () => {
	return (
		<Nav data-testid="navigation">
			<Banner href={'https://www.cakeresume.com/taiming'} target="_blank">
				Taiming
			</Banner>
		</Nav>
	);
};

export default Navigation;
