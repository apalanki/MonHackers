import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<Link to="goodbye">Good Bye</Link>
				<br/>
                <Link to="homeless_map">Map Click</Link>
                {this.props.children}
			</div>
		);
	}
}