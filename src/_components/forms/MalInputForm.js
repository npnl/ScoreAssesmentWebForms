// MalInputForm.js
import React from 'react';
import { connect } from 'react-redux';
import DownloadCSV from './../common/DownloadCSV'
import { AutoSuggestInput } from '../common/AutoSuggestInput'
import { formActions } from '../../_actions'

class MalInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {rows: props.data, subID: '', date: this.getCurrentDate()}
		this.props = props;
		this.getCSVData = this.getCSVData.bind(this);
		this.valuesChanged = this.valuesChanged.bind(this);
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

	valuesChanged(type, event) {
		var index = event.target.id;
		var old_rows = this.state.rows;
		var value = event.target.value;
		if (type === 'amount_scale') {
			old_rows[index].amount_scale = value
		}
		else if(type === 'well_scale') {
			old_rows[index].well_scale = value
		}
		else if(type === 'no_code') {
      old_rows[index].no_code = value
    }
    else {
			old_rows[index].comments = value
		}
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
				activity_description: item.description,
				amount_scale: item.amount_scale,
				how_well_scale: item.well_scale,
				if_not_why: item.no_code,
				comments: item.comments
			};
			return new_item; 
		}, this, subID, day, month, year, date);

		return data;
	}

  sendToServer() {
    var data = this.getCSVData();
    var rows = data.map(function(item, index) {
      var new_item = {
        activity_description: item.activity_description,
        amount_scale: item.amount_scale,
        how_well_scale: item.how_well_scale,
        if_not_why: item.if_not_why,
        comments: item.comments
      };
      return new_item;
    }, this);

    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.state.date,
      mal_form_rows: rows
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendMalFormData(formatted));
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
							<td>{this.state.rows[i].description}</td>
							<td className="integer-code"><input id={i} className="form-control" type="text" placeholder={""} value={this.state.rows[i].amount_scale} onChange={(event) => this.valuesChanged('amount_scale', event)} /></td>
							<td className="integer-code"><input id={i} className="form-control" type="text" placeholder={""} value={this.state.rows[i].well_scale} onChange={(event) => this.valuesChanged('well_scale', event)} /></td>
							<td className="integer-code"><input id={i} className="form-control" type="text" placeholder={""} value={this.state.rows[i].no_code} onChange={(event) => this.valuesChanged('no_code', event)} /></td>
							<td><input id={i} className="form-control" type="text" placeholder={""} value={this.state.rows[i].comments} onChange={(event) => this.valuesChanged('comments', event)} /></td>
						</tr>));
		}

		return(
			<div className="main-form-container">
				<div className="form-title">
					<h2>Motor Activity Log (UE MAL) Score Sheet</h2>
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

				<h3>Amount Scale (AS)</h3>
				<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th className="row-index-mmt">Score</th>
							<th className="th-left">Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">0</td>
							<td className="td-left">Did not use my weaker arm (<b>not used</b>).</td>
						</tr>
						<tr>
							<td className="">1</td>
							<td className="td-left">Occasionally used my weaker arm, but only very rarely (<b>very rarely</b>).</td>
						</tr>
						<tr>
							<td className="">2</td>
							<td className="td-left"> Sometimes used my weaker arm but did the activity <b>most of the time</b> with my stronger arm (<b>rarely</b>).</td>
						</tr>
						<tr>
							<td className="">3</td>
							<td className="td-left">Used my weaker arm about half as much as before the stroke (<b>half pre-stroke</b>).</td>
						</tr>
						<tr>
							<td className="">4</td>
							<td className="td-left">Used my weaker arm almost as much as before the stroke (<b>3/4 pre-stroke</b>).</td>
						</tr>
						<tr>
							<td className="">5</td>
							<td className="td-left">Used my weaker arm as often as before the stroke (<b>same as pre-stroke</b>).</td>
						</tr>
					</tbody>
				</table>

				<h3>How well scale</h3>
				<table className="table table-bordered table-striped">
					<thead>
					<tr>
						<th className="row-index-mmt">Score</th>
						<th className="th-left">Description</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td className="">0</td>
						<td className="td-left">The weaker arm was not used at all for that activity <b>(never).</b></td>
					</tr>
					<tr>
						<td className="">1</td>
						<td className="td-left">The weaker arm was moved during that activity but was not helpful <b>(very poor).</b> </td>
					</tr>
					<tr>
						<td className="">2</td>
						<td className="td-left">The weaker arm was of some use during that activity but needed some help from the stronger arm or moved very slowly or with difficulty <b>(poor).</b></td>
					</tr>
					<tr>
						<td className="">3</td>
						<td className="td-left">The weaker arm was used for the purpose indicated but movements were slow or were made with only some effort <b>(fair).</b></td>
					</tr>
					<tr>
						<td className="">4</td>
						<td className="td-left"> The movements made by the weaker arm were almost normal, but were not quite as fast or accurate as normal <b>(almost normal).</b></td>
					</tr>
					<tr>
						<td className="">5</td>
						<td className="td-left">The ability to use the weaker arm for that activity was as good as before the stroke <b>(normal).</b> </td>
					</tr>
					</tbody>
				</table>


				<table className="table table-bordered table-striped mas-table">
					<thead>
						<tr>
							<th className="row-index">S.No</th>
							<th>Activity Description</th>
							<th className="integer-code">Amount Scale</th>
							<th className="integer-code">How Well Scale</th>
							<th className="integer-code">if no, why? (use code)</th>
							<th>Comments</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>



				<div className="download-btn">
					<DownloadCSV sendToServer={this.sendToServer} dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedMalInputForm = connect(mapStateToProps)(MalInputForm);
export { connectedMalInputForm as MalInputForm };

