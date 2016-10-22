import React from 'react';
import {Form, FormControl, FormGroup, Checkbox, Button, Col, ControlLabel }from 'react-bootstrap';


const ProviderPortal = React.createClass({
    getInitialState(){
        return {
            isLoggedIn: false
        };
    },
    setLoggedIn() {
        this.setState({isLoggedIn:true});
    },
    render(){
        if(!this.state.isLoggedIn){
            return(
                <div className="form-container">
                    <form className='form-padding'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3'>
                                <h3>Log in to your account:</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-md-offset-3'>
                                <FormGroup controlId='email'>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl type='email' placeholder="Email"/>
                                </FormGroup>
                            </div>
                            <div className='col-md-3'>
                                <FormGroup controlId='password'>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type='password' placeholder="Password" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-md-offset-8'>
                                <Button id='login' bsStyle='primary'
                                    onClick={this.setLoggedIn}>
                                    Login
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
        else{
        return(
            <div></div>
            );
        }
    }
});

module.exports = ProviderPortal;
