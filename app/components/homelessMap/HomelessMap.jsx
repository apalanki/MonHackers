import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
let ShelterPin = require('./ShelterPin.jsx');
const MapsApiKey = 'AIzaSyC2XTd6n4hEiSPId4WRss-yZ8gzf2TDr9U';

let HomelessMap = React.createClass({
    propTypes: {
        center: React.PropTypes.array,
        zoom: React.PropTypes.number,
        greatPlaceCoords: React.PropTypes.any,
        shelters: React.PropTypes.array
    },
    getDefaultProps() {
        return {
            center: [59.938043, 30.337157],
            zoom: 9,
            greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
        };
    },
    shouldComponentUpdate: shouldPureComponentUpdate,
    getMarkers(){
        return this.props.shelters.map(function (shelter, index) {
            return (<ShelterPin key={index} lat={shelter.latitude} lng={shelter.longitude}
                                missing_requirements={shelter.missing_requirements} text={shelter.capacity}/>);
        });
    },
    render() {
        return (
            <div className="map-wrapper">
                <GoogleMap
                    bootstrapURLKeys={{key: MapsApiKey}}
                    center={[38.668104, -90.335153]}
                    zoom={12}>
                    {this.getMarkers()}
                </GoogleMap>
            </div>
        );
    }
});

module.exports = HomelessMap;