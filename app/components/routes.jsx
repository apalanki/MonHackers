import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './RootComponent.jsx';
import Main from './main.jsx';
import Goodbye from './goodbye.jsx';
import PersonApplicationComponent from './personApplicationComponent.jsx';

const routes = (<Route path="/gh6" component = {Root}>
					<IndexRoute component= {Main} />
					<Route name="person" path="/person" component= {PersonApplicationComponent} />
					<Route name="goodbye" path="/goodbye" component = {Goodbye} />
				</Route>);

window.onload = () => {
	ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
