import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { isUserAdmin } from '../../_helpers'
var React = require('react');

class Header extends React.Component {
  render() {
    const { current_user, loggedIn, flashMessages } = this.props;
    var component = (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />);
    if (loggedIn && current_user && current_user.name) {
      component = (
        <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div id="navbar" className="collapse navbar-collapse">
                  <Link className="navbar-brand" to="/">Forms</Link>
                  <ul className="nav navbar-nav">
                    {/*<li><Link to="/NhssInputForm">NIHSS</Link></li>*/}
                    {/*<li><Link to="/FmaInputForm">FMA</Link></li>*/}
                    {/*<li><Link to="/WmftInputForm">WMFT</Link></li>*/}
                    {/*<li><Link to="/SisInputForm">SIS</Link></li>*/}
                    {/*<li><Link to="/MRSForm">MRS</Link></li>*/}
                    {/*<li><Link to="/MASForm">MAS</Link></li>*/}
                    {/*<li><Link to="/MmtRomForm">MMT/ROM</Link></li>*/}
                    {/*<li><Link to="/BarthelIndexForm">Barthel Index Form</Link></li>*/}
                    {/*<li><Link to="/ArmTestForm">ARM Test</Link></li>*/}
                    {/*<li><Link to="/OtCogAssessment">OT Cog Assessment</Link></li>*/}
                    <li><Link to="/Summary/AllSubjectsPage">Assessment Reports</Link></li>
                    {isUserAdmin() ? <li><Link to="/Summary/GroupsPage">Groups</Link></li> : ''}

                    <li className="header-logout"><Link to="/login">Logout({current_user.name})</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className={"alert fade in custom-alert " + (flashMessages.type !== undefined ? flashMessages.type : 'custom-alert-hide')}>
            <a href="#" className="close" data-dismiss="alert">&times;</a>
            <strong>{flashMessages.type !== undefined ?(flashMessages.type === 'flashMessages-success' ? 'Success!' : 'Failure!') : ''}</strong> {flashMessages.message !== undefined ? flashMessages.message : ''}
          </div>
        </div>);
    }
    return (
      {...component}
    );
  }
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { current_user, loggedIn } = authentication;
  const {flashMessages} = state;
  return { current_user, loggedIn, flashMessages };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };

export default Header;
