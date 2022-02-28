import { Text } from '@chakra-ui/react';
import React from 'react';
import './styles.css';
export default function GoogleInput({ form, handleChange }) {
	return (
		<div className="input-wrapper">
			<input
				className="input"
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
				type="text"
				data-placeholder="E-mail"
				required
				name="mail"
				style={{ color: 'initial' }}
				placeholder=" "
				value={form.mail}
				onChange={handleChange}
			/>
			<Text as="span" className="placeholder">
				E-mail
			</Text>
		</div>
	);
}
