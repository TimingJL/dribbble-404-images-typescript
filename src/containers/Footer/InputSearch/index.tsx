import React from 'react';
import styled from 'styled-components/macro';
import SearchIcon from 'components/icons/SearchIcon';
import CancelIcon from 'components/icons/CancelIcon';

interface IInputSearchContainer {
	isOnFocus: boolean;
	inputValue: string;
}

const InputSearchContainer = styled.div<IInputSearchContainer>`
	display: flex;
	align-items: center;
	width: 280px;
	height: 30px;
	border-radius: 50px;
	transition: background 0.2s;
	.input-search__cancel-icon {
		width: 36px;
		height: 16px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		visibility: hidden;
	}
	.input-search__search-icon {
		width: 30px;
		stroke: #0006;
	}
	.input-search__search-box-container {
		color: #0006;
		flex: 1 1 auto;
		padding: 0px 6px;
	}
	&:hover {
		.input-search__cancel-icon {
			visibility: ${props => (props.inputValue ? 'visible' : 'hidden')};
		}
		${props => {
			if (props.isOnFocus) {
				return `
        background: white;`;
			}
			return 'background: #e3e7e9;';
		}}
	}
	${props => {
		if (props.isOnFocus) {
			return `
      .input-search__cancel-icon {
        visibility: ${props.inputValue ? 'visible' : 'hidden'};
      }
      border: 2px solid #ea4c89;`;
		}
		return 'background: #f1f3f4;';
	}}
`;

const InputSearchBox = styled.input`
	border: none;
	outline: none;
	background-color: rgba(0, 0, 0, 0);
	width: 100%;
`;

interface IInputSearch {
	isOnFocus: boolean;
	inputValue: string;
	handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnClearValue: () => void;
	setIsOnFocus: (value: boolean) => void;
}

const InputSearch = ({
	isOnFocus,
	inputValue,
	handleOnChange,
	handleOnClearValue,
	setIsOnFocus,
}: IInputSearch) => (
	<InputSearchContainer
		isOnFocus={isOnFocus}
		inputValue={inputValue}
		data-testid="input-search"
	>
		<SearchIcon className="input-search__search-icon" />
		<div className="input-search__search-box-container">
			<InputSearchBox
				placeholder="Search for design or designers"
				onFocus={() => setIsOnFocus(true)}
				onBlur={() => setIsOnFocus(false)}
				onChange={handleOnChange}
				value={inputValue}
			/>
		</div>
		<div data-testid="cancel-icon">
			<CancelIcon
				className="input-search__cancel-icon"
				onClick={handleOnClearValue}
			/>
		</div>
	</InputSearchContainer>
);

export default InputSearch;
