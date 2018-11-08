import { connect } from 'react-redux';
import { subjectActions } from '../../_actions'
var React = require('react');

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.saveComment = this.saveComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.state = {
      comments: this.props.text,
      assessment_id: this.props.assessment_id
    };
  }

  saveComment (){
    const { dispatch, closePopup } = this.props;
    dispatch(subjectActions.saveComments(this.state.assessment_id, this.state.comments));
  }

  updateComment(event) {
    this.setState({comments: event.target.value})
  }

  render() {
    const { show_comment_box, dispatch, closePopup } = this.props;
    return (
      <div>
        <textarea onChange={this.updateComment} className="comment-text-area" value={this.state.comments || ''} />
        { show_comment_box ?
          <div className='popup'>
            <div className='popup_inner'>
              <textarea onChange={this.updateComment} className="comment-text-area-big" value={this.state.comments || ''} />
              <button className="btn btn-success" onClick={this.saveComment}>Update Comment</button>
              <button className="btn btn-danger" onClick={closePopup}>Close</button>
            </div>
          </div> : null}
          </div >
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {show_comment_box: ownProps.show_comment_box, closePopup: ownProps.closePopup, assessment_id: ownProps.assessment_id};
}

const connectedPopup = connect(mapStateToProps)(Popup);
export { connectedPopup as Popup };