import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './index';

describe('<Navigation />', () => {
	test('should render Navigation', () => {
		const { getByTestId } = render(<Navigation />);
		const navbarContainer = getByTestId('navigation');
		expect(navbarContainer).toBeInTheDocument();
	});
});
