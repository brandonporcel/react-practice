import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
	const [item, setItem] = useState(initialState);
	const toggle = useCallback(() => setItem((prevState) => !prevState), []);
	return [item, toggle];
};

export default useToggle;
