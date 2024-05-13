import './field.styl';

import React from 'react';

import { IField } from './model/types';

const Field = ({ img, placeholder, value, className = '', style, name }: IField): React.JSX.Element => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const ct = e.currentTarget;

		if (Number(ct.value) <= 0) {
			ct.value = '1';
		}
	};
	return (
		<label className={`form-field ${className}`} style={style}>
			<input type='number' value={value} name={name} onChange={onChange} placeholder={placeholder} />
			{img ? <img src={img} alt='' /> : null}
		</label>
	);
};

export default Field;
