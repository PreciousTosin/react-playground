import React from 'react';

import { GeneralConsumer } from '../contexts/GeneralContext';

export default function Home() {
	return (
		<GeneralConsumer>
			{context => (
				<div>
					<h1>Hello Guys</h1>
					<h2>Start editing to see some magic happen!</h2>
					<button
						style={{
							color: context.buttonColor,
							backgroundColor: context.buttonBackground
						}}
					>
						{context.buttonText}
					</button>
				</div>
			)}
		</GeneralConsumer>
	);
}
