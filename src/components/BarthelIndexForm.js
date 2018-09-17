// BarthelIndexForm.js
import React from 'react';
import DownloadCSV from './DownloadCSV'
import BarthelIndexCell from './BarthelIndexCell'

class BarthelIndexForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.getFormData = this.getFormData.bind(this);
		this.state = {rows: this.getFormData(), total_score: 0, subID: '', date: this.getCurrentDate()}
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.reCalculateTotalScore = this.reCalculateTotalScore.bind(this);
	}

	getFormData() {
		var rows = [];
		var row = {
			heading: 'Bowels',
			options: 
			[
				'0 = incontinent (or needs to be given enemata)',
				'1 = occasional accident (once/week)',
				'2 = continent'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Transfer',
			options: 
			[
				'0 = unable – no sitting balance',
				'1 = major help (one or two people, physical), can sit',
				'2 = minor help (verbal or physical)',
				'3 = independent'
			],
			score: '',
			values: [0, 1, 2, 3]
		};
		rows.push(row);
		row = {
			heading: 'Bladder',
			options: 
			[	
				'0 = incontinent, or catheterized and unable to manage',
				'1 = occasional accident (max. once per 24 hours)',
				'2 = continent (for over 7 days)'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Mobility',
			options: 
			[
				'0 = immobile',
				'1 = wheelchair independent, including corners, etc.',
				'2 = walks with help of one person (verbal or physical)',
				'3 = independent (but may use any aid, e.g., stick)'
			],
			score: '',
			values: [0, 1, 2, 3]
		};
		rows.push(row);
		row = {
			heading: 'Grooming',
			options: 
			[
				'0 = needs help with personal care',
				'1 = independent face/hair/teeth/shaving (implements provided)'
			],
			score: '',
			values: [0, 1]
		};
		rows.push(row);
		row = {
			heading: 'Dressing',
			options: 
			[
				'0 = dependent',
				'1 = needs help, but can do about half unaided',
				'2 = independent (including buttons, zips, laces, etc.)'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Toilet use',
			options: 
			[
				'0 = dependent',
				'1 = needs some help, but can do something alone',
				'2 = independent (on and off, dressing, wiping)'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Stairs',
			options: 
			[
				'0 = unable',
				'1 = needs help (verbal, physical, carrying aid)',
				'2 = independent up and down'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Feeding',
			options: 
			[
				'0 = unable',
				'1 = needs help cutting, spreading butter, etc.',
				'2 = independent (food provided within reach)'
			],
			score: '',
			values: [0, 1, 2]
		};
		rows.push(row);
		row = {
			heading: 'Bathing',
			options: 
			[
				'0 = dependent',
				'1 = independent (or in shower)'
			],
			score: '',
			values: [0, 1]
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

	reCalculateTotalScore() {
		var total = 0;
		for(var i = 0; i < this.state.rows.length; i++) {
			total += Number(this.state.rows[i].score);
		}
		this.setState({total_score: total});
	}

	scoreChanged(index, value) {
		var old_rows = this.state.rows;
		old_rows[index].score = value;
		this.setState({rows: old_rows});
		this.reCalculateTotalScore();
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
		var total_score = this.state.total_score;

		var data = this.state.rows.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Activity: item.heading,
				Score: item.score,
				TotalScore: total_score
			};
			return new_item; 
		}, this, subID, day, month, year, date, total_score);

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
		for(var i = 0; i < this.state.rows.length/2; i++) {
			rows.push((
				<tr>
					<td className="td-left"><BarthelIndexCell scoreChanged={this.scoreChanged} index={2*i} data={this.state.rows[i*2]}/></td>
					<td className="td-left"><BarthelIndexCell scoreChanged={this.scoreChanged} index={2*i + 1} data={this.state.rows[i*2+1]}/></td>
				</tr>));
		}

		return(
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-title">
					<h2>Barthel Index of Activities of Daily Living</h2>
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

				<h3>The Barthel Index</h3>
				<table className="table table-bordered table-striped mas-table">
					<tbody>
						{rows}
					</tbody>
				</table>

				<div>
				<h3>Total Score = {this.state.total_score}</h3>
				</div>

				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}
}

export default BarthelIndexForm;
