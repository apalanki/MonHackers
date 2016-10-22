import React from 'react';
let LoginModal = require('./LoginModal');

const ProviderPortal = React.createClass({
    getInitialState(){
        return {
            isLoggedIn: false,
            showLogInModal: true
        };
    },
    setLoggedIn() {
        this.setState({isLoggedIn:true});
    },
    openLoginModal() {
        this.setState({showLogInModal: true});
    },

    closeLoginModal(successful) {
        this.setState({showLogInModal: false});
        if(!successful) {
            document.location.href='/';
        }
    },
    renderLoginModal() {
        return (
            <LoginModal
                show={this.state.showLogInModal}
                close={this.closeLoginModal} />
        );
    },
    render(){
        return(
            <div className="form-container">
                {this.renderLoginModal()}
                <form className='form-padding'>
                    <div className='row'>
                        <div className='col-md-6 col-md-offset-3'>
                            <h3>TESTING</h3>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ProviderPortal;
