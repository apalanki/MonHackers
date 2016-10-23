import React from 'react';
import {Button, FormGroup, ControlLabel, FormControl, CheckBox} from 'react-bootstrap';
import Typeahead from 'react-bootstrap-typeahead';

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
    renderStaticDetails() {
        return (
            <div>
                {this.renderButtons()}
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='underline'>Contact Information</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4>Address: </h4>{this.state.provider.address}
                    </div>
                    <div className='col-md-4'>
                        <h4>Phone Number: </h4>{this.state.provider.phone}
                    </div>
                    <div className='col-md-4'>
                        <h4>Email: </h4>{this.state.provider.email}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='underline'>Services</h4>
                    </div>
                </div>
                <div className='row'>
                    {this.state.provider.services.map((service, index) => {
                        return (
                            <div className='col-md-3' key={`service${index}`}>
                                {service}
                            </div>
                        );
                    })}
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='underline'>Restrictions</h4>
                    </div>
                </div>
                <div className='row'>
                    {this.state.provider.restrictions.map((restriction, index) => {
                        return (
                            <div className='col-md-2' key={`restriction${index}`}>
                                {restriction}
                            </div>
                        );
                    })}
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='underline'>Resources</h4>
                    </div>
                </div>
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
    renderEditableDetails() {
        return (
            <div>
                {this.renderButtons()}
                <div className='row'>
                    <div className='col-md-12'>
                        EDITING
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
