// Home.js
import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {form_type: props.form_type};
		this.form_type = props.form_type;
	}

	render() {
		return(
			<div className="main-container">
				<h1>Please select a tab.</h1>
			</div>);
	}
}

export default Home;
