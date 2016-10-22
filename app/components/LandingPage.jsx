import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class LandingPage extends React.Component{
	render(){
		return(
			<div className="center">
				<RaisedButton label="I'm a Service Provider" className="landing-button"/>
				<RaisedButton label="I Need Assistance" className="landing-button"/>
				<RaisedButton label = "I Want to Help" className="landing-button"/>
			</div>
		)
	}
}