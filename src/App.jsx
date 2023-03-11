import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<h1>Component Library</h1>
			<h2>Button</h2>
			<p>Set the button background and hover colors and text color.</p>
			<Button color="red" hoverColor="lightcoral" textColor="white">
				Click this button!
			</Button>
		</div>
	);
}

export default App;
