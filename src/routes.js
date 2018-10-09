var React                  = require('react');
var Router                 = require('react-router');
var Route                  = Router.Route;
var DefaultRoute           = Router.DefaultRoute;
var SignUp                 = require('./components/SignUp');
var Home                   = require('./components/Home.js');
var Forms                  = require('./components/Forms');
var SignUp                 = require('./components/SignUp');
var LoginForm              = require('./components/LoginForm');
var Header                 = require('./components/Header');
var Home                   = require('./components/Home');
var OtCogAssessment        = require('./components/OtCogAssessment');

module.exports = (
  <Route name="app" path="/" handler={Home}>
    <Route name="home" path="/SignUp" component={() => <SignUp />}/>
    <Route name="NhssInputForm" path="/brands" handler={Home}/>
    <Route exact path="/home" component={()=><Home/>} />
    <Route exact path="/NhssInputForm" component={()=><Forms form_type="NhssInputForm"/>} />
    <Route exact path="/FmaInputForm" component={()=><Forms form_type="FmaInputForm" />} />
    <Route exact path="/WmftInputForm" component={()=><Forms form_type="WmftInputForm"/>} />
    <Route exact path="/OtCogAssessment" component={() => <OtCogAssessment />} />
    <Route exact path="/SisInputForm" component={() => <Forms form_type="SisInputForm" />} />
    <Route exact path="/MRSForm" component={() => <Forms form_type="MRSForm" />} />
    <Route exact path="/MASForm" component={() => <Forms form_type="MASForm" />} />
    <Route exact path="/MmtRomForm" component={() => <Forms form_type="MmtRomForm" />} />
    <Route exact path="/BarthelIndexForm" component={() => <Forms form_type="BarthelIndexForm" />} />
    <Route exact path="/ArmTestForm" component={() => <Forms form_type="ArmTestForm" />} />
    <Route path="/SignUp" component={() => <SignUp />} />
    <Route path="/Login" component={() => <LoginForm />} />
    <Route component={()=><Home/>} />
    <DefaultRoute handler={Home} />
  </Route>
);
