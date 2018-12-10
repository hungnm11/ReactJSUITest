/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import data from '../../data/listData.json';

const Item = ({ onClick }) => {
	return data.map((val, index) => {
		const { title, image , description } = val;
		return (<div className="col-md-3" key={index}>
			<div className="card">
				<img className="card-img-top" src={image} alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<button 
						className="btn btn-primary"
						onClick={onClick.bind(this, title, image, description)}
					>Detail</button>
				</div>
			</div>
		</div>);
	});
};

export default Item;