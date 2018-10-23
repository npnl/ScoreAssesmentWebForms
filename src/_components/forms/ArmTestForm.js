// ArmTestForm.js
import React from 'react';
import { connect } from 'react-redux';
import DownloadCSV from './../common/DownloadCSV'
import ArmTestRow from './../rows/ArmTestRow'
import { formActions} from '../../_actions';
import { AutoSuggestInput } from '../common/AutoSuggestInput'

class ArmTestForm extends React.Component {
	constructor(props) {
		super(props);
		this.getCurrentDate = this.getCurrentDate.bind(this);
		this.getGraspFormData = this.getGraspFormData.bind(this);
		this.getGripFormData = this.getGripFormData.bind(this);
		this.getPinchFormData = this.getPinchFormData.bind(this);
		this.getGrossmtFormData = this.getGrossmtFormData.bind(this);
		this.state = {
			grasp: this.getGraspFormData(),
			grip: this.getGripFormData(),
			pinch: this.getPinchFormData(),
			grossmt: this.getGrossmtFormData(),
			subID: '',
			date: this.getCurrentDate()}
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

	reCalculateTotalScore() {
		var total = 0;
		for(var i = 0; i < this.state.rows.length; i++) {
			total += Number(this.state.rows[i].score);
		}
		this.setState({total_score: total});
	}

	scoreChanged(heading, index, value) {
		console.log(heading, index, value);
		var old_rows = this.state[heading];
		console.log(old_rows);
		old_rows.options[index].value = value;
		var new_heading_data = {};
		new_heading_data[heading] = old_rows;
		this.setState(new_heading_data);
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

		var type = 'Grasp';
		var data1 = this.state.grasp.options.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Type: type,
				Activity: item.label,
				Score: item.value
			};
			return new_item; 
		}, this, subID, day, month, year, date, type);

		type = 'Grip';
		var data2 = this.state.grip.options.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Type: type,
				Activity: item.label,
				Score: item.value
			};
			return new_item; 
		}, this, subID, day, month, year, date, type);

		type = 'Pinch';
		var data3 = this.state.pinch.options.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Type: type,
				Activity: item.label,
				Score: item.value
			};
			return new_item; 
		}, this, subID, day, month, year, date, type);

		type = 'Grossmt (Gross Movement)';
		var data4 = this.state.grossmt.options.map(function(item, index) {
			var new_item = {
				SubID: subID,
				Date: date,
				Year: year,
				Month: month,
				Day: day,
				Type: type,
				Activity: item.label,
				Score: item.value
			};
			return new_item; 
		}, this, subID, day, month, year, date, type);

		var data = [...data1, ...data2, ...data3, ...data4];

		return data;
	}

  sendToServer() {
		var data = this.getCSVData();
    var rows = data.map(function(item, index) {
      var new_item = {
        arm_type: item.Type,
        activity: item.Activity,
        score: item.Score
      };
      return new_item;
    }, this);

    var formatted = {
      subject_name: this.state.subID,
      assessment_date: this.getCurrentDate(),
      armtest_form_rows: rows
    };
    const { dispatch } = this.props;
    dispatch(formActions.sendArmFormData(formatted));
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
					<h2>ACTION RESEARCH ARM TEST</h2>
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

				<ArmTestRow scoreChanged={this.scoreChanged} data={this.state.grasp}/>
				<ArmTestRow scoreChanged={this.scoreChanged} data={this.state.grip}/>
				<ArmTestRow scoreChanged={this.scoreChanged} data={this.state.pinch}/>
				<ArmTestRow scoreChanged={this.scoreChanged} data={this.state.grossmt}/>

				<div className="download-btn">
					<DownloadCSV sendToServer={this.sendToServer} dataHandler={this.getCSVData} subjectId={this.state.subID} date={this.state.date} filename={"MRS.csv"} customMessage="Subject_Id, Date and Score are mandatory fields to download the csv." is_enabled={this.state.subID !== '' && this.state.date !== ''}/>
				</div>
			</div>
			);
	}

	getGraspFormData() {
		var rows = [];
		var row = {
			label: 'Block, wood, 10 cm cube (If score = 3, total = 18 and to Grip), Pick up a 10 cm block',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Block, wood, 2.5 cm cube (If score = 0, total = 0 and go to Grip), Pick up 2.5 cm block',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Block, wood, 5 cm cube',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Block, wood, 7.5 cm cube',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Ball (Cricket), 7.5 cm diameter',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Stone 10 x 2.5 x 1 cm',
			value: ''
		};
		rows.push(row);

		var data = {
			heading: 'Grasp',
			sort_heading: 'grasp',
			options: rows,
			reproducibility: 0.98,
			scalability: 0.94
		};
		return data;
	}

	getGripFormData() {
		var rows = [];
		var row = {
			label: 'Pour water from glass to glass (If score = 3, total = 12, and go to Pinch)',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Tube 2.25 cm (If score = 0, total = 0 and go to Pinch)',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Tube 1 x 16 cm',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Washer (3.5 cm diameter) over bolt',
			value: ''
		};
		rows.push(row);

		var data = {
			heading: 'Grip',
			sort_heading: 'grip',
			options: rows,
			reproducibility: 0.99,
			scalability: 0.98
		};
		return data;
	}

	getPinchFormData() {
		var rows = [];
		var row = {
			label: 'Ball bearing, 6 mm, 3rd finger and thumb (If score = 3, total = 18 and go to Grossmt)',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Marble, 1.5 cm, index finger and thumb (If score = 0, total = 0 and go to Grossmt)',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Ball bearing 2nd finger and thumb',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Ball bearing 1st finger and thumb',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Marble 3rd finger and thumb',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Marble 2nd finger and thumb',
			value: ''
		};
		rows.push(row);

		var data = {
			heading: 'Pinch',
			sort_heading: 'pinch',
			options: rows,
			reproducibility: 0.99,
			scalability: 0.98
		};
		return data;
	}

	getGrossmtFormData() {
		var rows = [];
		var row = {
			label: 'Place hand behind head (If score = 3, total = 9 and finish)',
			value: ''
		};
		rows.push(row);

		row = {
			label: '(If score = 0, total = 0 and finish',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Place hand on top of head',
			value: ''
		};
		rows.push(row);

		row = {
			label: 'Hand to mouth',
			value: ''
		};
		rows.push(row);

		var data = {
			heading: 'Grossmt (Gross Movement)',
			sort_heading: 'grossmt',
			options: rows,
			reproducibility: 0.98,
			scalability: 0.97
		};
		return data;
	}
}

function mapStateToProps(state) {
  return { };
}

const connectedArmTestForm = connect(mapStateToProps)(ArmTestForm);
export { connectedArmTestForm as ArmTestForm };


