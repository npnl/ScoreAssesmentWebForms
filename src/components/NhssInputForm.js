// NhssInputForm.js
import React from 'react';
import NhssFormRow from './NhssFormRow'
import DownloadCSV from './DownloadCSV'

class NhssInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.prepareTableData();
		this.getCSVData = this.getCSVData.bind(this);
		this.scoreChanged = this.scoreChanged.bind(this);
		this.subjectChanged = this.subjectChanged.bind(this);
		this.dateChanged = this.dateChanged.bind(this);
		this.getComment = this.getComment.bind(this);
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

	prepareTableData(){
		var table_data = [];
		var row = {
			item_no: "1",
			domain: "Levels of Consciousness",
			specific: "Arousal Status",
			score: '',
			score_range:[0, 3],
			comments: {
				default: "Values must be 0 to 3.",
				0: "Alert (awakens easily and stays awake)",
				1: "Drowsy (responds to stimulation but falls back asleep)",
				2: "Obtunded (responds only to deep pain or vigorous stim)",
				3: "Comatose (no response)"
			}
		};
		table_data.push(row);

		row = {
			item_no: "2",
			domain: "Levels of Consciousness",
			specific:"Current Month and Age",
			score: '',
			score_range:[0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "Both questions answered correctly",
				1: "One question answered correctly",
				2: "Neither question answered correctly"
			}
		};
		table_data.push(row);
		row = {
			item_no: "3",
			domain: "Levels of Consciousness",
			specific:"Commands: Open/Close Eyes and Hands",
			score: '',
			score_range:[0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "Both commands performed correctly",
				1: "One command performed correctly",
				2: "Neither command performed correctly"
			}
		};
		table_data.push(row);
		row = {
			item_no: "4",
			domain: "Levels of Consciousness",
			specific:"Eye Movements",
			score: '',
			score_range:[0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "Normal",
				1: "Mild gaze paralysis (can bring eyes over to midline)",
				2: "Complete gaze paralysis (deviated and unable to bring eyes over)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "5",
			domain: "Levels of Consciousness",
			specific:"Visual Fields",
			score: '',
			score_range:[0, 3],
			comments: {
				default: "Values must be 0 to 3.",
				0: "Normal",
				1: "Partial hemianopia",
				2: "Complete hemianopia",
				3: "Bilateral hemianopia (total blindness)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "6",
			domain: "Levels of Consciousness",
			specific:"Facial Movements",
			score: '',
			score_range:[0, 3],
			comments: {
				default: "Values must be 0 to 3.",
				0: "Normal",
				1: "Minor paralysis (flattening of nasolabial folds)",
				2: "Partial paralysis (near or total lower face paralysis)",
				3: "Complete paralysis (affecting both upper and lower face)"
			}
		};
		table_data.push(row);

		row = {
			item_no: "7",
			domain: "Motor",
			specific: "Left Arm",
			score: '',
			score_range: [0, 4],
			comments: {
				default: "Values must be 0 to 4.",
				0: "Normal (no drift)",
				1: "Some drift (arms drifts partially downward)",
				2: "Drift (arm drifts down to hip level within 10s)",
				3: "Movement, but not against gravity", 
				4: "Complete paralysis (no movement at all)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "8",
			domain: "Motor",
			specific: "Rights Arm",
			score: '',
			score_range: [0, 4],
			comments: {
				default: "Values must be 0 to 4.",
				0: "Normal (no drift)",
				1: "Some drift (arms drifts partially downward)",
				2: "Drift (arm drifts down to hip level within 10s)",
				3: "Movement, but not against gravity", 
				4: "Complete paralysis (no movement at all)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "9",
			domain: "Motor",
			specific: "Left Leg",
			score: '',
			score_range: [0, 4],
			comments: {
				default: "Values must be 0 to 4.",
				0: "Normal (no drift)",
				1: "Some drift (arms drifts partially downward)",
				2: "Drift (leg drifts down to surface within 5s)",
				3: "Movement, but not against gravity", 
				4: "Complete paralysis (no movement at all)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "10",
			domain: "Motor",
			specific: "Right Leg",
			score: '',
			score_range: [0, 4],
			comments: {
				default: "Values must be 0 to 4.",
				0: "Normal (no drift)",
				1: "Some drift (arms drifts partially downward)",
				2: "Drift (leg drifts down to surface within 5s)",
				3: "Movement, but not against gravity", 
				4: "Complete paralysis (no movement at all)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "11",
			domain: "",
			specific: "Limb Ataxia",
			score: '',
			score_range: [0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "Absent (no ataxia)",
				1: "Present in one limb",
				2: "Present in two or more limbs"
			}
		};
		table_data.push(row);
		row = {
			item_no: "12",
			domain: "",
			specific: "Sensory",
			score: '',
			score_range: [0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "Normal",
				1: "Mild to moderate loss",
				2: "Severe to total sensory loss (unaware of touch)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "13",
			domain: "",
			specific: "Language/Aphasia",
			score: '',
			score_range: [0, 3],
			comments: {
				default: "Values must be 0 to 3.",
				0: "Normal ability to use words",
				1: "Mild to moderate (repeats/names with some difficulty)",
				2: "Severe aphasia (very few words correct or understood)",
				3: "Mute (no evidence of ability to speak or understand)"
			}
		};
		table_data.push(row);
		row = {
			item_no: "14",
			domain: "",
			specific: "Dysarthia",
			score: '',
			score_range: [0, 3],
			comments: {
				default: "Values must be 0 to 3.",
				0: "Normal",
				1: "Mild to moderate slurred speech",
				2: "Severely slurred speech (unintelligible)",
				3: "Intubated or other physical barrier"
			}
		};
		table_data.push(row);
		row = {
			item_no: "15",
			domain: "",
			specific: "Neglect",
			score: '',
			score_range: [0, 2],
			comments: {
				default: "Values must be 0 to 2.",
				0: "No abnormality in attention",
				1: "mild (partial visual or tactile neglect)",
				2: "Profound (complete visual and tactile neglect)"
			}
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
			SubID: subID,
			Date: date,
			Year: year,
			Month: month,
			Day: day,
			Item_no: item.item_no,
			Domain: item.domain,
			Specific: item.specific,
			Score: item.score,
			Comment: this.getComment(item.score, item.comments)
		};
		return new_item; 
		}, this, subID, day, month, year, date);
		return data;
	}

	render() {
		var rows = [];
		for (var i = 0; i < this.state.rows.length; i++) {
			var data = this.state.rows[i];
		  rows.push(<NhssFormRow data={data} getComment={this.getComment} scoreChanged={this.scoreChanged}/>);
		}

		return(
			<div className="container" style={{marginTop: 100 + 'px'}}>
				<div className="form-title">
					<h1>Wolf Motor Function Task</h1>
				</div>
				<div className="basic-info">
					<div className="subject_div">
						<label>Subject Id</label>
						<input type="text" className="form-control is-valid" placeholder="Subject Id" value={this.state.subID} onChange={this.subjectChanged} required />
					</div>
					<div className="date_div">
						<label>Date</label>
						<input type="date" className="form-control"  placeholder="Date" min="2010-01-01" max="2099-12-31" onChange={this.dateChanged} required />
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
					<DownloadCSV dataHandler={this.getCSVData} filename="nhss.csv"/>
				</div>
			</div>
			);
	}
}

export default NhssInputForm;
