import styles from "./Button.css";

const Button = ({ children, color, hoverColor, textColor }) => {
	const style = {
		backgroundColor: color,
		"--hoverColor": hoverColor,
		color: textColor,
	};
	return (
		<>
			<button style={style}>{children}</button>
		</>
	);
};

export default Button;
