import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<Router>{renderRoutes(routes)}</Router>, rootElement);
