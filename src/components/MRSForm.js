// MRSForm.js
import React from 'react';
import DownloadCSV from './DownloadCSV'

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
	}

	subjectChanged(event) {
		this.setState({subID: event.target.value});
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
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-title">
					<h1>Modified Rankin Scale(MRS)</h1>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<input type="text" className="form-control is-valid" placeholder="Subject Id" value={this.state.subID} onChange={this.subjectChanged} required />
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
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="row-index">0</th>
							<th>No symptoms at all</th>
						</tr>
						<tr>
							<th className="row-index">1</th>
							<th>No significant disability despite symptoms; able to carry out all usual duties and activities</th>
						</tr>
						<tr>
							<th className="row-index">2</th>
							<th>Slight disability; unable to carry out all previous activities, but able to look after own affairs without assistance</th>
						</tr>
						<tr>
							<th className="row-index">3</th>
							<th>Moderate disability; requiring some help, but able to walk without assistance</th>
						</tr>

						<tr>
							<th className="row-index">4</th>
							<th>Moderately severe disability; unable to walk without assistance and unable to attend to own bodily needs without assistance</th>
						</tr>

						<tr>
							<th className="row-index">5</th>
							<th>Severe disability; bedridden, incontinent and requiring constant nursing care and attention</th>
						</tr>

						<tr>
							<th className="row-index">6</th>
							<th>Dead</th>
						</tr>
					</tbody>
				</table>
				<div className="mrs-score form-group form-inline">
					<label>Total (0-6)</label>
					<input className="form-control" type="number" min="0" max="6" value={this.state.score} onChange={this.scoreChanged} />
				</div>
				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== '' && this.state.score !== ''}/>
				</div>
			</div>
			);
	}
}

export default MRSForm;
