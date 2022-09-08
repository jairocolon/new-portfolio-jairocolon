import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import englishMessage from './../language/en-US.json';
import espanolMessage from './../language/es-MX.json';

const languageContext = React.createContext();

const LanguageProvider = ({ children }) => {
	const [message, setMessage] = useState(espanolMessage);
	const [locale, setLocale] = useState();

	const changeLanguage = (language) => {
		switch (language) {
			case 'es-MX':
				setMessage(espanolMessage);
				setLocale('es-MX');
				break;
			case 'en-US':
				setMessage(englishMessage);
				setLocale('en-US');
				break;
			default:
				setMessage(espanolMessage);
				setLocale('es-MX');
		}
	};

	return (
		<languageContext.Provider value={{ changeLanguage: changeLanguage }}>
			<IntlProvider locale={locale} messages={message}>
				{children}
			</IntlProvider>
		</languageContext.Provider>
	);
};

export { LanguageProvider, languageContext };
