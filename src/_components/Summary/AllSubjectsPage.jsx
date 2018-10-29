import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { SubjectsPage } from './SubjectsPage'
import { subjectActions } from '../../_actions'

class AllSubjectsPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(subjectActions.getAllSubjectsInfo());
    }

    render() {
      const { subjects_info } = this.props;
      console.log("The subject info is ");
      console.log(subjects_info);
      var groups = subjects_info;

      var tables = [];
      for (var i = 0; i < groups.length; i++) {
        tables.push(<SubjectsPage subjects_info={groups[i].subjects} group_name={groups[i].group_name}/>);
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
    const { subjects_info } = subjects;
    return { subjects_info };
}

const connectedAllSubjectsPage = connect(mapStateToProps)(AllSubjectsPage);
export { connectedAllSubjectsPage as AllSubjectsPage };