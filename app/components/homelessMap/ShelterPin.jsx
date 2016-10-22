import React from 'react';
let styles = require('./PinStyles');

var ShelterPin = React.createClass({
    getPinStatus(){
        var incomplete = (this.props.missing_requirements && 
            this.props.missing_requirements.length !== 0);
        return !incomplete;
    },
    render() {
        return (
            <div style={styles.circleStyle(this.getPinStatus())}>
                {this.props.text}
            </div>
        );
    }
});

module.exports = ShelterPin;