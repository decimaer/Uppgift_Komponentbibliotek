import styles from "./Button.module.css";

const Button = ({ children, color, hoverColor, textColor }) => {
	const style = {
		backgroundColor: color,
		"--hoverColor": hoverColor,
		color: textColor,
	};
	return (
		<>
			<button className={styles.button} style={style}>
				{children}
			</button>
		</>
	);
};

export default Button;
