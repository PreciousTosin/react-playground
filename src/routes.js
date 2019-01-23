import App from './App';
import Home from './components/Home';
import Test from './components/Test';

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
			}
		]
	}
];

export default routes;
