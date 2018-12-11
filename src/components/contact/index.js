/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import Map from '../map';

const Contact = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="display-4">Contact Page</h1>
				</div>
				<div className="col-md-12">
					<div className="embed-responsive embed-responsive-21by9">
						<Map />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;