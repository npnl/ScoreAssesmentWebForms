import React from 'react';
import { connect } from 'react-redux';
import { AssessmentDownloadLink } from './AssessmentDownloadLink'

class SubjectsRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <tr className="">
            <td className="">{this.props.sno}</td>
            <td className="">{this.props.subject_name}</td>
            <td className="">{this.props.assessment_info.date}</td>
            <td className="">{this.props.assessment_info.assessed_by}</td>
            <td className="">{this.props.assessment_info.nihss ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"nihss"}/> : ""}</td>
            <td className="">{this.props.assessment_info.fma ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"fma"}/> : ""}</td>
            <td className="">{this.props.assessment_info.mas ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"mas"}/> : ""}</td>
            <td className="">{this.props.assessment_info.mrs ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"mrs"}/> : ""}</td>
            <td className="">{this.props.assessment_info.mmt ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"mmt"}/> : ""}</td>
            <td className="">{this.props.assessment_info.sis ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"sis"}/> : ""}</td>
            <td className="">{this.props.assessment_info.wmft ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"wmft"}/> : ""}</td>
            <td className="">{this.props.assessment_info.barthel ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"barthel"}/> : ""}</td>
            <td className="">{this.props.assessment_info.arm ? <AssessmentDownloadLink assessment_id={this.props.assessment_info.id} assessment_type={"arm"}/> : ""}</td>
        </tr>
      );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedSubjectsRow = connect(mapStateToProps)(SubjectsRow);
export { connectedSubjectsRow as SubjectsRow };