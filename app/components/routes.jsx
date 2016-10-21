import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import Goodbye from './goodbye.jsx';

const routes = <Route>		
					<Route path = "/gh6" component={Main} />
					<Route name="goodbye" path="/goodbye" component = {Goodbye} />
				</Route>;

window.onload = () => {
	ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
