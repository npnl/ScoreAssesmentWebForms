// NhssInputForm.js
import React from 'react';
import { connect } from 'react-redux';
import NhssFormRow from './../rows/NhssFormRow'
import DownloadCSV from './../common/DownloadCSV'
import { formActions} from '../../_actions';

class NhssInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {rows: props.data, subID: '', date: this.getCurrentDate()}
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.getComment = this.getComment.bind(this);
		this.calculateLocTotal = this.calculateLocTotal.bind(this);
		this.calculateMotorTotal = this.calculateMotorTotal.bind(this);
		this.calculateNihssTotal = this.calculateNihssTotal.bind(this);
		this.sendToServer = this.sendToServer.bind(this);
	}

	subjectChanged(event) {
		this.setState({subID: event.target.value});
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	scoreChanged(item_no, value) {
		var base_index = this.state.rows[0]['item_no'];
		item_no = item_no - base_index;
		var new_rows = this.state.rows;
		new_rows[item_no]['score'] = value
		this.setState({rows: new_rows});
	}

	getComment(score, comments) {
		return comments.hasOwnProperty(score) ? comments[score] : comments['default'];
	}

	calculateLocTotal() {
		return parseInt(this.state.rows[0]['score'], 10) + parseInt(this.state.rows[1]['score'], 10) + parseInt(this.state.rows[2]['score'], 10)
	}

	calculateMotorTotal() {
		var total = 0;
		for (var i = 3; i < 7; i++) {
			total += parseInt(this.state.rows[i]['score'], 10);
		}
		return total;
	}

	calculateNihssTotal() {
		var total = 0;
		for (var i = 0; i < this.state.rows.length; i++) {
			total += parseInt(this.state.rows[i]['score'], 10);
		}
		return total;
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
		var day = date_obj.getDate() + 1;
		var month = date_obj.getMonth() + 1;
		var year = date_obj.getFullYear();

		var subID = this.state.subID;
		var loc_total = this.calculateLocTotal();
		var motor_total = this.calculateMotorTotal();
		var nihss_total = this.calculateNihssTotal();

		var data = this.state.rows.map(function(item) { 
		var new_item = {
			SubID: subID,
			Date: date,
			Year: year,
			Month: month,
			Day: day,
			Item_no: item.item_no,
			Domain: item.domain,
			Specific: item.specific,
			Score: item.score,
			Comment: this.getComment(item.score, item.comments),
			Loc_Total: loc_total,
			Motor_Total: motor_total,
			NHSS_Total: nihss_total
		};
		return new_item; 
		}, this, subID, day, month, year, date);
		return data;
	}

  sendToServer() {
    var loc_total = this.calculateLocTotal();
    var motor_total = this.calculateMotorTotal();
    var nihss_total = this.calculateNihssTotal();

    var rows = this.state.rows.map(function(item) {
      var new_item = {
        item_no: item.item_no,
        domain: item.domain,
        specific: item.specific,
        fas_score: item.score,
        Loc_Total: loc_total,
        Motor_Total: motor_total,
        NHSS_Total: nihss_total
      };
      return new_item;
    }, this);

		var formatted = {
			subject_name: this.state.subID,
      assessment_date: this.getCurrentDate(),
			nihss_form_rows: rows
		};
    const { dispatch } = this.props;
    dispatch(formActions.sendNihssFormData(formatted));
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
		for (var i = 0; i < this.state.rows.length; i++) {
			var data = this.state.rows[i];
		  	rows.push(<NhssFormRow data={data} getComment={this.getComment} scoreChanged={this.scoreChanged}/>);
		}

		return(
			<div className="main-form-container">
				<div className="form-title">
					<h1>NIH Stroke Scale</h1>
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

				<table className="table table-bordered">
					<thead>
						<tr>
							<th class="row-index">Item</th>
							<th>Domain</th>
							<th>Specific</th>
							<th>FAS Score</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<div className="download-btn">
					<DownloadCSV dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename="NHSS.csv" is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
					<button className="btn btn-primary" onClick={this.sendToServer}>Save data</button>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedNhssInputForm = connect(mapStateToProps)(NhssInputForm);
export { connectedNhssInputForm as NhssInputForm };
