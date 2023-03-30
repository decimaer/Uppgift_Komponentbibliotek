import { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Lightbox from "./components/Lightbox";

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
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const lightboxRef = useRef(null);

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
			<h2>LightBox</h2>
			<p>Provide an array of images with urls.</p>
			<Button
				onClick={toggleLightBox}
				color="rgb(75, 75, 75)"
				hoverColor="gray"
				textColor="white"
			>
				Click to open lightbox
			</Button>
			{isOpen && (
				<Lightbox
					// isLightboxOpen={isLightboxOpen}
					images={lightboxImages}
					lightboxRef={lightboxRef}
					setIsOpen={setIsOpen}
				/>
			)}
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
		</div>
	);
}

export default App;
