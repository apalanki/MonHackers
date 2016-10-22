import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class LandingPage extends React.Component{
	render(){
		return(
			<div className="cards">
				<div className="card">
					<div className="card-header">
						<Link to="provider"><h3>I'm a Service Provider</h3></Link>
					</div>
					<img src = "./provider_icon.png" />
					<div className="card-block">
						<p className="card-text" >Log in and view your service provider portal and manage your clients.</p>
					</div>
				</div>

				<div className="card">
					<div className="card-header">
						<Link to="homeless_map"><h3>I Need Assistance</h3></Link>
					</div>
					<img src = "./INeedHelp.png" />
					<div className="card-block">
						<p className="card-text" ><Link to="homeless_map">Find services near you</Link> that meet your needs or <Link to="application">apply for services.</Link></p>
					</div>
				</div>

				<div className="card">
					<div className="card-header">
						<h3>I Want to Help</h3>
					</div>
					<img src = "./volunteer-icon.png" />
					<div className="card-block">
						<p className="card-text" >Help someone in need. You have more to offer than you think.</p>
					</div>
				</div>
			</div>
		);
	}
}
