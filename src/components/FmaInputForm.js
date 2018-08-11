// FmaInputForm.js
import React from 'react';
import FmaFormRow from './FmaFormRow'
import DownloadCSV from './DownloadCSV'

class FmaInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {rows: props.data}
		// this.prepareTableData();
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
		var new_rows = this.state.rows;
		new_rows[item_no-1]['score'] = value
		this.setState({rows: new_rows});
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
			category: item.domain,
			posture: item.specific,
			movement: item.movement,
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
		  rows.push(<FmaFormRow data={data} scoreChanged={this.scoreChanged}/>);
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
							<th>Category</th>
							<th>Posture</th>
							<th>Movement</th>
							<th>Score</th>
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

export default FmaInputForm;
