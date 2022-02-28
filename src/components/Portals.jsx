import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useModal } from '../hooks/useModal';
import Footer from './Footer';
import Header from './Header';
import PopUp from './PopUp';

export default function Portals() {
	const [isOpenModal, openModal, closeModal] = useModal(false);
	return (
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
			<Box as="main">
				<Button onClick={openModal}>Modal</Button>
				<PopUp isOpen={isOpenModal} closeModal={closeModal}>
					<h6>Hii</h6>
					<small>👋</small>
				</PopUp>
			</Box>
			<Footer />
		</Box>
	);
}
