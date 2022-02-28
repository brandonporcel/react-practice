import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function NotFound() {
	return (
		<>
			<Box
				w={{ base: '100%', sm: '75%', xl: '50%' }}
				m="auto"
				p={{ base: '0 10px', sm: '0' }}
				d="flex"
				flexDirection={'column'}
				justifyContent={'space-between'}
				h="100vh"
			>
				<Header />
				<img src={require('../images/urban-line-404-1.png')} alt="" />
				<Footer />
			</Box>
		</>
	);
}
