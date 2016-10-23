import React from 'react';
import {Link} from 'react-router';

export default class LandingPage extends React.Component{
	render(){
		return(
			<div className="cards cards-info">
				<div className="card card-hover">
					<div className="card-header">
						<Link to="homeless_map"><h3>I Need Help</h3></Link>
					</div>
					<img src = "./INeedHelp.png" />
					<div className="card-block">
						<p className="card-text" >Search our <Link to="homeless_map">map</Link> to find services in your area that meet your needs or fill out a Perfect Circle <Link to="application">profile</Link> to receive more individualized suggestions.</p>
					</div>
				</div>
				<div className="card card-hover">
					<div className="card-header">
						<h3><Link to="volunteers">I Want to Help</Link></h3>
					</div>
					<img src = "./volunteer-icon.png" />
					<div className="card-block">
						<p className="card-text" >Do you have some free time, a special skill, or resources to help out? Help us to help someone in need. You have more to offer than you imagine and you could help change someones life.</p>
					</div>
				</div>
				<div className="card card-hover">
					<div className="card-header">
						<Link to="provider"><h3>I'm a Service Provider</h3></Link>
					</div>
					<img src = "./provider_icon.png" />
					<div className="card-block">
						<p className="card-text" >Manager your services through your provider portal. Allocate resources and help clients find the help they need.</p>
					</div>
				</div>
			</div>
		);
	}
}
