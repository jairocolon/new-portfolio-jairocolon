import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../app/models/about/About';
import Blog from '../../app/models/blog/Blog';
import Home from '../../app/pages/home/Home';
import CookiesPolicy from '../../app/models/terms/CookiesPolicy';
import LegalWarning from '../../app/models/terms/LegalWarning';
import PrivacyPolicy from '../../app/models/terms/PrivacyPolicy';
import PurchaseConditions from '../../app/models/terms/PurchaseConditions';

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
