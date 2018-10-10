import  Home                              from './components/Home';
import  React                             from 'react';
import  {Route, Switch, BrowserRouter}    from 'react-router';
import  SignUp                            from './components/SignUp';
import  Application                       from './components/Application';
import  Forms                             from './components/Forms';
import  LoginForm                         from './components/LoginForm';
import  Header                            from './components/Header';
import  OtCogAssessment                   from './components/OtCogAssessment';

const CustomRoutes = (
      <Route name="app" path="/" handler={Home}>
            <Route name="home" path="/home" handler={Home} />
            <Route name="login" exact path="/Login" handler={LoginForm} />
            {/*<Route name="signup" exact path="/SignUp" handler={SignUp} />*/}
      </Route>
);

export default CustomRoutes;