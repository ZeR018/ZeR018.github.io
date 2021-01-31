import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { HashRouter } from 'react-router-dom';

//BrowserRouter
ReactDOM.render(
	<React.StrictMode>
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
