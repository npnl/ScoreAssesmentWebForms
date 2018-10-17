import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import { PrivateRoute } from '../privateRoute';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { Forms } from '../Forms';
import { SubjectsPage } from '../Summary';
import OtCogAssessment from '../forms/OtCogAssessment'

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (

          <div className="App">
              <Router history={history}>
                  <div>
                      <PrivateRoute exact path="/" component={HomePage} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/register" component={RegisterPage} />

                      <Route path="/NhssInputForm" component={()=><Forms form_type="NhssInputForm"/>} />
                      <Route path="/FmaInputForm" component={()=><Forms form_type="FmaInputForm" />} />
                      <Route path="/WmftInputForm" component={()=><Forms form_type="WmftInputForm"/>} />
                      <Route path="/OtCogAssessment" component={() => <OtCogAssessment />} />
                      <Route path="/SisInputForm" component={() => <Forms form_type="SisInputForm" />} />
                      <Route path="/MRSForm" component={() => <Forms form_type="MRSForm" />} />
                      <Route path="/MASForm" component={() => <Forms form_type="MASForm" />} />
                      <Route path="/MmtRomForm" component={() => <Forms form_type="MmtRomForm" />} />
                      <Route path="/BarthelIndexForm" component={() => <Forms form_type="BarthelIndexForm" />} />
                      <Route path="/ArmTestForm" component={() => <Forms form_type="ArmTestForm" />} />
                      <Route path="/Summary/SubjectsPage" component={() => <SubjectsPage />} />
                  </div>
              </Router>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 