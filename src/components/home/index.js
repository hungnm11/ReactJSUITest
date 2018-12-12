/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import data from '../../data/listData.json';
import Item from '../item';
import Modal from '../modal';

class Body extends Component {
  constructor(props) {
		super(props);
    this.onClickDetail = this.onClickDetail.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onFilterList = this.onFilterList.bind(this);
		this.state = {
      modal: false,
      detail: '',
      filterStr: ''
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

  onFilterList(e) {
    this.setState({
      filterStr: e.target.value
    });
  }
  
	render() {
    let list = data;
    const { modal, filterStr } = this.state;
    filterStr.trim().toLowerCase();
    if (filterStr.length > 0) {
      list = data.filter((i) => {
        return i.title.toLowerCase().match(filterStr);
      });
    }

		return (
			<div className="container">
        <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Filter</span>
            </div>
            <input type="text" 
              className="form-control" 
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
              onChange={this.onFilterList}
              value={filterStr}
            />
          </div>
        </div>
        </div>
				<div className="row">
					<div className="card-group">
						<Item
              data={list}
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