import { Box, Grid, Tag, Text } from '@chakra-ui/react';
import React, { useEffect, useReducer } from 'react';
import { TYPES } from '../actions/practice.actions';
import { practiceReact } from '../reducers/practice.reducer';
import moduleStyles from './styles.module.css';
import ColorItem from './ColorItem';
import Footer from './Footer';
import Header from './Header';
import colorsJson from '../api/colors.JSON';
import { useFetch } from '../hooks/useFetch';
const tags = ['All', 'Cold', 'Warm'];
export default function Colors() {
	const url = colorsJson;
	const [data, loader, error] = useFetch(url);
	const initialState = [];
	const [state, dispatch] = useReducer(practiceReact, initialState);

	useEffect(() => {
		dispatch({ type: TYPES.READ_ITEMS, payload: data });
	}, [data]);
	const readColdColors = (type) => {
		dispatch({
			type: TYPES.READ_COLORS_TYPE,
			payload: { data, type },
		});
	};

	return (
		<Box
			w={{ base: '100%', sm: '75%', xl: '50%' }}
			m="auto"
			p={{ base: '0 10px', sm: '0' }}
			flexDirection={'column'}
			justifyContent={'space-between'}
			h="100vh"
		>
			<Header />
			<Box as="main">
				<Box border="1px" p="5">
					<Text fontSize="4xl" as="u" d="block" mb="5">
						Colors
					</Text>
					<Box>
						{tags.map((el, i) => {
							return (
								<Tag
									colorScheme="teal"
									role="button"
									mr="2"
									key={i}
									onClick={(e) => readColdColors(e.target.textContent)}
								>
									{el}
								</Tag>
							);
						})}
						<Grid
							mt="5"
							templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
							gap={6}
						>
							{loader === false
								? state.map((el, i) => {
										if (state.length > 0) {
											return (
												<ColorItem
													key={i}
													background={el.name}
													moduleStyles={moduleStyles}
												/>
											);
										} else {
											return 'hola';
										}
								  })
								: 'Loading...'}
						</Grid>
					</Box>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
