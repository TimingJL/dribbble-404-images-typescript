import React from 'react';

interface ISearchIcon {
	className: string;
}

const SearchIcon = ({ className }: ISearchIcon) => (
	<svg
		className={className}
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0)">
			<circle cx="6.75" cy="6.75" r="5.75" strokeWidth="2"></circle>
			<path d="M11.5 11.5L15.5 15.5" strokeWidth="2"></path>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="16" height="16" fill="white"></rect>
			</clipPath>
		</defs>
	</svg>
);

export default SearchIcon;
