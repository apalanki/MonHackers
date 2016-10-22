import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Goodbye from './goodbye.jsx';
let MapSearchPage = require('./homelessMap/MapSearchPage.jsx');
const Main = require('./main.jsx');

const routes =
    <Route path="/gh6" component={Main}>
        <Route name="goodbye" path="/goodbye" component={Goodbye}/>
        <Route name="homeless_map" path="/homeless_map" component={MapSearchPage}/>
    </Route>;

window.onload = () => {
    ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('container'));
};
