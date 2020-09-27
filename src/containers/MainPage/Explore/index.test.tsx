import React from 'react';
import { render } from '@testing-library/react';
import Explore from './index';

describe('<Explore />', () => {
	test('should render Explore when rangeValue is in range', () => {
		const mockProps = {
			rangeValue: 50,
			handleOnDrag: () => {},
			handleOnMouseUp: () => {},
		};
		const { getByTestId } = render(<Explore {...mockProps} />);
		const explore = getByTestId('explore');
		expect(explore).toBeInTheDocument();
	});

	test('should render Explore when rangeValue is out of range', () => {
		const mockProps = {
			rangeValue: 200,
			handleOnDrag: () => {},
			handleOnMouseUp: () => {},
		};
		const { getByTestId } = render(<Explore {...mockProps} />);
		const explore = getByTestId('explore');
		expect(explore).toBeInTheDocument();
	});
});
