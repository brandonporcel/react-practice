import { useState } from 'react';
const useForm = (initialState = {}) => {
	const [value, setValue] = useState(initialState);
	const reset = () => setValue(initialState);

	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};
	const handleCheckbox = (e) => {
		setValue({
			...value,
			[e.target.name]: {
				[e.target.value]: e.target.checked,
			},
		});
	};
	return [value, handleChange, reset, handleCheckbox];
};

export { useForm };
