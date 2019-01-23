import React, { Component } from 'react';
import { withEffects } from 'refract-rxjs';
import { scan, startWith } from 'rxjs/operators';

import { GeneralConsumer } from '../contexts/GeneralContext';

function Counter({ count, increment }) {
	return (
		<GeneralConsumer>
			{context => (
				<div>
					<h1>Refract Testing Section</h1>
					<p>Work done here is for refractive programming!</p>
					<button
						style={{
							color: context.buttonColor,
							backgroundColor: context.buttonBackground,
							border: context.border,
							borderRadius: context.borderRadius,
							cursor: context.cursor
						}}
						onClick={increment}
					>
						Count: {count}
					</button>
				</div>
			)}
		</GeneralConsumer>
	);
}

const aperture = (component, { initialCount }) => {
	const [addOneEvents$, addOne] = component.useEvent('adOne');
	return addOneEvents$.pipe(
		startWith({
			count: initialCount,
			addOne
		}),
		scan(({ count, ...props }) => ({
			...props,
			count: count + 1
		}))
	);
};
const handler = initialProps => effect => {};

const CounterWithEffects = withEffects(aperture, { handler })(
	Counter
);

class CounterContainer extends Component {
	state = { count: 0 };

	increment = () =>
		this.setState(({ count }) => ({ count: count + 1 }));

	render() {
		return (
			<CounterWithEffects
				count={this.state.count}
				increment={this.increment}
			/>
		);
	}
}

export default CounterContainer;
