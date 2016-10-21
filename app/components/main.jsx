import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<p className="lead"> Hello, Global Hackers! </p>
				<Link to="goodbye">Click here. Life is made up of meetings and partings. That is the way of it. </Link>
			</div>
		);
	}
}