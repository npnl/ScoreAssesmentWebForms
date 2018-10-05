// LoginForm.js
import React from 'react';
import DownloadCSV from './DownloadCSV'
import ArmTestRow from './ArmTestRow'
import BarthelIndexCell from './BarthelIndexCell'

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: ''};
		this.props = props;
		this.login = this.login.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	login(event) {
		event.preventDefault();
	}

	onChange(event, field_name) {
    var oldState = this.state;
    oldState[field_name] = event.target.value;
		this.setState(oldState);
	}

	render() {
		return(
			<div className="main-form-container">
				<div className="form-title">
					<h2>Please Login</h2>
				</div>
				<div className="login-form">
					<form>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Email</label>
							<div className="col-sm-3">
								<input type="email" id="email" className="form-control" ref="email" onChange={(event) => this.onChange(event, "email")} value={this.state.email} placeholder="Registered email address"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Password</label>
							<div className="col-sm-3">
								<input type="password" id="password" className="form-control" ref="password" onChange={(event) => this.onChange(event, "password")} value={this.state.password} placeholder="Password"></input>
							</div>
						</div>
						<button type="submit" className="btn btn-default" onSubmit={this.login}>Submit</button>
					</form>
				</div>
			</div>
			);
	}
}

export default LoginForm;
