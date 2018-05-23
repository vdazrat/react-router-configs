import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

import renderedRoutes from './routes';


ReactDOM.render(<BrowserRouter><div>{renderedRoutes}</div></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
