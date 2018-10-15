// SisInputForm.js
import React from 'react';
import { connect } from 'react-redux';
import SisAssessmentTable from './../rows/SisAssessmentTable'
import DownloadCSV from './../common/DownloadCSV'
import { formActions } from '../../_actions'

class SisInputForm extends React.Component {
	constructor(props) {
		super(props);
		var selections = {}
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {
			subID: '',
			date: this.getCurrentDate(),
			tables: props.data,
			selections: selections,
			recovery: 0
		};
		this.scoreChanged = this.scoreChanged.bind(this);
		this.getCSVData = this.getCSVData.bind(this);
		this.hasAllAnswered = this.hasAllAnswered.bind(this);
		this.recoveryChange = this.recoveryChange.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.sendToServer = this.sendToServer.bind(this);
	}

	subjectChanged(event) {
		this.setState({subID: event.target.value});
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	recoveryChange(event) {
		var recovery = event.target.value;
		this.setState({recovery: recovery});
	}

	scoreChanged(question_id, sub_question_id, value) {
		var id = "" + question_id + sub_question_id;
		var selections = this.state.selections;
		selections[id] = "" + value;
		this.setState({selections: selections}); 
	}

	getCSVData() {
		var selections = this.state.selections;
		var keys = Object.keys(selections);
		keys.sort();
		var subject_id = this.state.subID;
		var date = this.state.date;
		var data = keys.map(function(question_id, index) {
			var new_item = {
				SubjectId: subject_id,
				Date: date,
				QuestionId: question_id,
				OptionSelected: selections[question_id]
			};
			return new_item; 
		}, this, subject_id, date, selections);
		var new_item = {
				SubjectId: subject_id,
				Date: date,
				QuestionId: "RecoveryPercent",
				OptionSelected: this.state.recovery
			};
		data.push(new_item);
		return data;
	}

  sendToServer() {
    var data = this.getCSVData();
    var rows = data.map(function(item, index) {
      var new_item = {
        question_id: item.QuestionId,
				selected_option: item.OptionSelected
      };
      return new_item;
    }, this);

    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.getCurrentDate(),
      sis_form_rows: rows
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendSisFormData(formatted));
  }

	hasAllAnswered() {
		var selections = this.state.selections;
		var keys = Object.keys(selections);
		if (keys.length === 59 && this.state.subID !== '' && this.state.date !== '') {
			return true;
		}
		return false;
	}

	getCurrentDate() {
		var d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		return [year, month, day].join('-');
	}

	render() {
		var tables = [];
		for (var i = 0; i < this.state.tables.length; i++) {
			var table_data = this.state.tables[i];
			tables.push(<SisAssessmentTable data={table_data} scoreChanged={this.scoreChanged}/>);
		}

		return(
			<div className="main-form-container">
				<div className="form-title">
					<h1>Stroke Impact Scale VERSION 3.0</h1><br/><br/>
					<p className="sis-description">The purpose of this questionnaire is to evaluate how stroke has impacted your health and life. We want to know from YOUR POINT OF VIEW how stroke has affected you. We will ask you questions about impairments and disabilities caused by your stroke, as well as how stroke has affected your quality of life. Finally, we will ask you to rate how much you think you have recovered from your stroke.</p><br/>
					<hr/>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<input type="text" className="form-control is-valid" placeholder="Subject Id" value={this.state.subID} onChange={this.subjectChanged} required />
					</div>
					<div className="date_div">
						<label>Date</label>
						<input type="date" className="form-control"  value={this.state.date} placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
					</div>
				</div>
				<div>
					{tables}
				</div>

				<div class="slidecontainer">
  					<input type="range" min="0" max="100" step="10" className="slider" id="recovery" value={this.state.recovery} onChange={this.recoveryChange}></input>
  					<p className="alignleft">No Recovery (0 %)</p>
  					<p className="alignright">Full Recovery (100%)</p><br/>
  					<p className="aligncenter">{this.state.recovery} %</p>
  					<br/><br/>
				</div>

				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"SIS.csv"} hideNode={false} is_enabled={this.hasAllAnswered()} customMessage="Please fill SubjectId, date and answer all the given questions to download/email the CSV"/>
					<button className="btn btn-primary" onClick={this.sendToServer}>Save data</button>
				</div>

			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedSisInputForm = connect(mapStateToProps)(SisInputForm);
export { connectedSisInputForm as SisInputForm };

