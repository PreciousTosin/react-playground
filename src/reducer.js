import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import countReducer from './reducers/countReducer';

const reducer = history =>
	combineReducers({
		router: connectRouter(history),
		count: countReducer
	});

export default reducer;
