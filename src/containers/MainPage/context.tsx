import { createContext } from 'react';

interface ICollageContext {
	pickedColor: string;
	rangeValue: number;
}

export const CollageContext = createContext({} as ICollageContext);
