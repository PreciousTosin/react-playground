import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import { GeneralProvider } from './contexts/GeneralContext';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonColor: 'green',
			buttonBackground: '#282C2E',
			buttonText: 'Hello from the other side',
		};
	}
	render() {
		return (
			<div className="App">
				<GeneralProvider value={this.state}>
					{renderRoutes(this.props.route.routes)}
				</GeneralProvider>
			</div>
		);
	}
}
