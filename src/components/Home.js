// Home.js
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {form_type: props.form_type};
		this.form_type = props.form_type;
	}

	render() {
		return(
			<div className="main-container">
				<h1>Select a form type.</h1>
				<h2><Link to="/NhssInputForm">NIHSS</Link></h2>
				<h2><Link to="/FmaInputForm">FMA</Link></h2>
				<h2><Link to="/WmftInputForm">WMFT</Link></h2>
			</div>);
	}
}

export default Home;