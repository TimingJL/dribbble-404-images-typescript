import React from 'react';
import { render } from '@testing-library/react';
import Collage from './index';

describe('<Collage />', () => {
	test('should render correct number of Character in Collage', () => {
		const mockProps = {
			characters: '404',
		};
		const { getByTestId } = render(<Collage {...mockProps} />);
		const collage = getByTestId('collage');
		const characters = collage.querySelectorAll("[data-testid='character']");
		expect(characters.length).toBe(mockProps.characters.length);
	});
});
