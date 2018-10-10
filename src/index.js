'use strict';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import { HashRouter, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from 'redux-devtools-extension';

import App from "./components/App";
import Login from "./components/Login";

import auth from "./reducers/authReducer";
import forms from "./reducers/formReducer";
import common from "./reducers/commonReducer";
import restaurants from "./reducers/restaurantReducer";
import SpinnerMiddleware from "./middlewares/SpinnerMiddleware";

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const container = document.getElementById("root");
const history = createHistory();

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter basename="/" history={history}>
      <div className="root row">
        <Route path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </HashRouter>
  </Provider>
);

const rootReducer = combineReducers({
  auth: auth,
  common: common,
  forms: forms,
  restaurants: restaurants
});

var store = null;
if(process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, applyMiddleware(SpinnerMiddleware, thunk));
} else {
  store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(SpinnerMiddleware, thunk)));
}

ReactDOM.render(<Root store={store}/>, container);





