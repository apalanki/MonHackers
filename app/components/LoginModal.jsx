import React from 'react';
import {Modal, FormControl, FormGroup, Button, ControlLabel} from 'react-bootstrap';

const LoginModal = React.createClass({
    getInitialState() {
        return {
            email: '',
            password: ''
        };
    },
    logIn() {
        this.props.close(true);
    },
    render() {
        return (
            <Modal show={this.props.show} onHide={() => {this.props.close(false);}}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in to your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <FormGroup controlId='email'>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type='email' placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({email: event.target.value});
                                    }}/>
                            </FormGroup>
                        </div>
                        <div className='col-md-6'>
                            <FormGroup controlId='password'>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type='password' placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({password: event.target.value});
                                    }}/>
                            </FormGroup>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button id='login' bsStyle='primary'
                        onClick={this.logIn}
                        disabled={this.state.email === '' || this.state.password === ''}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

});

module.exports = LoginModal;
