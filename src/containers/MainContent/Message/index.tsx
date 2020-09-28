import React from 'react';
import styled from 'styled-components/macro';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.message__title {
		font-weight: 900;
		font-size: 2rem;
		margin: 1rem 0;
		color: #333;
		@media screen and (max-width: 760px) {
			font-size: 1.5rem;
		}
	}
	.message__content {
		line-height: 1.3;
		color: #0006;
		font-weight: 400;
		max-width: 416px;
		text-align: center;
		margin-bottom: 1rem;
	}
`;

const Message = () => {
	return (
		<Section>
			<h1 className="message__title">Wow, this page is awesome!</h1>
			<p className="message__content">
				While you’re here, feast your eyes upon these tantalizing popular designs
				matching the color.
			</p>
		</Section>
	);
};

export default Message;
