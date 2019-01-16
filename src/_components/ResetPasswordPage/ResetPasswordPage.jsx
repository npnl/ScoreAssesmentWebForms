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
        waiting: false,
        submitted: false
      };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  componentWillUnmount() {
    this.setState({waiting: false});
    this.props.dispatch(userActions.resetPasswordStepZero());
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
      this.setState({waiting: true});
    }

    render() {
        const { flashMessages, reset_mail_sent } = this.props;
        const { user, submitted, waiting } = this.state;
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
                    {waiting &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                  </div>
              </form>
          </div>
        );

        var mail_sent_screen = (
          <div className="col-md-6 col-md-offset-3">
            <h2>Password email sent successfully to your email account</h2>
          {flashMessages.message && <span className={""+flashMessages.type}>{flashMessages.message !== undefined ? (flashMessages.type === 'alert-success' ? 'Success : ' + flashMessages.message : 'Failure : ' + flashMessages.message) : ''}</span>}
          <br/><br/><br/>
              <p>Open your email and click on the reset link to reset your account password for SCORE Assessment Portal.</p>
              <Link to="/login" className="btn btn-link">Login</Link>
          </div>);

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

        if (reset_mail_sent !== undefined && reset_mail_sent === true) {
            render_screen = mail_sent_screen;
        }

        return render_screen;
    }
}

function mapStateToProps(state) {
    const { flashMessages, users } = state;
    return {
      flashMessages,
      reset_mail_sent: users.reset_mail_sent
    };
}

const connectedResetPasswordPage = connect(mapStateToProps)(ResetPasswordPage);
export { connectedResetPasswordPage as ResetPasswordPage };