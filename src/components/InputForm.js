// InputForm.js
import React from 'react';
import FssFormRow from './FssFormRow'
import DownloadCSV from './DownloadCSV'

class InputForm extends React.Component {
	constructor(props) {
		super(props);
		this.prepareTableData();
		this.onSubmit = this.onSubmit.bind(this);
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

	onSubmit(event) {
		event.preventDefault();
	}

	scoreChanged(item_no, value) {
		console.log(item_no-1);
		console.log(value);
		console.log(this.state.rows);
		var new_rows = this.state.rows;
		new_rows[item_no-1]['score'] = value
		this.setState({rows: new_rows});
	}

	prepareTableData(){
		var table_data = [];
		var row = {
					item_no: "1",
					domain: "Levels of Consciousness",
					specific: "Arousal Status",
					score: '',
					score_range:[0, 3]
					};
		table_data.push(row);

		row = {
			item_no: "2",
			domain: "Levels of Consciousness",
			specific:"Current Month and Age",
			score: '',
			score_range:[0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "3",
			domain: "Levels of Consciousness",
			specific:"Commands: Open/Close Eyes and Hands",
			score: '',
			score_range:[0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "4",
			domain: "Levels of Consciousness",
			specific:"Eye Movements",
			score: '',
			score_range:[0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "5",
			domain: "Levels of Consciousness",
			specific:"Visual Fields",
			score: '',
			score_range:[0, 3]
		};
		table_data.push(row);
		row = {
			item_no: "6",
			domain: "Levels of Consciousness",
			specific:"Facial Movements",
			score: '',
			score_range:[0, 3]
		};
		table_data.push(row);

		row = {
			item_no: "7",
			domain: "Motor",
			specific: "Left Arm",
			score: '',
			score_range: [0, 4]
		};
		table_data.push(row);
		row = {
			item_no: "8",
			domain: "Motor",
			specific: "Rights Arm",
			score: '',
			score_range: [0, 4]
		};
		table_data.push(row);
		row = {
			item_no: "9",
			domain: "Motor",
			specific: "Left Leg",
			score: '',
			score_range: [0, 4]
		};
		table_data.push(row);
		row = {
			item_no: "10",
			domain: "Motor",
			specific: "Right Leg",
			score: '',
			score_range: [0, 4]
		};
		table_data.push(row);
		row = {
			item_no: "11",
			domain: "",
			specific: "Limb Ataxia",
			score: '',
			score_range: [0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "12",
			domain: "",
			specific: "Sensory",
			score: '',
			score_range: [0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "13",
			domain: "",
			specific: "Language/Aphasia",
			score: '',
			score_range: [0, 3]
		};
		table_data.push(row);
		row = {
			item_no: "14",
			domain: "",
			specific: "Dysarthia",
			score: '',
			score_range: [0, 2]
		};
		table_data.push(row);
		row = {
			item_no: "15",
			domain: "",
			specific: "Neglect",
			score: '',
			score_range: [0, 2]
		};
		table_data.push(row);

		this.state = {rows: table_data};
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
	  var day = date_obj.getDate() + 1;
	  var month = date_obj.getMonth() + 1;
	  var year = date_obj.getFullYear();

	  var subID = this.state.subID;

		var data = this.state.rows.map(function(item) { 
    	var new_item = {
    		subID: subID,
    		date: date,
    		year: year,
    		month: month,
    		day: day,
    		item_no: item.item_no,
				domain: item.domain,
				specific: item.specific,
				score: item.score
    	};
    	return new_item; 
		}, this, subID, day, month, year, date);
		return data;
	}

	render() {
		var rows = [];
		for (var i = 0; i < this.state.rows.length; i++) {
			var data = this.state.rows[i];
		  rows.push(<FssFormRow data={data} scoreChanged={this.scoreChanged}/>);
		}

		return(
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-row basic-info">
					<div className="col-md-4 mb-3">
						<label>Subject Id</label>
						<input type="text" className="form-control is-valid" placeholder="Subject Id" value={this.state.subID} onChange={this.subjectChanged} required />
					</div>
					<div className="col-md-4 mb-3">
						<label>Date</label>
						<input type="date" className="form-control"  placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
					</div>
				</div>

				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Item</th>
							<th>Domain</th>
							<th>Specific</th>
							<th>FAS Score</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} />
				</div>
			</div>
			);
	}
}

export default InputForm;
