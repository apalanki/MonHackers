import React from 'react';
let styles = require('./PinStyles');
import {Popover} from 'react-bootstrap';

var ShelterPin = React.createClass({
    propTypes: {
        shelter: React.PropTypes.object
    },
    getPinStatus(){
        var incomplete = (this.props.missing_requirements &&
        this.props.missing_requirements.length !== 0);
        return !incomplete;
    },
    getInitialState(){
        return {
            modalIsOpen: false
        }
    },
    openModal(){
        this.setState({modalIsOpen: true});
    },
    closeModal(){
        this.setState({modalIsOpen: false});
    },
    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );

        return (
            <div>
                <div onMouseEnter={this.openModal}
                     onMouseLeave={this.closeModal}
                     style={styles.circleStyle(this.getPinStatus())}>
                    {this.props.text}
                </div>
            </div>
        );
    }
});

module.exports = ShelterPin;