import React from 'react';
import { connect } from 'react-redux';
import { subjectActions } from '../../_actions'

class AssessmentDownloadLink extends React.Component {
    constructor(props) {
        super(props);
        this.downloadCSV = this.downloadCSV.bind(this);
        this.deleteAssessment = this.deleteAssessment.bind(this);
    }

    downloadCSV() {
      const { dispatch, assessment_id, assessment_type } = this.props;
      dispatch(subjectActions.downloadAssessment(assessment_id, assessment_type));
    }

    deleteAssessment() {
      const { dispatch, assessment_id, assessment_type } = this.props;
      dispatch(subjectActions.deleteAssessment(assessment_id, assessment_type));
    }

    render() {
      const { delete_btns_visible, assessment_id } = this.props;
      return (
        <div>
          <button className={'glyphicon glyphicon-remove ' + (delete_btns_visible === true ? 'delete-assessment-show' : 'delete-assessment-hide' )} onClick={this.deleteAssessment}></button>
          <button className="btn btn-success btn-download-csv" onClick={this.downloadCSV}>
            <span className="glyphicon glyphicon-download-alt" aria-hidden="true"> CSV</span>
          </button>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
    const { subjects } = state;
    const { delete_btns_visible } = subjects;
    return { delete_btns_visible,  assessment_id: ownProps.assessment_id, assessment_type: ownProps.assessment_type};
}

const connectedAssessmentDownloadLink = connect(mapStateToProps)(AssessmentDownloadLink);
export { connectedAssessmentDownloadLink as AssessmentDownloadLink };