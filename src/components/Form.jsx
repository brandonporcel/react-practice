import {
	Box,
	Button,
	Checkbox,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import GoogleInput from './GoogleInput';
import { useForm } from '../hooks/useForm';

export default function Form() {
	const initialState = {
		name: '',
		mail: '',
		surname: '',
		pass: '',
		pref: {
			messi: false,
			ronaldo: false,
		},
	};
	const [form, handleChange, reset, handleCheckbox] = useForm(initialState);
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
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
			<Box border="1px" p="5">
				<Text fontSize="4xl" as="u" d="block" mb="5">
					Form
				</Text>
				<Box>
					<form className="form">
						<Input
							placeholder="Name"
							name="name"
							mt="4"
							value={form.name}
							onChange={handleChange}
						></Input>
						<Input
							type="text"
							placeholder="Surname"
							name="surname"
							value={form.surname}
							onChange={handleChange}
							mt="4"
						></Input>
						<GoogleInput form={form} handleChange={handleChange}></GoogleInput>
						<InputGroup mt="4" size="md">
							<Input
								pr="4.5rem"
								type={show ? 'text' : 'password'}
								placeholder="Enter password"
								name="pass"
								onChange={handleChange}
								value={form.pass}
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" size="sm" onClick={handleClick}>
									{show ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>

						<Box mt="4">
							<Checkbox
								type="checkbox"
								name="pref"
								value="messi"
								onChange={handleCheckbox}
								isChecked={form.pref.messi}
								mr="4"
							>
								Messi
							</Checkbox>
							<Checkbox
								type="checkbox"
								value="ronaldo"
								name="pref"
								isChecked={form.pref.ronaldo}
								onChange={handleCheckbox}
							>
								Ronaldo
							</Checkbox>
						</Box>
						<Checkbox mt="4" onChange={reset}>
							Reset
						</Checkbox>
					</form>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
