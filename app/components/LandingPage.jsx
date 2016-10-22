import React from 'react';
import {Link} from 'react-router';
import {Button }from 'react-bootstrap';

export default class LandingPage extends React.Component{
	render(){
		return(
			<div className="center">
				<Button bsStyle="default" bsSize="large" block><Link to="provider">I'm a Service Provider</Link></Button>
				<Button  bsStyle="primary" bsSize="large" block>I Need Assistance</Button>
				<Button  bsStyle="default" bsSize="large" block>I Want to Help</Button>
			</div>
		);
	}
}