// MmtRomForm.js
import React from 'react';
import DownloadCSV from './DownloadCSV'

class MmtRomForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.getFormData = this.getFormData.bind(this);
		this.state = {rows: this.getFormData(), subID: '', date: this.getCurrentDate()}
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.muscleInfoChanged = this.muscleInfoChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.addNewMuscleRow = this.addNewMuscleRow.bind(this);
	}

	getFormData() {
		var rows = [];
		var row = {
			muscle_name: "Elbow flexion/extension",
			range: [0, 150],
			rom: '',
			mmt: ''
		};
		rows.push(row);
		row = {
			muscle_name: "Forearm supination",
			range: [0, 80],
			rom: '',
			mmt: ''
		};
		rows.push(row);
		row = {
			muscle_name: "Forearm pronation",
			range: [0, 80],
			rom: '',
			mmt: ''
		};
		rows.push(row);
		row = {
			muscle_name: "Wrist flexion",
			range: [0, 80],
			rom: '',
			mmt: ''
		};
		rows.push(row);
		row = {
			muscle_name: "Wrist extension",
			range: [0, 80],
			rom: '',
			mmt: ''
		};
		rows.push(row);
		return rows;
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
		if (type === 'mmt') {
			old_rows[index].mmt = value
		}
		else {
			old_rows[index].rom = value
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
				muscle_name: item.muscle_name,
				MMT_Score: item.mmt,
				ROM_Score: item.rom
			};
			return new_item; 
		}, this, subID, day, month, year, date);

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
							<td>{this.state.rows[i].muscle_name}</td>
							<td><input id={i} className="form-control" type="number" min={this.state.rows[i].range[0]} max={this.state.rows[i].range[1]} placeholder={"(" + this.state.rows[i].range[0] + "-" + this.state.rows[i].range[1] + "*)"} value={this.state.rows[i].Score} onChange={(event) => this.muscleInfoChanged('rom', event)} /></td>
							<td><input id={i} className="form-control" type="text" value={this.state.rows[i].Score} onChange={(event) => this.muscleInfoChanged('mmt', event)} /></td>
						</tr>));
		}

		return(
			<div className="main-form-container">
				<div className="form-title">
					<h2>REINVENT Manual Muscle Testing Grading Guide and Range of Motion Typical Values</h2>
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

				<h3>MMT Grading Scale</h3>
				<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th className="row-index-mmt">Score</th>
							<th className="th-left">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">0/Zero</td>
							<td className="td-left">Palpate and feel no contraction</td>
						</tr>
						<tr>
							<td className="">1/Trace</td>
							<td className="td-left">Contraction of muscle, but no movement</td>
						</tr>
						<tr>
							<td className="">2-/Poor</td>
							<td className="td-left">Incomplete ROM w/ gravity eliminated</td>
						</tr>
						<tr>
							<td className="">2/Poor</td>
							<td className="td-left">Full available ROM w/ gravity eliminated</td>
						</tr>
						<tr>
							<td className="">2+/Poor+</td>
							<td className="td-left">Full available ROM w/ gravity eliminated and taking minimal resistance</td>
						</tr>
						<tr>
							<td className="">3/Fair</td>
							<td className="td-left">Full available ROM against gravity</td>
						</tr>
						<tr>
							<td className="">3+/Fair</td>
							<td className="td-left">Full available ROM against gravity and takes minimal resistance</td>
						</tr>
						<tr>
							<td className="">4/Good</td>
							<td className="td-left">Full available ROM and takes moderate resistance before breaking</td>
						</tr>
						<tr>
							<td className="">5/Normal</td>
							<td className="td-left">Full available ROM against gravity and takes normal resistance</td>
						</tr>
					</tbody>
				</table>

				<table className="table table-bordered table-striped mas-table">
					<thead>
						<tr>
							<td className="row-index">S.No</td>
							<th>Muscle Name</th>
							<th>ROM Score</th>
							<th>MMT Score</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>

				

				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}
}

export default MmtRomForm;
