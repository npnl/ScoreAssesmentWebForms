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
						<nav className="navbar navbar-inverse navbar-fixed-top">
							<div className="container">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<a className="navbar-brand" href="/">Home</a>
								</div>
								<div id="navbar" className="collapse navbar-collapse">
									<ul className="nav navbar-nav">
										<li><Link to="/NhssInputForm">NHSS</Link></li>
										<li><Link to="/FmaInputForm">FMA</Link></li>
										{/* <li><Link to="/FmaUeInputForm">FMA UE</Link></li> */}
										{/* <li><Link to="/FmaSenseInputForm">FMA Sense</Link></li> */}
										<li><Link to="/WmftAffectedInputForm">WMFT Affected Arm</Link></li>
										<li><Link to="/WmftUnAffectedInputForm">WMFT Un-Affected Arm</Link></li>
									</ul>
								</div>
							</div>
						</nav>
					<Switch>
						<Route exact path="/" component={()=><Home/>} />
						<Route exact path="/NhssInputForm" component={()=><Forms form_type="NhssInputForm"/>} />
						<Route exact path="/FmaInputForm" component={()=><Forms form_type="FmaInputForm" />} />
						{/* <Route exact path="/FmaUeInputForm" component={()=><Forms form_type="FmaUeInputForm" />} /> */}
						{/*<Route exact path="/FmaSenseInputForm" component={()=><Forms form_type="FmaSenseInputForm"/>} /> */}
						<Route exact path="/WmftAffectedInputForm" component={()=><Forms form_type="WmftAffectedInputForm"/>} />
						<Route exact path="/WmftUnAffectedInputForm" component={()=><Forms form_type="WmftUnAffectedInputForm"/>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
