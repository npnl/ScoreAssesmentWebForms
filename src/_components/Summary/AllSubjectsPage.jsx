import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { SubjectsPage } from './SubjectsPage'
import { subjectActions } from '../../_actions'

class AllSubjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.showDeleteOptions = this.showDeleteOptions.bind(this);
  }

  componentDidMount() {
      this.props.dispatch(subjectActions.getAllSubjectsInfo());
  }

  showDeleteOptions() {
    const { dispatch } = this.props;
      dispatch(subjectActions.toggleDeleteOptions());
  }

    render() {
      const { subjects_info, delete_btns_visible } = this.props;
      var groups = subjects_info;

      var delete_btn_text = delete_btns_visible === true ? 'Hide delete options' : 'I want to delete few bad record. Show me options to delete';

      var tables = [];
      for (var i = 0; i < groups.length; i++) {
        tables.push(<SubjectsPage subjects_info={groups[i].subjects} group_name={groups[i].group_name}/>);
      }

        return (
          <div>
              <Header/>
              <div className="main-container">
                <button className="btn btn-danger btn-show-delete-btns" onClick={this.showDeleteOptions}>{delete_btn_text}</button>
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
    const { subjects_info, delete_btns_visible } = subjects;
    return { subjects_info, delete_btns_visible };
}

const connectedAllSubjectsPage = connect(mapStateToProps)(AllSubjectsPage);
export { connectedAllSubjectsPage as AllSubjectsPage };