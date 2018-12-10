/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Item from '../item';
import Modal from '../modal';

class Body extends Component {
  constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
      modal: false,
      detail: ''
		};
	}

	toggle(title, image, desc) {
      this.setState({
        modal: !this.state.modal,
        detail: {
          title,
          image,
          desc
        }
      });
  }
  
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card-group">
						<Item 
              onClick={this.toggle}
            />
            <Modal 
              isOpen={this.state.modal}
              toggle={this.toggle}
              detail={this.state.detail}
            />
					</div>
				</div>
			</div>
		);
	}
}

export default Body;