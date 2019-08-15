import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { withEffects } from 'refract-rxjs';
import { interval } from 'rxjs';

import { GeneralProvider } from './contexts/GeneralContext';
import Navbar from './components/layouts/Navbar';
import store from './store';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonColor: 'green',
			buttonBackground: '#282C2E',
			border: 'none',
			borderRadius: '5px',
			buttonText: 'Hello from the other side',
			cursor: 'pointer'
		};
	}
	render() {
		const context = { style: this.state, storeContext: store };
		return (
			<div className="App">
				<GeneralProvider value={context}>
					<Navbar />
					{renderRoutes(this.props.route.routes)}
				</GeneralProvider>
			</div>
		);
	}
}

const aperture = (component, initialProps) => {
	return interval(1000);
};
const AppWithEffects = withEffects(aperture)(App);
export default App;
