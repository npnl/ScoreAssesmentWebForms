var React                = require('react');
var RouteHandler         = require('react-router').RouteHandler;
var Header               = require('../components/Header.js');
var LeftPanel            = require('../components/LeftPanel.js');
var Notice               = require('../components/common/Notice.js');
var Spinner              = require('../components/common/Spinner.js');
var SessionStore         = require('../stores/SessionStore.js');
var SpinnerStore         = require('../stores/SpinnerStore.js');
var NoticeStore          = require('../stores/NoticeStore.js');
var RouteActionCreators  = require('../actions/RouteActionCreators.js');

class Application extends React.Component {

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
    return (
      <div id="wrapper">
        <Spinner show={this.state.showSpinner}/>
        <Notice show={this.state.showNotice} noticeMessage={this.state.noticeMessage} error={this.state.errorNotice} />
        <div className="app">
          <div className="view-container">
            <section id="content">
              <RouteHandler/>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default Application;
