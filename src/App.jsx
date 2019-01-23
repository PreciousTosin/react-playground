import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import { GeneralProvider } from './contexts/GeneralContext';
import Navbar from './components/layouts/Navbar';

export default class App extends Component {
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
		return (
			<div className="App">
				<GeneralProvider value={this.state}>
					<Navbar />
					{renderRoutes(this.props.route.routes)}
				</GeneralProvider>
			</div>
		);
	}
}
