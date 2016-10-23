import React from 'react';
import {Alert, Button, FormGroup, ControlLabel, FormControl, CheckBox} from 'react-bootstrap';
var DatePicker = require('react-bootstrap-date-picker');
import Typeahead from 'react-bootstrap-typeahead';
import referenceData from '../util/referenceData';
const request = require('superagent');

const PersonApplicationComponent = React.createClass({
    getInitialState() {
        return {
            fullForm: false,
            saved: false,
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
    renderTextField(controlId, label, value) {
        return (
            <div className='col-md-4'>
                <FormGroup controlId={controlId}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl type="text" placeholder={label}
                        value={value}
                        onChange={(event) => { this.handleChange(controlId, event.target.value);}}
                    />
                </FormGroup>
            </div>
        );
    },
    renderTypeahead(label, placeholder, key, options, selected) {
        return (
            <div className="col-md-4">
                <ControlLabel>{label}</ControlLabel>
                <Typeahead
                    placeholder={placeholder}
                    onChange={(value) => {this.handleChange(key, value);}}
                    options={options}
                    selected={selected}
                />
            </div>
        );
    },
    renderDateField(controlId, label, value, key) {
        return (
            <div className="col-md-4">
                <FormGroup controlId={controlId}>
                    <ControlLabel>{label}</ControlLabel>
                    <DatePicker value={value}
                        onChange={(value) => { this.handleChange(key, value);}} />
                </FormGroup>
            </div>
        );
    },
    renderCheckBox(values, value, label) {
        return (
            <div className='col-md-3'>
                <input type='checkbox' checked={values.includes(value)} value={value} onChange={(event) => {this.handleServices(event.target.value);}} /> {label}
            </div>
        );
    },
    renderCheckBoxRow(checkboxes) {
        return (
            <div className='row'>
                {this.renderCheckBox(checkboxes[0].values, checkboxes[0].value, checkboxes[0].label)}
                {this.renderCheckBox(checkboxes[1].values, checkboxes[1].value, checkboxes[1].label)}
            </div>
        );
    },
    renderDemographicInformation() {
        return (
            <div>
                <div className="row">
                    {this.renderTextField('firstName', 'First Name', this.state.application.firstName)}
                    {this.renderTextField('middleName', 'Middle Name', this.state.application.middleName)}
                    {this.renderTextField('lastName', 'Last Name', this.state.application.lastName)}
                </div>
                <div className="row">
                    {this.renderTypeahead('Gender', 'Select your gender', 'gender', referenceData.genders, this.state.application.gender)}
                    {this.renderTypeahead('Ethnicity', 'Select your ethnicity', 'ethnicity', referenceData.ethnicities, this.state.application.ethnicity)}
                    {this.renderDateField('dateOfBirth', 'Date of Birth', this.state.application.dob, 'dob')}
                </div>
            </div>
        );
    },
    renderContactInformation() {
        return(
            <div className="row">
                {this.renderTextField('address', 'Address', this.state.application.address)}
                {this.renderTextField('phoneNumber', 'Phone Number', this.state.application.phoneNumber)}
                {this.renderTextField('email', 'Email Address', this.state.application.email)}
            </div>
        );
    },
    renderVeteranQuestions() {
        if(this.state.application.veteranStatus.includes('Yes')) {
            return (
                <div>
                    <div className="row">
                        {this.renderTypeahead('Are you a Veteran', 'Are you a Veteran', 'veteranStatus', referenceData.yesNoOptions, this.state.application.veteranStatus)}
                        {this.renderTextField('yearEntered', 'Year Entered Service', this.state.application.yearEntered)}
                        {this.renderTextField('yearSeparated', 'Year Separated', this.state.application.yearSeparated)}
                    </div>
                    <div className="row">
                        {this.renderTypeahead('Theater', 'Theater', 'theater', referenceData.theater, this.state.application.theater)}
                        {this.renderTypeahead('Branch', 'Branch', 'branch', referenceData.branch, this.state.application.branch)}
                        {this.renderTypeahead('Discharge Status', 'Discharge Status', 'dischargeStatus', referenceData.dischargeStatus, this.state.application.dischargeStatus)}
                    </div>
                </div>
            );
        } else {
            return(
                <div className="row">
                    {this.renderTypeahead('Are you a Veteran', 'Are you a Veteran', 'veteranStatus', referenceData.yesNoOptions, this.state.application.veteranStatus)}
                </div>
            );
        }
    },
    renderHousingQuestion() {
        return this.renderTypeahead('Housing Status', 'Housing Status', 'housingStatus', referenceData.housing, this.state.application.housingStatus);
    },
    renderHousing() {
        if(this.state.application.housingStatus.includes('Homeless') || this.state.application.housingStatus.includes('Homeless only under other federal statuses')) {
            return (
                <div className="row">
                    {this.renderHousingQuestion()}
                    {this.renderDateField('dateHomeless', 'Date homelessness began', this.state.application.dateHomeless, 'dateHomeless')}
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
        return this.renderTypeahead('Are you Employed', 'Are you Employed', 'employed', referenceData.yesNoOptions, this.state.application.employed);
    },
    renderEmployment() {
        if(this.state.application.employed.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    {this.renderTypeahead('Employment Type', 'Employment Type', 'employmentType', referenceData.employmentType, this.state.application.employmentType)}
                </div>
            );
        } else if(this.state.application.employed.includes('No')) {
            return (
                <div className='row'>
                    {this.renderEmployedQuestion()}
                    {this.renderTypeahead('Reason not employed', 'Reason not employed', 'reasonNotEmployed', referenceData.notWorkingReasons, this.state.application.reasonNotEmployed)}
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
                {this.renderTypeahead('School Status', 'School Status', 'schoolStatus', referenceData.schoolStatus, this.state.application.schoolStatus)}
                {this.renderTypeahead('Last Grade Completed', 'Last Grade Completed', 'lastGrade', referenceData.lastGradeCompleted, this.state.application.lastGrade)}
            </div>
        );
    },
    renderHealth() {
        return (
            <div className='row'>
                {this.renderTypeahead('General Health', 'General Health', 'generalHealth', referenceData.healthStatus, this.state.application.generalHealth)}
                {this.renderTypeahead('Dental Health', 'Dental Health', 'dentalHealth', referenceData.healthStatus, this.state.application.dentalHealth)}
                {this.renderTypeahead('Mental Health', 'Mental Health', 'mentalHealth', referenceData.healthStatus, this.state.application.mentalHealth)}
            </div>
        );
    },
    renderDomesticViolenceQuestion() {
        return this.renderTypeahead('Victem of Domestic Violence', 'Victem of Domestic Violence', 'domesticViolence', referenceData.yesNoOptions, this.state.application.domesticViolence);
    },
    renderDomesticViolence() {
        if(this.state.application.domesticViolence.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderDomesticViolenceQuestion()}
                    {this.renderDateField('domesticViolenceStart', 'Date domestic violence began', this.state.application.domesticViolenceStart, 'domesticViolenceStart')}
                    {this.renderTypeahead('Currently Fleeing', 'Currently Fleeing', 'fleeingDomesticViolence', referenceData.yesNoOptions, this.state.application.fleeingDomesticViolence)}
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
        return this.renderTypeahead('Are you pregnant', 'Are you pregnant', 'pregnant', referenceData.yesNoOptions, this.state.application.pregnant);
    },
    renderPregnancy() {
        if(this.state.application.pregnant.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderPregnancyQuestion()}
                    {this.renderDateField('dueDate', 'Due date', this.state.application.dueDate, 'dueDate')}
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
        return this.renderTypeahead('Are you disabled', 'Are you Disabled', 'disabled', referenceData.yesNoOptions, this.state.application.disabled);
    },
    renderDisability() {
        if(this.state.application.disabled.includes('Yes')) {
            return (
                <div className='row'>
                    {this.renderDisabilityQuestion()}
                    {this.renderTypeahead('Disability Type', 'Disability Type', 'disabilityType', referenceData.disabilityType, this.state.application.disabilityType)}
                    {this.renderTypeahead('Are you receiving care', 'Are you receiving care', 'receivingCare', referenceData.yesNoOptions, this.state.application.receivingCare)}
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
        const values = this.state.application.services;
        return (
            <div>
                {this.renderCheckBoxRow([{values: values, value: 'emergencyShelter', label: 'Emergency Shelter'},
                                        {values: values, value: 'food', label: 'Food'}])}
                {this.renderCheckBoxRow([{values: values, value: 'clothing', label: 'Clothing'},
                                        {values: values, value: 'hygine', label: 'Hygine Supplies and Services'}])}
                {this.renderCheckBoxRow([{values: values, value: 'job', label: 'Job Coaching/Searching'},
                                        {values: values, value: 'bills', label: 'Emergency Bill Aid'}])}
                {this.renderCheckBoxRow([{values: values, value: 'addiction', label: 'Help with Addiction'},
                                        {values: values, value: 'mental', label: 'Mental Health Help'}])}
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
                    this.setState({saved: true})
                }
            });
    },
    renderSectionHeader(header) {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h4 className="form-header">{header}</h4>
                </div>
            </div>
        );
    },
    renderFullForm() {
        return (
            <div className='form-container'>
                {this.renderMessage()}
                <form className='form-padding'>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="application-header">Application For Services</h2>
                        </div>
                        <div className="col-md-12">
                            <h5>Full Form &nbsp;&nbsp;<input type="checkbox" checked={this.state.fullForm} value="fullForm" onChange={() => {this.setState({fullForm: !this.state.fullForm});}} />
                            </h5>
                        </div>
                    </div>
                    <hr className="hr"/>
                    {this.renderSectionHeader('Demographic Information')}
                    {this.renderDemographicInformation()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Contact Information')}
                    {this.renderContactInformation()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Veteran Status')}
                    {this.renderVeteranQuestions()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Housing')}
                    {this.renderHousing()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Employment')}
                    {this.renderEmployment()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Education')}
                    {this.renderEducation()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Health')}
                    {this.renderHealth()}
                    <hr className="hr"/>
                    {this.renderDomesticViolence()}
                    <hr className="hr"/>
                    {this.renderPregnancy()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Disability')}
                    {this.renderDisability()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Services Needed')}
                    {this.renderServices()}
                    <hr className="hr"/>
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
            <div className='form-container'>
                {this.renderMessage()}
                <form className='form-padding'>
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="application-header">Application For Services</h2>
                        </div>
                        <div className="col-md-12">
                            <h5>Full Form &nbsp;&nbsp;
                            <input type="checkbox" checked={this.state.fullForm} value="fullForm" onChange={() => {this.setState({fullForm: !this.state.fullForm});}} />
                            </h5>
                        </div>
                    </div>
                    <hr className="hr"/>
                    {this.renderSectionHeader('Demographic Information')}
                    {this.renderDemographicInformation()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Contact Information')}
                    {this.renderContactInformation()}
                    <hr className="hr"/>
                    {this.renderSectionHeader('Services Needed')}
                    {this.renderServices()}
                    <hr className="hr"/>
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
    renderMessage() {
        if(this.state.saved) {
            return (
                <div className='row'>
                    <div className='col-md-12'>
                        <Alert bsStyle="success">
                            Your application has been saved successfully
                        </Alert>
                    </div>
                </div>
            )
        }
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
