import './Button.css';
import { useState } from 'react';

export const Button = ({
	children,
	color = 'default',
	size = 'base',
	backgroundColor,
}) => {
	const [message, setMessage] = useState('');

	const handleClick = () => {
		setMessage('clicked');
	};

	return (
		<button
			className={`${color} ${size}`}
			style={backgroundColor && { backgroundColor }}
			onClick={handleClick}
		>
			{children} {message}
		</button>
	);
};
