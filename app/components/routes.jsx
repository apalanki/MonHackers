import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage.jsx';
import ProviderPortal from './ProviderPortal.jsx';

const routes = <Route path = "/" >		
					<IndexRoute component={LandingPage}/>
					<Route name="provider" path = "/provider" component={ProviderPortal}/>
				</Route>;

window.onload = () => {
	ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
