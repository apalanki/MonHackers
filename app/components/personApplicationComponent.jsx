import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, CheckBox} from 'react-bootstrap';
var DatePicker = require('react-bootstrap-date-picker');
import Typeahead from 'react-bootstrap-typeahead';
import referenceData from '../util/referenceData';
const request = require('superagent');

const PersonApplicationComponent = React.createClass({
    getInitialState() {
        return {
            fullForm: false,
            application: {
                gender: [],
                ethnicity: [],
                veteranStatus: [],
                theater: [],
                branch: [],
                dischargeStatus: [],
                housingStatus: [],
                employed: [],
                employmentType: [],
                reasonNotEmployed: [],
                schoolStatus: [],
                lastGradeCompleted: [],
                generalHealth: [],
                dentalHealth: [],
                mentalHealth: [],
                domesticViolence: [],
                fleeingDomesticViolence: [],
                pregnant: [],
                disabled: [],
                disabilityType:[],
                receivingCare: [],
                services: []
            }
        };
    },
    handleChange(field, value) {
        const application = this.state.application;
        application[field] = value;
        this.setState({application: application});
    },
    handleServices(value) {
        const application = this.state.application;

        if(application.services.includes(value)) {
            application.services.splice(application.services.indexOf(value), 1);
        } else {
            application.services.push(value);
        }
        this.setState({application: application});
    },
    renderDemographicInformation() {


        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup controlId="firstName">
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl type="text" placeholder="First Name"
                                value={this.state.application.firstName}
                                onChange={(event) => { this.handleChange('firstName', event.target.value);}}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="middleName">
                            <ControlLabel>Middle Name</ControlLabel>
                            <FormControl type="text" placeholder="Middle Name"
                                value={this.state.application.middleName}
                                onChange={(event) => { this.handleChange('middleName', event.target.value);}}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="lastName">
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl type="text" placeholder="Last Name"
                                value={this.state.application.lastName}
                                onChange={(event) => { this.handleChange('lastName', event.target.value);}}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ControlLabel>Gender</ControlLabel>
                        <Typeahead
                            placeholder="Select your gender"
                            onChange={(value) => {this.handleChange('gender', value);}}
                            options={referenceData.genders}
                            selected={this.state.application.gender}
                        />
                    </div>
                    <div className="col-md-4">
                          <ControlLabel>Ethnicity</ControlLabel>
                          <Typeahead
                              placeholder="Select your ethnicity"
                              onChange={(value) => {this.handleChange('ethnicity', value);}}
                              options={referenceData.ethnicities}
                              selected={this.state.application.ethnicity}
                          />
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="dateOfBirth">
                            <ControlLabel>Date of Birth</ControlLabel>
                            <DatePicker value={this.state.application.dob}
                                onChange={(value) => { this.handleChange('dob', value);}} />
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    },
    renderContactInformation() {
        return(
            <div className="row">
                <div className="col-md-4">
                    <FormGroup controlId="address">
                        <ControlLabel>Address</ControlLabel>
                        <FormControl type="text" placeholder="Address"
                            value={this.state.application.address}
                            onChange={(event) => { this.handleChange('address', event.target.value);}}
                        />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup controlId="phoneNumber">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl type="text" placeholder="Phone Number"
                            value={this.state.application.phoneNumber}
                            onChange={(event) => { this.handleChange('phoneNumber', event.target.value);}}
                        />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup controlId="email">
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl type="text" placeholder="Email Address"
                            value={this.state.application.email}
                            onChange={(event) => { this.handleChange('email', event.target.value);}}
                        />
                    </FormGroup>
                </div>
            </div>
        );
    },
    renderVeteranQuestions() {
        if(this.state.application.veteranStatus.includes('Yes')) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <ControlLabel>Are you a Veteran</ControlLabel>
                            <Typeahead
                                placeholder="Are you a Veteran"
                                onChange={(value) => {this.handleChange('veteranStatus', value);}}
                                options={referenceData.yesNoOptions}
                                selected={this.state.application.veteranStatus}
                            />
                        </div>
                        <div className="col-md-4">
                            <FormGroup controlId="yearEntered">
                                <ControlLabel>Year Entered Service</ControlLabel>
                                <FormControl type="text" placeholder="Year Entered"
                                    value={this.state.application.yearEntered}
                                    onChange={(event) => { this.handleChange('yearEntered', event.target.value);}}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup controlId="yearSeparated">
                                <ControlLabel>Year Separated</ControlLabel>
                                <FormControl type="text" placeholder="Year Separated"
                                    value={this.state.application.yearSeparated}
                                    onChange={(event) => { this.handleChange('yearSeparated', event.target.value);}}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ControlLabel>Theater</ControlLabel>
                            <Typeahead
                                placeholder="Theater"
                                onChange={(value) => {this.handleChange('theater', value);}}
                                options={referenceData.theater}
                                selected={this.state.application.theater}
                            />
                        </div>
                        <div className="col-md-4">
                            <ControlLabel>Branch</ControlLabel>
                            <Typeahead
                                placeholder="Branch"
                                onChange={(value) => {this.handleChange('branch', value);}}
                                options={referenceData.branch}
                                selected={this.state.application.branch}
                            />
                        </div>
                        <div className="col-md-4">
                            <ControlLabel>Discharge Status</ControlLabel>
                            <Typeahead
                                placeholder="Discharge Status"
                                onChange={(value) => {this.handleChange('dischargeStatus', value);}}
                                options={referenceData.dischargeStatus}
                                selected={this.state.application.dischargeStatus}
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="row">
                    <div className="col-md-4">
                        <ControlLabel>Are you a Veteran</ControlLabel>
                        <Typeahead
                            placeholder="Are you a Veteran"
                            onChange={(value) => {this.handleChange('veteranStatus', value);}}
                            options={referenceData.yesNoOptions}
                            selected={this.state.application.veteranStatus}
                        />
                    </div>
                </div>
            );
        }
    },
    renderHousingQuestion() {
        return (
            <div className='col-md-4'>
                <ControlLabel>Housing Status</ControlLabel>
                <Typeahead
                    placeholder="Housing Status"
                    onChange={(value) => {this.handleChange('housingStatus', value);}}
                    options={referenceData.housing}
                    selected={this.state.application.housingStatus}
                />
            </div>
        );
    },
    renderHousing() {
        if(this.state.application.housingStatus.includes('Homeless') || this.state.application.housingStatus.includes('Homeless only under other federal statuses')) {
            return (
                <div className="row">
                    {this.renderHousingQuestion()}
                    <div className="col-md-4">
                        <FormGroup controlId="dateHomeless">
                            <ControlLabel>Date homelessness began</ControlLabel>
                            <DatePicker value={this.state.application.dateHomeless}
                                onChange={(value) => { this.handleChange('dateHomeless', value);}} />
                        </FormGroup>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    {this.renderHousingQuestion()}
                </div>
            );
        }
    },
    renderEmployedQuestion() {
        return (
            <div className="col-md-4">
                <ControlLabel>Are you Employed</ControlLabel>
                <Typeahead
                    placeholder="Are you Employed"
                    onChange={(value) => {this.handleChange('employed', value);}}
                    options={referenceData.yesNoOptions}
                    selected={this.state.application.employed}
                />
            </div>
        );
    },
    renderEmployment() {
        if(this.state.application.employed.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    <div className='col-md-4'>
                        <ControlLabel>Employment Type</ControlLabel>
                        <Typeahead
                            placeholder="Employment Type"
                            onChange={(value) => {this.handleChange('employmentType', value);}}
                            options={referenceData.employmentType}
                            selected={this.state.application.employmentType}
                        />
                    </div>
                </div>
            );
        } else if(this.state.application.employed.includes('No')) {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    <div className='col-md-4'>
                        <ControlLabel>Reason not employed</ControlLabel>
                        <Typeahead
                            placeholder="Reason not employed"
                            onChange={(value) => {this.handleChange('reasonNotEmployed', value);}}
                            options={referenceData.notWorkingReasons}
                            selected={this.state.application.reasonNotEmployed}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                </div>
            );
        }
    },
    renderEducation() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <ControlLabel>School Status</ControlLabel>
                    <Typeahead
                        placeholder="School Status"
                        onChange={(value) => {this.handleChange('schoolStatus', value);}}
                        options={referenceData.schoolStatus}
                        selected={this.state.application.schoolStatus}
                    />
                </div>
                <div className='col-md-4'>
                    <ControlLabel>Last Grade Completed</ControlLabel>
                    <Typeahead
                        placeholder="Last Grade Completed"
                        onChange={(value) => {this.handleChange('lastGrade', value);}}
                        options={referenceData.lastGradeCompleted}
                        selected={this.state.application.lastGrade}
                    />
                </div>
            </div>
        );
    },
    renderHealth() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <ControlLabel>General Health</ControlLabel>
                    <Typeahead
                        placeholder="General Health"
                        onChange={(value) => {this.handleChange('generalHealth', value);}}
                        options={referenceData.healthStatus}
                        selected={this.state.application.generalHealth}
                    />
                </div>
                <div className='col-md-4'>
                    <ControlLabel>Dental Health</ControlLabel>
                    <Typeahead
                        placeholder="Dental Health"
                        onChange={(value) => {this.handleChange('dentalHealth', value);}}
                        options={referenceData.healthStatus}
                        selected={this.state.application.dentalHealth}
                    />
                </div>
                <div className='col-md-4'>
                    <ControlLabel>Mental Health</ControlLabel>
                    <Typeahead
                        placeholder="Mental Health"
                        onChange={(value) => {this.handleChange('mentalHealth', value);}}
                        options={referenceData.healthStatus}
                        selected={this.state.application.mentalHealth}
                    />
                </div>
            </div>
        );
    },
    renderDomesticViolenceQuestion() {
        return (
            <div className='col-md-4'>
                <ControlLabel>Victim of Domestic Violene</ControlLabel>
                <Typeahead
                    placeholder="Victem of Domestic Violence"
                    onChange={(value) => {this.handleChange('domesticViolence', value);}}
                    options={referenceData.yesNoOptions}
                    selected={this.state.application.domesticViolence}
                />
            </div>
        );
    },
    renderDomesticViolence() {
        if(this.state.application.domesticViolence.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderDomesticViolenceQuestion()}
                    <div className='col-md-4'>
                        <FormGroup controlId="domesticViolenceStart">
                            <ControlLabel>Date domestic violence began</ControlLabel>
                            <DatePicker value={this.state.application.domesticViolenceStart}
                                onChange={(value) => { this.handleChange('domesticViolenceStart', value);}} />
                        </FormGroup>
                    </div>
                    <div className='col-md-4'>
                        <ControlLabel>Currently Fleeing</ControlLabel>
                        <Typeahead
                            placeholder="Currently Fleeing"
                            onChange={(value) => {this.handleChange('fleeingDomesticViolence', value);}}
                            options={referenceData.yesNoOptions}
                            selected={this.state.application.fleeingDomesticViolence}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    {this.renderDomesticViolenceQuestion()}
                </div>
            );
        }
    },
    renderPregnancyQuestion() {
        return (
            <div className='col-md-4'>
                <ControlLabel>Are you pregnant</ControlLabel>
                <Typeahead
                    placeholder="Are you pregnant"
                    onChange={(value) => {this.handleChange('pregnant', value);}}
                    options={referenceData.yesNoOptions}
                    selected={this.state.application.pregnant}
                />
            </div>
        );
    },
    renderPregnancy() {
        if(this.state.application.pregnant.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderPregnancyQuestion()}
                    <div className='col-md-4'>
                        <FormGroup controlId="dueDate">
                            <ControlLabel>Due date</ControlLabel>
                            <DatePicker value={this.state.application.dueDate}
                                onChange={(value) => { this.handleChange('dueDate', value);}} />
                        </FormGroup>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    {this.renderPregnancyQuestion()}
                </div>
            );
        }
    },
    renderDisabilityQuestion() {
        return (
            <div className='col-md-4'>
                <ControlLabel>Are you disabled</ControlLabel>
                <Typeahead
                    placeholder="Are you disabled"
                    onChange={(value) => {this.handleChange('disabled', value);}}
                    options={referenceData.yesNoOptions}
                    selected={this.state.application.disabled}
                />
            </div>
        );
    },
    renderDisability() {
        if(this.state.application.disabled.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderDisabilityQuestion()}
                    <div className='col-md-4'>
                        <ControlLabel>Disability Type</ControlLabel>
                        <Typeahead
                            placeholder="Disability Type"
                            onChange={(value) => {this.handleChange('disabilityType', value);}}
                            options={referenceData.disabilityType}
                            selected={this.state.application.disabilityType}
                        />
                    </div>
                    <div className='col-md-4'>
                        <ControlLabel>Are you receiving care</ControlLabel>
                        <Typeahead
                            placeholder="Are you receiving care"
                            onChange={(value) => {this.handleChange('receivingCare', value);}}
                            options={referenceData.yesNoOptions}
                            selected={this.state.application.receivingCare}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    {this.renderDisabilityQuestion()}
                </div>
            );
        }
    },
    renderServices() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('emergencyShelter')} value="emergencyShelter" onChange={(event) => {this.handleServices(event.target.value);}} /> Emergency Shelter
                    </div>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('food')} value="food" onChange={(event) => {this.handleServices(event.target.value);}} /> Food
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('clothing')} value="clothing" onChange={(event) => {this.handleServices(event.target.value);}} /> Clothing
                    </div>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('hygine')} value="hygine" onChange={(event) => {this.handleServices(event.target.value);}} /> Hygine Supplies and Services
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('job')} value="job" onChange={(event) => {this.handleServices(event.target.value);}} /> Job Coaching/Searching
                    </div>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('bills')} value="bills" onChange={(event) => {this.handleServices(event.target.value);}} /> Emergency Bill Aid
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('addiction')} value="addiction" onChange={(event) => {this.handleServices(event.target.value);}} /> Help with Addiction
                    </div>
                    <div className='col-md-3'>
                        <input type="checkbox" checked={this.state.application.services.includes('mental')} value="mental" onChange={(event) => {this.handleServices(event.target.value);}} /> Mental Health Help
                    </div>
                </div>
            </div>
        );
    },
    saveApplication() {
        request.post('/gh6/services/applicant')
            .send(this.state.application)
            .end((err) => {
                if (err) {
                    console.log('error : ', err);
                } else {
                    console.log('saved successfully!');
                }
            });
    },
    renderFullForm() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Application For Services</h2>
                        </div>
                        <div className="col-md-4">
                            <input type="checkbox" checked={this.state.fullForm} value="fullForm" onChange={(event) => {this.setState({fullForm: !this.state.fullForm});}} /> Full Form
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Demographic Information</h4>
                        </div>
                    </div>
                    {this.renderDemographicInformation()}
                    <div className='row'>
                        <div className="col-md-12">
                            <h4>Contact Information</h4>
                        </div>
                    </div>
                    {this.renderContactInformation()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Veteran Status</h4>
                        </div>
                    </div>
                    {this.renderVeteranQuestions()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Housing</h4>
                        </div>
                    </div>
                    {this.renderHousing()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Employment</h4>
                        </div>
                    </div>
                    {this.renderEmployment()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Education</h4>
                        </div>
                    </div>
                    {this.renderEducation()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Health</h4>
                        </div>
                    </div>
                    {this.renderHealth()}
                    {this.renderDomesticViolence()}
                    {this.renderPregnancy()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Disability</h4>
                        </div>
                    </div>
                    {this.renderDisability()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Services Needed</h4>
                        </div>
                    </div>
                    {this.renderServices()}
                    <div className="row">
                        <div className="col-md-4">
                            <Button id="saveButton"
                                    bsStyle='primary'
                                    onClick={this.saveApplication}>
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    },
    renderShortForm() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Application For Services</h2>
                        </div>
                        <div className="col-md-4">
                            <input type="checkbox" checked={this.state.fullForm} value="fullForm" onChange={(event) => {this.setState({fullForm: !this.state.fullForm});}} /> Full Form
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Demographic Information</h4>
                        </div>
                    </div>
                    {this.renderDemographicInformation()}
                    <div className='row'>
                        <div className="col-md-12">
                            <h4>Contact Information</h4>
                        </div>
                    </div>
                    {this.renderContactInformation()}
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Services Needed</h4>
                        </div>
                    </div>
                    {this.renderServices()}
                    <div className="row">
                        <div className="col-md-4">
                            <Button id="saveButton"
                                    bsStyle='primary'
                                    onClick={this.saveApplication}>
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    },
    render() {
        if(this.state.fullForm) {
            return this.renderFullForm();
        } else {
            return this.renderShortForm();
        }
    }
});

module.exports = PersonApplicationComponent;
