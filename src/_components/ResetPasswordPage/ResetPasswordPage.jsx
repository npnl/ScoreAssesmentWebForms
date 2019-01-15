import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

      this.state = {
        user: {
          email: '',
          password: '',
          password_confirmation: ''
        },
        submitted: false
      };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      const { name, value } = e.target;
      const { user } = this.state;
      this.setState({
        user: {
          ...user,
          [name]: value
        }
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;
      const { dispatch } = this.props;
      if (this.props.step === 'update_password' && user.email && user.password && user.password_confirmation ) {
        dispatch(userActions.reset_password({user: user}, this.props.match.params.reset_token));
      }

      if (this.props.step === 'request_password_link' && user.email) {
        dispatch(userActions.request_password_update({user: user}));
      }
    }

    render() {
        const { flashMessages } = this.props;
        const { user, submitted } = this.state;
        var request_screen = (
          <div className="col-md-6 col-md-offset-3">
              <h2>Forgot Password</h2>
            {flashMessages.message && <span className={""+flashMessages.type}>{flashMessages.message !== undefined ? (flashMessages.type === 'alert-success' ? 'Success : ' + flashMessages.message : 'Failure : ' + flashMessages.message) : ''}</span>}
              <form name="form" onSubmit={this.handleSubmit}>
                  <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                    {submitted && !user.email &&
                    <div className="help-block">Email is required</div>
                    }
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary">Reset Password</button>
                  </div>
              </form>
          </div>
        );

        var update_screen = (<div className="col-md-6 col-md-offset-3">
            <h2>Forgot Password</h2>
          {flashMessages.message && <span className={""+flashMessages.type}>{flashMessages.message !== undefined ? (flashMessages.type === 'alert-success' ? 'Success : ' + flashMessages.message : 'Failure : ' + flashMessages.message) : ''}</span>}
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                  {submitted && !user.email &&
                  <div className="help-block">Email is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                  {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !user.password_confirmation ? ' has-error' : '')}>
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" className="form-control" name="password_confirmation" value={user.password_confirmation} onChange={this.handleChange} />
                  {submitted && !user.password_confirmation &&
                  <div className="help-block">Password Confirmation is required</div>
                  }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Reset Password</button>
                </div>
            </form>
        </div>);

        var render_screen = request_screen;
        if (this.props.step === 'update_password') {
            render_screen = update_screen;
        }

        return render_screen;
    }
}

function mapStateToProps(state) {
    const { flashMessages } = state;
    return {
      flashMessages
    };
}

const connectedResetPasswordPage = connect(mapStateToProps)(ResetPasswordPage);
export { connectedResetPasswordPage as ResetPasswordPage };