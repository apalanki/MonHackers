import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, CheckBox} from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';
import _ from 'lodash';

const ProviderDetailsComponent = React.createClass({
    getInitialState() {
        return {
            provider: this.props.provider,
            editing: false
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({provider: nextProps.provider})
    },
    handleChange(field, value) {
        const provider = this.state.provider;
        provider[field] = value;
        this.setState({provider: provider});
    },
    handleServices(value) {
        const provider = this.state.provider;

        if(provider.services.includes(value)) {
            provider.services.splice(provider.services.indexOf(value), 1);
        } else {
            provider.services.push(value);
        }
        this.setState({provider: provider});
    },
    renderButtons() {
        if(this.state.editing) {
            return (
                <div className='row'>
                    <div className='col-md-12'>
                        <Button id='saveDetails'
                            onClick={() => {this.setState({editing: false});}}>
                            Save
                        </Button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='row'>
                    <div className='col-md-12'>
                        <Button id='editDetails'
                            onClick={() => {this.setState({editing: true});}}>
                            Edit
                        </Button>
                    </div>
                </div>
            )
        }
    },
    renderDataHeader(header) {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h3 className='underline'>{header}</h3>
                </div>
            </div>
        );
    },
    renderDataColumn(title, value) {
        return(
            <div className='col-md-4'>
                <h4>{title} </h4>{value}
            </div>
        );
    },
    renderStaticDetails() {
        return (
            <div>
                {this.renderButtons()}
                {this.renderDataHeader('Contact Information')}
                <div className='row'>
                    {this.renderDataColumn('Address:', this.state.provider.address)}
                    {this.renderDataColumn('Phone Number:', this.state.provider.phone)}
                    {this.renderDataColumn('Email:', this.state.provider.email)}
                </div>
                {this.renderDataHeader('Services')}
                <div className='row'>
                    <div className='col-md-6'>
                        {this.state.provider.services.join(', ')}
                    </div>
                </div>
                {this.renderDataHeader('Restrictions')}
                <div className='row'>
                    <div className='col-md-12'>
                        {this.state.provider.restrictions}
                    </div>
                </div>
                {this.renderDataHeader('Resources')}
                <div className='row'>
                    {this.state.provider.resources.map((resource, index) => {
                        return (
                            <div className='col-md-3' key={`service${index}`}>
                                <h5>{resource.name}: </h5> {resource.used} used & {resource.available} available
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    },
    renderTextField(controlId, label, value) {
        return (
            <FormGroup controlId={controlId}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl type="text"
                    value={value}
                    onChange={(event) => { this.handleChange(controlId, event.target.value);}}
                />
            </FormGroup>
        )
    },
    renderEditableDetails() {
        return (
            <div>
                {this.renderButtons()}
                {this.renderDataHeader('Contact Information')}
                <div className='row'>
                    <div className='col-md-4'>
                        {this.renderTextField('address', 'Address', this.state.provider.address)}
                    </div>
                    <div className='col-md-4'>
                        {this.renderTextField('phone', 'Phone Number', this.state.provider.phone)}
                    </div>
                    <div className='col-md-4'>
                        {this.renderTextField('email', 'Email', this.state.provider.email)}
                    </div>
                </div>
                {this.renderDataHeader('Services')}
                <div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Emergency Shelter')} value="Emergency Shelter" onChange={(event) => {this.handleServices(event.target.value);}} /> Emergency Shelter
                        </div>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Food')} value="Food" onChange={(event) => {this.handleServices(event.target.value);}} /> Food
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Clothing')} value="Clothing" onChange={(event) => {this.handleServices(event.target.value);}} /> Clothing
                        </div>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Hygine Supplies and Services')} value="Hygine Supplies and Services" onChange={(event) => {this.handleServices(event.target.value);}} /> Hygine Supplies and Services
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Job Coaching/Searching')} value="Job Coaching/Searching" onChange={(event) => {this.handleServices(event.target.value);}} /> Job Coaching/Searching
                        </div>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Emergency Bill Aid')} value="Emergency Bill Aid" onChange={(event) => {this.handleServices(event.target.value);}} /> Emergency Bill Aid
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Help with Addiction')} value="Help with Addiction" onChange={(event) => {this.handleServices(event.target.value);}} /> Help with Addiction
                        </div>
                        <div className='col-md-3'>
                            <input type="checkbox" checked={this.state.provider.services.includes('Mental Health Help')} value="Mental Health Help" onChange={(event) => {this.handleServices(event.target.value);}} /> Mental Health Help
                        </div>
                    </div>
                </div>
                {this.renderDataHeader('Restrictions')}
                <div className='row'>
                    <div className='col-md-6'>
                        {this.renderTextField('restrictions', 'Restrictions', this.state.provider.restrictions)}
                    </div>
                </div>
                {this.renderDataHeader('Resources')}
                <div className='row'>
                    <div className='col-md-12'>
                        {this.state.provider.resources.map((resource, index) => {
                            return (
                                <div className='row' key={`resource${index}`}>
                                    <div className='col-md-3'>
                                        <FormGroup controlId={`resourceName${index}`}>
                                            <ControlLabel>Name</ControlLabel>
                                            <FormControl type='text'
                                                value={resource.name}
                                                onChange={(event) => {
                                                    const provider = this.state.provider;
                                                    const foundResource = _.find(provider.resources, {name: resource.name});
                                                    if(foundResource) {
                                                        foundResource.name = event.target.value;
                                                    }
                                                    this.setState({provider: provider});
                                                }}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className='col-md-3'>
                                        <FormGroup controlId={`resourceTotal${index}`}>
                                            <ControlLabel>Total</ControlLabel>
                                            <FormControl type='number'
                                                value={resource.total}
                                                onChange={(event) => {
                                                    const provider = this.state.provider;
                                                    const foundResource = _.find(provider.resources, {name: resource.name});
                                                    if(foundResource) {
                                                        foundResource.total = event.target.value;
                                                        foundResource.available = foundResource.total - foundResource.used;
                                                    }
                                                    this.setState({provider: provider});
                                                }}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Button id='addResource'
                            onClick={() => {
                                const provider = this.state.provider;
                                const newResource = {
                                    name: '',
                                    total: 0,
                                    used: 0,
                                    available: 0
                                };
                                provider.resources.push(newResource);
                                this.setState({provider: provider});
                            }}>
                            Add Resource
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
    render() {
        if(this.state.editing) {
            return this.renderEditableDetails();
        } else {
            return this.renderStaticDetails();
        }
    }
});

module.exports = ProviderDetailsComponent;
