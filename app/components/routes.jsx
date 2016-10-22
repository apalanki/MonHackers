import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './main.jsx';

const routes = <Route>		
					<Route path = "/gh6" component={LandingPage} />
				</Route>;

window.onload = () => {
	ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
