import React from 'react';
import {Link} from 'react-router';
var socket = io();

let Main = React.createClass({
    getInitialState() {
        return {socketMess: ''}
    },
    componentDidMount() {
        socket.on('server event', function(data){
           console.log(data);
            socket.emit('client event', {socket: 'io'});
        });
    },
    render() {
        return (
            <div>
                <Link to="goodbye">Good Bye</Link>
                <br/>
                <Link to="homeless_map">Map Click</Link>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;