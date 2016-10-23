import React from 'react';
import {Link} from 'react-router';

const aboutText = `Our goal at Perfect Circle is to bring people together. We
					want to make it easier for people in need to find and apply
					for the services they need. We also strive to connect as many
					Service Providers are we can, so even if your organization
					cannot satisfy someones unique needs, you have the tools
					necessary to find someone in the area who can. Lastly, we
					rely on the generous donation of time, talent, and resources
					of our wonderful volunteers. We would love for you to join us
					in our mission. Visit our volunteer page for more details on
					how to participate.`;

const helpText = `Search our map to find services in your area that meet
					your needs or fill out a Perfect Circle profile to
					receive more individualized suggestions.`;
const volunteerText = `Do you have some free time, a special skill, or
						resources to help out? Help us to help someone in
						need. You have more to offer than you imagine
						and you could help change someones life.`;
const providerText = `Manager your services through your provider portal.
						Allocate resources and help clients find the help they need.`;

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
						<p>{aboutText}</p>
					</div>
				</div>
			</div>
		);
	},
	renderCard(path, title, img, text) {
		return (
			<div className='card card-hover'>
				<div className='card-header'>
					<Link to={path}><h3>{title}</h3></Link>
				</div>
				<img src={img}/>
				<div className='card-block'>
					<p className='card-text'>{text}</p>
				</div>
			</div>
		);
	},
	renderPersonaCards() {
		return (
			<div className='row'>
				<div className='col-md-12'>
					<div className="cards cards-info">
						{this.renderCard('homeless_map', 'I Need Help', './INeedHelp.png', helpText)}
						{this.renderCard('volunteers', 'I Want to Help', './volunteer-icon.png', volunteerText)}
						{this.renderCard('provider', 'I\'m a service provider', './provider_icon.png', providerText)}
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
