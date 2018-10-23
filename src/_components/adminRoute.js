import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserAdmin } from '../_helpers'

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isUserAdmin()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
);