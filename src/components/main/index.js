/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Item from '../item';

class Body extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card-group">
						<Item />
					</div>
				</div>
			</div>
		);
	}
}

export default Body;