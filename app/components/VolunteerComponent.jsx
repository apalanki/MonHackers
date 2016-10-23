import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default class VolunteerComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			volunteerCard:true,
			resourcesCard:false,
			followUpCard:false,
			selectedOption:"",
			availableResource:"", 
			email:"", 
			phone:"",
			additionalInfo:""
		}
	}

	volunteerCardSelection = (option) => {
		this.setState({
			volunteerCard:false,
			resourcesCard:true,
			selectedOption:option
		});
	}

	resourceCardSelection = (option) =>{
		this.setState({
			resourcesCard:false,
			followUpCard:true,
			availableResource:option
		});
	}

	renderVolunteerCard = () => {
		if(this.state.volunteerCard){
			return(
				<div className="card opaque" id="volunteerCard">
					<div className="card-block">
						<FormGroup controlId="volunteer">
						<ControlLabel><h4>I'm a</h4></ControlLabel>
							<FormControl componentClass="select"  onChange={ (e) => this.volunteerCardSelection(e.target.value)}>
								<option>Choose One</option> 
								<option value="individual">Concerned Citizen</option>
								<option value="business">Retail or Restaurant Owner</option>
								<option value="landlord">Landlord or Property Owner</option>
							</FormControl>
						</FormGroup>
					</div>
				</div>
			)
		}
		else return(<div/>);
	}
	getOptions(options){
		if(options){
			console.log(options);
			return options.map((x) => {return(<option value={x}>{x}</option>)});
		}
	}
	renderResourceCard = () => {
		if(this.state.resourcesCard){
			let options;
			if(this.state.selectedOption == "individual")
				options = ["time to volunteer.", "a few extra dollars to spare.", "a friend or someone I know who needs services."];
			else if(this.state.selectedOption == "business")
				options = ["hot meals for hungry people.", "extra supplies or resources I need to donate.", "funds for a donor dollar match program."];
			else if(this.state.selectedOption == "landlord")  
				options = ["unused property that I would like to donate.", "rental property with flexible rates.","a renter who is at risk."];	
			
			return(
				<div className="card opaque" id="resource-card">
					<div className="card-block">
						<FormGroup controlId="resource">
							<h3>I have</h3>
							<FormControl componentClass="select" placeholder="Choose a resource" onChange={(e) => {this.resourceCardSelection(e.target.value)}}>
								<option>Choose One</option> 
								{this.getOptions(options)}
							</FormControl>
						</FormGroup>
					</div>					
				</div>
			);
		}else return(<div/>)
	}
	handleSubmit(thing){
		console.log("submitted", thing);
	}
	renderFollowUpCard = () => {
		if(this.state.followUpCard){
			return(
				<div className="card opaque" id="resource-card">
					<div className="card-block">
						<h3>Reach all the service providers who need you.</h3>

						<p> Please enter your contact information and we will send your message to multiple care providers who will get back to you with more information on how you can close the circle of care for homeless people in your community. </p>
							<FormGroup controlId="additionalInfo">
								<FormControl componentClass="textarea" />
							</FormGroup> 
							<FormGroup controlId="email">
							<h4> Email Address </h4>
								<FormControl
							      componentClass="input"
							      type="email"/>							    
							</FormGroup>
							 <FormGroup controlId="phone">
							<h4> Phone Number </h4>
								<FormControl
							      componentClass="input"
							      type="text"/>							    
							 </FormGroup>
							
						    <Button className="btn-primary" type="submit" onClick={this.handleSubmit}>Contact Orgs</Button>
					</div>
				</div>
			)
		}
		else return(<div/>)
	}

	render(){
		return(
		<Form horizontal>
			<div className="cards col-md-6 col-md-offset-3">
				{this.renderVolunteerCard()} 

				{ this.renderResourceCard() }

				{ this.renderFollowUpCard() }
			</div>
		</Form>
		);
	}
}