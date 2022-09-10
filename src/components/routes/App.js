import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PrivacyPolicy from '../terms/PrivacyPolicy';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/politica_de_privacidad" element={<PrivacyPolicy />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
