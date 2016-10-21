import React from 'react';

export default class Goodbye extends React.Component{
	constructor(){
		super();
		this.sidewalkEnds = ['Past the pits where the asphalt flowers grow',
							'we shall walk with a walk that is measured and slow',
							'and watch where the chalk-white arrows go',
							'to the place where the sidewalk ends.'
							];
	}

	getLines(){
		return this.sidewalkEnds.map((text) => { return <p>{text}</p>; });
	}

	render(){
		return(
		<div className='text-center'> 
			<p className='lead'> Let us leave this place where the smoke blows black
			and the dark street winds and bends.</p>
			{this.getLines()}
		</div>
		);
	}

}