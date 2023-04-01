import React from "react";
import styles from "./Table.module.css";

const DisplayTableBody = ({ tableContents, columnOrder }) => {
	for (let i = 0; i < 6; i++) {}
	const table = tableContents[columnOrder[0]].map((_, index) => (
		<tr key={index}>
			{columnOrder
				.map((colTitle) => tableContents[colTitle][index])
				.map((item, index) => (
					<td key={index}>{item}</td>
				))}
		</tr>
	));
	return <tbody>{table.map((row) => row)}</tbody>;
};

const Table = ({ tableContents, columnOrder }) => {
	return (
		<table>
			<thead>
				<tr>
					{columnOrder.map((title, index) => (
						<th key={index}>
							{title.charAt(0).toUpperCase() + title.slice(1)}
						</th>
					))}
				</tr>
			</thead>
			<DisplayTableBody
				tableContents={tableContents}
				columnOrder={columnOrder}
			/>
		</table>
	);
};

export default Table;
