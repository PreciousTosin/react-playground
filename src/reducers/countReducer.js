const initialState = {
	count: 0
};

const countReducer = (state = initialState, action) => {
	console.log('COUNT REDUCER CALLED', action);
	switch (action.type) {
		case 'INCREMENT':
			console.log('INCREMENT CASE CALLED', action);
			return Object.assign({}, state, {
				count: action.payload
			});
		default:
			return state;
	}
};

export default countReducer;
