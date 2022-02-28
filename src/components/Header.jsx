import {
	Box,
	Button,
	Flex,
	Spacer,
	textDecoration,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import './styles.module.css';
export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const sectionsNav = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Colors',
			path: '/colors',
		},
		{
			name: 'Form',
			path: '/form',
		},
		{
			name: 'Portals',
			path: '/portals',
		},
		{
			name: 'random',
			path: '/a',
		},
	];
	return (
		<Box as="header" pt="10" pb="10">
			<Flex align={'center'}>
				<Box as="nav">
					{sectionsNav.map((el, i) => (
						<NavLink
							key={i}
							exact="true"
							to={`${el.path}`}
							style={({ isActive }) => ({
								borderBottom: isActive ? '#15b0ab solid 1px' : '',
								opacity: isActive ? 1 : '0.75',
								marginRight: '10px',
							})}
						>
							{el.name}
						</NavLink>
					))}
				</Box>
				<Spacer />
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Flex>
		</Box>
	);
}
