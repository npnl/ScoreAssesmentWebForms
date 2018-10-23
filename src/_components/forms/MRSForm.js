// MRSForm.js
import React from 'react';
import { connect } from 'react-redux';
import DownloadCSV from './../common/DownloadCSV'
import { formActions } from '../../_actions'
import { AutoSuggestInput } from '../common/AutoSuggestInput'

class MRSForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {score: '', subID: '', date: this.getCurrentDate()}
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.sendToServer = this.sendToServer.bind(this);
	}

	subjectChanged(newSubId) {
		this.setState({subID: newSubId});
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	scoreChanged(event) {
		this.setState({score: event.target.value});
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
		var day = date_obj.getDate() + 1;
		var month = date_obj.getMonth() + 1;
		var year = date_obj.getFullYear();

		var subID = this.state.subID;
		var score = this.state.score;

		var data = {
			SubID: subID,
			Date: date,
			Year: year,
			Month: month,
			Day: day,
			Score: score
		};
		return [data];
	}

  sendToServer() {
    var data = this.getCSVData();
    var rows = data.map(function(item, index) {
      var new_item = {
        score: item.Score
      };
      return new_item;
    }, this);

    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.getCurrentDate(),
      mrs_form_rows: rows
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendMrsFormData(formatted));
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
		return(
			<div className="main-form-container">
				<div className="form-title">
					<h1>Modified Rankin Scale(MRS)</h1>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<AutoSuggestInput value={this.state.subID} onChange={this.subjectChanged} required/>
					</div>
					<div className="date_div">
						<label>Date</label>
						<input type="date" className="form-control" value={this.state.date} placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
					</div>
				</div>

				<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th className="row-index">Score</th>
							<th className="td-left">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">0</td>
							<td className="td-left">No symptoms at all</td>
						</tr>
						<tr>
							<td className="">1</td>
							<td className="td-left">No significant disability despite symptoms; able to carry out all usual duties and activities</td>
						</tr>
						<tr>
							<td className="">2</td>
							<td className="td-left">Slight disability; unable to carry out all previous activities, but able to look after own affairs without assistance</td>
						</tr>
						<tr>
							<td className="">3</td>
							<td className="td-left">Moderate disability; requiring some help, but able to walk without assistance</td>
						</tr>

						<tr>
							<td className="">4</td>
							<td className="td-left">Moderately severe disability; unable to walk without assistance and unable to attend to own bodily needs without assistance</td>
						</tr>

						<tr>
							<td className="">5</td>
							<td className="td-left">Severe disability; bedridden, incontinent and requiring constant nursing care and attention</td>
						</tr>

						<tr>
							<td className="">6</td>
							<td className="td-left">Dead</td>
						</tr>
					</tbody>
				</table>
				<div className="mrs-score form-group form-inline">
					<label>Total (0-6)</label>
					<input className="form-control" type="number" min="0" max="6" value={this.state.score} onChange={this.scoreChanged} />
				</div>
				<div className="download-btn">
					<DownloadCSV sendToServer={this.sendToServer} dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== '' && this.state.score !== ''}/>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedMRSForm = connect(mapStateToProps)(MRSForm);
export { connectedMRSForm as MRSForm };
