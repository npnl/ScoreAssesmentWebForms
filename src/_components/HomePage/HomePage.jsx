import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../common/Header'
import { FormOptions } from '../FormOptions'

class HomePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
          <div>
              <Header/>
              <FormOptions/>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };