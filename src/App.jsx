import { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Lightbox from "./components/Lightbox/Lightbox";
import Table from "./components/Table/Table";

const tableData = {
	company: [
		"Alfreds Futterkiste",
		"Centro comercial Moctezuma",
		"Ernst Handel",
		"Island Trading",
		"Laughing Bacchus Winecellars",
		"Magazzini Alimentari Riuniti",
	],
	contact: [
		"Maria Anders",
		"Francisco Chang",
		"Roland Mendel",
		"Helen Bennett",
		"Yoshi Tannamuri",
		"Giovanni Rovelli",
	],
	country: ["Germany", "Mexico", "Austria", "UK", "Canada", "Italy"],
};

const lightboxImages = [
	{
		src: "https://unsplash.com/photos/aUs-A5JAUIs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NTM5ODI4&force=true&w=1920",
		id: "09214kkdf",
	},
	{
		src: "https://unsplash.com/photos/uibjjfZ5EYU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NTM5ODc2&force=true&w=1920",
		id: "98u32dss",
	},
	{
		src: "https://unsplash.com/photos/SYftntQLNNo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NTM5ODM4&force=true&w=1920",
		id: "98u3lkmfd",
	},
];

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleLightBox = () => {
		console.log(isOpen);
		setIsOpen(!isOpen);
	};

	return (
		<div className="App">
			<h1>Component Library</h1>
			<h2>Button</h2>
			<p>
				Set the button background and hover colors and text color, and a
				callback function for the onClick.
			</p>
			<Button
				color="red"
				hoverColor="lightcoral"
				textColor="white"
				onClick={() => alert("You have clicked the button")}
			>
				Click this button!
			</Button>
			<h2>Dropdown menu</h2>
			<p>
				Provide an array of objects with the keys value, item, id. Also a
				callback function for onChange.
			</p>
			<Dropdown
				items={[
					{ value: "volvo", item: "volvo", id: "jdau09213" },
					{ value: "saab", item: "saab", id: "098432jlkrew" },
					{ value: "audi", item: "audi", id: "098432jke" },
				]}
				onChange={(e) => {
					alert(`You have selected ${e.target.value}`);
				}}
			/>
			<h2>Table</h2>
			<p>
				Takes an object with columns and returns it as an HTML table with
				rows. An additional array is given to set the order of the columns
				from left to right.
			</p>
			<Table
				tableContents={tableData}
				columnOrder={["company", "contact", "country"]}
			/>
			<p>
				{"Example data taken from "}
				<a href="https://www.w3schools.com/html/html_tables.asp">
					W3 schools.
				</a>
			</p>
			<h2>LightBox</h2>
			<p>Provide an array of images with urls.</p>
			<Button
				onClick={toggleLightBox}
				/* 				color="rgb(75, 75, 75)"
				hoverColor="gray"
				textColor="white" */
			>
				Click to open lightbox
			</Button>
			{isOpen && (
				<Lightbox
					images={lightboxImages}
					setIsOpen={setIsOpen}
					toggleLightBox={toggleLightBox}
				/>
			)}
		</div>
	);
}

export default App;
