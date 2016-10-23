import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage.jsx';
import ProviderPortal from './provider/ProviderPortal.jsx';
import VolunteerComponent from './VolunteerComponent.jsx'

let MapSearchPage = require('./homelessMap/MapSearchPage.jsx');
import PersonApplicationComponent from './personApplicationComponent.jsx';

const routes = <Route path = "/" >
					<IndexRoute component={LandingPage}/>
					<Route name="provider" path = "/provider" component={ProviderPortal}/>
					<Route name="homeless_map" path="/homeless_map" component={MapSearchPage}/>
					<Route name="application" path="/application" component= {PersonApplicationComponent} />
					<Route name="volunteers" path="/volunteers" component={VolunteerComponent} />
				</Route>;

window.onload = () => {
    ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
