/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
	<div style={{
		color: 'white', 
		background: 'grey',
		padding: '15px 10px',
		display: 'inline-flex',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '100%',
		transform: 'translate(-50%, -50%)'
	}}>
		{text}
	</div>
);

class SimpleMap extends React.Component {

	render() {
		return (
			<GoogleMapReact
				defaultCenter={{lat: 10.762622, lng: 106.660172}}
				defaultZoom={11}
			>
				<AnyReactComponent 
					lat={10.762622} 
					lng={106.660172} 
					text={'Company Name'} 
				/>
			</GoogleMapReact>
		);
	}
}

export default SimpleMap;