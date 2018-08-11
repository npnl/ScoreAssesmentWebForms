import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Forms from './components/Forms';
import Home from './components/Home';
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
						<nav class="navbar navbar-inverse navbar-fixed-top">
							<div class="container">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
									<a class="navbar-brand" href="/">Home</a>
								</div>
								<div id="navbar" class="collapse navbar-collapse">
									<ul class="nav navbar-nav">
										<li><Link to="/NhssInputForm">NHSS</Link></li>
										<li><Link to="/FmaLeInputForm">FMA LE</Link></li>
										<li><Link to="/FmaUeInputForm">FMA UE</Link></li>
										<li><Link to="/FmaSenseInputForm">FMA Sense</Link></li>
									</ul>
								</div>
							</div>
						</nav>
					<Switch>
						<Route exact path="/" component={()=><Home/>} />
						<Route exact path="/NhssInputForm" component={()=><Forms form_type="NhssInputForm"/>} />
						<Route exact path="/FmaLeInputForm" component={()=><Forms form_type="FmaLeInputForm"/>} />
						<Route exact path="/FmaUeInputForm" component={()=><Forms form_type="FmaUeInputForm"/>} />
						<Route exact path="/FmaSenseInputForm" component={()=><Forms form_type="FmaSenseInputForm"/>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
