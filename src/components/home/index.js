/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Item from '../item';
import Modal from '../modal';

class Body extends Component {
  constructor(props) {
		super(props);
    this.onClickDetail = this.onClickDetail.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
		this.state = {
      modal: false,
      detail: ''
		};
	}

	onClickDetail(detail) {
      this.setState({
        modal: true,
        detail
      });
  }

  onClickClose() {
    this.setState({
      modal: false
    });
  }
  
	render() {
    const { modal } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="card-group">
						<Item 
              onClick={this.onClickDetail}
            />
            {modal && <Modal 
              isOpen={this.state.modal}
              onClickClose={this.onClickClose}
              detail={this.state.detail}
            />}
					</div>
				</div>
			</div>
		);
	}
}

export default Body;