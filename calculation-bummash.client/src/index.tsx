import './index.styl';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = document.getElementById('root') ?? null;

if (root === null) {
	throw new Error('Элемент root не найден');
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
