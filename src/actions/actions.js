export default {
	requestIncreaseCount: count => {
		console.log('REQUEST_INCREMENT ACTION CALLED');
		return {
			type: 'REQUEST_INCREMENT'
		};
	},
	increaseCountAction: count => {
		console.log('INCREMENT ACTION CALLED', count);
		return {
			type: 'INCREMENT',
			payload: count
		};
	}
};
