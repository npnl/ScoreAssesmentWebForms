import React from "react";
import { connect } from "react-redux";

import AuthActions from "../../actions/common/authActions";

const LogoutButton = ({action}) => {
  return (<div className="pull-right">
    <button className="btn btn-primary" onClick={action}>
        Logout
    </button>
  </div>);
};

class Header extends React.Component {
    render() {
        return (<div className="header row">
            <span>{this.props.username}</span>
            <LogoutButton action={this.props.logout} />
        </div>);
    }
};

const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(AuthActions.logout())
    }
};

export default {
    Header: connect(mapStateToProps, mapDispatchToProps)(Header)
};