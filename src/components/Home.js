// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {form_type: props.form_type};
		this.form_type = props.form_type;
	}

	render() {
		return(
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
			</div>);
	}
}

export default Home;