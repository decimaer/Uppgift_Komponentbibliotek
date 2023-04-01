import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
	//Background Color
	it("renders button element with correct background color", () => {
		render(<Button color="red" />);

		const button = screen.getByRole("button");

		expect(window.getComputedStyle(button)._values["--backgroundColor"]).toBe(
			"red"
		);

		screen.debug();
	});

	// Text Color
	it("renders button element with correct text color", () => {
		render(<Button textColor="red" />);

		const button = screen.getByRole("button");

		expect(window.getComputedStyle(button)._values["--textColor"]).toBe(
			"red"
		);

		screen.debug();
	});

	// Hover
	it("renders button element with correct hover color, when button is hovered", async () => {
		render(<Button hoverColor="red" />);
		const button = screen.getByRole("button");

		await userEvent.hover(button);

		expect(window.getComputedStyle(button)._values["--hoverColor"]).toBe(
			"red"
		);
		screen.debug();
	});

	// Text Content
	it("renders button with correct text content", () => {
		render(<Button>Text</Button>);

		const button = screen.getByRole("button");
		console.log(
			getComputedStyle(button).getPropertyValue("background-color")
		);

		expect(screen.getByText("Text")).toBeInTheDocument();

		screen.debug();
	});
});
