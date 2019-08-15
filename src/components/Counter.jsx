import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withEffects } from 'refract-rxjs';
// import { combineLatest, merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { GeneralConsumer } from '../contexts/GeneralContext';
import actions from '../actions/actions';
import actionTypes from '../actions/action-types';

function Counter(props) {
	console.log('PROPS', props);
	return (
		<GeneralConsumer>
			{({ style }) => (
				<div>
					<h1>Refract Testing Section</h1>
					<p>Work done here is for reactive programming!</p>
					<button
						style={{
							color: style.buttonColor,
							backgroundColor: style.buttonBackground,
							border: style.border,
							borderRadius: style.borderRadius,
							cursor: style.cursor
						}}
						onClick={props.addCount}
					>
						Count: {props.count}
					</button>
				</div>
			)}
		</GeneralConsumer>
	);
}

const mapStateToProps = state => ({
	count: state.count.count
});

const CounterWithRedux = connect(
	mapStateToProps,
	{
		addCount: actions.requestIncreaseCount
	}
)(Counter);

const getCount = state => state.count;

const aperture = (component, { storeContext }) => {
	// const [addCount$, addCount] = component.useEvent('addCount', 'NONE')
	const incrementEvent$ = storeContext.observe(
		actionTypes.REQUEST_INCREMENT
	);
	// console.log(addCount$);
	// console.log(incrementEvent$);
	return incrementEvent$.pipe(
		map(addCountAction => {
			const { count } = storeContext.getState().count;
			console.log('PROPS OF VALUES', count, addCountAction);
			return actions.increaseCountAction(count + 1);
		})
	);
};
const handler = initialProps => effect => {
	const { storeContext } = initialProps;
	console.log('DISPATCH CALLED', initialProps, effect);
	if (effect.type === 'INCREMENT') {
		console.log('DISPATCHED: ', effect);
		return storeContext.dispatch(effect);
	}
	return;
};

const CounterWithEffects = withEffects(aperture, { handler })(
	CounterWithRedux
);

class CounterContainer extends Component {
	render() {
		return (
			<GeneralConsumer>
				{({ storeContext }) => (
					<CounterWithEffects storeContext={storeContext} />
				)}
			</GeneralConsumer>
		);
	}
}

export default CounterContainer;
