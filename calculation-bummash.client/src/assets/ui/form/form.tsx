import './form.styl';

import React from 'react';

import iconCalc from '../../../assets/img/calculation.svg';
import Field from '../field/field';
import { IField } from '../field/model/types';

interface IForm {
	textSubmit?: string;
	imgSubmit?: string;
	onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
	fields: IField[];
	isError?: boolean;
}

const Form = ({
	fields,
	onSubmit,
	textSubmit = 'Рассчитать',
	imgSubmit = iconCalc,
	isError = false,
}: IForm): React.JSX.Element => {
	return (
		<form method='post' className='form' id='form'>
			<div className='form__fields'>
				{fields.map((f, i) => {
					return <Field {...f} key={f.name + i} />;
				})}
				{isError && <p>Данные введены неверно!</p>}
			</div>
			<button type='button' onClick={onSubmit}>
				<p>{textSubmit}</p>
				<img src={imgSubmit} alt='' />
			</button>
		</form>
	);
};

export default Form;
