import React from 'react';
import { connect } from 'react-redux';

class GroupsRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <tr className="">
            <td className="">{this.props.sno}</td>
            <td className="">{this.props.group_info.name}</td>
            <td className="">{this.props.group_info.authentication_code}</td>
            <td className="">{this.props.group_info.user_count}</td>
            <td className="">{this.props.group_info.assessment_count}</td>
            <td className="">{this.props.group_info.subject_count}</td>
        </tr>
      );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedGroupsRow = connect(mapStateToProps)(GroupsRow);
export { connectedGroupsRow as GroupsRow };