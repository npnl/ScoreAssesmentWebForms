// Home.js
var React = require('react');
var Link = require('react-router-dom');
var Notice = require('../components/common/Notice.js');
var Spinner = require('../components/common/Spinner.js');
var SessionStore = require('../stores/SessionStore.js');
var SpinnerStore = require('../stores/SpinnerStore.js');
var NoticeStore = require('../stores/NoticeStore.js');

class Home extends React.Component {

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
    this.renderLoginWithUsernamePasswordForm = this.renderLoginWithUsernamePasswordForm.bind(this);
    this.renderLoginWithCASButton = this.renderLoginWithCASButton.bind(this);
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
      isLoggedIn: SessionStore.isLoggedIn(),
      email: SessionStore.getEmail(),
      showSpinner: SpinnerStore.getSpinnerState(),
      showNotice: NoticeStore.getNoticeState(),
      noticeMessage: NoticeStore.getNoticeMessage(),
      errorNotice: NoticeStore.getError(),
      isLoggedIntoCAS: SessionStore.isLoggedIntoCAS(),
    });
  }

  checkClass() {
    if (this.state.isLoggedIn) {
      return '';
    } else {
      return 'hide';
    }
  }

  renderLoginWithUsernamePasswordForm() {
    return (
      <div className="main-container">
        <h1>Select a form type.</h1>
        <table className="table table-bordered table-striped">
          <tbody>
          <tr>
            <td>
              <h2><Link to="/NhssInputForm">NIHSS</Link></h2>
            </td>
            <td>
              <h2><Link to="/FmaInputForm">FMA</Link></h2>
            </td>
            <td>
              <h2><Link to="/WmftInputForm">WMFT</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/OtCogAssessment">OT Cog Assessment</Link></h2>
            </td>
            <td>
              <h2><Link to="/SisInputForm">SIS</Link></h2>
            </td>
            <td>
              <h2><Link to="/MRSForm">MRS</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/MASForm">MAS</Link></h2>
            </td>
            <td>
              <h2><Link to="/MmtRomForm">MMT/ROM</Link></h2>
            </td>
            <td>
              <h2><Link to="/BarthelIndexForm">Barthel Index Form</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/ArmTestForm">ARM Test</Link></h2>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderLoginWithCASButton() {
    return (
      <div className="main-container">
        <h1><Link to="/Login">Login</Link></h1>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.isLoggedIn ? this.renderLoginWithCASButton() : this.renderLoginWithUsernamePasswordForm() }
      </div>);
  }
};

export default Home;