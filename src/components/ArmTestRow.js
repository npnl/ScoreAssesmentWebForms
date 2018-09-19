// ArmTestRow.js
import React from 'react';

class ArmTestRow extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			heading: props.data.heading,
			sort_heading: props.data.sort_heading,
			options: props.data.options,
			reproducibility: props.data.reproducibility,
			scalability: props.data.scalability
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var index = Number(event.target.id);
		var options = this.state.options;
		var score = event.target.value;
		options[index].value = score;
    	this.setState({options: options});
    	this.props.scoreChanged(this.state.sort_heading, index, score);
	}

	render() {
		var rows = [];
		for (var i = 0; i < this.state.options.length; i++) {
			rows.push(
				<tr>
				    <td className="">{i+1}</td>
				    <td className="td-left">{this.state.options[i].label}</td>
				    <td><input id={i} type="text" value={this.state.options[i].value} onChange={this.handleChange} className="form-control-plaintext"></input></td>
				</tr>);
		}
		return (
			<div>
			<h3 className="activity-heading">{this.state.heading}</h3>
				<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th className="row-index">S.No</th>
							<th className="row-index-arm th-left">Activity</th>
							<th className="th-left">Score</th>
						</tr>
					</thead>
					<tbody>
					{rows}
					</tbody>
				</table>
			</div>
			);
	}
}

export default ArmTestRow;
