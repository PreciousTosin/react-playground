import React from 'react';

import { GeneralConsumer } from '../contexts/GeneralContext';

export default function Test() {
	return (
		<GeneralConsumer>
			{context => (
				<div>
					<h1>Hello Tosin</h1>
					<h2>Welcome to the Test Page!</h2>
					<p style={{ color: context.buttonColor }}>
						That you are here means routing works super fine.
					</p>
				</div>
			)}
		</GeneralConsumer>
	);
}
