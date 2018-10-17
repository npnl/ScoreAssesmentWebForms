import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
var React = require('react');

class Header extends React.Component {
  render() {
    const { current_user, loggedIn } = this.props;
    var component = (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />);
    if (loggedIn && current_user && current_user.name) {
      component = (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Home</Link>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/NhssInputForm">NIHSS</Link></li>
                  <li><Link to="/FmaInputForm">FMA</Link></li>
                  <li><Link to="/WmftInputForm">WMFT</Link></li>
                  <li><Link to="/SisInputForm">SIS</Link></li>
                  <li><Link to="/MRSForm">MRS</Link></li>
                  <li><Link to="/MASForm">MAS</Link></li>
                  <li><Link to="/MmtRomForm">MMT/ROM</Link></li>
                  <li><Link to="/BarthelIndexForm">Barthel Index Form</Link></li>
                  <li><Link to="/ArmTestForm">ARM Test</Link></li>
                  <li><Link to="/OtCogAssessment">OT Cog Assessment</Link></li>
                  <li><Link to="/login">Logout({current_user.name})</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </nav>);
    }
    return (
      {...component}
    );
  }
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { current_user, loggedIn } = authentication;
  return { current_user, loggedIn };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };

export default Header;
