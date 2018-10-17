import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { SubjectsRow } from './SubjectsRow'
import { FormOptions } from '../FormOptions'
import { subjectActions } from '../../_actions'

class SubjectsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(subjectActions.getAllSubjects(''));
    }

    render() {
        const { subject_array } = this.props;



      var table_headings = [];
      table_headings.push(<th className="">S.No</th>);
      table_headings.push(<th className="">Subject Name</th>);
      table_headings.push(<th className="">Date</th>);
      table_headings.push(<th>NIHSS</th>);
      table_headings.push(<th>FMA</th>);
      table_headings.push(<th>MAS</th>);
      table_headings.push(<th>MRS</th>);
      table_headings.push(<th>MMT/ROM</th>);
      table_headings.push(<th>SIS</th>);
      table_headings.push(<th>WMFT</th>);
      table_headings.push(<th>Barthel</th>);
      table_headings.push(<th>Arm</th>);

      var table_rows = [];
      var counter = 1;
      for (var i = 0; i < subject_array.length; i++) {
          for(var j = 0; j < subject_array[i].assessments.length; j++ ) {
            table_rows.push(<SubjectsRow sno={counter} subject_name={subject_array[i].subject_name} assessment_info={subject_array[i].assessments[j]} />);
            counter += 1;
          }
      }

        return (
          <div>
              <Header/>
              <div className="main-container">
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
                  <br/><br/>
                  <hr/>
              </div>

          </div>
        );
    }
}

function mapStateToProps(state) {
    const { subjects } = state;
    const { subject_array } = subjects;
    return { subject_array };
}

const connectedSubjectsPage = connect(mapStateToProps)(SubjectsPage);
export { connectedSubjectsPage as SubjectsPage };