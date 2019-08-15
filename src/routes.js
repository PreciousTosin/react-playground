import App from './App';
import Home from './components/Home';
import Test from './components/Test';
import Counter from './components/Counter';
import Tooltip from './components/tooltip/index';

const routes = [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
			},
			{
				path: '/test',
				exact: true,
				component: Test
			},
			{
				path: '/counter',
				exact: true,
				component: Counter
			},
			{
				path: '/tooltip',
				exact: true,
				component: Tooltip
			}
		]
	}
];

export default routes;
