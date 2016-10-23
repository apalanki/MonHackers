import React from 'react';
import {Modal, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';

const ClientReferalModal = React.createClass({
    getInitialState() {
        return {
            serviceProvider: '',
            referalReason: '',
            name: '',
            checkout: false
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({name: nextProps.name, checkout: false});
    },
    render() {
        return (
            <Modal show={this.props.show} onHide={() => {this.props.close('showCheckoutModal')}}>
                <Modal.Header closeButton>
                    <Modal.Title>Check Client Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4>Client Name: </h4>{this.state.name}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <FormGroup controlId='serviceProvider'>
                                <ControlLabel>Service Provider</ControlLabel>
                                <FormControl type='text' placeholder='Service Provider'/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <FormGroup controlId='referalReason'>
                                <ControlLabel>Reason for Referal</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Reason for Referal"/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            Checkout on referal? <input type="checkbox" checked={this.state.checkout} onChange={(event) => {this.setState({checkout: !this.state.checkout});}} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='cancel'
                        onClick={() => {this.props.close('showReferalModal')}}>
                        Cancel
                    </Button>
                    <Button id='referClient'
                        bsStyle='primary'
                        onClick={() => {this.props.referClient(this.state.checkout);}}>
                        Refer Client
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = ClientReferalModal;
