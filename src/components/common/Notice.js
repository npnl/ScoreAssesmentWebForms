var React                 = require('react');
var NoticeStore           = require('../../stores/NoticeStore.js');
var NoticeActionCreators  = require('../../actions/NoticeActionCreators.js');

class Notice extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  showNoticeComponent() {
    if(this.props.show) {
      var classes = this.props.error ? 'alert alert-danger fade in' : 'alert alert-success fade in' ;
      return (<div id="notice">
                <div className={classes}>{this.props.noticeMessage}</div>
              </div>);
    }
    return null;
  }

  render() {
    return this.showNoticeComponent();
  }
}

export default  Notice;
