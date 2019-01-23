import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import store, { history } from './store';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>{renderRoutes(routes)}</Router>
	</Provider>,
	rootElement
);
