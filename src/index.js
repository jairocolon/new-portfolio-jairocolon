import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { LanguageProvider } from './app/models/context/languageContext';
import App from './app/routing/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<LanguageProvider>
		<App />
	</LanguageProvider>
);
