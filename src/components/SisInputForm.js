// SisInputForm.js
import React from 'react';
import SisAssessmentTable from './SisAssessmentTable'
import DownloadCSV from './DownloadCSV'

class SisInputForm extends React.Component {
	constructor(props) {
		super(props);
		var selections = {}
		this.state = {tables: props.data, selections: selections}
		this.scoreChanged = this.scoreChanged.bind(this);
		this.getCSVData = this.getCSVData.bind(this);
	}

	scoreChanged(question_id, sub_question_id, value) {
		var id = "" + question_id + sub_question_id;
		var selections = this.state.selections;
		selections[id] = "" + value;
		console.log(selections);
		this.setState({selections: selections}); 
	}

	getCSVData() {
		var selections = this.state.selections;
		var keys = Object.keys(selections);
		keys.sort();
		var data = keys.map(function(question_id, index) {
			var new_item = {
				QuestionId: question_id,
				OptionSelected: selections[question_id]
			};
			return new_item; 
		}, this, selections);
		return data;
	}

	render() {
		var tables = [];
		for (var i = 0; i < this.state.tables.length; i++) {
			var table_data = this.state.tables[i];
			tables.push(<SisAssessmentTable data={table_data} scoreChanged={this.scoreChanged}/>);
		}

		return(
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-title">
					<h1>Stroke Impact Scale VERSION 3.0</h1><br/><br/>
					<p className="sis-description">The purpose of this questionnaire is to evaluate how stroke has impacted your health and life. We want to know from YOUR POINT OF VIEW how stroke has affected you. We will ask you questions about impairments and disabilities caused by your stroke, as well as how stroke has affected your quality of life. Finally, we will ask you to rate how much you think you have recovered from your stroke.</p><br/>
					<hr/>
				</div>
				<div>
					{tables}
				</div>

				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={"SIS"} date={""} filename={"Input.csv"} hideNode={true} is_enabled={true}/>
				</div>

			</div>
			);
	}
}

export default SisInputForm;
