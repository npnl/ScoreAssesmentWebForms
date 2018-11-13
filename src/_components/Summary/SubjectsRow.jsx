import React from 'react';
import { connect } from 'react-redux';
import { AssessmentDownloadLink } from './AssessmentDownloadLink'
import { Popup } from '../common/Popup'

class SubjectsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_comment_box: false,
      window_open: false
    };
    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }

  showPopup() {
    if (this.state.window_open === false) {
      this.setState({show_comment_box: true, window_open: true});
    }
  }

  hidePopup() {
    this.setState({show_comment_box: false, window_open: false});
  }

    render() {
      const { sno, assessment_info, subject_name } = this.props;
      return (
        <tr className="">
            <td className="subject-listing-sno">{sno}</td>
            <td className="">{subject_name}</td>
            <td className="">{assessment_info.date}</td>
            <td className="">{assessment_info.assessed_by}</td>
            <td className="">{assessment_info.nihss ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"nihss"}/> : ""}</td>
            <td className="">{assessment_info.fma ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"fma"}/> : ""}</td>
            <td className="">{assessment_info.mas ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"mas"}/> : ""}</td>
            <td className="">{assessment_info.mrs ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"mrs"}/> : ""}</td>
            <td className="">{assessment_info.mmt ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"mmt"}/> : ""}</td>
            <td className="">{assessment_info.sis ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"sis"}/> : ""}</td>
            <td className="">{assessment_info.wmft ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"wmft"}/> : ""}</td>
            <td className="">{assessment_info.barthel ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"barthel"}/> : ""}</td>
            <td className="">{assessment_info.arm ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"arm"}/> : ""}</td>
            <td className="">{assessment_info.moca ? <AssessmentDownloadLink assessment_id={assessment_info.id} assessment_type={"moca"}/> : ""}</td>
            <td className="comment-td" onClick={this.showPopup}>{<Popup show_comment_box={this.state.show_comment_box} text={assessment_info.comments} assessment_id={assessment_info.id} closePopup={this.hidePopup}/>}</td>
        </tr>
      );
    }
}

function mapStateToProps(state, ownProps) {
    return {sno: ownProps.sno, assessment_info: ownProps.assessment_info, subject_name: ownProps.subject_name};
}

const connectedSubjectsRow = connect(mapStateToProps)(SubjectsRow);
export { connectedSubjectsRow as SubjectsRow };