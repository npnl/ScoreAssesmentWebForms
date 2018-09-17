// MASForm.js
import React from 'react';
import DownloadCSV from './DownloadCSV'

class MASForm extends React.Component {
	constructor(props) {
		super(props);
		this.empty_row = {'MuscleName' : '', 'Score': ''}
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {rows: [Object.assign({}, this.empty_row)], subID: '', date: this.getCurrentDate()}
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.muscleInfoChanged = this.muscleInfoChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.addNewMuscleRow = this.addNewMuscleRow.bind(this);
		this.areRowsFilled = this.areRowsFilled.bind(this);
	}

	areRowsFilled() {
		return this.state.rows[0].MuscleName !== '' && this.state.rows[0].Score !== '';
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

	muscleInfoChanged(type, event) {
		var index = event.target.id;
		var old_rows = this.state.rows;
		var value = event.target.value;
		if (type === 'muscle') {
			old_rows[index].MuscleName = value
		}
		else {
			old_rows[index].Score = value
		}
		this.setState({rows: old_rows});
	}

	addNewMuscleRow() {
		var old_rows = this.state.rows;
		old_rows.push(Object.assign({}, this.empty_row));
		this.setState({rows: old_rows});
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
		var day = date_obj.getDate() + 1;
		var month = date_obj.getMonth() + 1;
		var year = date_obj.getFullYear();
		var subID = this.state.subID;

		var data = this.state.rows.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				MuscleName: item.MuscleName,
				Score: item.Score
			};
			return new_item; 
		}, this, subID, day, month, year, date);

		data = data.filter(function (item) {
			return item.MuscleName !== "";
		});

		return data;
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
		var rows = [];
		for(var i = 0; i < this.state.rows.length; i++) {
			rows.push((<tr>
							<td className="row-index">{i+1}</td>
							<td><input id={i} className="form-control" type="text" value={this.state.rows[i].MuscleName} onChange={(event) => this.muscleInfoChanged('muscle', event)} /></td>
							<td><input id={i} className="form-control" type="tel" maxlength="2" value={this.state.rows[i].Score} onChange={(event) => this.muscleInfoChanged('score', event)} /></td>
						</tr>));
		}

		return(
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-title">
					<h1>Modified Ashworth Scale(MAS)</h1>
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
							<th className="th-left">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">0</td>
							<td className="td-left">No increase in muscle tone</td>
						</tr>
						<tr>
							<td className="">1</td>
							<td className="td-left">Slight increase in muscle tone, manifested by a catch and release or by minimal resistance at the end of the range of motion when the affected part(s) is moved in flexion or extension</td>
						</tr>
						<tr>
							<td className="">1+</td>
							<td className="td-left">Slight increase in muscle tone, manifested by a catch, followed by minimal resistance throughout the remainder (less than half) of the ROM</td>
						</tr>
						<tr>
							<td className="">2</td>
							<td className="td-left">More marked increase in muscle tone through most of the ROM, but affected part(s) easily moved</td>
						</tr>
						<tr>
							<td className="">3</td>
							<td className="td-left">Considerable increase in muscle tone, passive movement difficult</td>
						</tr>
						<tr>
							<td className="">4</td>
							<td className="td-left">Affected part(s) rigid in flexion or extension</td>
						</tr>
					</tbody>
				</table>

				<table className="table table-bordered table-striped mas-table">
					<thead>
						<tr>
							<td className="row-index">S.No</td>
							<th>Muscle Tested</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{rows}
						<tr>
							<td colSpan="3"><button className="btn btn-primary mas-add-row-btn" onClick={this.addNewMuscleRow}>Add New Field</button></td>
						</tr>
					</tbody>
				</table>

				

				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== '' && this.areRowsFilled()}/>
				</div>
			</div>
			);
	}
}

export default MASForm;
