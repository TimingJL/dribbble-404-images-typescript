import { COLOR_RED } from './constants';

export const convertLengthToColor = (length: number, width: number) => {
	const intervalWidth = width / 6;
	const value = length / intervalWidth;
	const valueFloor = Math.floor(value);
	const deltaValue = (16 * (value - valueFloor)).toString(16).replace('.', '');
	const hexStr =
		deltaValue.length > 1 ? `${deltaValue[0]}${deltaValue[1]}` : `${deltaValue[0]}0`;
	const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
	const colors = {
		0: `#ff${hexStr}00`,
		1: (() => {
			const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
			return `#${updatedR}ff00`;
		})(),
		2: `#00ff${hexStr}`,
		3: (() => {
			const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
			return `#00${updatedR}ff`;
		})(),
		4: `#${hexStr}00ff`,
		5: (() => {
			const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
			return `#ff00${updatedR}`;
		})(),
	};
	return valueFloor < 6 ? colors[valueFloor] : COLOR_RED;
};
