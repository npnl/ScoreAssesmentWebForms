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

		this.handleChange = this.handleChange.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
	}

	handleChange(event) {
		return;
		this.setState({score: event.target.value});
		this.props.scoreChanged(this.state.item_no, this.state.index, event.target.value);
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
		for (var i = 0; i < this.state.options.length; i++) {
			table_rows.push(<CustomRadioButtons scoreChanged={this.scoreChanged} option_name={this.state.options[i]} option_values={this.state.option_values} />);
		}
		var table = (
			<table className="table table-bordered">
				<thead>
					<tr>
						{table_headings}
					</tr>
				</thead>
				<tbody>
					{table_rows}
				</tbody>
			</table>
			);
		return table;
	}
}

export default SisAssessmentTable;
