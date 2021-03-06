import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Colors from './components/Colors';
import Form from './components/Form';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Portals from './components/Portals';

function App() {
	return (
		<ChakraProvider>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/colors" element={<Colors />}></Route>
					<Route path="/form" element={<Form />}></Route>
					<Route path="/portals" element={<Portals />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</HashRouter>
		</ChakraProvider>
	);
}

export default App;
