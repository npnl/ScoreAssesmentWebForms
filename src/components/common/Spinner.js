import React, { Component } from 'react';
import { connect } from "react-redux";

export class Spinner extends Component {
  render() {
    if( this.props.show ){
      return (
        <div id="overlay">
          <div className="spinner"></div>
        </div>
      );
    }
    return null;
  }
};

const mapStateToProps = ({common}) => {
  return {
    show: common.showSpinner || false,
  };
};

export default connect(mapStateToProps)(Spinner);

Spinner.defaultProps = {
  show: false,
};