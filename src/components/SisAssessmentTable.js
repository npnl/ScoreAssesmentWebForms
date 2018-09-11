// SisAssessmentTable.js
import React from 'react';
import CustomRadioButtons from './CustomRadioButtons'

class SisAssessmentTable extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			description: this.props.data.description,
			headings: this.props.data.headings,
			options: this.props.data.options,
			option_values: this.props.data.option_values
		};

		this.scoreChanged = this.scoreChanged.bind(this);
	}

	scoreChanged(sub_question_id, value){
		var question_id = this.state.headings[0].charAt(0);
		this.props.scoreChanged(question_id, sub_question_id, value);
	}

	render() {

		var table_headings = [];
		for (var i = 0; i < this.state.headings.length; i++) {
			table_headings.push(<th className={i === 0 ? "question-cell" : ""}>{this.state.headings[i]}</th>);
		}

		var table_rows = [];
		for (i = 0; i < this.state.options.length; i++) {
			table_rows.push(<CustomRadioButtons scoreChanged={this.scoreChanged} option_name={this.state.options[i]} option_values={this.state.option_values} />);
		}
		var output = (
			<div>
				<h2>{this.state.description}</h2>
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
			);
		return output;
	}
}

export default SisAssessmentTable;
