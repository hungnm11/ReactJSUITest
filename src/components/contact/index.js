/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import Map from '../map';

const Contact = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="display-4 text-center mb-5">Contact Page</h1>
				</div>
				<div className="col-md-7">
					<h3>Customer Support</h3>
					<p>Thank you for using The Page! Please complete the form below, so we can provide quick and efficient service. If you need system requirements, click here.</p>

					<p>If this is an urgent matter, please contact Customer Support:</p>

					<p>HCM. - 877-235-2523</p>
					<p>Monday-Friday 8:00 AM - 9:00 PM EST</p>
				</div>
				<div className="col-md-5">
					<div className="embed-responsive embed-responsive-21by9">
						<Map />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;