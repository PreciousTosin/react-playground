import { compose, createStore, applyMiddleware } from 'redux';
import { refractEnhancer } from 'refract-redux-rxjs';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducer';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);
const store = createStore(
	reducer(history),
	{},
	composeEnhancers(
		refractEnhancer(),
		applyMiddleware(routingMiddleware)
	)
);

export default store;
