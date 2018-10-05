// SignUp.js
import React from 'react';
import DownloadCSV from './DownloadCSV'
import ArmTestRow from './ArmTestRow'
import BarthelIndexCell from './BarthelIndexCell'

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', email: '', password: '', password_dup: '', designation: '', group: ''};
		this.props = props;
		this.signUp = this.signUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signUp(event) {
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
					<h2>Create a new account</h2>
				</div>
				<div className="login-form">
					<form>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Name</label>
							<div className="col-sm-3">
								<input type="text" id="name" className="form-control" ref="name" onChange={(event) => this.onChange(event, "name")} value={this.state.name} placeholder="Name"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Email</label>
							<div className="col-sm-3">
								<input type="email" id="email" className="form-control" ref="email" onChange={(event) => this.onChange(event, "email")} value={this.state.email} placeholder="Email address"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Password</label>
							<div className="col-sm-3">
								<input type="password" id="password" className="form-control" ref="password" onChange={(event) => this.onChange(event, "password")} value={this.state.password} placeholder="Password"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Re-Password</label>
							<div className="col-sm-3">
								<input type="password" id="password_dup" className="form-control" ref="password_dup" onChange={(event) => this.onChange(event, "password_dup")} value={this.state.password_dup} placeholder="Re-enter password"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Group</label>
							<div className="col-sm-3">
								<input type="text" id="group" className="form-control" ref="group" onChange={(event) => this.onChange(event, "group")} value={this.state.group} placeholder="Group Name"></input>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Designation</label>
							<div className="col-sm-3">
								<input type="text" id="designation" className="form-control" ref="designation" onChange={(event) => this.onChange(event, "designation")} value={this.state.designation} placeholder="Student, Professor, Researcher, etc"></input>
							</div>
						</div>
						<button type="submit" className="btn btn-default" onSubmit={this.signUp}>Submit</button>
					</form>
				</div>
			</div>
			);
	}
}

export default SignUp;
