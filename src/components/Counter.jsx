import React, { Component } from 'react';
import { withEffects, toProps } from 'refract-rxjs';
import { combineLatest } from 'rxjs';
import { scan, startWith, map } from 'rxjs/operators';

import { GeneralConsumer } from '../contexts/GeneralContext';

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
						/* onClick={increment} */
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
	const [incrementEvents$, increment] = component.useEvent(
		'increment'
	);

	// console.log(store);
	const count$ = store.observe(getCount);
	console.log(count$);
	return combineLatest(count$, incrementEvents$).pipe(
		startWith({
			count: 0,
			increment
		}),
		scan(({ count, ...props }) => ({
			...props,
			count: count + 1
		})),
		map(toProps)
	);
};
const handler = initialProps => effect => {};

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
