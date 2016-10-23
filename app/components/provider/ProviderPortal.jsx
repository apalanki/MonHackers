import React from 'react';
import {Button} from 'react-bootstrap';
import LoginModal from '../LoginModal.jsx';
import ProviderDetailsComponent from './ProviderDetailsComponent.jsx';
import providerData from './providerData.js';
import ProviderClientsComponent from './ProviderClientsComponent.jsx';
import clientData from '../client/clientData.js';

const ProviderPortal = React.createClass({
    getInitialState(){
        return {
            showLogInModal: true,
            provider: {
                services: [],
                restrictions: [],
                resources: []
            },
            clients: [],
            editing: false,
            name: ''
        };
    },
    openLoginModal() {
        this.setState({showLogInModal: true});
    },
    closeLoginModal(successful) {
        this.setState({showLogInModal: false});
        if (!successful) {
            document.location.href = '/';
        } else {
            this.setState({provider: providerData, clients: clientData.clients, name: providerData.name});
        }
    },
    renderLoginModal() {
        return (
            <LoginModal
                show={this.state.showLogInModal}
                close={this.closeLoginModal}/>
        );
    },
    renderProviderDetailsComponent() {
        return (
            <ProviderDetailsComponent
                provider={this.state.provider}
                editing={this.state.editing} />
        );
    },
    renderProviderClientsComponent() {
        return (
            <ProviderClientsComponent
                clients={this.state.clients} />
        );
    },
    render(){
        return (
            <div className="form-container">
                {this.renderLoginModal()}
                <form className='form-padding'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{this.state.name}</h1>
                        </div>
                    </div>
                    {this.renderProviderDetailsComponent()}
                    <div className='row'>
                        <div className='col-md-12'>
                            <hr className="hr"/>
                        </div>
                    </div>
                    {this.renderProviderClientsComponent()}
                </form>
            </div>
        );
    }
});

module.exports = ProviderPortal;
