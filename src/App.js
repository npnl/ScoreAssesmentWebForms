import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Forms from './components/Forms';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Home from './components/Home';
import OtCogAssessment from './components/OtCogAssessment'
import { Provider } from 'react-redux';
import RouteStore from './stores/RouteStore';

import './App.css';

class App extends Component {
	render() {
		return (
				<Provider store={RouteStore}>
					<BrowserRouter basename="/ScoreAssessmentWebForms">
						<div className="App">
							<Header />
							<Switch>

							</Switch>
						</div>
					</BrowserRouter>
				</Provider>
		);
	}
}

export default App;
