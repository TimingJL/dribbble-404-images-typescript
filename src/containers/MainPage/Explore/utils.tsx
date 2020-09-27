import { COLOR_RED } from './constants';

export const convertLengthToColor = (length: number, width: number) => {
	const intervalWidth = width / 6;
	const value = length / intervalWidth;
	const valueFloor = Math.floor(value);
	const deltaValue = (16 * (value - valueFloor)).toString(16).replace('.', '');
	const hexStr =
		deltaValue.length > 1 ? `${deltaValue[0]}${deltaValue[1]}` : `${deltaValue[0]}0`;
	if (valueFloor === 0) {
		return `#ff${hexStr}00`;
	}
	if (valueFloor === 1) {
		const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
		const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
		return `#${updatedR}ff00`;
	}
	if (valueFloor === 2) {
		return `#00ff${hexStr}`;
	}
	if (valueFloor === 3) {
		const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
		const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
		return `#00${updatedR}ff`;
	}
	if (valueFloor === 4) {
		return `#${hexStr}00ff`;
	}
	if (valueFloor === 5) {
		const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
		const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
		return `#ff00${updatedR}`;
	}
	return COLOR_RED;
};
