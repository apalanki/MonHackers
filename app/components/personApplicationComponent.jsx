import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, CheckBox} from 'react-bootstrap';
var DatePicker = require('react-bootstrap-date-picker');
const request = require('superagent');

const PersonApplicationComponent = React.createClass({
    getInitialState() {
        return {
            application: {
                gender: '',
                firstName: '',
                lastName: '',
                middleName: '',
                dob: '',
                address: '',
                phoneNumber: '',
                email: '',
                veteranStatus: '',
                yearEntered: '',
                yearSeparated: '',
                theater: '',
                branch: '',
                dischargeStatus: '',
                employed: '',
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
                        <FormGroup controlId="genderSelect">
                              <ControlLabel>Gender</ControlLabel>
                              <FormControl componentClass="select" placeholder="Gender"
                                  value={this.state.application.gender}
                                  onChange={(event) => {this.handleChange('gender', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="transAmab">Trans AMAB</option>
                                    <option value="transAfab">Trans AFAB</option>
                                    <option value="transNb">Trans Non-Binary</option>
                                    <option value="other">Other</option>
                                    <option value="noAnswer">Prefer Not To Answer</option>
                              </FormControl>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="ethnicitySelect">
                              <ControlLabel>Ethnicity</ControlLabel>
                              <FormControl componentClass="select" placeholder="Ethnicity"
                                  value={this.state.application.ethnicity}
                                  onChange={(event) => {this.handleChange('ethnicity', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="asian">Asian</option>
                                    <option value="hispanic">Hispanic</option>
                                    <option value="AmInd">American Indian or Alaska Native</option>
                                    <option value="nativeHiOtherPacific">Native Hawaiian or Other Pacific Islander</option>
                                    <option value="other">Other</option>
                                    <option value="noAnswer">Prefer Not To Answer</option>
                              </FormControl>
                        </FormGroup>
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
        if(this.state.application.veteranStatus !== 'yes') {
            return(
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup controlId="veteranStatus">
                            <ControlLabel>Are you a Veteran</ControlLabel>
                            <FormControl componentClass='select'
                                value={this.state.application.veteranStatus}
                                onChange={(event) => {this.handleChange('veteranStatus', event.target.value);}}>
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                <option value="noAnswer">Prefer not to answer</option>
                            </FormControl>
                        </FormGroup>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <FormGroup controlId="veteranStatus">
                                <ControlLabel>Are you a Veteran</ControlLabel>
                                <FormControl componentClass='select'
                                    value={this.state.application.veteranStatus}
                                    onChange={(event) => {this.handleChange('veteranStatus', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="noAnswer">Prefer not to answer</option>
                                </FormControl>
                            </FormGroup>
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
                            <FormGroup controlId="theaterSelect">
                                  <ControlLabel>Theater</ControlLabel>
                                  <FormControl componentClass="select" placeholder="Theater"
                                      value={this.state.application.theater}
                                      onChange={(event) => {this.handleChange('theater', event.target.value);}}>
                                        <option value=""></option>
                                        <option value="ww2">World War II</option>
                                        <option value="korean">Korean War</option>
                                        <option value="vietnam">Vietnam War</option>
                                        <option value="desertStorm">Desert Storm</option>
                                        <option value="afghanistanOef">Afghanistan OEF</option>
                                        <option value="iraqOif">Iraq OIF</option>
                                        <option value="iraqOnd">Iraq OND</option>
                                        <option value="other">Other</option>
                                  </FormControl>
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup controlId="branchSelect">
                                  <ControlLabel>Branch</ControlLabel>
                                  <FormControl componentClass="select" placeholder="Branch"
                                      value={this.state.application.branch}
                                      onChange={(event) => {this.handleChange('branch', event.target.value);}}>
                                        <option value=""></option>
                                        <option value="army">Army</option>
                                        <option value="airForce">Air Force</option>
                                        <option value="navy">Navy</option>
                                        <option value="marines">Marines</option>
                                        <option value="coastGuard">Coast Guard</option>
                                        <option value="other">Other</option>
                                  </FormControl>
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup controlId="dischargeSelect">
                                  <ControlLabel>Discharge Status</ControlLabel>
                                  <FormControl componentClass="select" placeholder="Discharge Status"
                                      value={this.state.application.dischargeStatus}
                                      onChange={(event) => {this.handleChange('dischargeStatus', event.target.value);}}>
                                        <option value=""></option>
                                        <option value="honorable">Honorable</option>
                                        <option value="general">General under honorable conditions</option>
                                        <option value="oth">Under other than honorable conditions</option>
                                        <option value="badConduct">Bad Conduct</option>
                                        <option value="dishonorable">Dishonorable</option>
                                        <option value="uncharacterized">Uncharacterized</option>
                                        <option value="other">Other</option>
                                  </FormControl>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            );
        }
    },
    renderHousingQuestion() {
        return (
            <div className='col-md-4'>
                <FormGroup controlId="housingSelect">
                      <ControlLabel>Housing Status</ControlLabel>
                      <FormControl componentClass="select" placeholder="Housing Status"
                          value={this.state.application.housingStatus}
                          onChange={(event) => {this.handleChange('housingStatus', event.target.value);}}>
                            <option value=""></option>
                            <option value="homeless">Homeless</option>
                            <option value="atRisk">At imminent risk of homelessness</option>
                            <option value="federal">Homeless only under other federal statuses</option>
                            <option value="fleeing">Fleeing Domestic Violence</option>
                            <option value="stable">Stably housed</option>
                            <option value="unsure">Unsure</option>
                            <option value="noAnswer">Prefer not to answer</option>
                            <option value="other">Other</option>
                      </FormControl>
                </FormGroup>
            </div>
        );
    },
    renderHousing() {
        if(this.state.application.housingStatus === 'homeless' || this.state.application.housingStatus === 'federal') {
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
                <FormGroup controlId="employedSelect">
                      <ControlLabel>Are you Employed</ControlLabel>
                      <FormControl componentClass="select"
                          value={this.state.application.employed}
                          onChange={(event) => {this.handleChange('employed', event.target.value);}}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="noAnswer">Prefer not to answer</option>
                      </FormControl>
                </FormGroup>
            </div>
        );
    },
    renderEmployment() {
        if(this.state.application.employed === 'yes') {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    <div className='col-md-4'>
                        <FormGroup controlId="employmentTypeSelect">
                              <ControlLabel>Employment Type</ControlLabel>
                              <FormControl componentClass="select"
                                  value={this.state.application.employmentType}
                                  onChange={(event) => {this.handleChange('employmentType', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="fullTime">Full-time</option>
                                    <option value="partTime">Part-time</option>
                                    <option value="seasonalSporatic">Seasonal or sporatic</option>
                              </FormControl>
                        </FormGroup>
                    </div>
                </div>
            );
        } else if(this.state.application.employed === 'no') {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    <div className='col-md-4'>
                        <FormGroup controlId="reasonNotEmployedSelect">
                              <ControlLabel>Reason not employed</ControlLabel>
                              <FormControl componentClass="select"
                                  value={this.state.application.reasonNotEmployed}
                                  onChange={(event) => {this.handleChange('reasonNotEmployed', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="looking">Looking for work</option>
                                    <option value="school">In school</option>
                                    <option value="unable">Unable to work</option>
                                    <option value="notLooking">Not looking for work</option>
                              </FormControl>
                        </FormGroup>
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
                    <FormGroup controlId="schoolStatusSelect">
                          <ControlLabel>School Status</ControlLabel>
                          <FormControl componentClass="select"
                              value={this.state.application.schoolStatus}
                              onChange={(event) => {this.handleChange('schoolStatus', event.target.value);}}>
                                <option value=""></option>
                                <option value="attendingRegularly">Attending school regularly</option>
                                <option value="attendingIrregularly">Attending school irregularly</option>
                                <option value="graduateHs">Graduated from High School</option>
                                <option value="ged">Obtained GED</option>
                                <option value="droppedOut">Dropped out</option>
                                <option value="suspended">Suspended</option>
                                <option value="expelled">Expelled</option>
                                <option value="unsure">Unsure</option>
                                <option value="noAnswer">Prefer not to answer</option>
                                <option value="other">Other</option>
                          </FormControl>
                    </FormGroup>
                </div>
                <div className='col-md-4'>
                    <FormGroup controlId="lastGradeSelect">
                          <ControlLabel>Last Grade Completed</ControlLabel>
                          <FormControl componentClass="select"
                              value={this.state.application.lastGrade}
                              onChange={(event) => {this.handleChange('lastGrade', event.target.value);}}>
                                <option value=""></option>
                                <option value="lessThanFifth">Less than 5th grade</option>
                                <option value="fiveToSix">Grades 5-6</option>
                                <option value="sevenToEight">Grades 7-8</option>
                                <option value="nineToEleven">Grades 9-11</option>
                                <option value="twelve">Grade 12</option>
                                <option value="noLevels">School program does not have grade levels</option>
                                <option value="ged">GED</option>
                                <option value="someCollege">Some College</option>
                                <option value="unsure">Unsure</option>
                                <option value="noAnswer">Prefer not to answer</option>
                                <option value="other">Other</option>
                          </FormControl>
                    </FormGroup>
                </div>
            </div>
        );
    },
    renderHealth() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <FormGroup controlId="generalHealthSelect">
                          <ControlLabel>General Health</ControlLabel>
                          <FormControl componentClass="select"
                              value={this.state.application.generalHealth}
                              onChange={(event) => {this.handleChange('generalHealth', event.target.value);}}>
                                <option value=""></option>
                                <option value="excelent">Excelent</option>
                                <option value="veryGood">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                                <option value="unsure">Unsure</option>
                                <option value="noAnswer">Prefer not to answer</option>
                          </FormControl>
                    </FormGroup>
                </div>
                <div className='col-md-4'>
                    <FormGroup controlId="dentalHealthSelect">
                          <ControlLabel>Dental Health</ControlLabel>
                          <FormControl componentClass="select"
                              value={this.state.application.dentalHealth}
                              onChange={(event) => {this.handleChange('dentalHealth', event.target.value);}}>
                                <option value=""></option>
                                <option value="excelent">Excelent</option>
                                <option value="veryGood">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                                <option value="unsure">Unsure</option>
                                <option value="noAnswer">Prefer not to answer</option>
                          </FormControl>
                    </FormGroup>
                </div>
                <div className='col-md-4'>
                    <FormGroup controlId="mentalHealthSelect">
                          <ControlLabel>Mental Health</ControlLabel>
                          <FormControl componentClass="select"
                              value={this.state.application.mentalHealth}
                              onChange={(event) => {this.handleChange('mentalHealth', event.target.value);}}>
                                <option value=""></option>
                                <option value="excelent">Excelent</option>
                                <option value="veryGood">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                                <option value="unsure">Unsure</option>
                                <option value="noAnswer">Prefer not to answer</option>
                          </FormControl>
                    </FormGroup>
                </div>
            </div>
        );
    },
    renderDomesticViolenceQuestion() {
        return (
            <div className='col-md-4'>
                <FormGroup controlId="domesticViolenceSelect">
                      <ControlLabel>Domestic Violence Victim</ControlLabel>
                      <FormControl componentClass="select"
                          value={this.state.application.domesticViolence}
                          onChange={(event) => {this.handleChange('domesticViolence', event.target.value);}}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="noAnswer">Prefer not to answer</option>
                      </FormControl>
                </FormGroup>
            </div>
        );
    },
    renderDomesticViolence() {
        if(this.state.application.domesticViolence === 'yes') {
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
                        <FormGroup controlId="fleeingDomesticViolenceSelect">
                              <ControlLabel>Currently Fleeing Domestic Violence</ControlLabel>
                              <FormControl componentClass="select"
                                  value={this.state.application.fleeingDomesticViolence}
                                  onChange={(event) => {this.handleChange('fleeingDomesticViolence', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="noAnswer">Prefer not to answer</option>
                              </FormControl>
                        </FormGroup>
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
                <FormGroup controlId="pregnantSelect">
                      <ControlLabel>Are you pregnant</ControlLabel>
                      <FormControl componentClass="select"
                          value={this.state.application.pregnant}
                          onChange={(event) => {this.handleChange('pregnant', event.target.value);}}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="noAnswer">Prefer not to answer</option>
                      </FormControl>
                </FormGroup>
            </div>
        );
    },
    renderPregnancy() {
        if(this.state.application.pregnant === 'yes') {
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
                <FormGroup controlId="disabledSelect">
                      <ControlLabel>Are you disabled</ControlLabel>
                      <FormControl componentClass="select"
                          value={this.state.application.disabled}
                          onChange={(event) => {this.handleChange('disabled', event.target.value);}}>
                            <option value=""></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="noAnswer">Prefer not to answer</option>
                      </FormControl>
                </FormGroup>
            </div>
        );
    },
    renderDisability() {
        if(this.state.application.disabled === 'yes') {
            return (
                <div className='row'>
                    {this.renderDisabilityQuestion()}
                    <div className='col-md-4'>
                        <FormGroup controlId="disabilityTypeSelect">
                              <ControlLabel>Disability Type</ControlLabel>
                              <FormControl componentClass="select"
                                  value={this.state.application.disabilityType}
                                  onChange={(event) => {this.handleChange('disabilityType', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="physical">Physical Disability</option>
                                    <option value="developmental">Developmental Disability</option>
                                    <option value="chronic">Chronic Health Condition</option>
                                    <option value="hivAids">HIV/AIDS</option>
                                    <option value="mental">Mental Health Problems</option>
                                    <option value="substance">Substance Abuse</option>
                                    <option value="noAnswer">Prefer not to answer</option>
                                    <option value="other">Other</option>
                              </FormControl>
                        </FormGroup>
                    </div>
                    <div className='col-md-4'>
                        <FormGroup controlId="receivingCareSelect">
                              <ControlLabel>Are you receiving care</ControlLabel>
                              <FormControl componentClass="select"
                                  value={this.state.application.receivingCare}
                                  onChange={(event) => {this.handleChange('receivingCare', event.target.value);}}>
                                    <option value=""></option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    <option value="noAnswer">Prefer not to answer</option>
                              </FormControl>
                        </FormGroup>
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
    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Application For Services</h2>
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
    }
});

module.exports = PersonApplicationComponent;
