import {Link} from 'react-router-dom';
var React                = require('react');
var RouteHandler         = require('react-router').RouteHandler;
var Notice               = require('../components/common/Notice.js');
var Spinner              = require('../components/common/Spinner.js');
var SessionStore         = require('../stores/SessionStore.js');
var SpinnerStore         = require('../stores/SpinnerStore.js');
var NoticeStore          = require('../stores/NoticeStore.js');

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state  = {
      isLoggedIn    : SessionStore.isLoggedIn(),
      email         : SessionStore.getEmail(),
      showSpinner   : false,
      showNotice    : false,
      noticeMessage : "",
      errorNotice   : false,
      isLoggedIntoCAS: SessionStore.isLoggedIntoCAS(),
    };
    this.onChange = this.onChange.bind(this);
    this.checkClass = this.checkClass.bind(this);
  }

  componentDidMount() {
    SessionStore.addChangeListener(this.onChange);
    SpinnerStore.addChangeListener(this.onChange);
    NoticeStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this.onChange);
    SpinnerStore.removeChangeListener(this.onChange);
    NoticeStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      isLoggedIn    : SessionStore.isLoggedIn(),
      email         : SessionStore.getEmail(),
      showSpinner   : SpinnerStore.getSpinnerState(),
      showNotice    : NoticeStore.getNoticeState(),
      noticeMessage : NoticeStore.getNoticeMessage(),
      errorNotice   : NoticeStore.getError(),
      isLoggedIntoCAS: SessionStore.isLoggedIntoCAS(),
    });
  }

  checkClass() {
    if(this.state.isLoggedIn) {
      return '';
    } else {
      return 'hide';
    }
  }

  render() {

    var logged_header = (
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/NhssInputForm">NIHSS</Link></li>
          <li><Link to="/FmaInputForm">FMA</Link></li>
          <li><Link to="/WmftInputForm">WMFT</Link></li>
          <li><Link to="/OtCogAssessment">OT Cog Assessment</Link></li>
          <li><Link to="/SisInputForm">SIS</Link></li>
          <li><Link to="/MRSForm">MRS</Link></li>
          <li><Link to="/MASForm">MAS</Link></li>
          <li><Link to="/MmtRomForm">MMT/ROM</Link></li>
          <li><Link to="/BarthelIndexForm">Barthel Index Form</Link></li>
          <li><Link to="/ArmTestForm">ARM Test</Link></li>
        </ul>
    </div>);

    var logout_header = (
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );

    var header = (this.state.isLoggedIn) ? logged_header : logout_header;

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Home</Link>
            {header}
          </div>

        </div>
      </nav>
    );
  }
};

export default Header;
