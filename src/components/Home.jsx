import React from 'react';

import { GeneralConsumer } from '../contexts/GeneralContext';
import SwitchButton from './custom/SwitchButton';

export default function Home() {
	return (
		<GeneralConsumer>
			{({ style }) => (
				<div>
					<h1>Hello Guys</h1>
					<h2>Start editing to see some magic happen!</h2>
					<button
						style={{
							color: style.buttonColor,
							backgroundColor: style.buttonBackground,
							border: style.border,
							borderRadius: style.borderRadius
						}}
					>
						{style.buttonText}
					</button>

					<h2 className="mt-4">Switch Button</h2>
					<SwitchButton />
				</div>
			)}
		</GeneralConsumer>
	);
}
