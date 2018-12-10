/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/main';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;
