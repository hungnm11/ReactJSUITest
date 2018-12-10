/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Body from './components/main';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>

					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button> 

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">About</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link disabled" to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</nav>

					{/* <Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} /> */}
					{/* <Header />
				<Body />
				<Footer /> */}
				</Router>
			</div>
		);
	}
}

export default App;
