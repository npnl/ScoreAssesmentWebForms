import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { SubjectsPage } from './SubjectsPage'
import { subjectActions } from '../../_actions'

class AllSubjectsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(subjectActions.getAllSubjects(''));
    }

    render() {
      const { subject_array } = this.props;
      var groups = subject_array;

      var tables = [];
      for (var i = 0; i < groups.length; i++) {
        tables.push(<SubjectsPage subject_array={groups[i].subjects} group_name={groups[i].group_name}/>);
      }

        return (
          <div>
              <Header/>
              <div className="main-container">
                {tables}
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

const connectedAllSubjectsPage = connect(mapStateToProps)(AllSubjectsPage);
export { connectedAllSubjectsPage as AllSubjectsPage };