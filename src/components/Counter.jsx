import React, { Component } from 'react';
import { withEffects, toProps } from 'refract-rxjs';
import { combineLatest, merge } from 'rxjs';
import { scan, startWith, map } from 'rxjs/operators';

import { GeneralConsumer } from '../contexts/GeneralContext';
import actions from '../actions/actions';

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
						onClick={props.increaseCount}
					>
						Count: {props.count}
					</button>
				</div>
			)}
		</GeneralConsumer>
	);
}

const getCount = () => state => state.count.count;

const aperture = (component, { store }) => {
	const [increaseCountEvents$, increaseCount] = component.useEvent(
		'increaseCount'
	);

	// console.log(store);
	const count$ = store.observe(getCount);
	console.log(count$);
	const combine$ = combineLatest(count$, increaseCountEvents$).pipe(
		startWith({
			count: 0,
			increaseCount
		}),
		scan(({ count, ...props }) => ({
			...props,
			count: count + 1
		})),
		map(toProps)
	);

	// map(actions.increaseCountAction),
	//map(toDispatch),
	return combine$;
};
const handler = initialProps => effect => {
	const { store } = initialProps;

	if (effect.type === 'INCREMENT') {
		store.dispatch(effect.payload);
	}
};

const toDispatch = action => ({
	type: action.type,
	payload: action.payload
});

const CounterWithEffects = withEffects(aperture, { handler })(
	Counter
);

class CounterContainer extends Component {
	render() {
		return (
			<GeneralConsumer>
				{({ store }) => <CounterWithEffects store={store} />}
			</GeneralConsumer>
		);
	}
}

export default CounterContainer;
