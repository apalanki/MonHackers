import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './LandingPage.jsx'

export default class Main extends React.Component{
	render(){
		return(
			<MuiThemeProvider >
				<LandingPage/>
			</MuiThemeProvider>
		);
	}
}