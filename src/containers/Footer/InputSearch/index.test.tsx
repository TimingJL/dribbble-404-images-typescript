import React from 'react';
import { render } from '@testing-library/react';
import InputSearch from './index';

describe('<InputSearch />', () => {
	test('should render InputSearch', () => {
		const mockProps = {
			isOnFocus: false,
			inputValue: '',
			handleOnChange: () => {},
			handleOnClearValue: () => {},
			setIsOnFocus: () => {},
		};
		const { getByTestId } = render(<InputSearch {...mockProps} />);
		const inputSearch = getByTestId('input-search');
		expect(inputSearch).toBeInTheDocument();
	});

	test('should render CancelIcon', () => {
		const mockProps = {
			isOnFocus: false,
			inputValue: '',
			handleOnChange: () => {},
			handleOnClearValue: () => {},
			setIsOnFocus: () => {},
		};
		const { getByTestId } = render(<InputSearch {...mockProps} />);
		const cancelIconContainer = getByTestId('cancel-icon');
		expect(cancelIconContainer).toBeInTheDocument();
	});
});
