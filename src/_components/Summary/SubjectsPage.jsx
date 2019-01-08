import React from 'react';
import { connect } from 'react-redux';
import { SubjectsRow } from './SubjectsRow'

class SubjectsPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      var table_headings = [];
      table_headings.push(<th className="subject-listing-sno">S.No</th>);
      table_headings.push(<th className="">Subject Name</th>);
      table_headings.push(<th className="">Date</th>);
      table_headings.push(<th className="">Assessed by</th>);
      table_headings.push(<th>NIHSS</th>);
      table_headings.push(<th>FMA</th>);
      table_headings.push(<th>MAS</th>);
      table_headings.push(<th>MRS</th>);
      table_headings.push(<th>MMT/ROM</th>);
      table_headings.push(<th>SIS</th>);
      table_headings.push(<th>WMFT</th>);
      table_headings.push(<th>Barthel</th>);
      table_headings.push(<th>Arm</th>);
      table_headings.push(<th>MOCA</th>);
      table_headings.push(<th>MAL</th>);
      table_headings.push(<th>Comments</th>);

      const {subjects_info, group_name} = this.props;

      var table_rows = [];
      var counter = 1;
      for (var i = 0; i < subjects_info.length; i++) {
          for(var j = 0; j < subjects_info[i].assessments.length; j++ ) {
            table_rows.push(<SubjectsRow sno={counter} subject_name={subjects_info[i].subject_name} assessment_info={subjects_info[i].assessments[j]} />);
            counter += 1;
          }
      }

        return (
          <div>
            <h1>Group : {group_name}</h1>
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                  {table_headings}
                </tr>
                </thead>
                <tbody>
                  {table_rows}
                </tbody>
            </table>
            <br/>
            <hr/>
          </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {subject_info: ownProps.subjects_info, group_name: ownProps.group_name};
}

const connectedSubjectsPage = connect(mapStateToProps)(SubjectsPage);
export { connectedSubjectsPage as SubjectsPage };