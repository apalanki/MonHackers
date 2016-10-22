import React from 'react';
let styles = require('./PinStyles');

var ShelterPin = React.createClass({
    getPinColor(){
        return this.props.missing_requirements.length === 0 ? 'green' : 'red';
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