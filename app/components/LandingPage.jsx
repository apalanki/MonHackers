import React from 'react';
import {Link} from 'react-router';

const LandingPage = React.createClass({
	renderSummary() {
		return (
			<div className='summary-container'>
				<div className='row'>
					<div className='col-md-12'>
						<h1>Who Are We</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<p>Our goal at Perfect Circle is to bring people together. We want to make it easier for people in need to find and apply for the services they need. We also strive to connect as many Service Providers are we can, so even if your organization cannot satisfy someones unique needs, you have the tools necessary to find someone in the area who can. Lastly, we rely on the generous donation of time, talent, and resources of our wonderful volunteers. We would love for you to join us in our mission. Visit our volunteer page for more details on how to participate.</p>
					</div>
				</div>
			</div>
		);
	},
	renderPersonaCards() {
		return (
			<div className='row'>
				<div className='col-md-12'>
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
				</div>
			</div>
		);
	},
	render(){
		return(
			<div>
				{this.renderSummary()}
				{this.renderPersonaCards()}
			</div>
		);
	}
});

module.exports = LandingPage;
