import styles from "./Button.module.css";

const Button = ({ children, color, hoverColor, textColor, onClick }) => {
	const style = {
		"--backgroundColor": color ? color : "dimgray",
		"--hoverColor": hoverColor ? hoverColor : "gray",
		"--textColor": textColor ? textColor : "white",
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
