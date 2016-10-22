import React from 'react';
let styles = require('./PinStyles');

var ShelterPin = React.createClass({
    getPinColor(){
        var incomplete = (this.props.missing_requirements && 
            this.props.missing_requirements.length !== 0);
        return incomplete ? 'red' : 'green';
    },
    render() {
        return (
            <div style={styles.circleStyle(this.getPinColor())}>
                {this.props.text}
            </div>
        );
    }
});

module.exports = ShelterPin;