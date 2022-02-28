import Footer from './Footer';
import Header from './Header';
import theme from '../theme';

import './styles.css';

import {
	Box,
	Center,
	ColorModeScript,
	Flex,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
					<Center
						p="4"
						bg="blackAlpha.200"
						minH={'300px'}
						flexDirection="column"
					>
						<Text>I wanted practice</Text>
						<UnorderedList>
							<ListItem>Chakra</ListItem>
							<ListItem>Portals</ListItem>
							<ListItem>Css Modules</ListItem>
							<ListItem>useReducer, useMemo, useCallback</ListItem>
							<ListItem>Custom Hooks</ListItem>
							<ListItem>Reduce</ListItem>
						</UnorderedList>
					</Center>
				</Box>
				<Footer />
			</Box>
		</>
	);
}
