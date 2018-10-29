import React from 'react';
import { connect } from 'react-redux';
import { subjectActions } from '../../_actions'

class AssessmentDownloadLink extends React.Component {
    constructor(props) {
        super(props);
        this.downloadCSV = this.downloadCSV.bind(this);
        this.assessment_id = this.props.assessment_id;
        this.assessment_type = this.props.assessment_type;
    }

    downloadCSV() {
      const { dispatch } = this.props;
      dispatch(subjectActions.downloadAssessment(this.assessment_id, this.assessment_type));
    }

    render() {
      return (
        <div>
          <button className="btn btn-success" onClick={this.downloadCSV}>
            <span className="glyphicon glyphicon-download-alt" aria-hidden="true"> CSV</span>
          </button>
        </div>
      );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedAssessmentDownloadLink = connect(mapStateToProps)(AssessmentDownloadLink);
export { connectedAssessmentDownloadLink as AssessmentDownloadLink };