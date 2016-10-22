import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage.jsx';
import ProviderPortal from './ProviderPortal.jsx';

let MapSearchPage = require('./homelessMap/MapSearchPage.jsx');
import PersonApplicationComponent from './personApplicationComponent.jsx';

const routes = <Route path = "/" >		
					<IndexRoute component={LandingPage}/>
					<Route name="provider" path = "/provider" component={ProviderPortal}/>
					<Route name="homeless_map" path="/homeless_map" component={MapSearchPage}/>
					<Route name="person" path="/person" component= {PersonApplicationComponent} />
				</Route>;

window.onload = () => {
    ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
