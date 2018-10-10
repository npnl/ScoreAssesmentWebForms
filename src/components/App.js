import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import ContentRoot from "./ContentRoot";
import { Sidebar } from "./common/Sidebar";
import Login from "./Login";

import { ACCESS_TOKEN_KEY } from "../config";
import get from "../utils/storageUtils";

const AppComponent = ({authenticated}) => {
  return authenticated
      ? <div className="root row">
          <Sidebar />
          <ContentRoot />
        </div> 
      : <Redirect to="/login" />
};

const App = connect((state, ownProps) => {
  return _.merge({}, ownProps, {
    authenticated: _.get(state, ["auth", "authenticated"], false) || get(ACCESS_TOKEN_KEY)
  });
})(AppComponent);

export default  App