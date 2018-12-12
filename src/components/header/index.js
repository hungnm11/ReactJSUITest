/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">DEMO</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">HOME</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">ABOUT</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact">CONTACT</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
	
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
