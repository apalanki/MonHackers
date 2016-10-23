import React from 'react';
import {Modal, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';

const ClientCheckinModal = React.createClass({
    getInitialState() {
        return {
            name: '',
            specialNeeds: '',
            resourcesNeeded: []
        }
    },
    handleResources(value) {
        const resourcesNeeded = this.state.resourcesNeeded;

        if(resourcesNeeded.includes(value)) {
            resourcesNeeded.splice(resourcesNeeded.indexOf(value), 1);
        } else {
            resourcesNeeded.push(value);
        }
        this.setState({resourcesNeeded: resourcesNeeded});
    },
    render() {
        return (
            <Modal show={this.props.show} onHide={() => {this.props.close('showCheckinModal')}}>
                <Modal.Header closeButton>
                    <Modal.Title>Check Client In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <FormGroup controlId='clientName'>
                                <ControlLabel>Client Name</ControlLabel>
                                <FormControl type='text' value={this.state.name}
                                    onChange={(event) => {this.setState({name: event.target.value});}}/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <FormGroup controlId='specialNeeds'>
                                <ControlLabel>Special Needs</ControlLabel>
                                <FormControl type="text" placeholder="Special Needs"
                                    value={this.state.specialNeeds}
                                    onChange={(event) => {this.setState({specialNeeds: event.target.value});}}/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4 className='underline'>Resource Needs</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            Bed <input type="checkbox" checked={this.state.resourcesNeeded.includes('Bed')} value='Bed' onChange={(event) => {this.handleResources(event.target.value);}} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='cancel'
                        onClick={() => {this.props.close('showCheckinModal')}}>
                        Cancel
                    </Button>
                    <Button id='checkIn'
                        bsStyle='primary'
                        onClick={() => {
                            const client = {
                                name: this.state.name,
                                specialNeeds: this.state.specialNeeds,
                                resourcesUsed: this.state.resourcesNeeded,
                                serviceStartDate: '10/23/16'
                            }
                            this.props.checkIn(client)}}>
                        Check In
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = ClientCheckinModal;
