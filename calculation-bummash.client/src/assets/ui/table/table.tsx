import './table.styl';

import React from 'react';

import { IDiscCalc } from '@/types/types';

import TableRow from '../tableRow/tableRow';

interface ITable {
	data: IDiscCalc[];
}

interface MappedData {
	D: IDiscCalc['newDiameter'];
	r: IDiscCalc['newDiameter'];
	H: IDiscCalc['newHeight'];
	V: string;
	'Диск мм': IDiscCalc['milimeterDisc'];
	'Диск с отв мм': IDiscCalc['milimeterDiscWithHole'];
	Сферичность: IDiscCalc['sphericity'];
	'Масса общая кг': IDiscCalc['weight'];
}

const Table = ({ data }: ITable): React.JSX.Element => {
	const mappedData: MappedData[] = data.map((item) => ({
		D: item.newDiameter,
		r: item.newDiameter / 2,
		H: item.newHeight,
		V: item.volume.toExponential(1),
		'Диск мм': item.milimeterDisc,
		'Диск с отв мм': item.milimeterDiscWithHole,
		Сферичность: item.sphericity,
		'Масса общая кг': item.weight / 100000000,
	}));
	const columnNames = Object.keys(mappedData[0]);
	return (
		<div className='table'>
			<table border={2}>
				<caption>
					<p>Модель расчета поковок раскатного кольца</p>
				</caption>
				<thead>
					<tr>
						<th scope='col'></th>
						{columnNames.map((n, i) => {
							return (
								<th key={n + i} scope='col'>
									{n}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<TableRow name='Диск номинал' values={Object.values(mappedData[2])} />
					<TableRow name='Диск максимал' values={Object.values(mappedData[3])} />
					<TableRow name='Отверстие номинал' values={Object.values(mappedData[0])} />
					<TableRow name='Отверстие максимал' values={Object.values(mappedData[1])} />
				</tbody>
			</table>
		</div>
	);
};

export default Table;
