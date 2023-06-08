import './Button.css';

const Button = ({
	children,
	color = 'default',
	size = 'base',
	backgroundColor,
}) => {
	return (
		<button
			className={`${color} ${size}`}
			style={backgroundColor && { backgroundColor }}
		>
			{children}
		</button>
	);
};

export default Button;
