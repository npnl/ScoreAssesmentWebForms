import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { GroupsRow } from './GroupsRow'
import { subjectActions } from '../../_actions'
import { formActions} from '../../_actions';

class GroupsPage extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        name: '',
        authentication_code: ''
      };

      this.addNewGroup = this.addNewGroup.bind(this);
      this.createGroup = this.createGroup.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(subjectActions.getAllGroups());
    }

    addNewGroup(input_type, event) {
      this.setState({[input_type]: event.target.value});
    }

    createGroup() {
      const { name, authentication_code } = this.state;
      const { dispatch } = this.props;
      if (name && authentication_code) {
        dispatch(subjectActions.createNewGroup({group: {name, authentication_code}}));
      }
    }

    render() {
      const { groups_array } = this.props;

      var table_headings = [];
      table_headings.push(<th className="">S.No</th>);
      table_headings.push(<th className="">Group Name</th>);
      table_headings.push(<th className="">Group Token</th>);
      table_headings.push(<th className="">Total Clinicians</th>);
      table_headings.push(<th>Total Assessments</th>);
      table_headings.push(<th>Total Subjects</th>);

      var table_rows = [];
      for (var i = 0; i < groups_array.length; i++) {
        table_rows.push(<GroupsRow sno={i+1} group_info={groups_array[i]} />);
      }

      var new_row=(
        <tr>
          <td className="">{table_rows.length+1}</td>
          <td><input className="form-control" type="text" placeholder="Group Name" onChange={(event) => this.addNewGroup('name', event)} /></td>
          <td><input className="form-control" type="text" placeholder="Group Token" onChange={(event) => this.addNewGroup('authentication_code', event)} /></td>
          <td><button className="btn btn-primary mas-add-row-btn" onClick={this.createGroup}>Create New Group</button></td>
          <td className=""></td>
          <td className=""></td>
        </tr>);

      table_rows.push(new_row);

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
    const { groups } = state;
    const { groups_array } = groups;
    return { groups_array };
}

const connectedGroupsPage = connect(mapStateToProps)(GroupsPage);
export { connectedGroupsPage as GroupsPage };