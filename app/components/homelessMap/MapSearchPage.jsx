import React from 'react';
let HomelessMap = require('./HomelessMap.jsx');
import {Form, FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem, Button} from 'react-bootstrap';
import {Link} from 'react-router';

const request = require('superagent');

function searchForShelters(self, searchParams) {
    request.get('/gh6/services/search')
        .query(searchParams)
        .end((err, res)=> {
            if (err) {
                console.log('error getting data', err);
            } else {
                self.setState({
                    shelters: res.body
                });
            }
        });
}

var MapSearchPage = React.createClass({
    getInitialState(){
        return {
            gender: 'Unspecified',
            veteran: 'Unspecified',
            services: 'Unspecified',
            shelters: []
        };
    },
    componentDidMount(){
        searchForShelters(this, {});
    },
    updateShelters(){
        searchForShelters(this, {gender: this.state.gender, veteran: this.state.veteran, services: this.state.services});
    },
    handleGenderSelect(e) {
        this.setState({gender: e.target.value}, () => {
            this.updateShelters();
        });
    },
    handleVeteranSelect(e) {
        this.setState({veteran: e.target.value}, () => {
            this.updateShelters();
        });
    },
    handleServiceSelect(e) {
        this.setState({services: e.target.value}, () => {
            this.updateShelters();
        });
    },
    render(){
        return (
            <div>
                <Form inline className="col-md-8">
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Filter Map Results:</ControlLabel>
                    </FormGroup>
                    &nbsp;&nbsp;
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Gender</ControlLabel>
                        &nbsp;&nbsp;
                        <FormControl componentClass="select" placeholder="Select Gender"
                                     onChange={this.handleGenderSelect}>
                            <option value="Unspecified">...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </FormControl>
                    </FormGroup>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Is Veteran?</ControlLabel>
                        &nbsp;&nbsp;
                        <FormControl componentClass="select" placeholder="Veteran Status"
                                     onChange={this.handleVeteranSelect}>
                            <option value="Unspecified">...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </FormControl>
                        &nbsp;&nbsp;
                        <ControlLabel>Services</ControlLabel>
                        &nbsp;&nbsp;
                        <FormControl componentClass="select" placeholder="Service Status"
                                     onChange={this.handleServiceSelect}>
                            <option value="Unspecified">...</option>
                            <option value="Emergency Shelter">Emergency Shelters</option>
                            <option value="Addiction Counseling">Addiction Counseling</option>
                            <option value="Traditional Housing">Traditional Housing</option>
                            <option value="Youth Programs">Youth Programs</option>
                            <option value="VA Systems">VA Systems</option>
                            <option value="Winter Only Shelters">Winter Only Shelters</option>
                            <option value="Indepdendent Programs">Indepdendent Programs</option>
                            <option value="Domestic Violence">Domestic Violence</option>
                            <option value="Permanent Support Housing">Permanent Support Housing</option>
                        </FormControl>
                    </FormGroup>
                    &nbsp;&nbsp;
                </Form>
                <h4 className="col-md-4" style={{textAlign:"right"}} ><Link to="application">Apply here</Link> for services.</h4>
                <br/><br/>
                <HomelessMap shelters={this.state.shelters}/>
            </div>
            //Here's the filter button.
            //<Button bsStyle="primary" onClick={this.updateShelters}>Filter</Button>

        );
    }
});

module.exports = MapSearchPage;
