import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../about/About';
import Blog from '../blog/Blog';
import Home from '../containers/Home';
import CookiesPolicy from '../terms/CookiesPolicy';
import LegalWarning from '../terms/LegalWarning';
import PrivacyPolicy from '../terms/PrivacyPolicy';
import PurchaseConditions from '../terms/PurchaseConditions';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route exact path="/aviso-legal" element={<LegalWarning />} />
				<Route exact path="/politica-de-cookies" element={<CookiesPolicy />} />
				<Route exact path="/condiciones-de-compra" element={<PurchaseConditions />} />
				<Route exact path="/politica-de-privacidad" element={<PrivacyPolicy />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
