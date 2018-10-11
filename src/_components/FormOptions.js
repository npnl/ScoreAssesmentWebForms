import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FormOptions extends React.Component {
  componentDidMount() {
    // this.props.dispatch(userActions.getAll());
  }

  render() {
    return (
      <div className="main-container">
        <h1>Select a form type.</h1>
        <table className="table table-bordered table-striped">
          <tbody>
          <tr>
            <td>
              <h2><Link to="/NhssInputForm">NIHSS</Link></h2>
            </td>
            <td>
              <h2><Link to="/FmaInputForm">FMA</Link></h2>
            </td>
            <td>
              <h2><Link to="/WmftInputForm">WMFT</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/OtCogAssessment">OT Cog Assessment</Link></h2>
            </td>
            <td>
              <h2><Link to="/SisInputForm">SIS</Link></h2>
            </td>
            <td>
              <h2><Link to="/MRSForm">MRS</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/MASForm">MAS</Link></h2>
            </td>
            <td>
              <h2><Link to="/MmtRomForm">MMT/ROM</Link></h2>
            </td>
            <td>
              <h2><Link to="/BarthelIndexForm">Barthel Index Form</Link></h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2><Link to="/ArmTestForm">ARM Test</Link></h2>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

const connectedFormOptions = connect(mapStateToProps)(FormOptions);
export { connectedFormOptions as FormOptions };