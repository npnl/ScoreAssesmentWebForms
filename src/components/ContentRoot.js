import React from "react";
import { Route } from "react-router-dom";

import Header from "./common/Header";
import BrandsContainer from "./brands/BrandsContainer";
import Notifications from "./common/Notifications";
import Spinner from "./common/Spinner";
import AuthActions from "../actions/common/authActions"; 

const DefaultContainer = BrandsContainer;

const ContentRoot = () => {
  return (<div className="main-contents col-md-10">
    <Header username="GOFOOD CONTENT TEAM"/>
    <div className="contents-container row">
    <Notifications />
    <Spinner />
      <div>
        <Route exact path="/" component={DefaultContainer} />
        <Route path="/brands" component={BrandsContainer} />
      </div>
    </div>
  </div>);
};

export default  ContentRoot;
