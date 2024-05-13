import './App.styl';

import React, { useState } from 'react';

import iconCalc from './assets/img/calculation.svg';
import iconDiscFirst from './assets/img/disc1.jpeg';
import iconDiscSecond from './assets/img/disc2.jpeg';
import iconDiscThrid from './assets/img/disc3.jpeg';
import iconReverseArrow from './assets/img/reverseArrow.svg';
import { IField } from './assets/ui/field/model/types';
import Form from './assets/ui/form/form';
import Table from './assets/ui/table/table';
import { IDiscCalc } from './types/types';

const toFirstUpper = (name: string): string => {
	const nameArr = name.split('');
	const firstUpper = nameArr.shift()?.toUpperCase();
	const newName = firstUpper + nameArr.join('');
	return newName;
};

const calcFields: IField[] = [
	{ placeholder: 'Высота mm', name: 'height' },
	{ placeholder: 'Диаметр mm', name: 'diameterDisc' },
	{ placeholder: 'Диаметр отверстия mm', name: 'diameterHole' },
];

const url = new URL(window.location.href);
const searchParams = url.searchParams;
const isHasSearchParams = searchParams.toString() === '' ? false : true;
const App = (): React.JSX.Element => {
	const [isError, setError] = useState<boolean>(false);
	const calc = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const formFields = [...(e.currentTarget.closest('#form') as HTMLFormElement).elements] as HTMLInputElement[];
		formFields.pop();
		const formFieldsValue: Record<string, number> = {};
		formFields.forEach((f) => {
			const name = toFirstUpper(f.name);
			const value = f.value;
			Object.assign(formFieldsValue, { [name]: value });
		});
		await fetch('disc/calc', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...formFieldsValue }),
		})
			.then((res) => {
				return res.text();
			})
			.then((res) => {
				const r = JSON.parse(res);
				const result = r as IDiscCalc[];
				if (r['status'] === 400 || result[2].newHeight > result[2].newDiameter) {
					setError(true);
					return;
				}
				setError(false);
				const rEncode = encodeURIComponent(JSON.stringify(r));
				const newURL = new URL(window.location.href);
				const searchParams = newURL.searchParams;
				searchParams.set('data', rEncode);
				window.open(newURL);
			})
			.catch((e) => {
				console.error(e);
			});
	};
	return (
		<>
			<header>
				<a href='/'>
					<img src={iconCalc} alt='' />
				</a>
				<h1>Модель расчета поковок раскатного кольца</h1>
			</header>
			<main>
				{isHasSearchParams ? (
					<Table data={JSON.parse(decodeURIComponent(searchParams.get('data') ?? ''))} />
				) : (
					<div>
						<div className='form-calc'>
							<Form onSubmit={calc} fields={calcFields} isError={isError} />
							<ul>
								<p>Требования!</p>
								<li>100 мм ≤ Высота ≤ 2500 мм</li>
								<li>0 мм ≤ Диаметр ≤ 2 500 мм</li>
								<li>Диаметр отверстия {'<'} Высота</li>
							</ul>
						</div>
						<div className='next-result'>
							<img src={iconReverseArrow} alt='' />
						</div>
						<div className='images'>
							<img src={iconDiscThrid} alt='' />
							<div>
								<img src={iconDiscSecond} alt='' />
								<img src={iconDiscFirst} alt='' />
							</div>
						</div>
					</div>
				)}
			</main>
		</>
	);
};

export default App;
