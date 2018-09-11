import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Forms from './components/Forms';
import Home from './components/Home';
import OtCogAssessment from './components/OtCogAssessment'
import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter basename="/ScoreAssessmentWebForms">
				<div className="App">
						<nav className="navbar navbar-inverse navbar-fixed-top">
							<div className="container">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<Link className="navbar-brand" to="/">Home</Link>
								</div>
								<div id="navbar" className="collapse navbar-collapse">
									<ul className="nav navbar-nav">
										<li><Link to="/NhssInputForm">NIHSS</Link></li>
										<li><Link to="/FmaInputForm">FMA</Link></li>
										{/* <li><Link to="/FmaUeInputForm">FMA UE</Link></li> */}
										{/* <li><Link to="/FmaSenseInputForm">FMA Sense</Link></li> */}
										<li><Link to="/WmftInputForm">WMFT</Link></li>
										<li><Link to="/OtCogAssessment">OT Cog Assessment</Link></li>
										<li><Link to="/SisInputForm">Stroke Impact Scale</Link></li>
										{/* <li><Link to="/WmftUnAffectedInputForm">WMFT Un-Affected Arm</Link></li> */}
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
						<Route exact path="/WmftInputForm" component={()=><Forms form_type="WmftInputForm"/>} />
						<Route exact path="/OtCogAssessment" component={() => <OtCogAssessment />} />
						<Route exact path="/SisInputForm" component={() => <Forms form_type="SisInputForm" />} />
						{/* <Route exact path="/WmftUnAffectedInputForm" component={()=><Forms form_type="WmftUnAffectedInputForm"/>} /> */}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
