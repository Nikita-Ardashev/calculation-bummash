import React from 'react';

interface ITableRow {
	name: string;
	values: string[];
}

const TableRow = ({ name, values }: ITableRow): React.JSX.Element => {
	return (
		<tr>
			<th scope='row'>{name}</th>
			{values.map((v, i) => {
				return (
					<th key={v + i}>
						{v === null || Number(v) === 0
							? '-'
							: typeof v === 'number'
								? Math.round(Number(v) * 1000) / 1000
								: v}
					</th>
				);
			})}
		</tr>
	);
};

export default TableRow;
