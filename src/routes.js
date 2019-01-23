import App from './App';
import Home from './components/Home';
import Test from './components/Test';
import Counter from './components/Counter';

const routes = [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: 'true',
				component: Home
			},
			{
				path: '/test',
				exact: 'true',
				component: Test
			},
			{
				path: '/counter',
				exact: 'true',
				component: Counter
			}
		]
	}
];

export default routes;
