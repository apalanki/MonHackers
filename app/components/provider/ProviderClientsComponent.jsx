import React from 'react';
import {Button} from 'react-bootstrap';
import ClientCardComponent from '../client/ClientCardComponent.jsx';

const ProviderClientsComponent = React.createClass({
    getInitialState() {
        return {
            clients: []
        };
    },
    componentWillReceiveProps(nextProps) {
        this.setState({clients: nextProps.clients});
    },
    checkIn() {
// TODO check in modal
    },
    checkOut() {
// TODO check out modal
    },
    referClient() {
// TODO refer modal
    },
    renderClientCard(client, index) {
        return (
            <div className='col-md-3 card-padding' key={`clientCard${index}`}>
                <ClientCardComponent
                    key={`clientCard${index}`}
                    client={client} />
            </div>
        );
    },
    render() {
        return (
            <div>
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
                            onClick={this.checkOut}
                            disabled={!this.state.selectedCard}>
                            Check Out
                        </Button>
                    </div>
                    <div className='col-md-1 top-padding'>
                        <Button id='referal'
                            bsStyle='default'
                            onClick={this.referClient}
                            disabled={!this.state.selectedCard}>
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
