import React from "react";

import Form from "./common/Form";
import Notifications from "./common/Notifications";
import { Logo } from "./common/Logo";
import { Auth } from "../api";
import NotificationActions from "../actions/common/notificationActions";
import AuthActions from "../actions/common/authActions";

import { getErrorMsg } from "../util";

const successHandler = (response, dispatch, props) => {
    dispatch(AuthActions.login());
};

const errorHandler = (error, dispatch, props) => {
  dispatch(NotificationActions.createNotice("Unable to login! " + getErrorMsg(error), true));
};

class Login extends React.Component {
  render() {
    return (
        <div>
            <Logo />
            <div className="col-sm-6 well col-sm-offset-3">
                <Notifications />
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input id="username" name="username" className="form-control" type="text" onChange={this.props.updateInput} placeholder="Username" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Type</label>
                    <input type="password" id="password" className="form-control"  name="password" onChange={this.props.updateInput} placeholder="Password"/>
                </div>

                <div className="form-group">
                    <div className="login-submit-button">
                        <button type="submit" className="btn btn-default">Sign In</button>
                    </div>
                </div>
            </div>
        </div>);
    }
};

const LoginForm = (props) => {
  return <Form formId="loginForm"
               api={Auth.login}
               successHandler={successHandler}
               errorHandler={errorHandler}
               component={Login}
               {...props} />
};

export default  { Login: LoginForm };