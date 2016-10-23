import React from 'react';
import {Modal, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';

const ClientCheckoutModal = React.createClass({
    getInitialState() {
        return {
            checkoutReason: '',
            name: ''
        }
    },
    componentWillReceiveProps(nextProps) {
        this.setState({name: nextProps.name});
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
                            <FormGroup controlId='checkoutReason'>
                                <ControlLabel>Reason for Checkout</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Reason for Checkout"/>
                            </FormGroup>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='cancel'
                        onClick={() => {this.props.close('showCheckoutModal')}}>
                        Cancel
                    </Button>
                    <Button id='checkOut'
                        bsStyle='primary'
                        onClick={this.props.checkOut}>
                        Check Out
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
});

module.exports = ClientCheckoutModal;
