// WmftInputForm.js
import React from 'react';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import WmftFormRow from './../rows/WmftFormRow'
import DownloadCSV from './../common/DownloadCSV'
import { formActions} from '../../_actions';
import { AutoSuggestInput } from '../common/AutoSuggestInput'

class WmftInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.state = {rows: props.data, subID: '', date: this.getCurrentDate()}
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.timeChanged = this.timeChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.getComment = this.getComment.bind(this);
		this.calculateMedianTime = this.calculateMedianTime.bind(this);
		this.getTotalScore = this.getTotalScore.bind(this);
		this.getAverageStrength = this.getAverageStrength.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
	}

	subjectChanged(newSubId) {
		this.setState({subID: newSubId});
	}

	dateChanged(event) {
		this.setState({date: event.target.value});
	}

	scoreChanged(item_no, index, value) {
		var new_rows = this.state.rows;
		new_rows[index]['score'] = value;
		this.setState({rows: new_rows});
	}

	timeChanged(item_no, index, value) {
		var new_rows = this.state.rows;
		new_rows[index]['time'] = value;
		this.setState({rows: new_rows});
	}

	getComment(score, comments) {
		return comments.hasOwnProperty(score) ? comments[score] : comments['default'];
	}

	calculateMedianTime(is_affected) {
		var values = [];
		var start_index;
		if (is_affected === true) {
			start_index = 0;
		}
		else {
			start_index = 18;
		}
		for(var i=0; i < 18; i++) {
			var item_no = Number(this.state.rows[start_index + i]['item_no']);
			if (item_no !== -1 && this.state.rows[start_index + i]['disabled'] === false) {
				values.push(parseInt(this.state.rows[start_index + i]['time'], 10) || 0);
			}
		}

		values.sort(function(a, b) {
			return a-b;
		});

		if(values.length ===0) {
			return 0;
		}
		var half = Math.floor(values.length / 2);
		if (values.length % 2) {
			return values[half];
		}
		else {
			return (values[half - 1] + values[half]) / 2.0;
		}
	}

	getTotalScore(is_affected) {
		var total = 0;
		var start_index;
		if (is_affected === true) {
			start_index = 0;
		}
		else {
			start_index = 18;
		}
		for(var i= 0; i < 18; i++) {
			var item_no = Number(this.state.rows[start_index + i]['item_no']);
			if((item_no !== 7 && item_no !== 14) && item_no !== -1) {
				total += parseInt(this.state.rows[start_index + i]['score'], 10) || 0;
			}
		}
		return total;
	}

	getAverageStrength(is_affected) {
		var total = 0;
		var start_index;
		if (is_affected === true) {
			start_index = 0;
		}
		else {
			start_index = 18;
		}
		for(var i= 0; i < 18; i++) {
			var item_no = Number(this.state.rows[start_index + i]['item_no']);
			if(item_no === 7 || item_no === 14) {
				total += parseInt(this.state.rows[start_index + i]['score'], 10) || 0;
			}
		}
		var average = parseFloat(total/2);
		return average;
	}

	getCSVData() {
		var date = this.state.date;
		var date_obj = new Date(date);
		var day = date_obj.getDate() + 1;
		var month = date_obj.getMonth() + 1;
		var year = date_obj.getFullYear();
		var subID = this.state.subID;

		var affected_median = this.calculateMedianTime(true);
		var un_affected_median = this.calculateMedianTime(false);

		var affected_total_score = this.getTotalScore(true);
		var un_affected_total_score = this.getTotalScore(false);

		var affected_strength = this.getAverageStrength(true);
		var un_affected_strength = this.getAverageStrength(false);


		var data = this.state.rows.map(function(item, index) {
			var median;
			var strength;
			var total_score;
			if (index < 18){
				median = affected_median;
				strength = affected_strength;
				total_score = affected_total_score;
			}
			else {
				median = un_affected_median;
				strength = un_affected_strength;
				total_score = un_affected_total_score;
			}
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Item_no: item.item_no,
				Task: item.task,
				Time: item.time,
				Score: item.score,
        Type: (index < 18 ) ? 'affected' : 'unaffected',
				Comment: this.getComment(item.score, item.comments),
				Median_Time: median,
				Total_FAS: total_score,
				AVG_Strength: strength
			};
			return new_item; 
		}, this, subID, day, month, year, date, affected_median, un_affected_median, affected_strength, un_affected_strength, affected_total_score, un_affected_total_score);

		data = data.filter(function (item) {
			return Number(item.Item_no) !== -1;
		});
		return data;
	}

  sendToServer() {
    var affected_median = this.calculateMedianTime(true);
    var un_affected_median = this.calculateMedianTime(false);

    var affected_total_score = this.getTotalScore(true);
    var un_affected_total_score = this.getTotalScore(false);

    var affected_strength = this.getAverageStrength(true);
    var un_affected_strength = this.getAverageStrength(false);

    var rows = this.state.rows.map(function(item, index) {
      var median;
      var strength;
      var total_score;
      if (index < 18){
        median = affected_median;
        strength = affected_strength;
        total_score = affected_total_score;
      }
      else {
        median = un_affected_median;
        strength = un_affected_strength;
        total_score = un_affected_total_score;
      }

      var new_item = {
        item_no: item.item_no,
        task: item.task,
        time: item.time,
        fas_score: item.score,
        arm_type: (index < 18 ) ? 'affected' : 'unaffected',
				comment: this.getComment(item.score, item.comments),
        median_time: median,
        total_fas: total_score,
        avg_strength: strength
      };
      return new_item;
    }, this);

    rows = rows.filter(function (item) {
      return Number(item.item_no) !== -1;
    });

    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.getCurrentDate(),
      wmft_form_rows: rows
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendWmftFormData(formatted));
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
			rows.push(<WmftFormRow data={data} getComment={this.getComment} scoreChanged={this.scoreChanged} timeChanged={this.timeChanged} index={i}/>);
		}

		return(
			<div className="main-form-container">
				<AnchorLink offset='0' href="#affected" id="btn-UE" title="Affected">Affected</AnchorLink>
				<AnchorLink offset='0' href="#un-affected" id="btn-Sense" title="Un-Affected">Un-Affected</AnchorLink>
				<div className="form-title">
					<h1>Wolf Motor Function Task {this.props.label}</h1>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<AutoSuggestInput value={this.state.subID} onChange={this.subjectChanged} required/>
					</div>
					<div className="date_div">
						<label>Date</label>
						<input type="date" className="form-control"  value={this.state.date} placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
					</div>
				</div>

				<table className="table table-bordered">
					<thead>
						<tr>
							<th className="row-index">Item</th>
							<th>Task</th>
							<th>Time</th>
							<th>FAS Score</th>
							<th>Comment</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<div className="download-btn">
					<DownloadCSV sendToServer={this.sendToServer}  dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"WMFT.csv"} is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedWmftInputForm = connect(mapStateToProps)(WmftInputForm);
export { connectedWmftInputForm as WmftInputForm };


