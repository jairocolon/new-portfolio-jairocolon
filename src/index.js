import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { LanguageProvider } from './context/languageContext';
import App from './components/routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<LanguageProvider>
		<App />
	</LanguageProvider>
);
