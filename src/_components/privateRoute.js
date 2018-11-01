import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { serverConstants } from '../_constants'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('access_token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: `/${serverConstants.UI_RELATIVE_PATH}/login`, state: { from: props.location } }} />
  )} />
);