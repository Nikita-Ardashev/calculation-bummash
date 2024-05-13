import { CSSProperties, HTMLInputTypeAttribute } from 'react';

import { TDiscCalcParameters } from '../../../../types/types';

export interface IField {
	placeholder: string;
	name: TDiscCalcParameters;
	img?: string;
	value?: string;
	className?: string;
	style?: CSSProperties;
}
