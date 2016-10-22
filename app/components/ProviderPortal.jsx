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
                <div className="form-container" >
                    <form>
                        <FormGroup controlId="formHorizontalEmail">
                          <Col componentClass={ControlLabel} sm={2}>
                            Email
                          </Col>
                          <Col sm={10}>
                            <FormControl type="email" placeholder="Email" value={this.state.email}/>
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                          <Col componentClass={ControlLabel} sm={2}>
                            Password
                          </Col>
                          <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                          </Col>
                          <div className="row pull-right">
                              <Button id="login" bsStyle='primary' onClick={this.setLoggedIn}>
                                  Login
                              </Button>
                          </div>
                        </FormGroup>
                    </form>
                </div>
            );
        }
        else{
        return(
            <Form>
            <FormGroup controlId="formHorizontalLocation">
              <Col componentClass={ControlLabel} sm={2}>
                Address
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Address" />
              </Col>
              <Col componentClass={ControlLabel} sm={2}>
                Zip Code
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Zip Code" />
              </Col>
            </FormGroup>
            <FormGroup>
            <ControlLabel> Services Offered </ControlLabel>
              <Checkbox inline>
                Housing and Utility Assistance
              </Checkbox>
              <Checkbox inline>
                Emergency Shelter
              </Checkbox>
              <Checkbox inline>
                Medical
              </Checkbox>
              <Checkbox inline>
                 Mental Health Services
              </Checkbox>
            </FormGroup>
            <FormGroup controlId="formHorizontalGroupsServed">
              <ControlLabel> Groups Served </ControlLabel>
              <Checkbox inline>
                Men Only
              </Checkbox>
              <Checkbox inline>
                Women only
              </Checkbox>
              <Checkbox>
                Age Range
              </Checkbox>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                    Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
            );
        }
    }
});

module.exports = ProviderPortal;
