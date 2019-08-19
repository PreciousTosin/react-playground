import React, { Component } from 'react';

import ToolTip from './tooltip';

import './style.css';

const icon = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="times"
		className="svg-inline--fa fa-times fa-w-11"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 352 512"
	>
		<path
			fill=""
			d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
		/>
	</svg>
);

const Button = props => <button {...props}>Tooltip Button</button>;
const DeleteIcon = props => (
	<span class="delete-svg" {...props}>
		{icon}
	</span>
);

const withToolTip = WrappedComponent => {
	return class extends Component {
		constructor(props) {
			super(props);

			this.setupRefs();

			this.setupEvents();
		}

		setupRefs() {
			this.toolTip = React.createRef();
		}

		setupEvents() {
			this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
			this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
		}

		handleOnMouseOut(evt) {
			this.toolTip.current.hide();
		}

		handleOnMouseOver(evt) {
			// get hovered element reference
			let el = evt.currentTarget;

			if (el != null) {
				let rect = el.getBoundingClientRect();

				this.toolTip.current.show(rect);
			}
		}

		render() {
			// let { createBtn } = this;
			var { handleOnMouseOver, handleOnMouseOut } = this;

			return (
				<div>
					<h2 className="mt-4">Tool Tip in Action</h2>

					<WrappedComponent
						id="btnRight"
						onMouseOver={handleOnMouseOver}
						onMouseOut={handleOnMouseOut}
					>
						{this.props.children}
					</WrappedComponent>
					<ToolTip ref={this.toolTip} />
				</div>
			);
		}
	};
};

const EnhancedComponent = withToolTip(DeleteIcon);

export default EnhancedComponent;
