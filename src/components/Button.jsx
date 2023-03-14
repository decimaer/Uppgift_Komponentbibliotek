import styles from "./Button.module.css";

const Button = ({ children, color, hoverColor, textColor, onClick }) => {
	const style = {
		backgroundColor: color,
		"--hoverColor": hoverColor,
		color: textColor,
	};
	return (
		<>
			<button className={styles.button} style={style} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
