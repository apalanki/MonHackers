import React from 'react';
import {Button} from 'react-bootstrap';
import ClientCardComponent from '../client/ClientCardComponent.jsx';
import ClientCheckoutModal from '../client/ClientCheckoutModal.jsx';
import _ from 'lodash';

const ProviderClientsComponent = React.createClass({
    getInitialState() {
        return {
            clients: [],
            showCheckoutModal: false,
            selectedClient: {}
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({clients: nextProps.clients});
    },
    checkIn() {
// TODO check in modal
    },
    checkOut() {
        this.closeModal('showCheckoutModal');
        const currentClients = this.state.clients;
        const selectedName = this.state.selectedClient.name;
        const filteredClients = _.filter(currentClients, (currentClient) => {
            return currentClient.name !== selectedName;
        });
        this.setState({clients: filteredClients, selectedClient: {}});
    },
    referClient() {
// TODO refer modal
    },
    openModal(field) {
        const newState = {};
        newState[field] = true;
        this.setState(newState);
    },
    closeModal(field) {
        const newState = {};
        newState[field] = false;
        this.setState(newState);
    },
    selectClient(client) {
        const currentClient = this.state.selectedClient;
        if(client === currentClient) {
            this.setState({selectedClient: {}});
        } else {
            this.setState({selectedClient: client});
        }
    },
    renderClientCheckout() {
        return (
            <ClientCheckoutModal show={this.state.showCheckoutModal}
                close={this.closeModal}
                checkOut={this.checkOut}
                name={this.state.selectedClient.name} />
        );
    },
    renderClientCard(client, index) {
        return (
            <div className='col-md-3 card-padding' key={`clientCard${index}`}>
                <ClientCardComponent
                    selectClient={this.selectClient}
                    isSelected={this.state.selectedClient === client}
                    key={`clientCard${index}`}
                    client={client} />
            </div>
        );
    },
    render() {
        return (
            <div>
                {this.renderClientCheckout()}
                <div className='row top-padding'>
                    <div className='col-md-4'>
                        <h3 className='underline'>Clients</h3>
                    </div>
                    <div className='col-md-1 col-md-offset-4 top-padding'>
                        <Button id='checkIn'
                            bsStyle='primary'
                            onClick={this.checkIn}>
                            Check In
                        </Button>
                    </div>
                    <div className='col-md-1 top-padding'>
                        <Button id='checkOut'
                            bsStyle='default'
                            onClick={() => {this.openModal('showCheckoutModal');}}
                            disabled={!this.state.selectedClient.name}>
                            Check Out
                        </Button>
                    </div>
                    <div className='col-md-1 top-padding'>
                        <Button id='referal'
                            bsStyle='default'
                            onClick={this.referClient}
                            disabled={!this.state.selectedClient.name}>
                            Refer Client
                        </Button>
                    </div>
                </div>
                <div className='row top-padding cards'>
                    {
                        this.state.clients.map((client, index) => {
                            return this.renderClientCard(client, index);
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = ProviderClientsComponent;
