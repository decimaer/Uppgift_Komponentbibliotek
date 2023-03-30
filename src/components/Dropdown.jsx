import React from "react";

const Dropdown = ({ items, onChange }) => {
	return (
		<>
			<label>
				<select onChange={onChange}>
					{items.map((item) => {
						return (
							<option value={item.value} key={item.id}>
								{item.item}
							</option>
						);
					})}
				</select>
			</label>
		</>
	);
};

export default Dropdown;
