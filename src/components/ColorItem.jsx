import { Box, GridItem } from '@chakra-ui/react';
import React from 'react';
import useToggle from '../hooks/useToggle';

function ColorItem({ moduleStyles, background }) {
	const [like, toggle] = useToggle();
	return (
		<Box>
			<GridItem h="150px" bg={background} />
			<span
				onClick={toggle}
				className={`${moduleStyles.heart} ${
					like === true ? moduleStyles.heartAnimation : ''
				}`}
			></span>
		</Box>
	);
}
export default React.memo(ColorItem);
