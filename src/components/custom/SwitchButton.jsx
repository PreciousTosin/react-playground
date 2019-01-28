import React, { Component } from 'react';

import './switchbutton.css';

export default class SwitchButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: null
		};
	}

	toggleButton = () => {
		this.setState(prevState => ({
			isActive: prevState.isActive === null ? 'active' : null
		}));
	};

	render() {
		return (
			<button
				type="button"
				className={`btn btn-toggle btn-sm ${this.state.isActive}`}
				aria-pressed="false"
				onClick={this.toggleButton}
			>
				<div className="handle" />
			</button>
		);
	}
}
