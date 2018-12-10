/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';

const Header  = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button> 

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
